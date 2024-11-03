<?php

use App\Http\Controllers\BenefitController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\BankController;
use App\Http\Controllers\ExchangeController;
use App\Http\Middleware\ShareExchanges;

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
})->middleware(['auth', 'verified', ShareExchanges::class])->name('dashboard');

Route::middleware(['auth', ShareExchanges::class])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // prefix dashboard
    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        Route::resource('countries', CountryController::class)->names('countries');
        Route::resource('banks', BankController::class)->names('banks');

        Route::resource('customers', CustomerController::class)->names('customers');
        Route::resource('benefits', BenefitController::class)->names('benefits');

        Route::post('exchanges/{exchange}/rate', [ExchangeController::class, 'rate'])->name('exchanges.rate');
        Route::resource('exchanges', ExchangeController::class)->names('exchanges');
    });
});

require __DIR__.'/auth.php';
