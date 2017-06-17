<?php

namespace Flip\FileManager\Commands;

use Illuminate\Console\Command;
use Flip\FileManager\FileManager;

class Symlink extends Command
{
    protected $signature = 'file-manager:link';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a symbolic link from file-manager dist to "public'.FileManager::PUBLIC_DIR.'"';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $dir = FileManager::PUBLIC_DIR;

        if (file_exists(public_path($dir))) {
            $this->error('The "public/'.$dir.'" directory already exists.');

            exit;
        }

        $this->laravel->make('files')->link(
            base_path('vendor/flipninja/file-manager/dist'), public_path($dir)
        );

        $this->info('The [public/'.$dir.'] directory has been linked.');
    }
}
