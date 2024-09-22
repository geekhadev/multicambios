const Select = ({ id, label, value, onChange, options, required, errors, placeholder }) => {
  return (
    <div className='px-0.5 mb-2'>
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">{placeholder || 'Selecciona una opción'}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="text-red-500">{errors[id]}</span>
    </div>
  )
}

export default Select
