<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Customer;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function index()
    {
        $customer = Customer::where('user_id', Auth::user()->id)->first();

        if(!$customer) {
            return response()->json([]);
        }

        $transactions = Transaction::with(
            'exchange',
            'exchange.origin',
            'exchange.destination'
        )
            ->where('customer_id', $customer->id)
            ->get();

        return response()->json($transactions);
    }
}
