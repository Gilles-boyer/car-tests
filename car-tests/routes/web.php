<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function () {
    Route::get('/', function () {return view('app');})->where('any', '.*');
});

Route::fallback(function () {
    return view('app');
});
