import { Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DataTable from '@/Components/Datatable/DataTable'
import DataTableChangeStatus from '@/Components/Datatable/DataTableChangeStatus'
import CountryWithIcon from '@/Components/Countries/CountryWithIcon'
import CustomerConfirm from '@/Components/Customers/CustomerConfirm.jsx'
import TextCrop from '@/Components/Texts/TextCrop.jsx'
import TextCurrency from '@/Components/Texts/TextCurrency.jsx'
import ExchangeIcons from '@/Components/Countries/ExchangeIcons.jsx'
import Badge from '@/Components/Badge.jsx'

const DATATABLE = {
  title: 'Transacciones',
  description: 'Listado de transacciones realizadas.',
  order: 'created_at',
  fields: [
    {
      label: 'Exchange',
      row: 'exchange',
      component: (transaction) => <ExchangeIcons exchange={transaction.exchange}/>
    },
    {
      label: 'Transacción',
      row: 'id',
      component: (transaction) => transaction.id.split('-').pop()
    },
    {
      label: 'Cliente',
      row: 'customer_name',
      component: (transaction) => <TextCrop text={transaction.customer_name} maxLength={20}/>
    },
    {
      label: 'Beneficiario',
      row: 'beneficiary_name',
      component: (transaction) => <TextCrop text={transaction.beneficiary_name} maxLength={20}/>
    },
    {
      label: 'Montos',
      row: 'send_amount',
      component: (transaction) => (
        <div className="flex gap-1">
          <TextCurrency currency={transaction.exchange.origin.prefix} amount={transaction.send_amount} className="text-blue-500 font-bold" />
          <TextCurrency currency={transaction.exchange.destination.prefix} amount={transaction.pay_amount} className="text-green-500 font-bold" />
        </div>
      )
    },
    {
      label: 'Banco envío',
      row: 'send_bank',
      component: (transaction) => <TextCrop text={transaction.send_bank} maxLength={20}/>
    },
    {
      label: 'Banco pago',
      row: 'receive_bank',
      component: (transaction) => <TextCrop text={transaction.receive_bank} maxLength={20}/>
    },
    {
      label: 'Confirmado',
      row: 'confirmed_by.name'
    },
    {
      label: 'Pagado',
      row: 'paid_by.name'
    },
    {
      label: 'Fecha',
      row: 'created_at',
      component: (transaction) => transaction.created_at.split('T')[0],
      sortable: true
    },
    {
      label: 'Tiempos',
      row: 'send_hour',
      component: (transaction) => (
        <div className="flex gap-1 justify-end">
          <span className="text-[8pt]">{transaction.send_hour}</span> -
          <span className="text-[8pt]">{transaction.pay_hour}</span> -
          <Badge type={['success', 'danger', 'warning', 'info'][Math.floor(Math.random() * 4)] || 'info'}>
            {'4:30 min'}
          </Badge>
        </div>
      )
    },
    {
      label: '',
      row: 'is_active',
      component: (transaction) => {
        return (
          <div className="flex flex-row gap-1">
            <Badge type={transaction.is_active ? 'success' : 'danger'} label={transaction.is_active ? 'Activo' : 'Inactivo'} />
            <Link href={route('dashboard.transactions.show', transaction.id)} className="text-gray-600 hover:text-blue-800">
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

export default function TransactionsIndex ({ paginate }) {
  return (
    <AuthenticatedLayout module="Trnasacciones">
      <Head title="Trnasacciones" />

      <DataTable config={DATATABLE} paginate={paginate} />
    </AuthenticatedLayout>
  )
}
