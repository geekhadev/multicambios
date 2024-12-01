<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Customer;
use App\Models\Benefit;

class BenefitController extends Controller
{
    public function index()
    {
        $customer = Customer::where('user_id', Auth::user()->id)->first();

        if(!$customer) {
            return response()->json([]);
        }

        $beneficiaries = Benefit::where('customer_id', $customer->id)
            ->select(['id', 'name', 'email', 'phone'])
            ->get();

        return response()->json($beneficiaries);
    }

    public function destroy(Benefit $beneficiary)
    {
        $beneficiary->delete();

        return response()->json([], 204);
    }
}
