const CustomerDetailItem = ({ label, value, custom }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-2 border-b border-gray-200">
      <div className="w-full sm:w-1/4">
        <span className="font-bold">{label}</span>
      </div>
      <div className="w-full sm:w-3/4">
        {value && <p className="text-balance">{value}</p>}
        {custom && custom}
      </div>
    </div>
  )
}

export default CustomerDetailItem
