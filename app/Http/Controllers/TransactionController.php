<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransactionRequest;
use App\Http\Resources\TransactionResource;
use App\Models\Transaction;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    use AuthorizesRequests;

    public function index(Request $request)
    {
        $this->authorize('viewAny', Transaction::class);

        $per_page = config('paginate.per_page');

        $sort = $request->input('sort', 'id');
        $direction = $request->input('direction', 'asc');

        $transactions = Transaction::with(
            'exchange',
            'exchange.origin',
            'exchange.destination',
            'confirmed_by',
            'paid_by',
        )
            ->when($request->search, function ($query, $search) {
                $query->where('id', 'like', '%'.$search.'%')
                    ->orWhere('created_at', 'like', '%'.$search.'%')
                    ->orWhere('customer_name', 'like', '%'.$search.'%')
                    ->orWhere('beneficiary_name', 'like', '%'.$search.'%')
                    ->orWhere('send_amount', 'like', '%'.$search.'%')
                    ->orWhere('pay_amount', 'like', '%'.$search.'%')
                    ->orWhere('send_bank', 'like', '%'.$search.'%')
                    ->orWhere('receive_bank', 'like', '%'.$search.'%')
                    ->orWhereHas('confirmed_by', function ($q) use ($search) {
                        $q->where('name', 'like', '%'.$search.'%');
                    })
                    ->orWhereHas('paid_by', function ($q) use ($search) {
                        $q->where('name', 'like', '%'.$search.'%');
                    });
            })
            ->orderBy($sort, $direction)
            ->paginate($per_page)
            ->withQueryString();

        return Inertia::render('Transactions/Index', [
            'paginate' => $transactions,
        ]);
    }

    public function store(TransactionRequest $request)
    {
        $this->authorize('create', Transaction::class);

        return new TransactionResource(Transaction::create($request->validated()));
    }

    public function show(Transaction $transaction)
    {
        $this->authorize('view', $transaction);

        return new TransactionResource($transaction);
    }

    public function update(TransactionRequest $request, Transaction $transaction)
    {
        $this->authorize('update', $transaction);

        $transaction->update($request->validated());

        return new TransactionResource($transaction);
    }

    public function destroy(Transaction $transaction)
    {
        $this->authorize('delete', $transaction);

        $transaction->delete();

        return response()->json();
    }
}
