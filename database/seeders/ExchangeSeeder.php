<?php

namespace Database\Seeders;

use App\Models\AccountType;
use App\Models\DocumentType;
use Illuminate\Database\Seeder;
use App\Models\Exchange;
use App\Models\Country;
use App\Models\Bank;

class ExchangeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cl = Country::where('prefix', 'CL')->first();
        $ve = Country::where('prefix', 'VE')->first();

        $clBank = Bank::
            where('country_id', $cl->id)
            ->where('account_prefix', '016')
            ->first();

        $veBanksIds = Bank::
            where('country_id', $ve->id)
            ->whereIn('account_prefix', ['0102', '0114', '0105'])
            ->pluck('id')
            ->toArray();

        Exchange::factory()->create([
            'country_origin_id' => $cl->id,
            'country_destination_id' => $ve->id,
            'amount_min' => 5000,
            'amount_max' => 1000000,
            'amount_preferential' => 100000,
            'bank_origin_id' => $clBank->id,
            'bank_origin_account_number' => '1234567890',
            'bank_origin_account_type_id' => AccountType::where('name', 'Corriente')->first()->id,
            'bank_origin_owner_document_type_id' => DocumentType::where('name', 'RUT')->first()->id,
            'bank_origin_owner_document_number' => '11111111-1',
            'bank_origin_owner_name' => 'Munticambios SPA',
            'bank_origin_owner_phone' => '+56912345678',
            'bank_origin_owner_email' => 'pagos@multicambios.cl',
            'banks_destinations_ids' => json_encode($veBanksIds),
        ]);
    }
}
