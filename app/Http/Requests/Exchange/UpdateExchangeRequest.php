<?php

namespace App\Http\Requests\Exchange;

use Illuminate\Foundation\Http\FormRequest;

class UpdateExchangeRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'amount_min' => 'required|numeric',
            'bank_origin_id' => 'required|exists:banks,id',
            'bank_origin_account_number' => 'required',
            'bank_origin_owner_document_type_id' => 'required|exists:document_types,id',
            'bank_origin_account_type_id' => 'required|exists:account_types,id',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
