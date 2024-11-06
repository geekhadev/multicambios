<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PaymentMethod;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $paymentMethods = [
            'Efectivo',
            'Transferencia',
            'Depósito',
            'Cheque',
            'Tarjeta de crédito',
            'Tarjeta de débito',
            'Paypal',
            'Western Union',
        ];

        foreach ($paymentMethods as $paymentMethod) {
            PaymentMethod::create(['name' => $paymentMethod]);
        }
    }
}
