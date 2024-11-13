<?php

namespace Database\Factories;

use App\Models\Bank;
use App\Models\Benefit;
use App\Models\Customer;
use App\Models\Exchange;
use App\Models\PaymentMethod;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class TransactionFactory extends Factory
{
    protected $model = Transaction::class;

    public function definition(): array
    {
        $exchange = Exchange::with('last_rate')->orderByDesc('id')->first();
        $payment_method = PaymentMethod::where('name', 'Transferencia')->first();

        $send_bank = Bank::where('id', $exchange->bank_origin_id)->inRandomOrder()->first();
        $pay_bank = Bank::where('country_id', $exchange->country_destination_id)->inRandomOrder()->first();
        $receive_bank = Bank::where('country_id', $exchange->country_destination_id)->inRandomOrder()->first();

        $benefit = Benefit::inRandomOrder()->first();
        $customer = Customer::where('id', $benefit->customer_id)->first();

        $user_admin = User::where('type', 'admin')->first();

        return [
            'id' => $this->faker->uuid(),
            'customer_id' => $customer->id,
            'exchange_id' => $exchange->id,
            'rate_type' => 'general',
            'rate_amount' => $exchange->last_rate->general_rate,

            'send_payment_method_id' => $payment_method->id,
            'send_bank' => $send_bank->name,
            'send_hour' => $this->faker->time(),
            'send_number' => $this->faker->randomNumber(),
            'send_amount' => $exchange->last_rate->general_rate,
            'send_description' => $this->faker->sentence(),
            'send_photo' => $this->faker->imageUrl(),

            'pay_payment_method_id' => $payment_method->id,
            'pay_bank' => $pay_bank->name,
            'pay_hour' => $this->faker->time(),
            'pay_number' => $this->faker->randomNumber(),
            'pay_amount' => $exchange->last_rate->general_rate,
            'pay_description' => $this->faker->sentence(),
            'pay_photo' => $this->faker->imageUrl(),

            'receive_bank' => $receive_bank->name,

            'customer_document_type_id' => $customer->document_type_id,
            'customer_document_number' => $customer->document_number,
            'customer_name' => $customer->name,
            'customer_phone' => $customer->phone,
            'customer_email' => $customer->email,
            'customer_politically_exposed' => $customer->politically_exposed,
            'customer_address' => $customer->address,

            'beneficiary_document_type_id' => $benefit->document_type_id,
            'beneficiary_document_number' => $benefit->document_number,
            'beneficiary_name' => $benefit->name,
            'beneficiary_phone' => $benefit->phone,
            'beneficiary_email' => $benefit->email,
            'beneficiary_account_type_id' => $benefit->bank_account_type_id,
            'beneficiary_number_account' => $benefit->bank_account_number,

            'confirmed_by' => $user_admin,
            'confirmed_at' => null,
            'paid_by' => null,
            'paid_at' => null,

            'status' => 'pending',
            'is_active' => true,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
