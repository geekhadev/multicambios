<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;
use App\Models\Customer;

class CustomerController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $this->authorize('viewAny', Customer::class);

        $customers = Customer::with('country', 'state')->get();

        return Inertia::render('Customers/Index', [
            'customers' => $customers,
        ]);
    }

    public function show(Customer $customer)
    {
        $this->authorize('view', $customer);

        $customer->load('country', 'state', 'benefits.country');
        return Inertia::render('Customers/View', [
            'customer' => $customer,
        ]);
    }
}
