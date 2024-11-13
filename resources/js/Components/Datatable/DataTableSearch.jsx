export default function DataTableSearch ({ search, handleSearch }) {
  return (
    <div className="">
      <input
        defaultValue={search}
        onChange={handleSearch}
        type="text"
        placeholder="Buscar ..."
        className="border border-gray-300 rounded-md p-2 text-xs"
      />
    </div>
  )
}
