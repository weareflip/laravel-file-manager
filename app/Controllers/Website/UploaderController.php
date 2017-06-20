<?php

namespace Flip\FileManager\Controllers\Website;

use Illuminate\Routing\Controller;

class UploaderController extends Controller
{
    public function index()
    {
        return response()->view('flipninja/file-manager::example.uploader');
    }
}
