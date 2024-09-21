import { useForm, Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
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
    <AuthenticatedLayout module={'Países'} action={'Crear'}>
      <Head title="Países" />

      <div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <div className='flex flex-col'>
                <h4 className="text-lg font-bold">
                  Formulario de Países
                </h4>
              </div>
              <div className='flex gap-4'>
                <a href={route('dashboard.countries.index')} className="flex items-center gap-1 font-bold px-3 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                  Volver
                </a>
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='px-0.5'>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Venezuela"
                    value={data.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span className="text-red-500">{errors.name}</span>
                </div>

                <div className='px-0.5'>
                  <label htmlFor="phone_code" className="block mb-2 text-sm font-medium text-gray-900">
                    Código teleƒónico
                  </label>
                  <input
                    id="phone_code"
                    type="text"
                    placeholder="+58"
                    value={data.phone_code}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span className="text-red-500">{errors.phone_code}</span>
                </div>

                <div className='px-0.5'>
                  <Button
                    label="Guardar"
                    type="submit"
                    processing={processing}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
