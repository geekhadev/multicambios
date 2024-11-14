<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Customer;

class CustomerController extends Controller
{
    use AuthorizesRequests;

    public function index(Request $request)
    {
        $this->authorize('viewAny', Customer::class);

        $per_page = config('paginate.per_page');

        $sort = $request->input('sort', 'name');
        $direction = $request->input('direction', 'asc');

        $customers = Customer::with('country', 'state')
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhereHas('country', function ($q) use ($search) {
                        $q->where('name', 'like', '%'.$search.'%');
                    })
                    ->orWhereHas('state', function ($q) use ($search) {
                        $q->where('name', 'like', '%'.$search.'%');
                    });
            })
            ->orderBy($sort, $direction)
            ->paginate($per_page)
            ->withQueryString();

        return Inertia::render('Customers/Index', [
            'paginate' => $customers,
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

    public function status(Customer $customer)
    {
        $this->authorize('status', Customer::class);

        $customer->is_active = !$customer->is_active;
        $customer->save();

        session()->flash('message', [
            'type' => 'success',
            'content' => 'Customer status updated successfully.',
        ]);
    }
}
