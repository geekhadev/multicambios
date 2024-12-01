<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Benefit extends Model
{
    use HasUuids, HasFactory;

    protected $fillable = [
        'country_id',
        'document_type_id',
        'document_number',
        'name',
        'email',
        'phone',
        'bank_id',
        'bank_account_type_id',
        'bank_account_number',
        'is_active',
        'customer_id',
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

    public function document_type(): BelongsTo
    {
        return $this->belongsTo(DocumentType::class);
    }

    public function bank(): BelongsTo
    {
        return $this->belongsTo(Bank::class);
    }

    public function bank_account_type(): BelongsTo
    {
        return $this->belongsTo(AccountType::class);
    }
}
