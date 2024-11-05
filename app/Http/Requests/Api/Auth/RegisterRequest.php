<?php

namespace App\Http\Requests\Api\Auth;

use App\Http\Requests\Api\ApiRequest;
use Illuminate\Validation\Rule;

class RegisterRequest extends ApiRequest
{
    public function rules(): array
    {
        return [
            'country_id' => ['required', 'integer', 'exists:countries,id'],
            'state_id' => ['required', 'integer', 'exists:states,id'],
            'document_type' => ['required', 'string', 'in:passport,id'],
            'document_number' => [
                'required',
                'string',
                'max:255',
                Rule::unique('customers')->where(function ($query) {
                    return $query->where('country_id', $this->country_id)
                        ->where('document_type', $this->document_type);
                }),
            ],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['nullable', 'string', 'email', 'unique:users,email'],
            'phone' => ['required', 'string', 'unique:users,phone'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'address' => ['nullable', 'string', 'max:255'],
            'occupation' => ['nullable', 'string', 'max:255'],
            'politically_exposed' => ['required', 'boolean'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
