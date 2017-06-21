<?php

namespace Flip\FileManager\Filesystem;

use Carbon\Carbon;
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

    public function getDateModified()
    {
        return Carbon::createFromTimestamp($this->metadata['timestamp'])->format('d-M-Y H:i:s');
    }

    public function getSize()
    {
        return fm_format_bytes($this->metadata['size'] ?? 0);
    }

    abstract public function getMediaType();

    public function toArray()
    {
        return [
            'type' => $this->getMediaType(),
            'path' => $this->path,
            'url' => Storage::url($this->path),
            'date_modified' => $this->getDateModified(),
            'size' => $this->getSize(),
        ];
    }
}
