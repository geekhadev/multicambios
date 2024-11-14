import { Link } from '@inertiajs/react'
import Badge from '@/Components/Badge.jsx'

export default function DataTableChangeStatus ({ data }) {
  return (
    <Link href={route('dashboard.countries.status', data)}>
      <Badge
        label={data.is_active === 1 ? 'Activo' : 'Inactivo'}
        type={data.is_active === 1 ? 'success' : 'danger'}
      />
    </Link>
  )
}
