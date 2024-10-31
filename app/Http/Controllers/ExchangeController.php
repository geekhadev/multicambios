<?php

namespace App\Http\Controllers;

use App\Http\Requests\Exchange\StoreExchangeRequest;
use App\Http\Requests\Exchange\UpdateExchangeRequest;
use App\Models\Exchange;
use App\Models\Bank;
use App\Models\Rate;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class ExchangeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exchanges = Exchange::
            with(
                'origin',
                'destination',
                'bank_origin'
            )
            ->get();

        return Inertia::render('Exchanges/Index', [
            'exchanges' => $exchanges,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreExchangeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Exchange $exchange)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Exchange $exchange)
    {
        $exchange = Exchange::
            with(
                'origin',
                'destination',
                'bank_origin'
            )
            ->find($exchange->id);

        $banks = Bank::
            where('country_id', $exchange->country_origin_id)
            ->where('is_active', true)
            ->get();

        $rate = Rate::
            where('exchange_id', $exchange->id)
            ->latest()
            ->first();

        return Inertia::render('Exchanges/Config', [
            'exchange' => $exchange,
            'banks' => $banks,
            'rate' => $rate,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExchangeRequest $request, Exchange $exchange)
    {
        $object = Exchange::find($exchange->id);
        $object->country_origin_id = $request->country_origin_id;
        $object->country_destination_id = $request->country_destination_id;
        $object->amount_min = $request->amount_min;
        $object->amount_max = $request->amount_max;
        $object->amount_preferential = $request->amount_preferential;
        $object->bank_origin_id = $request->bank_origin_id;
        $object->bank_origin_account_number = $request->bank_origin_account_number;
        $object->bank_origin_account_type = $request->bank_origin_account_type;
        $object->bank_origin_owner_document_type = $request->bank_origin_owner_document_type;
        $object->bank_origin_owner_document_number = $request->bank_origin_owner_document_number;
        $object->bank_origin_owner_name = $request->bank_origin_owner_name;
        $object->bank_origin_owner_phone = $request->bank_origin_owner_phone;
        $object->bank_origin_owner_email = $request->bank_origin_owner_email;
        $object->banks_destinations_ids = json_encode($request->banks_destinations_ids);
        $object->is_active = $request->is_active;
        $object->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Exchange $exchange)
    {
        //
    }

    public function rate(Request $request)
    {
        $rate = new Rate();
        $rate->exchange_id = $request->exchange_id;
        $rate->general_rate = $request->general_rate;
        $rate->general_profit = $request->general_profit;
        $rate->general_profit_percent = $request->general_profit_percent;
        $rate->preference_rate = $request->preference_rate;
        $rate->preference_profit = $request->preference_profit;
        $rate->preference_profit_percent = $request->preference_profit_percent;
        $rate->save();
    }

}
