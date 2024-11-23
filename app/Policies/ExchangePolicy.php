<?php

namespace App\Policies;

use App\Models\Exchange;
use App\Models\User;

class ExchangePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }


    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Exchange $exchange): bool
    {
        return true;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function rate(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can change the status of the model.
     */
    public function status(User $user): bool
    {
        return true;
    }

    public function open(User $user): bool
    {
        return true;
    }
}
