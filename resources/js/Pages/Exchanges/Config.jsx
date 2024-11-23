import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import ExchangeConfigGeneral from '@/Components/Exchanges/ConfigGeneral.jsx'
import ExchangeConfigRates from '@/Components/Exchanges/ConfigRates.jsx'
import ExchangeRatesList from '@/Components/Exchanges/ExchangeRatesList.jsx'

export default function ExchangeConfig ({ exchange, banks, rate, types_account, document_type }) {
  return (
    <AuthenticatedLayout module="Exchange" action="Configurar">
      <Head title={`${exchange.origin.name} a ${exchange.destination.name}`} />

      <div>
        <div className="mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mb-6">
            <div className="flex justify-between items-center">
              <div className='flex flex-col'>
                <h4 className="text-lg font-bold">
                  Configuración de {exchange.origin.name} a {exchange.destination.name}
                </h4>
                <p className="text-sm text-gray-500 max-w-96">
                  Aquí debes aplicar toda la configuración necesaria para que el exchange funcione correctamente.
                </p>
              </div>
              <div className='flex gap-4'>
                <a href={route('dashboard.exchanges.index')} className="flex items-center gap-1 font-bold px-3 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                  Volver
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 items-start">
            <div className="col-span-1">
              <ExchangeConfigGeneral exchange={exchange} banks={banks} types_account={types_account} document_type={document_type}/>
              <span>gráfico</span>
            </div>
            <div className="col-span-2">
              <ExchangeConfigRates exchange={exchange} rate={rate}/>
              <ExchangeRatesList rates={exchange.last_ten_rates}/>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
