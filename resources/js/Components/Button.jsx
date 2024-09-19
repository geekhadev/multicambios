const Button = ({ label, type, processing }) => {
  return (
      <button
        disabled={processing}
        className="bg-blue-500 text-white px-4 py-2 rounded" type={type}
      >
        {processing ? 'Cargando...' : label}
      </button>
  )
}

export default Button
