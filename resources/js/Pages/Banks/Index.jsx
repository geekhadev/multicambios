import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DataTable from '@/Components/Datatable/DataTable'
import DataTableChangeStatus from '@/Components/Datatable/DataTableChangeStatus'
import CountryWithIcon from '@/Components/Countries/CountryWithIcon'

const DATATABLE = {
  title: 'Bancos',
  description: 'Listado de bancos disponibles para uso en la plataforma, para agregar nuevos bancos, contacte al administrador.',
  order: 'name',
  fields: [
    {
      label: 'País',
      row: 'country',
      component: (bank) => <CountryWithIcon country={bank.country} />,
      className: 'w-48'
    },
    {
      label: 'Prefijo de cuenta',
      row: 'account_prefix',
      className: 'w-48'
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
      component: (bank) => <DataTableChangeStatus data={bank} routeName="dashboard.banks.status" />,
      className: 'w-[80px] text-right'
    }
  ]
}

export default function BanksIndex ({ paginate }) {
  return (
    <AuthenticatedLayout module="Bancos">
      <Head title="Bancos" />

      <DataTable config={DATATABLE} paginate={paginate} />
    </AuthenticatedLayout>
  )
}
