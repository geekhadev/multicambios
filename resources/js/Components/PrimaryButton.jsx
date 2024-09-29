export default function PrimaryButton ({ className = '', disabled, children, ...props }) {
  return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-teal-700 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-teal-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
  )
}
