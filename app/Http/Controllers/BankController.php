<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;
use App\Models\Bank;

class BankController extends Controller
{
    use AuthorizesRequests;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('viewAny', Bank::class);

        $banks = Bank::
            with('country')
            ->orderBy('country_id', 'asc')
            ->orderBy('name', 'asc')
            ->get();

        return Inertia::render('Banks/Index', [
            'banks' => $banks,
        ]);
    }
}
