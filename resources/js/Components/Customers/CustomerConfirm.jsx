import { Link } from '@inertiajs/react'
import Badge from '@/Components/Badge.jsx'

export default function CustomerConfirm ({ customer }) {
  if (customer.confirmed_by) {
    return <Badge label="Confirmado" />
  }

  return (
    <Link href={route('dashboard.customers.confirm', customer)}>
      <Badge label="Pendiente" type="danger" />
    </Link>
  )
}
