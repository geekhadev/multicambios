<?php

namespace Database\Factories;

use App\Models\Country;
use App\Models\DocumentType;
use App\Models\State;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class CustomerFactory extends Factory
{
    protected $model = Customer::class;

    public function definition(): array
    {
        $cl = Country::where('prefix', 'CL')->first();
        $state = State::where('country_id', $cl->id)->inRandomOrder()->first();

        return [
            'user_id' => User::factory(),
            'document_type_id' => DocumentType::inRandomOrder()->first(),
            'country_id' => $cl->id,
            'state_id' => $state->id,
            'document_number' => $this->faker->unique()->randomNumber(8),
            'name' => $this->faker->firstName() . ' ' . $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'occupation' => $this->faker->jobTitle(),
            'politically_exposed' => $this->faker->boolean(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
