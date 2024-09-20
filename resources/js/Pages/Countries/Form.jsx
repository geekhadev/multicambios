import { useForm, Link } from '@inertiajs/react'
import Button from '../../Components/Button'

export default function CountriesForm () {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    phone_code: ''
  })

  function handleChange (e) {
    const key = e.target.id
    const value = e.target.value
    setData(key, value)
  }

  function submit (e) {
    e.preventDefault()
    post('/countries')
  }

  return (
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    Ciudades
                </div>
            </div>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <form onSubmit={submit}
                className='flex flex-col gap-2'
              >
                <div className='flex flex-col'>
                  <label htmlFor="name">Name:</label>
                  <input id="name" value={data.name} onChange={handleChange} />
                  <span className="text-red-500">{errors.name}</span>
                </div>

                <div className='flex flex-col'>
                  <label htmlFor="phone_code">Código teleƒónico:</label>
                  <input id="phone_code" value={data.phone_code} onChange={handleChange} />
                  <span className="text-red-500">{errors.phone_code}</span>
                </div>

                <Button
                  label="Guardar"
                  type="submit"
                  processing={processing}
                />
                <Link href="/dashboard/countries" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Ir al listado
                </Link>
              </form>
            </div>
        </div>
    </div>
  )
}
