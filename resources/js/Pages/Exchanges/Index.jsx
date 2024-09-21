import { Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function EchangesIndex ({ exchanges }) {
  return (
    <AuthenticatedLayout module={'Exchanges'}>
      <Head title="Exchanges" />

      <div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <div className='flex flex-col'>
                <h4 className="text-lg font-bold">
                  Exchanges
                </h4>
                <p className="text-sm text-gray-500 max-w-96">
                  Listado de exchanges disponibles para uso en la plataforma, para agregar nuevos Exchanges, contacte al administrador.
                </p>
              </div>
              <div className='flex gap-4'>
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead>
                  <tr className='bg-gray-200 border-t border-b border-gray-300'>
                    <th scope="col" className="px-3 py-2 whitespace-nowrap">Exchange</th>
                    <th scope="col" className="px-3 py-2 whitespace-nowrap">Montos</th>
                    <th scope="col" className="px-3 py-2 whitespace-nowrap">Banco</th>
                    <th scope="col" className="px-3 py-2 whitespace-nowrap">Títular</th>
                    <th scope="col" className="px-3 py-2 whitespace-nowrap">Bancos destino</th>
                    <th scope="col" className="px-3 py-2 whitespace-nowrap">Estado</th>
                    <th scope="col" className="px-3 py-2 w-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {exchanges.map(exchange => (
                    <tr key={exchange.id} className="odd:bg-white even:bg-gray-50 border-b">
                      <td className="px-3 py-2 whitespace-nowrap">
                        {exchange.origin.name}
                        {' > '}
                        {exchange.destination.name}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <span className='text-xs'>Min: {exchange.amount_min}</span><br />
                        <span className='text-xs'>Max: {exchange.amount_max}</span><br />
                        <span className='text-xs'>Pref: {exchange.amount_preferential}</span>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <span className='text-xs font-bold'>{exchange.bank_origin.name}</span><br />
                        <span className='text-xs'>
                          {exchange.bank_origin_account_type}: {exchange.bank_origin_account_number}
                        </span>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <span className='text-xs font-bold'>{exchange.bank_origin_owner_name}</span><br />
                        <span className='text-xs'>
                          {exchange.bank_origin_owner_document_type}: {exchange.bank_origin_owner_document_number}
                        </span><br />
                        <span className='text-xs'>{exchange.bank_origin_owner_phone}</span><br />
                        <span className='text-xs'>{exchange.bank_origin_owner_email}</span>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <span className="bg-green-300 text-green-800 px-2 py-1 text-[8pt] rounded-full">
                          {
                            exchange.banks_destinations_ids
                              ? JSON.parse(exchange.banks_destinations_ids).length
                              : 0
                          } bancos
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        {
                          exchange.is_active
                            ? <span className="bg-green-300 text-green-800 px-2 py-1 text-[8pt] rounded-full">Activo</span>
                            : <span className="bg-red-300 text-red-800 px-2 py-1 text-[8pt] rounded-full">Inactivo</span>
                        }
                      </td>
                      <td className="px-3 py-2">
                        <Link href={route('dashboard.exchanges.edit', exchange.id)} className="text-gray-600 hover:text-blue-800">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-100">
                    <td colSpan="16" className="px-3 py-2 font-bold">
                      Total: {exchanges.length} elementos
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
