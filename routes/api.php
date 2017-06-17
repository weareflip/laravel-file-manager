<?php

Route::group([
    'prefix' => 'api/file-manager/',
    'namespace' => 'Flip\FileManager\Controllers\Api'
], function () {

    Route::post('system', 'SystemController@show');

    Route::put('file', 'FileController@store');
    Route::delete('file', 'FileController@destroy');
});
