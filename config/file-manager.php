<?php

return [
    'media' => [

        'file' => [
            'class' => \Flip\FileManager\Mimes\File::class,
            'mimes' => [
                'application/pdf',
                'application/msword',
                'application/vnd.ms-powerpoint',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'application/zip',
                'text/plain'
            ]
        ],

        'image' => [
            'class' => \Flip\FileManager\Mimes\Image::class,
            'mimes' => [
                'image/gif',
                'image/jpeg',
                'image/png'
            ]
        ],

        'video' => [
            'class' => \Flip\FileManager\Mimes\Video::class,
            'mimes' => [
                'video/mp4',
                'video/x-msvideo',
                'video/x-ms-wmv'
            ]
        ],
    ]
];
