const CustomerBenefitsList = ({ benefits }) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mt-4">
      <h4 className="text-lg font-bold mb-2">
        Beneficiarios registrados
      </h4>
      <div className="flex justify-between items-center overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead>
          <tr className="bg-gray-200 border-t border-b border-gray-300">
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Nombre</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">País</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Correo</th>
            <th scope="col" className="px-3 py-2 whitespace-nowrap">Teléfono</th>
          </tr>
          </thead>
          <tbody>
          {benefits.map(benefit => (
            <tr key={benefit.id} className="odd:bg-white even:bg-gray-50 border-b">
              <td className="px-3 py-2">{benefit.name}</td>
              <td className="px-3 py-2">{benefit.country.name}</td>
              <td className="px-3 py-2">{benefit.email}</td>
              <td className="px-3 py-2">{benefit.phone}</td>
            </tr>
          ))}
          </tbody>
          <tfoot>
          <tr className="bg-gray-100">
            <td colSpan="8" className="px-3 py-2 font-bold">
              Total: {benefits.length} elementos
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default CustomerBenefitsList
