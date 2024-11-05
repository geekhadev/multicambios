<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Exchange;
use Inertia\Inertia;

class ShareExchanges
{
    public function handle(Request $request, Closure $next)
    {
        $exchanges = Exchange::with('origin', 'destination', 'bank_origin', 'last_rate')->get();
        Inertia::share('globalExchanges', $exchanges);

        return $next($request);
    }
}
