import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import CountryWithIcon from '@/Components/Countries/CountryWithIcon.jsx'

export default function BanksIndex ({ banks }) {
  return (
    <AuthenticatedLayout module={'Bancos'}>
      <Head title="Bancos" />

      <div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <div className='flex flex-col'>
                <h4 className="text-lg font-bold">
                  Bancos
                </h4>
                <p className="text-sm text-gray-500 max-w-96">
                  Listado de bancos disponibles para uso en la plataforma, para agregar nuevos bancos, contacte al administrador.
                </p>
              </div>
              <div className='flex gap-4'>
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead>
                  <tr className='bg-gray-200 border-t border-b border-gray-300'>
                    <th scope="col" className="px-3 py-2">País</th>
                    <th scope="col" className="px-3 py-2">Nombre</th>
                    <th scope="col" className="px-3 py-2 w-48">Prefijo de cuenta</th>
                    <th scope="col" className="px-3 py-2 w-24">Estado</th>
                    <th scope="col" className="px-3 py-2 w-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {banks.map(bank => (
                    <tr key={bank.id} className="odd:bg-white even:bg-gray-50 border-b">
                      <td className="px-3 py-2">
                        <CountryWithIcon country={bank.country} />
                      </td>
                      <td className="px-3 py-2">{bank.name}</td>
                      <td className="px-3 py-2">{bank.account_prefix}</td>
                      <td className="px-3 py-2">
                        {
                          bank.is_active
                            ? <span className="bg-green-300 text-green-800 px-2 py-1 text-[8pt] rounded-full">Activo</span>
                            : <span className="bg-red-300 text-red-800 px-2 py-1 text-[8pt] rounded-full">Inactivo</span>
                        }
                      </td>
                      <td className="px-3 py-2 flex">
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-100">
                    <td colSpan="4" className="px-3 py-2 font-bold">
                      Total: {banks.length} elementos
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
