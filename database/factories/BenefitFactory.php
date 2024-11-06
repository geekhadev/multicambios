<?php

namespace Database\Factories;

use App\Models\AccountType;
use App\Models\Bank;
use App\Models\Benefit;
use App\Models\Country;
use App\Models\Customer;
use App\Models\DocumentType;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class BenefitFactory extends Factory
{
    protected $model = Benefit::class;

    public function definition(): array
    {
        $country = Country::where('prefix', 'VE')->inRandomOrder()->first();
        $bank = Bank::where('country_id', $country->id)->inRandomOrder()->first();

        return [
            'customer_id' => Customer::inRandomOrder()->first(),
            'country_id' => $country,
            'document_type_id' => DocumentType::inRandomOrder()->first(),
            'document_number' => $this->faker->unique()->randomNumber(8),
            'name' => $this->faker->firstName() . ' ' . $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'bank_id' => $bank->id,
            'bank_account_type_id' => AccountType::inRandomOrder()->first(),
            'bank_account_number' => $this->faker->unique()->randomNumber(8),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
