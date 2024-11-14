<?php

namespace App\Http\Controllers;

use App\Http\Requests\BenefitRequest;
use App\Models\Benefit;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BenefitController extends Controller
{
    use AuthorizesRequests;

    public function index(Request $request)
    {
        $this->authorize('viewAny', Benefit::class);

        $per_page = config('paginate.per_page');

        $sort = $request->input('sort', 'name');
        $direction = $request->input('direction', 'asc');

        $benefits = Benefit::with(
            'customer',
            'customer.country',
            'country',
            'document_type',
            'bank',
            'bank_account_type'
        )
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

        return Inertia::render('Benefits/Index', [
            'paginate' => $benefits,
        ]);
    }

    public function status(Benefit $benefit)
    {
        $this->authorize('status', Benefit::class);

        $benefit->is_active = !$benefit->is_active;
        $benefit->save();

        session()->flash('message', [
            'type' => 'success',
            'content' => 'Benefit status updated successfully.',
        ]);
    }
}
