import { Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DataTable from '@/Components/Datatable/DataTable'
import DataTableChangeStatus from '@/Components/Datatable/DataTableChangeStatus'
import CountryWithIcon from '@/Components/Countries/CountryWithIcon'
import CustomerConfirm from '@/Components/Customers/CustomerConfirm.jsx'
import TextCrop from '@/Components/Texts/TextCrop.jsx'

const DATATABLE = {
  title: 'Clientes',
  description: 'Listado de clientes que se han registrado en la app.',
  order: 'name',
  fields: [
    {
      label: 'Nombre',
      row: 'name',
      sortable: true
    },
    {
      label: 'Documento',
      row: 'document_type.name',
      component: (benefit) => <>
        <TextCrop text={benefit.document_type.name} maxLength={3}/>
        : {benefit.document_number}
      </>
    },
    {
      label: 'Correo',
      row: 'email'
    },
    {
      label: 'Teléfono',
      row: 'phone'
    },
    {
      label: 'País',
      row: 'country',
      component: (bank) => <CountryWithIcon country={bank.country} />
    },
    {
      label: 'Estado',
      row: 'state.name',
      component: (benefit) => <>
        <TextCrop text={benefit.state.name} maxLength={15}/>
      </>
    },
    {
      label: '',
      row: 'is_active',
      component: (customer) => {
        return (
          <div className="flex flex-row gap-1">
            <DataTableChangeStatus data={customer} routeName="dashboard.customers.status" />
            <CustomerConfirm customer={customer} />
            <Link href={route('dashboard.customers.show', customer.id)} className="text-gray-600 hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path
                  d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
              </svg>
            </Link>
          </div>
        )
      },
      className: 'w-[80px] text-right'
    }
  ]
}

export default function CustomersIndex ({ paginate }) {
  return (
    <AuthenticatedLayout module="Clientes">
      <Head title="Clientes" />

      <DataTable config={DATATABLE} paginate={paginate} />
    </AuthenticatedLayout>
  )
}
