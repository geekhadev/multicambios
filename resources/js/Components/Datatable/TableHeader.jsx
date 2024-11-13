const TableTh = ({ field, order, handleSort, currentSort, currentDirection }) => {
  const { row, label, className, sortable } = field
  const baseClasses = 'px-3 py-2 whitespace-nowrap'

  const isActive = currentSort === row || order === row
  const arrow = isActive ? (currentDirection === 'asc' ? '↓' : '↑') : null

  return (
    <th scope="col" className={`${baseClasses} ${className}`}>
      <button
        type="button"
        className="flex items-center"
        onClick={() => handleSort(row)}
      >
        {label}
        {sortable && (
          <span className="ml-2 text-xs">{arrow}</span>
        )}
      </button>
    </th>
  )
}

export default function TableHeader ({ fields, order, sort, direction, handleSort }) {
  return (
    <thead>
    <tr className="bg-gray-200 border-t border-b border-gray-300">
      {fields.map((field, index) => (
        <TableTh
          key={index}
          order={order}
          field={field}
          handleSort={handleSort}
          currentSort={sort}
          currentDirection={direction}
        />
      ))}
    </tr>
    </thead>
  )
}
