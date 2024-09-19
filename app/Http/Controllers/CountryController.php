<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCountryRequest;
use App\Http\Requests\UpdateCountryRequest;
use App\Models\Country;
use Inertia\Inertia;
use Inertia\Response;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $countries = Country::all();
        return Inertia::render('Countries/Index', [
            'countries' => $countries,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Countries/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCountryRequest $request)
    {
        $country = new Country();
        $country->name = $request->name;
        $country->phone_code = $request->phone_code;
        $country->save();
        return redirect()->route('countries.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Country $country)
    {
        // mostrar un elemento
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Country $country)
    {
        // formulario para editar
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCountryRequest $request, Country $country)
    {
        // petición para actualizar
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Country $country)
    {
        // petición para eliminar
    }
}
