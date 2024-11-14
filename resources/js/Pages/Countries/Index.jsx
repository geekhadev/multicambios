import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DataTable from '@/Components/Datatable/DataTable.jsx'
import DataTableChangeStatus from '@/Components/Datatable/DataTableChangeStatus.jsx'

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
      component: (country) => <DataTableChangeStatus data={country} routeName="dashboard.countries.status" />,
      className: 'w-[80px] text-right'
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
