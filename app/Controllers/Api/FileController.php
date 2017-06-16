<?php

namespace Flip\FileManager\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Flip\FileManager\Exceptions\FileNotSupported;
use Flip\FileManager\FileManager;

class FileController extends Controller
{
    public function store(FileManager $fileManager, Request $request): Response
    {
        $path = $request->json('path');
        $file = $request->file('file');

        if ($file->getError() !== UPLOAD_ERR_OK) {
            return response($file->getErrorMessage(), 500);
        }

        try {
            return response()->json($fileManager->upload($path, $file));
        } catch (FileNotSupported $e) {
            return response()->json($e->getMessage(), 401);
        }
    }

    public function destroy(FileManager $fileManager, Request $request): Response
    {
        return response()->json($fileManager->destroy($request->json('path')), 204);
    }
}
