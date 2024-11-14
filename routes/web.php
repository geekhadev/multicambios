<?php

use App\Http\Controllers\BenefitController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
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

    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        Route::get('countries-status/{country}', [CountryController::class, 'status'])->name('countries.status');
        Route::resource('countries', CountryController::class)->names('countries');

        Route::get('banks-status/{bank}', [BankController::class, 'status'])->name('banks.status');
        Route::resource('banks', BankController::class)->names('banks');

        Route::get('customers-status/{customer}', [CustomerController::class, 'status'])->name('customers.status');
        Route::resource('customers', CustomerController::class)->names('customers');

        Route::resource('benefits', BenefitController::class)->names('benefits');

        Route::post('exchanges/{exchange}/rate', [ExchangeController::class, 'rate'])->name('exchanges.rate');
        Route::resource('exchanges', ExchangeController::class)->names('exchanges');
        Route::resource('transactions', TransactionController::class)->names('transactions');
    });
});

require __DIR__.'/auth.php';
