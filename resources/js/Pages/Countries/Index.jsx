import { router, Head } from '@inertiajs/react'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function CountriesIndex ({ countries }) {
  const handleDelete = (id) => {
    if (confirm('¿Estás seguro?')) {
      router.delete(`/dashboard/countries/${id}`)
    }
  }

  const handleUpdate = (id) => {
    if (confirm('¿Estás seguro?')) {
      router.put(`/dashboard/countries/${id}`)
    }
  }

  return (
    <AuthenticatedLayout>
      <Head title="Países" />

      <div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <div className='flex flex-col'>
                <h4 className="text-lg font-bold">Países</h4>
              </div>
              <div className='flex gap-4'>
                <a href={route('dashboard.countries.create')} className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-csv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M7 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M16 15l2 6l2 -6" /></svg>
                  Descargar
                </a>
                <a href={route('dashboard.countries.create')}
                className="
                  flex items-center gap-1 font-bold
                  bg-blue-600 text-white px-3 py-1 rounded-full
                  hover:bg-blue-700 transition duration-200
                ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                  Crear
                </a>
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead>
                  <tr className='bg-gray-200'>
                    <th scope="col" className="px-3 py-1">Nombre</th>
                    <th scope="col" className="px-3 py-1 w-48">Código telefónico</th>
                    <th scope="col" className="px-3 py-1 w-24">Estado</th>
                    <th scope="col" className="px-3 py-1 w-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map(country => (
                    <tr key={country.id} className="odd:bg-white even:bg-gray-50 border-b">
                      <td className="px-3 py-1">{country.name}</td>
                      <td className="px-3 py-1">{country.phone_code}</td>
                      <td className="px-3 py-1">
                        {
                          country.is_active
                            ? <span className="bg-green-300 text-green-800 px-2 py-1 text-[8pt] rounded-full">Activo</span>
                            : <span className="bg-red-300 text-red-800 px-2 py-1 text-[8pt] rounded-full">Inactivo</span>
                        }
                      </td>
                      <td className="px-3 py-1 flex">
                        <button onClick={() => handleUpdate(country.id)} className="text-blue-600 hover:text-blue-900">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                        </button>
                        <button onClick={() => handleDelete(country.id)} className="text-red-600 hover:text-red-900">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-100">
                    <td colSpan="4" className="px-3 py-1 font-bold">
                      Total: {countries.length} elementos
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
