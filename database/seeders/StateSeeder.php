<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;
use App\Models\State;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $countriesWithStates = [
            'VE' => [
                'Amazonas',
                'Anzoátegui',
                'Apure',
                'Aragua',
                'Barinas',
                'Bolívar',
                'Carabobo',
                'Cojedes',
                'Delta Amacuro',
                'Falcón',
                'Guárico',
                'Lara',
                'Mérida',
                'Miranda',
                'Monagas',
                'Nueva Esparta',
                'Portuguesa',
                'Sucre',
                'Táchira',
                'Trujillo',
                'Vargas',
                'Yaracuy',
                'Zulia',
                'Distrito Capital',
                'Dependencias Federales',
            ],
            'CL' => [
                'Región de Arica y Parinacota',
                'Región de Tarapacá',
                'Región de Antofagasta',
                'Región de Atacama',
                'Región de Coquimbo',
                'Región de Valparaíso',
                'Región Metropolitana',
                'Región de O’Higgins',
                'Región del Maule',
                'Región del Ñuble',
                'Región del Biobío',
                'Región de La Araucanía',
                'Región de Los Ríos',
                'Región de Los Lagos',
                'Región de Aysén',
                'Región de Magallanes',
            ],
            'CO' => [
                'Amazonas',
                'Antioquia',
                'Arauca',
                'Atlántico',
                'Bolívar',
                'Boyacá',
                'Caldas',
                'Caquetá',
                'Casanare',
                'Cauca',
                'Cesar',
                'Chocó',
                'Córdoba',
                'Cundinamarca',
                'Guainía',
                'Guaviare',
                'Huila',
                'La Guajira',
                'Magdalena',
                'Meta',
                'Nariño',
                'Norte de Santander',
                'Putumayo',
                'Quindío',
                'Risaralda',
                'San Andrés y Providencia',
                'Santander',
                'Sucre',
                'Tolima',
                'Valle del Cauca',
                'Vaupés',
                'Vichada',
            ],
        ];

        foreach ($countriesWithStates as $prefix => $states) {
            $country = Country::where('prefix', $prefix)->first();
            foreach ($states as $state) {
                State::factory()->create([
                    'name' => $state,
                    'country_id' => $country->id,
                ]);
            }
        }
    }
}
