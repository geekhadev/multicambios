<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BenefitRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'customer_id' => ['required', 'exists:customers'],
            'first_name' => ['required'],
            'last_name' => ['required'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
