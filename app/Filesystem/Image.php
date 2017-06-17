<?php

namespace Flip\FileManager\Filesystem;

class Image extends File
{
    public function getMediaType()
    {
        return 'image';
    }
}
