<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Country::factory()->create([
            'name' => 'Venezuela',
            'prefix' => 'VE',
            'phone_code' => '+58',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'Chile',
            'prefix' => 'CL',
            'phone_code' => '+56',
            'url_flag' => '/images/flags/cl.png',
        ]);
        Country::factory()->create([
            'name' => 'Colombia',
            'prefix' => 'CO',
            'phone_code' => '+57',
            'url_flag' => '/images/flags/co.png',
        ]);
    }
}
