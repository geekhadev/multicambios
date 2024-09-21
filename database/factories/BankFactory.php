<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Country;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bank>
 */
class BankFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $country = Country::inRandomOrder()->first();
        return [
            'country_id' => $country->id,
            'name' => $this->faker->company,
            'account_prefix' => $this->faker->unique()->randomNumber(4),
            'is_active' => true,
        ];
    }
}
