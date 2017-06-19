<?php

Route::group([
    'prefix' => 'file-manager/',
    'namespace' => 'Flip\FileManager\Controllers\Website'
], function () {
    Route::get('/', 'ManagerController@index');
});
