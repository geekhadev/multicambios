<?php

namespace App\Policies;

use App\Models\User;

class CountryPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function status(User $user): bool
    {
        return true;
    }
}
