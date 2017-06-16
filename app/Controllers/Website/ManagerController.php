<?php

namespace Flip\FileManager\Controllers\Website;

use Illuminate\Routing\Controller;

class ManagerController extends Controller
{
    public function index()
    {
        return response()->view('file-manager::index');
    }
}
