<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AccountType;
use App\Models\Bank;

class BankController extends Controller
{
    public function byCountry($countryId)
    {
        $banks = Bank::where('country_id', $countryId)
            ->select(['id', 'name'])
            ->get();

        return response()->json($banks);
    }

    public function accountTypes()
    {
        $types = AccountType::all();

        return response()->json($types);
    }
}
