<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    use HasUuids, HasFactory;

    protected $fillable = ['*'];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function exchange(): BelongsTo
    {
        return $this->belongsTo(Exchange::class);
    }

    public function rate(): BelongsTo
    {
        return $this->belongsTo(Rate::class);
    }

    public function confirmed_by(): BelongsTo
    {
        return $this->belongsTo(User::class, 'confirmed_by', 'id');
    }

    public function paid_by(): BelongsTo
    {
        return $this->belongsTo(User::class, 'paid_by', 'id');
    }
}
