<?php

namespace Flip\FileManager\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Flip\FileManager\FileManager;

class SystemController extends Controller
{
    public function show(FileManager $fileManager, Request $request)
    {
        return response()->json($fileManager->list($request->json('path', '/')));
    }
}
