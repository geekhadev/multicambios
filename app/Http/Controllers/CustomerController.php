<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;

class CustomerController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $this->authorize('viewAny', Customer::class);

        $customers = Customer::with('country')->get();

        return Inertia::render('Customers/Index', [
            'customers' => $customers,
        ]);
    }

    public function store(CustomerRequest $request)
    {
        // $this->authorize('create', Customer::class);

        // return new CustomerResource(Customer::create($request->validated()));
    }

    public function show(Customer $customer)
    {
        $this->authorize('view', $customer);

        return Inertia::render('Customers/View', [
            'customer' => $customer,
        ]);
    }

    public function update(CustomerRequest $request, Customer $customer)
    {
        // $this->authorize('update', $customer);

        // $customer->update($request->validated());

        // return new CustomerResource($customer);
    }

    public function destroy(Customer $customer)
    {
        // $this->authorize('delete', $customer);

        // $customer->delete();

        // return response()->json();
    }
}
