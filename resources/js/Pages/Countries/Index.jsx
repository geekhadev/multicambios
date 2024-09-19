import { Link } from '@inertiajs/react'

export default function CountriesIndex ({ countries }) {
  return (
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    Ciudades
                </div>
            </div>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <Link href="/countries/create" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Crear
                </Link>
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Código telefónico</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countries.map(country => (
                      <tr key={country.id}>
                        <td>{country.name}</td>
                        <td>{country.phone_code}</td>
                        <td>{country.is_active}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3">Total: {countries.length} elementos</td>
                    </tr>
                  </tfoot>
                </table>
            </div>
        </div>
    </div>
  )
}
