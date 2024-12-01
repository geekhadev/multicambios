<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreBenefitRequest;
use Illuminate\Http\Request;
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

        $beneficiaries = Benefit::where('customer_id', $customer->id)->get();

        return response()->json($beneficiaries);
    }

    public function store(StoreBenefitRequest $request)
    {
        $customer = Customer::where('user_id', Auth::user()->id)->first();

        if(!$customer) {
            return response()->json([], 403);
        }

        $beneficiary = new Benefit();
        $beneficiary->fill($request->validated());
        $beneficiary->customer_id = $customer->id;
        $beneficiary->save();

        return response()->json($beneficiary, 201);
    }

    public function destroy(Benefit $beneficiary)
    {
        $beneficiary->delete();

        return response()->json([], 204);
    }
}
