import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

const fields = [
  { key: 'first_name', label: 'Nombre' },
  { key: 'last_name', label: 'Apellido' },
  { key: 'email', label: 'Correo' },
  { key: 'phone', label: 'Teléfono' },
  { key: 'country.name', label: 'País' },
  { key: 'is_active', label: 'Activo' }
]

const benefits = [
  {
    id: 1,
    first_name: 'Juan',
    last_name: 'Pérez',
    email: 'test@mail.com',
    phone: '1234567890',
    country: { name: 'México' },
    bank: 'Banamex',
    account_type: 'Ahorro',
    account_number: '1234567890'
  }
]

const transactions = [
  {
    id: 1,
    bank: { name: 'Banamex' },
    benefit: { name: 'Juan Pérez' },
    amount: 1000,
    date: '2021-09-01',
    status: 'Aprobado'
  }
]

export default function CustomersView ({ customer }) {
  return (
    <AuthenticatedLayout module={'Clientes'} action={'Detalles'}>
      <Head title="Clientes" />

      <div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div className='flex flex-col'>
                <h4 className="text-lg font-bold">
                  Detalles del Cliente {customer.first_name}
                </h4>
              </div>
              <div className='flex gap-4'>
                <a href={route('dashboard.customers.index')} className="flex items-center gap-1 font-bold px-3 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 6l-6 6l6 6"/>
                  </svg>
                  Volver
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2 flex flex-col gap-4">
              <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mt-4">
                <div className="col-span-1">
                  {Object.keys(customer)
                    .filter(key => fields.map(field => field.key).includes(key))
                    .map((key, index) => (
                      <div key={index} className="flex flex-col sm:flex-row justify-between items-center py-2 border-b border-gray-200">
                        <div className="w-full sm:w-1/4">
                          <span className="font-bold">
                            {fields.find(field => field.key === key).label}
                          </span>
                        </div>
                        <div className="w-full sm:w-3/4">
                          <span>{customer[key]}</span>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 py-2 border-b border-gray-200 gap-2 items-center">
                  <img src="https://rutificadorchile.com/wp-content/uploads/2020/07/dni.jpeg" className="w-full h-full rounded-lg mx-auto" alt="Documento de identidad" />
                  <img src="https://st5.depositphotos.com/79147440/65671/i/450/depositphotos_656719760-stock-photo-blonde-brazilian-woman-holding-identity.jpg" className="w-full h-full rounded-lg mx-auto" alt="Foto del cliente" />
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mt-4">
                <h4 className="text-lg font-bold mb-2">
                  Beneficiarios registrados
                </h4>
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead>
                  <tr className="bg-gray-200 border-t border-b border-gray-300">
                    <th scope="col" className="px-3 py-2">País</th>
                    <th scope="col" className="px-3 py-2">Nombre</th>
                    <th scope="col" className="px-3 py-2">Apellido</th>
                    <th scope="col" className="px-3 py-2">Correo</th>
                    <th scope="col" className="px-3 py-2">Teléfono</th>
                  </tr>
                  </thead>
                  <tbody>
                  {benefits.map(benefit => (
                    <tr key={customer.id} className="odd:bg-white even:bg-gray-50 border-b">
                      <td className="px-3 py-2">{benefit.country.name}</td>
                      <td className="px-3 py-2">{benefit.first_name}</td>
                      <td className="px-3 py-2">{benefit.last_name}</td>
                      <td className="px-3 py-2">{benefit.email}</td>
                      <td className="px-3 py-2">{benefit.phone}</td>
                    </tr>
                  ))}
                  </tbody>
                  <tfoot>
                  <tr className="bg-gray-100">
                    <td colSpan="8" className="px-3 py-2 font-bold">
                      Total: 10 elementos
                    </td>
                  </tr>
                  </tfoot>
                </table>
              </div>
              <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mt-4">
                <h4 className="text-lg font-bold mb-2">
                  Transacciones realizadas
                </h4>
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead>
                  <tr className="bg-gray-200 border-t border-b border-gray-300">
                    <th scope="col" className="px-3 py-2">Fecha</th>
                    <th scope="col" className="px-3 py-2">Monto</th>
                    <th scope="col" className="px-3 py-2">Beneficiario</th>
                    <th scope="col" className="px-3 py-2">Banco</th>
                    <th scope="col" className="px-3 py-2">Estado</th>
                  </tr>
                  </thead>
                  <tbody>
                  {transactions.map(transaction => (
                    <tr key={customer.id} className="odd:bg-white even:bg-gray-50 border-b">
                      <td className="px-3 py-2">{transaction.date}</td>
                      <td className="px-3 py-2">${transaction.amount}</td>
                      <td className="px-3 py-2">{transaction.benefit.name}</td>
                      <td className="px-3 py-2">{transaction.bank.name}</td>
                      <td className="px-3 py-2">{transaction.status}</td>
                    </tr>
                  ))}
                  </tbody>
                  <tfoot>
                  <tr className="bg-gray-100">
                    <td colSpan="8" className="px-3 py-2 font-bold">
                      Total: 10 elementos
                    </td>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
