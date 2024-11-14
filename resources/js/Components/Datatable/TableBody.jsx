const TableTd = ({ row, field, component }) => {
  const baseClasses = 'px-3 py-2 whitespace-nowrap'
  return (
    <td scope="col" className={`${baseClasses}`}>
      {component ? component(row) : field}
    </td>
  )
}

export default function TableBody ({ data, fields }) {
  return (
    <tbody>
    {data.map((rowData, rowIndex) => (
      <tr key={rowIndex} className="">
        {fields.map((field, fieldIndex) => (
          <TableTd
            key={fieldIndex}
            row={rowData}
            field={rowData[field.row]}
            component={field.component}
          />
        ))}
      </tr>
    ))}
    </tbody>
  )
}
