<?php

namespace App\Http\Resources;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Transaction */
class TransactionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'send_ammount' => $this->send_ammount,
            'receive_ammount' => $this->receive_ammount,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'customer_id' => $this->customer_id,
            'exchange_id' => $this->exchange_id,
            'customer' => new CustomerResource($this->whenLoaded('customer')),
        ];
    }
}
