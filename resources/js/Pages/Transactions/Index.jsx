import { Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import ExchangeIcons from '@/Components/Countries/ExchangeIcons.jsx'
import TextCrop from '@/Components/Texts/TextCrop.jsx'
import Badge from '@/Components/Badge.jsx'
import TextCurrency from '@/Components/Texts/TextCurrency.jsx'

export default function TransactionsIndex ({ transactions }) {
  console.log(transactions)
  return (
    <AuthenticatedLayout module="Transactions">
      <Head title="Transactions" />

      <div>
        <div className="mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <div className='flex flex-col'>
                <h4 className="text-lg font-bold">
                  Transactions
                </h4>
                <p className="text-sm text-gray-500 max-w-96">
                  Listado de transacciones realizadas.
                </p>
              </div>
              <div className='flex gap-4'>
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead>
                <tr className="bg-gray-200 border-t border-b border-gray-300">
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Exchange</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Transacción</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Cliente</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Banco envío</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap text-right">Monto envío</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Beneficiario</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Banco pago</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap text-right">Monto pago</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Confirmado</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Pagado</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Fecha</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap text-right">Tiempos</th>
                  <th scope="col" className="px-3 py-2 whitespace-nowrap">Estado</th>
                  <th scope="col" className="px-3 py-2 w-0"></th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction.id} className="odd:bg-white even:bg-gray-50 border-b">
                    <td className="px-3 py-2 whitespace-nowrap">
                      <ExchangeIcons exchange={transaction.exchange}/>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs">
                      {transaction.id.split('-').pop()}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs">
                      <TextCrop text={transaction.customer_name} maxLength={20}/>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs">
                      <TextCrop text={transaction.send_bank} maxLength={20}/>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-green-500 font-bold text-right">
                      <TextCurrency currency={transaction.exchange.origin.prefix} amount={transaction.send_amount}/>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <TextCrop text={transaction.beneficiary_name} maxLength={20}/>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs">
                      <TextCrop text={transaction.receive_bank} maxLength={20}/>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-blue-500 font-bold text-right">
                      <TextCurrency currency={transaction.exchange.destination.prefix} amount={transaction.pay_amount}/>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs">
                      {transaction.confirmed_by.name}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs">
                      {transaction.paid_by?.name}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs">
                      {transaction.created_at.split('T')[0]}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <div className="flex gap-1 justify-end">
                        <span className="text-[8pt]">{transaction.send_hour}</span> -
                        <span className="text-[8pt]">{transaction.pay_hour}</span> -
                        <Badge type={['success', 'danger', 'warning', 'info'][Math.floor(Math.random() * 4)] || 'info'}>
                          {'4:30 min'}
                        </Badge>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <Badge type={transaction.is_active ? 'success' : 'danger'}>
                        {transaction.is_active ? 'Activo' : 'Inactivo'}
                      </Badge>
                    </td>
                    <td className="px-3 py-2">
                      <Link href={route('dashboard.transactions.edit', transaction.id)} className="text-gray-600 hover:text-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path
                            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
                </tbody>
                <tfoot>
                <tr className="bg-gray-100">
                  <td colSpan="16" className="px-3 py-2 font-bold">
                    Total: {transactions.length} elementos
                  </td>
                </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
