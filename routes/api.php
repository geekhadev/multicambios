<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BenefitController;
use App\Http\Controllers\Api\TransactionController;
use App\Http\Controllers\Api\ExchangeController;
use App\Http\Controllers\Api\PageController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'user']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/beneficiaries', [BenefitController::class, 'index']);
    Route::get('/transactions', [TransactionController::class, 'index']);
    Route::get('/exchanges', [ExchangeController::class, 'index']);
    Route::get('/exchanges/{exchange}/open', [ExchangeController::class, 'open']);
    Route::get('/pages', [PageController::class, 'index']);
});
