<?php

namespace Flip\FileManager\Filesystem;

use Illuminate\Support\Facades\Storage;

class FileFactory
{
    public static function create(string $path): File
    {
        $mime = Storage::getMimeType($path);
        $media = config('file-manager.media');

        foreach ($media as $type => $config) {
            if (in_array($mime, $config['mimes'])) {
                return new $config['class']($path);
            }
        }

        return new Document($path);
    }
}
