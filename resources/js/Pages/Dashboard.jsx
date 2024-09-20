import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Dashboard () {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      <div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
            {'You\'re logged in!'}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
