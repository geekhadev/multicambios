<?php

namespace App\Http\Requests\Exchange;

use Illuminate\Foundation\Http\FormRequest;

class UpdateExchangeRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            //
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
