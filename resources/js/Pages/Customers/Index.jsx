import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DataTable from '@/Components/Datatable/DataTable'
import DataTableChangeStatus from '@/Components/Datatable/DataTableChangeStatus'
import CountryWithIcon from '@/Components/Countries/CountryWithIcon'

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
      row: 'is_active',
      component: (bank) => <DataTableChangeStatus data={bank} routeName="dashboard.customers.status" />,
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
