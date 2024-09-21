<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Bank;
use App\Models\Country;

class BankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Bank::factory(10)->create();

        // Banks from Venezuela
        $ve = Country::where('prefix', 'VE')->first();
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => '100%BANCO',
            'account_prefix' => '0156',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'ABN AMRO BANK',
            'account_prefix' => '0196',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCAMIGA BANCO MICROFINANCIERO, C.A.',
            'account_prefix' => '0172',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO ACTIVO BANCO COMERCIAL, C.A.',
            'account_prefix' => '0171',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO AGRICOLA',
            'account_prefix' => '0166',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO BICENTENARIO',
            'account_prefix' => '0175',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO CARONI, C.A. BANCO UNIVERSAL',
            'account_prefix' => '0128',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO DE DESARROLLO DEL MICROEMPRESARIO',
            'account_prefix' => '0164',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO DE VENEZUELA',
            'account_prefix' => '0102',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO DEL CARIBE C.A.',
            'account_prefix' => '0114',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO DEL PUEBLO SOBERANO C.A.',
            'account_prefix' => '0149',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO DEL TESORO',
            'account_prefix' => '0163',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO ESPIRITO SANTO, S.A.',
            'account_prefix' => '0176',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO EXTERIOR C.A.',
            'account_prefix' => '0115',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO INDUSTRIAL DE VENEZUELA.',
            'account_prefix' => '0003',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO INTERNACIONAL DE DESARROLLO, C.A.',
            'account_prefix' => '0173',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO MERCANTIL C.A.',
            'account_prefix' => '0105',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO NACIONAL DE CREDITO',
            'account_prefix' => '0191',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO OCCIDENTAL DE DESCUENTO.',
            'account_prefix' => '0116',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO PLAZA',
            'account_prefix' => '0138',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO PROVINCIAL BBVA',
            'account_prefix' => '0108',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCO VENEZOLANO DE CREDITO S.A.',
            'account_prefix' => '0104',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANCRECER S.A. BANCO DE DESARROLLO',
            'account_prefix' => '0168',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANESCO BANCO UNIVERSAL',
            'account_prefix' => '0134',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANFANB',
            'account_prefix' => '0177',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANGENTE',
            'account_prefix' => '0146',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'BANPLUS BANCO COMERCIAL C.A',
            'account_prefix' => '0174',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'CITIBANK.',
            'account_prefix' => '0190',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'CORP BANCA.',
            'account_prefix' => '0121',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'DELSUR BANCO UNIVERSAL',
            'account_prefix' => '0157',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'FONDO COMUN',
            'account_prefix' => '0151',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'INSTITUTO MUNICIPAL DE CRÉDITO POPULAR',
            'account_prefix' => '0601',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'MIBANCO BANCO DE DESARROLLO, C.A.',
            'account_prefix' => '0169',
        ]);
        Bank::factory()->create([
            'country_id' => $ve->id,
            'name' => 'SOFITASA',
            'account_prefix' => '0137',
        ]);

        // Banks from Chile
        $cl = Country::where('prefix', 'CL')->first();
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO DE CHILE',
            'account_prefix' => '001',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO INTERNACIONAL',
            'account_prefix' => '009',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'SCOTIABANK CHILE',
            'account_prefix' => '014',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO DE CREDITO E INVERSIONES',
            'account_prefix' => '016',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'CORPBANCA',
            'account_prefix' => '027',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO BICE',
            'account_prefix' => '028',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'HSBC BANK (CHILE)',
            'account_prefix' => '031',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO SANTANDER-CHILE',
            'account_prefix' => '037',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO ITAÚ CHILE',
            'account_prefix' => '039',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO SECURITY',
            'account_prefix' => '049',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO FALABELLA',
            'account_prefix' => '051',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'DEUTSCHE BANK (CHILE)',
            'account_prefix' => '052',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO RIPLEY',
            'account_prefix' => '053',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'RABOBANK CHILE (ex HNS BANCO)',
            'account_prefix' => '054',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO CONSORCIO (ex BANCO MONEX)',
            'account_prefix' => '055',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO PENTA',
            'account_prefix' => '056',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO PARIS',
            'account_prefix' => '057',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO BILBAO VIZCAYA ARGENTARIA, CHILE (BBVA)',
            'account_prefix' => '504',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO BTG PACTUAL CHILE',
            'account_prefix' => '059',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO DO BRASIL S.A.',
            'account_prefix' => '017',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'JP MORGAN CHASE BANK, N. A.',
            'account_prefix' => '041',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO DE LA NACION ARGENTINA',
            'account_prefix' => '043',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'THE BANK OF TOKYO-MITSUBISHI UFJ, LTD',
            'account_prefix' => '045',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BCI - SUCURSAL MIAMI',
            'account_prefix' => '930',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO DEL ESTADO DE CHILE - SUCURSAL NUEVA YORK',
            'account_prefix' => '931',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'CORPBANCA - SUCURSAL NUEVA YORK',
            'account_prefix' => '932',
        ]);
        Bank::factory()->create([
            'country_id' => $cl->id,
            'name' => 'BANCO ESTADO',
            'account_prefix' => '012',
        ]);
    }
}
