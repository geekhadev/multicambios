<?php

namespace App\Policies;

use App\Models\User;

class BankPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function status(User $user): bool
    {
        return true;
    }
}
