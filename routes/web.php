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
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware(ShareExchanges::class);

use App\Events\TestEvent;
Route::get('/event', function () {
    $date = now()->toDateTimeString();
    $message = "Event triggered at $date";
    broadcast(new TestEvent($message));
    return response()->json($message);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', ShareExchanges::class])->name('dashboard');

Route::middleware(['auth', ShareExchanges::class])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        Route::get('countries/{country}/status', [CountryController::class, 'status'])->name('countries.status');
        Route::resource('countries', CountryController::class)->names('countries');

        Route::get('banks/{bank}/status', [BankController::class, 'status'])->name('banks.status');
        Route::resource('banks', BankController::class)->names('banks');

        Route::get('customers/{customer}/status', [CustomerController::class, 'status'])->name('customers.status');
        Route::get('customers-confirm/{customer}', [CustomerController::class, 'confirm'])->name('customers.confirm');
        Route::resource('customers', CustomerController::class)->names('customers');

        Route::get('users/{user}/status', [UserController::class, 'status'])->name('users.status');
        Route::get('users-confirm/{user}', [UserController::class, 'confirm'])->name('users.confirm');
        Route::resource('users', UserController::class)->names('users');

        Route::get('benefits/{benefit}/status', [BenefitController::class, 'status'])->name('benefits.status');
        Route::resource('benefits', BenefitController::class)->names('benefits');

        Route::get('exchanges/{exchange}/open', [ExchangeController::class, 'open'])->name('exchanges.open');
        Route::get('exchanges/{exchange}/status', [ExchangeController::class, 'status'])->name('exchanges.status');
        Route::post('exchanges/{exchange}/rate', [ExchangeController::class, 'rate'])->name('exchanges.rate');
        Route::resource('exchanges', ExchangeController::class)->names('exchanges');
        Route::resource('transactions', TransactionController::class)->names('transactions');
    });
});

require __DIR__.'/auth.php';
