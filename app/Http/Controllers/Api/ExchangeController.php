<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Exchange;

class ExchangeController extends Controller
{
    public function index()
    {
        $exchange = Exchange::
            with(
                'origin',
                'destination',
                'bank_origin',
                'last_rate',
                'user_exchange_permisions'
            )
            ->where('is_active', true)
            ->where('is_open', true)
            ->get();

        return response()->json($exchange);
    }

    public function open(Exchange $exchange)
    {
        return response()->json(
            $exchange->is_active &&
            $exchange->is_open
        );
    }
}
