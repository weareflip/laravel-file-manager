<?php

Route::group([
    'prefix' => 'file-manager/api/',
    'namespace' => 'Flip\FileManager\Controllers\Api',
    'middleware' => config('file-manager.api_middleware')
], function () {

    Route::post('system', 'SystemController@show');

    Route::put('file', 'FileController@store');
    Route::delete('file', 'FileController@destroy');
});
