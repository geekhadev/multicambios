<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateRateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'exchange_id' => 'required|exists:exchanges,id',
            'general_rate' => 'required|numeric',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
