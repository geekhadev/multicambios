<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BenefitController;
use App\Http\Controllers\Api\TransactionController;
use App\Http\Controllers\Api\ExchangeController;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\BankController;
use App\Http\Controllers\Api\DocumentTypeController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'user']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/benefits', [BenefitController::class, 'index']);
    Route::delete('/benefits/{beneficiary}', [BenefitController::class, 'destroy']);
    Route::post('/benefits', [BenefitController::class, 'store']);

    Route::get('/transactions', [TransactionController::class, 'index']);

    Route::get('/exchanges', [ExchangeController::class, 'index']);
    Route::get('/exchanges/{exchange}/open', [ExchangeController::class, 'open']);

    Route::get('/pages', [PageController::class, 'index']);

    Route::get('/banks/account-types/', [BankController::class, 'accountTypes']);
    Route::get('/banks/{countryId}', [BankController::class, 'byCountry']);

    Route::get('/document-types', [DocumentTypeController::class, 'index']);
});
