import ExchangeIcons from '@/Components/Countries/ExchangeIcons'
import TextCrop from '@/Components/Texts/TextCrop'
import TextCurrency from '@/Components/Texts/TextCurrency'
import Badge from '@/Components/Badge'

const CustomerTransactionsList = ({ transactions }) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mt-4">
      <h4 className="text-lg font-bold mb-2">
        Transacciones realizadas
      </h4>
      <div className="flex justify-between items-center overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead>
          <tr className="bg-gray-200 border-t border-b border-gray-300">
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Exchange</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Transacción</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Banco envío</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Monto envío</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Beneficiario</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Banco pago</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Monto pago</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Confirmado</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Pagado</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Fecha</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Estado</th>
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
                {transaction.confirmed_by?.name}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {transaction.paid_by?.name}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-xs">
                {transaction.created_at.split('T')[0]}
              </td>
              <td className="px-3 py-2">
                <Badge
                  label={transaction.is_active ? 'Activo' : 'Inactivo'}
                  type={transaction.is_active ? 'success' : 'danger'}
                />
              </td>
            </tr>
          ))}
          </tbody>
          <tfoot>
          <tr className="bg-gray-100">
            <td colSpan="11" className="px-3 py-2 font-bold">
              Total: {transactions.length} elementos
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default CustomerTransactionsList
