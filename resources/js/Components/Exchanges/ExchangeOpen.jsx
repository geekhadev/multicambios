import { Link } from '@inertiajs/react'
import Badge from '@/Components/Badge.jsx'

export default function ExchangeOpen ({ exchange }) {
  const type = exchange.is_open ? 'success' : 'danger'
  const label = exchange.is_open ? 'Abierto' : 'Cerrado'

  return (
    <Link href={route('dashboard.exchanges.open', exchange)}>
      <Badge type={type} label={label} />
    </Link>
  )
}
