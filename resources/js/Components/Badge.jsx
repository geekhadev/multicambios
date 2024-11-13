const TYPES = {
  success: 'bg-green-300 text-green-800',
  danger: 'bg-red-300 text-red-800',
  warning: 'bg-yellow-300 text-yellow-800',
  info: 'bg-blue-300 text-blue-800'
}

const Badge = ({ children, type }) => {
  const baseClasses = 'px-2 py-1 text-[8pt] rounded-full h-5 items-center flex'

  return (
    <span className={`${TYPES[type]} ${baseClasses}`}>
      {children}
    </span>
  )
}

export default Badge
