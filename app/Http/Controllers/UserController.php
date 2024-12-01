<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    use AuthorizesRequests;

    public function index(Request $request)
    {
        $this->authorize('viewAny', User::class);

        $per_page = config('paginate.per_page');

        $sort = $request->input('sort', 'name');
        $direction = $request->input('direction', 'asc');

        $users = User::with(
            'user_exchange_permisions'
        )
            ->where('type', 'operator')
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('document_number', 'like', '%'.$search.'%')
                    ->orWhere('email', 'like', '%'.$search.'%')
                    ->orWhere('phone', 'like', '%'.$search.'%')
                    ->orWhereHas('document_type', function ($q) use ($search) {
                        $q->where('name', 'like', '%'.$search.'%');
                    })
                    ->orWhereHas('country', function ($q) use ($search) {
                        $q->where('name', 'like', '%'.$search.'%');
                    });
            })
            ->orderBy($sort, $direction)
            ->paginate($per_page)
            ->withQueryString();

        return Inertia::render('Users/Index', [
            'paginate' => $users,
        ]);
    }

    public function show(User $customer)
    {
        $this->authorize('view', $customer);

        $customer->load(
            'country',
            'state',
            'benefits',
            'benefits.country',
            'transactions',
            'transactions.exchange',
            'transactions.exchange.origin',
            'transactions.exchange.destination',
            'transactions.confirmed_by',
            'transactions.paid_by',
            'confirmed_by'
        );

        return Inertia::render('Users/View', [
            'customer' => $customer,
        ]);
    }

    public function status(User $customer)
    {
        $this->authorize('status', User::class);

        $customer->is_active = !$customer->is_active;
        $customer->save();

        session()->flash('message', [
            'type' => 'success',
            'content' => 'User status updated successfully.',
        ]);
    }

    public function confirm(User $customer)
    {
        $this->authorize('confirm', User::class);

        $customer->confirmed_by = Auth::id();
        $customer->confirmed_at = now();
        $customer->save();

        session()->flash('message', [
            'type' => 'success',
            'content' => 'User confirmed successfully.',
        ]);
    }
}
