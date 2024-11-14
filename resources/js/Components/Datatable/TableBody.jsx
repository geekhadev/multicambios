const getNestedValue = (obj, field, fieldKey) => {
  if (!obj || !fieldKey) return

  if (fieldKey.includes('.')) {
    const keys = fieldKey.split('.')
    let value = obj
    keys.forEach(key => {
      value = value[key]
    })
    return value
  }

  return field
}

const TableTd = ({ row, field, fieldKey, component }) => {
  const baseClasses = 'px-3 py-2 whitespace-nowrap'
  return (
    <td scope="col" className={`${baseClasses}`}>
      {component ? component(row) : getNestedValue(row, field, fieldKey)}
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
            fieldKey={field.row}
            field={rowData[field.row]}
            component={field.component}
          />
        ))}
      </tr>
    ))}
    </tbody>
  )
}
