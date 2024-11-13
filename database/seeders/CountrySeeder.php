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
        Country::factory()->create([
            'name' => 'Argentina',
            'prefix' => 'AR',
            'phone_code' => '+54',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'Brasil',
            'prefix' => 'BR',
            'phone_code' => '+55',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'Perú',
            'prefix' => 'PE',
            'phone_code' => '+51',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'Uruguay',
            'prefix' => 'UY',
            'phone_code' => '+598',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'Paraguay',
            'prefix' => 'PY',
            'phone_code' => '+595',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'Ecuador',
            'prefix' => 'EC',
            'phone_code' => '+593',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'Bolivia',
            'prefix' => 'BO',
            'phone_code' => '+591',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'Panamá',
            'prefix' => 'PA',
            'phone_code' => '+507',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'México',
            'prefix' => 'MX',
            'phone_code' => '+52',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'Costa Rica',
            'prefix' => 'CR',
            'phone_code' => '+506',
            'url_flag' => '/images/flags/ve.png',
        ]);
        Country::factory()->create([
            'name' => 'España',
            'prefix' => 'ES',
            'phone_code' => '+34',
            'url_flag' => '/images/flags/ve.png',
        ]);
    }
}
