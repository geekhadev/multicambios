<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AccountType;

class AccountTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $accountTypes = [
            'Ahorros',
            'Corriente',
            'Vista/RUT',
            'Nomina',
        ];

        foreach ($accountTypes as $accountType) {
            AccountType::create(['name' => $accountType]);
        }
    }
}
