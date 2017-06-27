<?php

return [

    'hide_matches' => '/^\./',

    'max_file_size' => 1, // MB

    /**
     * Loaded routes
     */
    'load_api_routes' => true,

    'load_web_routes' => true,

    /**
     * Api Middleware
     * Following middleware will be applied to api routes if
     * defaults are loaded.
     */
    'api_middleware' => [],

    'media' => [

        'file' => [
            'class' => \Flip\FileManager\Filesystem\Document::class,
            'mimes' => [
                'application/pdf',
                'application/msword',
                'application/vnd.ms-powerpoint',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'application/zip',
                'text/plain',
            ]
        ],

        'image' => [
            'class' => \Flip\FileManager\Filesystem\Image::class,
            'mimes' => [
                'image/gif',
                'image/jpeg',
                'image/png',
            ]
        ],

        'video' => [
            'class' => \Flip\FileManager\Filesystem\Video::class,
            'mimes' => [
                'video/mp4',
                'video/x-msvideo',
                'video/x-ms-wmv',
            ]
        ],
    ]
];
