<?php

Route::group([
    'prefix' => 'api/file-manager/',
    'namespace' => 'Flip\FileManager\Controllers\Api'
], function () {

    Route::resource('system', 'SystemController', ['only' => [
        'show'
    ]]);

    Route::resource('file', 'FileController', ['only' => [
        'store', 'destroy'
    ]]);
});
