<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserExchangePermision extends Model
{
    use HasFactory;

    protected $table = 'users_exchanges_permisions';

    protected $fillable = ['*'];
}
