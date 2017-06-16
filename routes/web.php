<?php

Route::group([
    'namespace' => 'Flip\FileManager\Controllers\Website'
], function () {
    Route::get('file-manager', 'ManagerController@index');
});
