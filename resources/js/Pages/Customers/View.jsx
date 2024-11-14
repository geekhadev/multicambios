import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import CustomerDetail from '@/Components/Customers/CustomerDetail'
import CustomerBenefitsList from '@/Components/Customers/CustomerBenefitsList'
import CustomerTransactionsList from '@/Components/Customers/CustomerTransactionsList'

export default function CustomersView ({ customer }) {
  return (
    <AuthenticatedLayout module="Clientes" action="Detalles">
      <Head title="Clientes"/>

      <div className="mx-auto px-8">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">
                Detalles del Cliente {customer.name}
              </h4>
            </div>
            <div className="flex gap-4">
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
            <CustomerDetail customer={customer} />
          </div>
          <div className="col-span-4">
            <CustomerBenefitsList benefits={customer.benefits}/>
            <CustomerTransactionsList transactions={customer.transactions}/>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
