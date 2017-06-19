<?php

namespace Flip\FileManager\Controllers\Api;

use Flip\FileManager\Controllers\Controller;
use Flip\FileManager\Exceptions\FileNotSupported;
use Flip\FileManager\FileManager;
use Illuminate\Http\{
    JsonResponse, Request, UploadedFile
};

class FileController extends Controller
{
    public function store(FileManager $fileManager, Request $request): JsonResponse
    {
        $validator = validator($request->input(), [
            'path' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(null, 400);
        }

        $path = $request->input('path');

        /** @var UploadedFile $file */
        foreach ($request->file('files') as $file) {
            if ($file->getError() !== UPLOAD_ERR_OK) {
                return response()->json(['message' => $file->getErrorMessage()], 500);
            }

            try {
                $fileManager->upload($path, $file);
            } catch (FileNotSupported $e) {
                return response()->json(['message' => $e->getMessage()], 401);
            }
        }

        return response()->json(null, 204);
    }

    public function destroy(FileManager $fileManager, Request $request): JsonResponse
    {
        return response()->json($fileManager->destroy($request->json('path')), 204);
    }
}
