const Input = ({ id, label, type, placeholder, value, onChange, required, errors }) => {
  return (
    <div className='px-0.5 mb-2 w-full'>
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <span className="text-red-500">{errors[id]}</span>
    </div>
  )
}

export default Input
