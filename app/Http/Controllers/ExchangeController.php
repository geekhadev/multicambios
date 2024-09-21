<?php

namespace App\Http\Controllers;

use App\Http\Requests\Exchange\StoreExchangeRequest;
use App\Http\Requests\Exchange\UpdateExchangeRequest;
use App\Models\Exchange;
use App\Models\Bank;
use Inertia\Inertia;
use Inertia\Response;

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
        $banks = Bank::
            where('country_id', $exchange->country_origin_id)
            ->where('is_active', true)
            ->get();

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
}
