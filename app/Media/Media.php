<?php

namespace Flip\FileManager\Mimes;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Facades\Storage;

abstract class Media implements Arrayable
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
        return [];
    }
}
