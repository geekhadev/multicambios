import { Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DataTable from '@/Components/Datatable/DataTable'
import DataTableChangeStatus from '@/Components/Datatable/DataTableChangeStatus'
import CountryWithIcon from '@/Components/Countries/CountryWithIcon'
import CustomerConfirm from '@/Components/Customers/CustomerConfirm.jsx'
import TextCrop from '@/Components/Texts/TextCrop.jsx'
import ExchangeIcons from '@/Components/Countries/ExchangeIcons'

const DATATABLE = {
  title: 'Exchanges',
  description: 'Listado de exchanges disponibles para uso en la plataforma, para agregar nuevos Exchanges, contacte al administrador.',
  order: 'country_origin_id',
  fields: [
    {
      label: 'Exchange',
      row: 'country_origin_id',
      component: (exchange) => <ExchangeIcons exchange={exchange}/>
    },
    {
      label: 'Min',
      row: 'amount_min',
      component: (exchange) => <>{parseInt(exchange.amount_min)}</>
    },
    {
      label: 'Max',
      row: 'amount_max',
      component: (exchange) => <>{parseInt(exchange.amount_max)}</>
    },
    {
      label: 'Pref',
      row: 'amount_preferential',
      component: (exchange) => <>{parseInt(exchange.amount_preferential)}</>
    },
    {
      label: 'Cuenta',
      row: 'bank_origin_account_type.name',
      component: (exchange) => <>
        {exchange.bank_origin.name} - {exchange.bank_origin_account_type.name}: {exchange.bank_origin_account_number}
      </>
    },
    {
      label: 'Títular',
      row: 'bank_origin_owner_name',
      component: (exchange) => <>
        {exchange.bank_origin_owner_name}, {exchange.document_type_owner.name}: {exchange.bank_origin_owner_document_number}
      </>
    },
    {
      label: 'Bancos destino',
      row: 'bank_origin_owner_name',
      component: (exchange) => <>
        {
          exchange.banks_destinations_ids
            ? JSON.parse(exchange.banks_destinations_ids).length
            : 0
        } bancos
      </>
    },
    {
      label: '',
      row: 'is_active',
      component: (exchange) => {
        return (
          <div className="flex flex-row gap-1">
            <DataTableChangeStatus data={exchange} routeName="dashboard.exchanges.status" />
            <Link href={route('dashboard.exchanges.edit', exchange.id)} className="text-gray-600 hover:text-blue-800">
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

export default function ExchangesIndex ({ paginate }) {
  return (
    <AuthenticatedLayout module="Exchanges">
      <Head title="Exchanges" />

      <DataTable config={DATATABLE} paginate={paginate} />
    </AuthenticatedLayout>
  )
}
