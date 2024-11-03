import { Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function CountriesIndex ({ benefits }) {
  return (
    <AuthenticatedLayout module={'Beneficiarios'}>
      <Head title="Beneficiarios" />

      <div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <div className='flex flex-col'>
                <h4 className="text-lg font-bold">
                  Beneficiarios
                </h4>
                <p className="text-sm text-gray-500 max-w-96">
                  Listado de beneficiarios asociados a los clientes.
                </p>
              </div>
              <div className='flex gap-4'>
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead>
                  <tr className='bg-gray-200 border-t border-b border-gray-300'>
                    <th scope="col" className="px-3 py-2">Cliente</th>
                    <th scope="col" className="px-3 py-2">Nombre</th>
                    <th scope="col" className="px-3 py-2">Apellido</th>
                    <th scope="col" className="px-3 py-2 w-24">Estado</th>
                    <th scope="col" className="px-3 py-2 w-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {benefits.map(benefit => (
                    <tr key={benefit.id} className="odd:bg-white even:bg-gray-50 border-b">
                      <td className="px-3 py-2">{benefit.customer.first_name}</td>
                      <td className="px-3 py-2">{benefit.first_name}</td>
                      <td className="px-3 py-2">{benefit.last_name}</td>
                      <td className="px-3 py-2">
                        {
                          benefit.is_active
                            ? <span className="bg-green-300 text-green-800 px-2 py-1 text-[8pt] rounded-full">Activo</span>
                            : <span className="bg-red-300 text-red-800 px-2 py-1 text-[8pt] rounded-full">Inactivo</span>
                        }
                      </td>
                      <td className="px-3 py-2 flex">
                        <Link href={route('dashboard.benefits.show', benefit.id)} className="text-gray-600 hover:text-blue-800">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                <tr className="bg-gray-100">
                  <td colSpan="8" className="px-3 py-2 font-bold">
                    Total: {benefits.length} elementos
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
