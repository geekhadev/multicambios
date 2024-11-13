<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ini_set('memory_limit', '2048M');

        $chunkSize = 100;
        $totalRecords = 200;

        for ($i = 0; $i < $totalRecords; $i += $chunkSize) {
            Transaction::factory()->count($chunkSize)->create();
        }
    }
}
