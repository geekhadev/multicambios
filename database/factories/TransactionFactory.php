<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Exchange;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class TransactionFactory extends Factory
{
    protected $model = Transaction::class;

    public function definition(): array
    {
        $exchange = Exchange::orderByDesc('id')->first();
        return [
            'send_ammount' => $this->faker->randomFloat(),
            'receive_ammount' => $this->faker->randomFloat(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'customer_id' => Customer::factory(),
            'exchange_id' => $exchange->id,
        ];
    }
}
