<?php

namespace App\Http\Controllers;

use App\Http\Requests\BenefitRequest;
use App\Http\Resources\BenefitResource;
use App\Models\Benefit;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;

class BenefitController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $this->authorize('viewAny', Benefit::class);

        $benefits = Benefit::with('customer')->get();

        return Inertia::render('Benefits/Index', [
            'benefits' => $benefits,
        ]);
    }

    public function store(BenefitRequest $request)
    {
        // $this->authorize('create', Benefit::class);

        // return new BenefitResource(Benefit::create($request->validated()));
    }

    public function show(Benefit $benefit)
    {
        // $this->authorize('view', $benefit);

        // return new BenefitResource($benefit);
    }

    public function update(BenefitRequest $request, Benefit $benefit)
    {
        // $this->authorize('update', $benefit);

        // $benefit->update($request->validated());

        // return new BenefitResource($benefit);
    }

    public function destroy(Benefit $benefit)
    {
        // $this->authorize('delete', $benefit);

        // $benefit->delete();

        // return response()->json();
    }
}
