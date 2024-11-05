<?php

namespace App\Http\Requests\Api\Auth;

use App\Http\Requests\Api\ApiRequest;

class LoginRequest extends ApiRequest
{
    public function rules(): array
    {
        return [
            'phone' => ['required', 'string'],
            'password' => ['required', 'string', 'min:8'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
