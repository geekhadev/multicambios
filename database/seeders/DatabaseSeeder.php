<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Customer',
            'email' => 'customer@multicambios.cl',
            'password' => bcrypt('qwerty123'),
            'type' => 'customer'
        ]);

        User::factory()->create([
            'name' => 'Operator',
            'email' => 'operator@multicambios.cl',
            'password' => bcrypt('qwerty123'),
            'type' => 'operator'
        ]);

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@multicambios.cl',
            'password' => bcrypt('qwerty123'),
            'type' => 'admin'
        ]);

        $this->call([
            CountrySeeder::class,
            BankSeeder::class,
            ExchangeSeeder::class,
        ]);
    }
}
