import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import ExchangeConfigGeneral from './ConfigGeneral'
import ExchangeConfigRates from './ConfigRates'

export default function ExchangeConfig ({ exchange, banks }) {
  return (
    <AuthenticatedLayout module={'Bancos'} action={'Crear'}>
      <Head title="Bancos" />

      <div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mb-6">
            <div className="flex justify-between items-center">
              <div className='flex flex-col'>
                <h4 className="text-lg font-bold">
                  Formulario de configuración del Exchange
                </h4>
                <p className="text-sm text-gray-500 max-w-96">
                  Aquí debes aplicar toda la configuración necesaria para que el exchange funcione correctamente.
                </p>
              </div>
              <div className='flex gap-4'>
                <a href={route('dashboard.banks.index')} className="flex items-center gap-1 font-bold px-3 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                  Volver
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <ExchangeConfigGeneral exchange={exchange} banks={banks} />
            <ExchangeConfigRates />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
