<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/not-found', function () {
    return inertia('NotFound');
})
    ->middleware('page-cache')
    ->name('not-found');
    
Route::get('/{home}', [HomeController::class, 'index'])->name('home')
    ->where('home', '(|__static__)')
    ->middleware('page-cache');

Route::get('/{slug}', [HomeController::class, 'show'])->name('post.show')
    ->where('slug', '([a-z0-9-]+(__static__)?)')
    ->middleware('page-cache');
