<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRateRequest;
// use App\Http\Requests\Exchange\StoreExchangeRequest;
use App\Http\Requests\Exchange\UpdateExchangeRequest;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\DocumentType;
use App\Models\AccountType;
use App\Models\Exchange;
use App\Models\Bank;
use App\Models\Rate;

class ExchangeController extends Controller
{
    use AuthorizesRequests;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Exchange::class);

        $per_page = config('paginate.per_page');

        $sort = $request->input('sort', 'country_origin_id');
        $direction = $request->input('direction', 'asc');

        $exchanges = Exchange::
            with(
                'origin',
                'destination',
                'bank_origin',
                'bank_origin_account_type',
                'document_type_owner'
            )
            ->orderBy($sort, $direction)
            ->paginate($per_page)
            ->withQueryString();

        return Inertia::render('Exchanges/Index', [
            'paginate' => $exchanges,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Exchange $exchange)
    {
        $this->authorize('update', $exchange);

        $exchange = Exchange::
            with(
                'origin',
                'destination',
                'bank_origin',
                'last_rate',
            )
            ->find($exchange->id);

        $banks = Bank::
            where('country_id', $exchange->country_origin_id)
            ->where('is_active', true)
            ->get();

        $types_account = AccountType::get();
        $document_type = DocumentType::get();

        return Inertia::render('Exchanges/Config', [
            'exchange' => $exchange,
            'banks' => $banks,
            'types_account' => $types_account,
            'document_type' => $document_type,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExchangeRequest $request, Exchange $exchange)
    {
        $this->authorize('update', $exchange);

        $object = Exchange::find($exchange->id);
        $object->country_origin_id = $request->country_origin_id;
        $object->country_destination_id = $request->country_destination_id;
        $object->amount_min = $request->amount_min;
        $object->amount_max = $request->amount_max;
        $object->amount_preferential = $request->amount_preferential;
        $object->bank_origin_id = $request->bank_origin_id;
        $object->bank_origin_account_number = $request->bank_origin_account_number;
        $object->bank_origin_account_type_id = $request->bank_origin_account_type_id;
        $object->bank_origin_owner_document_type_id = $request->bank_origin_owner_document_type_id;
        $object->bank_origin_owner_document_number = $request->bank_origin_owner_document_number;
        $object->bank_origin_owner_name = $request->bank_origin_owner_name;
        $object->bank_origin_owner_phone = $request->bank_origin_owner_phone;
        $object->bank_origin_owner_email = $request->bank_origin_owner_email;
        $object->banks_destinations_ids = json_encode($request->banks_destinations_ids);
        $object->is_active = $request->is_active;
        $object->save();
    }

    public function rate(CreateRateRequest $request, Rate $rate)
    {
        $rate = new Rate();
        $rate->exchange_id = $request->exchange_id;
        $rate->general_rate = $request->general_rate;
        $rate->general_profit = $request->general_profit;
        $rate->general_profit_percent = $request->general_profit_percent;
        $rate->preference_rate = $request->preference_rate;
        $rate->preference_profit = $request->preference_profit;
        $rate->preference_profit_percent = $request->preference_profit_percent;
        $rate->rate_dollar = $request->rate_dollar;
        $rate->operator = $request->operator;
        $rate->save();
    }

    public function status(Exchange $exchange)
    {
        $this->authorize('status', Exchange::class);

        $exchange->is_active = !$exchange->is_active;
        $exchange->save();

        session()->flash('message', [
            'type' => 'success',
            'content' => 'Exchange status updated successfully.',
        ]);
    }

    public function open(Exchange $exchange)
    {
        $this->authorize('open', Exchange::class);

        $exchange->is_open = !$exchange->is_open;
        $exchange->save();

        session()->flash('message', [
            'type' => 'success',
            'content' => 'Exchange status open updated successfully.',
        ]);
    }
}
