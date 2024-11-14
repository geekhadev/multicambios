<?php

namespace App\Policies;

use App\Models\Benefit;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class BenefitPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Benefit $benefit): bool
    {
        return false;
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, Benefit $benefit): bool
    {
        return false;
    }

    public function delete(User $user, Benefit $benefit): bool
    {
        return false;
    }

    public function restore(User $user, Benefit $benefit): bool
    {
        return false;
    }

    public function forceDelete(User $user, Benefit $benefit): bool
    {
        return false;
    }

    public function status(User $user): bool
    {
        return true;
    }
}
