import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Badge from '@/Components/Badge.jsx'
import DataTable from '@/Components/Datatable/DataTable.jsx'

const DATATABLE = {
  title: 'Países',
  description: 'Listado de países disponibles para uso en la plataforma, para agregar nuevos países, contacte al administrador.',
  order: 'name',
  fields: [
    {
      label: 'Código telefónico',
      row: 'phone_code',
      className: 'w-0'
    },
    {
      label: 'Nombre',
      row: 'name',
      sortable: true,
      className: 'flex-1'
    },
    {
      label: 'Estado',
      row: 'is_active',
      component: ({ is_active }) => <Badge label={is_active ? 'Activo' : 'Inactivo'} type={is_active ? 'success' : 'danger'} />,
      className: 'w-0'
    }
  ]
}

export default function CountriesIndex ({ paginate }) {
  return (
    <AuthenticatedLayout module="Países">
      <Head title="Países" />

      <DataTable config={DATATABLE} paginate={paginate} />
    </AuthenticatedLayout>
  )
}
