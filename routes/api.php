<?php

Route::group([
    'prefix' => 'file-manager/api/',
    'namespace' => 'Flip\FileManager\Controllers\Api'
], function () {

    Route::post('system', 'SystemController@show');

    Route::put('file', 'FileController@store');
    Route::delete('file', 'FileController@destroy');
});
