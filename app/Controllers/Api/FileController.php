<?php

namespace Flip\FileManager\Controllers\Api;

use Flip\FileManager\Controllers\Controller;
use Flip\FileManager\Exceptions\FileNotSupported;
use Flip\FileManager\FileManager;
use Flip\FileManager\Filesystem\File;
use Illuminate\Http\{
    JsonResponse, Request, UploadedFile
};

class FileController extends Controller
{
    public function store(FileManager $fileManager, Request $request): JsonResponse
    {
        $validator = validator($request->all(), [
            'files' => 'present',
            'files.*.max' => 'Files must not exceed '.fm_format_bytes(config('file-manager.max_file_size') * 1048576),
            'path' => 'required'
        ], [
            'files.present' => 'No files were selected.'
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()], 400);
        }

        $files = [];
        $path = $request->input('path');

        /** @var UploadedFile $file */
        foreach ($request->file('files') as $file) {
            if ($file->getError() !== UPLOAD_ERR_OK) {
                return response()->json(['message' => 'Upload failed. Files must not exceed '.fm_format_bytes(config('file-manager.max_file_size') * 1048576)], 400);
            }

            try {
                $files[] = $fileManager->upload($path, $file);
            } catch (FileNotSupported $e) {
                return response()->json(['message' => $e->getMessage()], 401);
            }
        }

        return response()->json([
            'files' => array_map(function (File $file) {
                return $file->toArray();
            }, $files)
        ], 200);
    }

    public function destroy(FileManager $fileManager, Request $request): JsonResponse
    {
        return response()->json($fileManager->destroy($request->json('path')), 204);
    }
}
