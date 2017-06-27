<?php

namespace Flip\FileManager;

use Flip\FileManager\Exceptions\FileNotSupported;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Flip\FileManager\Filesystem\File;
use Flip\FileManager\Filesystem\FileFactory;

class FileManager
{
    const PUBLIC_DIR = 'file_manager';

    public function list(string $path)
    {
        $files = [];

        foreach (Storage::files($path) as $file) {
            if (fm_should_list($file)) {
                $files[] = FileFactory::create($file)->toArray();
            }
        };

        $directories = [];

        foreach (Storage::directories($path) as $directory) {
            $directories[] = [
                'path' => $directory
            ];
        }

        return compact('path', 'files', 'directories');
    }

    public function info()
    {

    }

    public function upload(string $path, UploadedFile $file): File
    {
        $mime = $file->getMimeType();
        $media = config('file-manager.media');

        foreach ($media as $type => $config) {
            if (in_array($mime, $config['mimes'])) {
                return FileFactory::create($file->storePubliclyAs($path, $file->getClientOriginalName()));
            }
        }

        throw new FileNotSupported('.'.$file->getClientOriginalExtension().' is not a supported file type.');
    }

    public function move()
    {

    }

    public function destroy(string $path): bool
    {
        // Unsure how else to determine if path is a directory.
        return Storage::getMetadata($path)['type'] === 'dir'
            ? Storage::deleteDirectory($path)
            : Storage::delete($path);
    }
}
