<?php

namespace App\Http\Controllers;

use App\Http\Requests\Bank\StoreBankRequest;
use App\Http\Requests\Bank\UpdateBankRequest;
use App\Models\Bank;
use Inertia\Inertia;
use Inertia\Response;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banks = Bank::
            with('country')
            ->orderBy('country_id', 'asc')
            ->orderBy('name', 'asc')
            ->get();

        return Inertia::render('Banks/Index', [
            'banks' => $banks,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Banks/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBankRequest $request)
    {
        $bank = new Bank();
        $bank->country_id = $request->country_id;
        $bank->name = $request->name;
        $bank->account_prefix = $request->account_prefix;
        $bank->save();
        return redirect()->route('banks.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Bank $bank)
    {
        // mostrar un elemento
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bank $bank)
    {
        // formulario para editar
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBankRequest $request, Bank $bank)
    {
        // petición para actualizar
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bank $bank)
    {
        Bank::destroy($bank->id);
    }
}
