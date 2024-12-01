import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DataTable from '@/Components/Datatable/DataTable'

const DATATABLE = {
  title: 'Usuarios Operadores',
  description: 'Listado de usuarios operadores registrados en la app.',
  order: 'name',
  filter: {
    type: 'operator'
  },
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
