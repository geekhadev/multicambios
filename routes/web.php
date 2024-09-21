<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\BankController;
use App\Http\Controllers\ExchangeController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // prefix dashboard
    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        Route::resource('countries', CountryController::class)->names('countries');
        Route::resource('banks', BankController::class)->names('banks');
        Route::resource('exchanges', ExchangeController::class)->names('exchanges');
    });
});

require __DIR__.'/auth.php';
