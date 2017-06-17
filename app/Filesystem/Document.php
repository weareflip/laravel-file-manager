<?php

namespace Flip\FileManager\Filesystem;

class Document extends File
{
    public function getMediaType()
    {
        return 'file';
    }
}
