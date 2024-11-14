import { Link } from '@inertiajs/react'
import Badge from '@/Components/Badge.jsx'

export default function DataTableChangeStatus ({ data, routeName }) {
  return (
    <Link href={route(routeName, data)}>
      <Badge
        label={data.is_active === 1 ? 'Activo' : 'Inactivo'}
        type={data.is_active === 1 ? 'success' : 'danger'}
      />
    </Link>
  )
}
