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

        // dd($exchange->with('origin')->toArray());

        return Inertia::render('Exchanges/Config', [
            'exchange' => $exchange,
            'banks' => $banks,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExchangeRequest $request, Exchange $exchange)
    {
        dd($request->all());
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
