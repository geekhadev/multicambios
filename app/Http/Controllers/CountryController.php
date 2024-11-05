<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\Country;
use Inertia\Inertia;

class CountryController extends Controller
{
    use AuthorizesRequests;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('viewAny', Country::class);

        $countries = Country::all();

        return Inertia::render('Countries/Index', [
            'countries' => $countries,
        ]);
    }
}
