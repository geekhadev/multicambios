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
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        User::factory()->create([
            'name' => 'Irwing Naranjo',
            'email' => 'khalisser@gmail.com',
            'password' => bcrypt('qwerty123'),
        ]);

        $this->call([
            CountrySeeder::class,
            BankSeeder::class,
            ExchangeSeeder::class,
        ]);
    }
}
