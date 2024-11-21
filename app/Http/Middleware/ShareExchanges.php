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
        $exchanges = Exchange::whereHas('last_rate', function ($query) {
            $query->whereBetween('created_at', [
                date('Y-m-d 00:00:00'),
                date('Y-m-d 23:59:59')
            ]);
        })->with(['origin', 'destination', 'bank_origin', 'last_rate'])->get();

        Inertia::share('globalExchanges', $exchanges);

        return $next($request);
    }
}
