<?php

namespace Database\Seeders;

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
        $banks = [
            'VE' => [
                [
                    'name' => '100%BANCO',
                    'account_prefix' => '0156',
                ],
                [
                    'name' => 'ABN AMRO BANK',
                    'account_prefix' => '0196',
                ],
                [
                    'name' => 'BANCAMIGA BANCO MICROFINANCIERO, C.A.',
                    'account_prefix' => '0172',
                ],
                [
                    'name' => 'BANCO ACTIVO BANCO COMERCIAL, C.A.',
                    'account_prefix' => '0171',
                ],
                [
                    'name' => 'BANCO AGRICOLA',
                    'account_prefix' => '0166',
                ],
                [
                    'name' => 'BANCO BICENTENARIO',
                    'account_prefix' => '0175',
                ],
                [
                    'name' => 'BANCO CARONI, C.A. BANCO UNIVERSAL',
                    'account_prefix' => '0128',
                ],
                [
                    'name' => 'BANCO DE DESARROLLO DEL MICROEMPRESARIO',
                    'account_prefix' => '0164',
                ],
                [
                    'name' => 'BANCO DE VENEZUELA',
                    'account_prefix' => '0102',
                ],
                [
                    'name' => 'BANCO DEL CARIBE C.A.',
                    'account_prefix' => '0114',
                ],
                [
                    'name' => 'BANCO DEL PUEBLO SOBERANO C.A.',
                    'account_prefix' => '0149',
                ],
                [
                    'name' => 'BANCO DEL TESORO',
                    'account_prefix' => '0163',
                ],
                [
                    'name' => 'BANCO ESPIRITO SANTO, S.A.',
                    'account_prefix' => '0176',
                ],
                [
                    'name' => 'BANCO EXTERIOR C.A.',
                    'account_prefix' => '0115',
                ],
                [
                    'name' => 'BANCO INDUSTRIAL DE VENEZUELA.',
                    'account_prefix' => '0003',
                ],
                [
                    'name' => 'BANCO INTERNACIONAL DE DESARROLLO, C.A.',
                    'account_prefix' => '0173',
                ],
                [
                    'name' => 'BANCO MERCANTIL C.A.',
                    'account_prefix' => '0105',
                ],
                [
                    'name' => 'BANCO NACIONAL DE CREDITO',
                    'account_prefix' => '0191',
                ],
                [
                    'name' => 'BANCO OCCIDENTAL DE DESCUENTO.',
                    'account_prefix' => '0116',
                ],
                [
                    'name' => 'BANCO PLAZA',
                    'account_prefix' => '0138',
                ],
                [
                    'name' => 'BANCO PROVINCIAL BBVA',
                    'account_prefix' => '0108',
                ],
                [
                    'name' => 'BANCO VENEZOLANO DE CREDITO S.A.',
                    'account_prefix' => '0104',
                ],
                [
                    'name' => 'BANCRECER S.A. BANCO DE DESARROLLO',
                    'account_prefix' => '0168',
                ],
                [
                    'name' => 'BANESCO BANCO UNIVERSAL',
                    'account_prefix' => '0134',
                ],
                [
                    'name' => 'BANFANB',
                    'account_prefix' => '0177',
                ],
                [
                    'name' => 'BANGENTE',
                    'account_prefix' => '0146',
                ],
                [
                    'name' => 'BANPLUS BANCO COMERCIAL C.A',
                    'account_prefix' => '0174',
                ],
                [
                    'name' => 'CITIBANK.',
                    'account_prefix' => '0190',
                ],
                [
                    'name' => 'CORP BANCA.',
                    'account_prefix' => '0121',
                ],
                [
                    'name' => 'DELSUR BANCO UNIVERSAL',
                    'account_prefix' => '0157',
                ],
                [
                    'name' => 'FONDO COMUN',
                    'account_prefix' => '0151',
                ],
                [
                    'name' => 'INSTITUTO MUNICIPAL DE CRÉDITO POPULAR',
                    'account_prefix' => '0601',
                ],
                [
                    'name' => 'MIBANCO BANCO DE DESARROLLO, C.A.',
                    'account_prefix' => '0169',
                ],
                [
                    'name' => 'SOFITASA',
                    'account_prefix' => '0137',
                ],
            ],
            'CL' => [
                [
                    'name' => 'BANCO DE CHILE',
                    'account_prefix' => '001',
                ],
                [
                    'name' => 'BANCO INTERNACIONAL',
                    'account_prefix' => '009',
                ],
                [
                    'name' => 'SCOTIABANK CHILE',
                    'account_prefix' => '014',
                ],
                [
                    'name' => 'BANCO DE CREDITO E INVERSIONES',
                    'account_prefix' => '016',
                ],
                [
                    'name' => 'CORPBANCA',
                    'account_prefix' => '027',
                ],
                [
                    'name' => 'BANCO BICE',
                    'account_prefix' => '028',
                ],
                [
                    'name' => 'HSBC BANK (CHILE)',
                    'account_prefix' => '031',
                ],
                [
                    'name' => 'BANCO SANTANDER-CHILE',
                    'account_prefix' => '037',
                ],
                [
                    'name' => 'BANCO ITAÚ CHILE',
                    'account_prefix' => '039',
                ],
                [
                    'name' => 'BANCO SECURITY',
                    'account_prefix' => '049',
                ],
                [
                    'name' => 'BANCO FALABELLA',
                    'account_prefix' => '051',
                ],
                [
                    'name' => 'DEUTSCHE BANK (CHILE)',
                    'account_prefix' => '052',
                ],
                [
                    'name' => 'BANCO RIPLEY',
                    'account_prefix' => '053',
                ],
                [
                    'name' => 'RABOBANK CHILE (ex HNS BANCO)',
                    'account_prefix' => '054',
                ],
                [
                    'name' => 'BANCO CONSORCIO (ex BANCO MONEX)',
                    'account_prefix' => '055',
                ],
                [
                    'name' => 'BANCO PENTA',
                    'account_prefix' => '056',
                ],
                [
                    'name' => 'BANCO PARIS',
                    'account_prefix' => '057',
                ],
                [
                    'name' => 'BANCO BTG PACTUAL CHILE',
                    'account_prefix' => '059',
                ],
                [
                    'name' => 'BANCO BILBAO VIZCAYA ARGENTARIA, CHILE (BBVA)',
                    'account_prefix' => '504',
                ],
                [
                    'name' => 'BANCO DO BRASIL S.A.',
                    'account_prefix' => '017',
                ],
                [
                    'name' => 'JP MORGAN CHASE BANK, N. A.',
                    'account_prefix' => '041',
                ],
                [
                    'name' => 'BANCO DE LA NACION ARGENTINA',
                    'account_prefix' => '043',
                ],
                [
                    'name' => 'THE BANK OF TOKYO-MITSUBISHI UFJ, LTD',
                    'account_prefix' => '045',
                ],
                [
                    'name' => 'BCI - SUCURSAL MIAMI',
                    'account_prefix' => '930',
                ],
                [
                    'name' => 'BANCO DEL ESTADO DE CHILE - SUCURSAL NUEVA YORK',
                    'account_prefix' => '931',
                ],
                [
                    'name' => 'CORPBANCA - SUCURSAL NUEVA YORK',
                    'account_prefix' => '932',
                ],
                [
                    'name' => 'BANCO ESTADO',
                    'account_prefix' => '012',
                ],
            ]
        ];

        foreach ($banks as $countryPrefix => $countryBanks) {
            $country = Country::where('prefix', $countryPrefix)->first();
            foreach ($countryBanks as $bank) {
                Bank::create([
                    'country_id' => $country->id,
                    'name' => $bank['name'],
                    'account_prefix' => $bank['account_prefix'],
                ]);
            }
        }
    }
}
