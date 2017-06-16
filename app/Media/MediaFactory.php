<?php

namespace Flip\FileManager\Mimes;

use Illuminate\Support\Facades\Storage;

class MediaFactory
{
    public static function create(string $path): Media
    {
        $mime = Storage::getMimeType($path);
        $media = config('file-manager.media');

        foreach ($media as $type => $config) {
            if (in_array($mime, $config['mimes'])) {
                return new $config['class']($path);
            }
        }

        return new File($path);
    }
}
