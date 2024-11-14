const Select = ({ id, label, value, onChange, options, required, errors, placeholder, infoIcon, iconLabel }) => {
  return (
    <div className='px-0.5 mb-2 w-full'>
      <label htmlFor={id} className="flex flex-nowrap mb-1 text-sm font-medium text-gray-900">
        {label}
        {required && <span className="text-red-500 ml-0.5"> * </span>}
        {infoIcon && (
          <span className="ml-0.5" title={infoIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg>
          </span>
        )}
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
