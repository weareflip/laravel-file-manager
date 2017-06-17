<?php

namespace Flip\FileManager\Filesystem;

class Video extends File
{
    public function getMediaType()
    {
        return 'video';
    }
}
