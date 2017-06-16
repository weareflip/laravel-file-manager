<?php

namespace Flip\FileManager;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Flip\FileManager\Mimes\Media;
use Flip\FileManager\Mimes\MediaFactory;

class FileManager
{
    const PUBLIC_DIR = '/file_manager';

    public function list(string $path)
    {
        $files = [];

        foreach (Storage::files($path) as $path) {
            $files[] = MediaFactory::create($path);
        };

        $directories = [];

        foreach (Storage::directories($path) as $directory) {
            $directories = [
                'name' => $directory
            ];
        }

        return compact('files', 'directories');
    }

    public function info()
    {

    }

    public function upload(string $path, UploadedFile $file): Media
    {
        $mime = $file->getMimeType();
        $media = config('file-manager.media');

        foreach ($media as $type => $config) {
            if (in_array($mime, $config['mimes'])) {
                return MediaFactory::create($file->storePubliclyAs($path, $file->getClientOriginalName()));
            }
        }

        throw new \Exception('Not a supported file type.');
    }

    public function move()
    {

    }

    public function destroy(string $path): bool
    {
        return Storage::delete($path);
    }
}
