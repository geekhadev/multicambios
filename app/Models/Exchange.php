<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exchange extends Model
{
    use HasFactory;

    protected $table = 'exchanges';

    protected $fillable = ['*'];

    public function origin()
    {
        return $this->belongsTo(Country::class, 'country_origin_id');
    }

    public function destination()
    {
        return $this->belongsTo(Country::class, 'country_destination_id');
    }

    public function bank_origin()
    {
        return $this->belongsTo(Bank::class, 'bank_origin_id');
    }

    public function rates()
    {
        return $this->hasMany(Rate::class);
    }
}
