<?php

namespace Flip\FileManager\Commands;

use Illuminate\Console\Command;
use Flip\FileManager\FileManager;

class Symlink extends Command
{
    protected $signature = 'file-manager:link';

    public function handle()
    {
        $dir = FileManager::PUBLIC_DIR;

        try {
            symlink(base_path('vendor/naph/file-manager/dist'), public_path($dir));
            $this->info('The [public/'.$dir.'] directory has been linked.');
        } catch (\ErrorException $e) {
            $this->error('The "public/'.$dir.'" directory already exists.');
        }
    }
}
