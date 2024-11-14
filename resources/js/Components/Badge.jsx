const TYPES = {
  success: 'bg-green-300 text-green-800',
  danger: 'bg-red-300 text-red-800',
  warning: 'bg-yellow-300 text-yellow-800',
  info: 'bg-blue-300 text-blue-800',
  default: 'bg-gray-300 text-gray-800'
}

const Badge = ({ children, label, type = 'default' }) => {
  const baseClasses = 'flex items-center px-2 py-1 text-[8pt] rounded-full h-5 w-auto'

  return (
    <div className="flex">
      <span className={`${TYPES[type]} ${baseClasses}`}>
        {label || children}
      </span>
    </div>
  )
}

export default Badge
