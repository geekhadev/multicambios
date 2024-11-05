<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Exchange extends Model
{
    use HasFactory;

    protected $table = 'exchanges';

    protected $fillable = ['*'];

    public function origin(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'country_origin_id');
    }

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'country_destination_id');
    }

    public function bank_origin(): BelongsTo
    {
        return $this->belongsTo(Bank::class, 'bank_origin_id');
    }

    public function rates(): HasMany
    {
        return $this->hasMany(Rate::class);
    }

    public function  last_rate(): HasOne
    {
        return $this->hasOne(Rate::class)->latest();
    }
}
