<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Validator;
use App\Models\Benefit;

class StoreBenefitRequest extends ApiRequest
{
    public function rules(): array
    {
        return [
            'country_id' => ['required'],
            'document_type_id' => ['required', 'exists:document_types,id'],
            'document_number' => ['required', 'string', 'min:6', 'max:20'],
            'name' => ['required', 'string', 'min:3', 'max:100'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable', 'string', 'min:6', 'max:20'],
            'bank_id' => ['required', 'exists:banks,id'],
            'bank_account_type_id' => ['required', 'exists:account_types,id'],
            'bank_account_number' => ['required', 'string', 'min:6', 'max:30'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    protected function withValidator(Validator $validator): void
    {
        $validator->after(function ($validator) {
            if ($this->beneficiaryExists()) {
                $validator->errors()->add(
                    'bank_account_number',
                    'El número de cuenta ya se encuentra registrado.'
                );
            }
        });
    }

    protected function beneficiaryExists(): bool
    {
        return Benefit::where('bank_id', $this->input('bank_id'))
            ->where('bank_account_type_id', $this->input('bank_account_type_id'))
            ->where('bank_account_number', $this->input('bank_account_number'))
            ->exists();
    }
}
