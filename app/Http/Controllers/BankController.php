<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\Bank;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BankController extends Controller
{
    use AuthorizesRequests;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Bank::class);

        $per_page = config('paginate.per_page');

        $sort = $request->input('sort', 'name');
        $direction = $request->input('direction', 'asc');

        $banks = Bank::with('country')
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhereHas('country', function ($q) use ($search) {
                        $q->where('name', 'like', '%'.$search.'%');
                    });
            })
            ->orderBy($sort, $direction)
            ->paginate($per_page)
            ->withQueryString();

        return Inertia::render('Banks/Index', [
            'paginate' => $banks,
        ]);
    }

    public function status(Bank $bank)
    {
        $this->authorize('status', Bank::class);

        $bank->is_active = !$bank->is_active;
        $bank->save();

        session()->flash('message', [
            'type' => 'success',
            'content' => 'Bank status updated successfully.',
        ]);
    }
}
