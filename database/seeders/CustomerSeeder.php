<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;
use App\Models\Customer;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cl = Country::where('prefix', 'CL')->first();

        Customer::factory()->count(30)->create([
            'country_id' => $cl->id,
        ]);
    }
}
