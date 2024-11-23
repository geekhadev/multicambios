const ExchangeRatesList = ({ rates }) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mt-4">
      <h4 className="text-lg font-bold mb-2">
        Tasas de de la última semana
      </h4>
      <div className="flex justify-between items-center overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead>
          <tr className="bg-gray-200 border-t border-b border-gray-300">
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Fecha</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Tasa general</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Tasa preferencial</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Dólar</th>
          </tr>
          </thead>
          <tbody>
          {(!rates || rates.length === 0)
            ? (
              <tr>
                <td colSpan="8" className="px-3 py-2">
                  No hay tasas configuradas
                </td>
              </tr>
              )
            : (
                rates.map((rate) => (
                  <tr key={rate.id} className="odd:bg-white even:bg-gray-50 border-b">
                    <td className="px-3 py-2">{rate.created_at.replace('T', ' ').split('.')[0]}</td>
                    <td className="px-3 py-2">{rate.general_rate}</td>
                    <td className="px-3 py-2">{rate.preference_rate}</td>
                    <td className="px-3 py-2">{rate.rate_dollar}</td>
                  </tr>
                ))
              )}
          </tbody>
          {rates && rates.length > 0 && (
            <tfoot>
            <tr className="bg-gray-100">
              <td colSpan="8" className="px-3 py-2 font-bold">
                Total: {rates.length} elementos
              </td>
            </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  )
}

export default ExchangeRatesList
