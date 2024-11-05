<?php

namespace Database\Factories;

use App\Models\Benefit;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class BenefitFactory extends Factory
{
    protected $model = Benefit::class;

    public function definition(): array
    {
        $customer = Customer::first();
        return [
            'name' => $this->faker->firstName() . ' ' . $this->faker->lastName(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'customer_id' => $customer->id,
        ];
    }
}
