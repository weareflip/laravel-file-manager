<?php

namespace Flip\FileManager\Filesystem;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Facades\Storage;

abstract class File implements Arrayable
{
    /**
     * All possible extensions
     */
    const EXTENSIONS = [

    ];

    protected $path;

    protected $metadata;

    public function __construct(string $path)
    {
        $this->path = $path;
        $this->metadata = Storage::getMetadata($path);
    }

    public function getMetadata()
    {
        return $this->metadata;
    }

    abstract public function getMediaType();

    public function toArray()
    {
        return [
            'type' => $this->getMediaType(),
            'path' => $this->path,
            'url' => Storage::url($this->path),
            'metadata' => $this->metadata,
        ];
    }
}
