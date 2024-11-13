import { Link } from '@inertiajs/react'

export default function PaginateFooter ({ paginate }) {
  return (
    <div className="mt-4 flex justify-between items-center">
      <div className="text-sm text-gray-500">
        Total de registros {paginate.total}
      </div>

      <div className="">
        {paginate.links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={`px-3 py-1 text-sm rounded-lg ${link.active ? 'bg-gray-200' : 'bg-white'}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
