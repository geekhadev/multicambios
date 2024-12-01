import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DataTable from '@/Components/Datatable/DataTable'
import DataTableChangeStatus from '@/Components/Datatable/DataTableChangeStatus'

const DATATABLE = {
  title: 'Usuarios Operadores',
  description: 'Listado de usuarios operadores registrados en la app.',
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
      label: 'Estado',
      row: 'is_active',
      component: (user) => <DataTableChangeStatus data={user} routeName="dashboard.users.status" />,
      className: 'w-[80px] text-right'
    }
  ]
}

export default function CustomersIndex ({ paginate }) {
  return (
    <AuthenticatedLayout module="Usuarios">
      <Head title="Usuarios Operadores" />

      <DataTable config={DATATABLE} paginate={paginate} />
    </AuthenticatedLayout>
  )
}
