<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DocumentType;

class DocumentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $documentTypes = [
            'Cédula',
            'Pasaporte',
            'RUT',
            'Otro',
        ];

        foreach ($documentTypes as $documentType) {
            DocumentType::create(['name' => $documentType]);
        }
    }
}
