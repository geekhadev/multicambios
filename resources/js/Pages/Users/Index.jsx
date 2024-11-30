import { Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DataTable from '@/Components/Datatable/DataTable'
import DataTableChangeStatus from '@/Components/Datatable/DataTableChangeStatus'
import CustomerConfirm from '@/Components/Customers/CustomerConfirm.jsx'

const DATATABLE = {
  title: 'Usuarios',
  description: 'Listado de usuarios que se han registrado en la app.',
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
    }
  ]
}

export default function CustomersIndex ({ paginate }) {
  return (
    <AuthenticatedLayout module="Usuarios">
      <Head title="Usuarios" />

      <DataTable config={DATATABLE} paginate={paginate} />
    </AuthenticatedLayout>
  )
}
