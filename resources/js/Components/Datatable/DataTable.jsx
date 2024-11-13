import PaginateFooter from '@/Components/Datatable/PaginateFooter'
import TableHeader from '@/Components/Datatable/TableHeader'
import TableBody from '@/Components/Datatable/TableBody'
import DataTableSearch from '@/Components/Datatable/DataTableSearch'
import { useSearchAndSort } from './useDatatable'

export default function DataTable ({ config, paginate }) {
  const { title, description, order, fields } = config
  const { search, handleSearch, sort, direction, handleSort } = useSearchAndSort()

  return (
    <div className="mx-auto px-8">
      <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
        <div className="flex justify-between items-center mb-2">
          <div className='flex flex-col'>
            <h4 className="text-lg font-bold">
              {title}
            </h4>
            <p className="text-sm text-gray-500 max-w-96">
              {description}
            </p>
          </div>
          <div className='flex gap-4'>
            <DataTableSearch search={search} handleSearch={handleSearch} />
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right">
            <TableHeader
              order={order}
              fields={fields}
              sort={sort}
              direction={direction}
              handleSort={handleSort}
            />
            <TableBody data={paginate.data} fields={fields}/>
          </table>
        </div>
        <PaginateFooter paginate={paginate}/>
      </div>
    </div>
  )
}
