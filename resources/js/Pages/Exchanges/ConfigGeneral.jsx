import { useState, useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import Button from '../../Components/Button'
import Input from '../../Components/Form/Input'
import Select from '../../Components/Form/Select'

export default function ExchangeConfigGeneral ({ exchange, banks }) {
  const { data, setData, patch, processing, errors } = useForm(exchange)
  const [keyRandom, setKeyRandom] = useState(Math.random() + new Date().getTime())

  useEffect(() => {
    setKeyRandom(Math.random())
  }, [exchange])

  function handleChange (e) {
    const key = e.target.id
    const value = e.target.value
    setData(key, value)
  }

  function submit (e) {
    e.preventDefault()

    patch(`/dashboard/exchanges/${exchange.id}`)
  }

  const INPUTS_AMOUNTS = [
    {
      key: 'amount_min',
      label: 'Monto mínimo',
      type: 'number'
    },
    {
      key: 'amount_max',
      label: 'Monto máximo',
      type: 'number'
    },
    {
      key: 'amount_preferential',
      label: 'Monto preferencial',
      type: 'number'
    }
  ]
  const INPUTS_BANK = [
    {
      key: 'bank_origin_id',
      label: 'Banco de origen',
      type: 'select',
      options: banks.map((bank) => ({ value: bank.id, label: bank.name }))
    },
    {
      key: 'bank_origin_account_number',
      label: 'Número de cuenta',
      type: 'text'
    },
    {
      key: 'bank_origin_account_type',
      label: 'Tipo de cuenta',
      type: 'select',
      options: [
        {
          value: 'Ahorro',
          label: 'Ahorro'
        },
        {
          value: 'Corriente',
          label: 'Corriente'
        },
        {
          value: 'Vista/RUT',
          label: 'Vista/RUT'
        }
      ]
    }
  ]
  const INPUTS_OWNER = [
    {
      key: 'bank_origin_owner_document_type',
      label: 'Tipo de documento',
      type: 'select',
      options: [
        {
          value: 'Cédula',
          label: 'Cédula'
        },
        {
          value: 'DNI',
          label: 'DNI'
        },
        {
          value: 'Pasaporte',
          label: 'Pasaporte'
        },
        {
          value: 'RUT',
          label: 'RUT'
        }
      ]
    },
    {
      key: 'bank_origin_owner_document_number',
      label: 'Número de documento',
      type: 'text'
    },
    {
      key: 'bank_origin_owner_name',
      label: 'Nombre del propietario',
      type: 'text'
    },
    {
      key: 'bank_origin_owner_phone',
      label: 'Teléfono del propietario',
      type: 'text'
    },
    {
      key: 'bank_origin_owner_email',
      label: 'Correo del propietario',
      type: 'email'
    }
  ]

  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 col-span-1">
      <div className="flex justify-between items-center">
        <div className='flex flex-col'>
          <h4 className="text-lg font-bold">
            Configuración general
          </h4>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-3">
        <form onSubmit={submit} className='flex flex-col gap-2'>
          <div id="accordion-open" data-accordion="open" key={keyRandom}>
            <h2 id="accordion-open-heading-1">
              <button
                type="button"
                data-accordion-target="#accordion-open-body-1"
                aria-expanded="true"
                aria-controls="accordion-open-body-1"
                className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t hover:bg-gray-100 gap-3"
              >
                <span className="flex items-center">
                  Montos
                </span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
              <div className="p-3 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {INPUTS_AMOUNTS.map(({ key, label, type, options, placeholder }) => (
                  Object.prototype.hasOwnProperty.call(data, key) && (
                    type === 'select'
                      ? (
                          <Select
                            key={key}
                            label={label}
                            id={key}
                            value={data[key]}
                            onChange={handleChange}
                            required
                            errors={errors}
                            options={options}
                            placeholder={placeholder}
                          />
                        )
                      : (
                          <Input
                            key={key}
                            label={label}
                            type={type}
                            id={key}
                            value={data[key]}
                            onChange={handleChange}
                            required
                            errors={errors}
                          />
                        )
                  )
                ))}
              </div>
            </div>
            <h2 id="accordion-open-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 hover:bg-gray-100 gap-3"
                data-accordion-target="#accordion-open-body-2"
                aria-expanded="false"
                aria-controls="accordion-open-body-2"
              >
                <span className="flex items-center">
                  Datos de la cuenta
                </span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
              <div className="p-3 border border-b-0 border-gray-200 dark:border-gray-700">
                {INPUTS_BANK.map(({ key, label, type, options, placeholder }) => (
                  Object.prototype.hasOwnProperty.call(data, key) && (
                    type === 'select'
                      ? (
                          <Select
                            key={key}
                            label={label}
                            id={key}
                            value={data[key]}
                            onChange={handleChange}
                            required
                            errors={errors}
                            options={options}
                            placeholder={placeholder}
                          />
                        )
                      : (
                          <Input
                            key={key}
                            label={label}
                            type={type}
                            id={key}
                            value={data[key]}
                            onChange={handleChange}
                            required
                            errors={errors}
                          />
                        )
                  )
                ))}
              </div>
            </div>
            <h2 id="accordion-open-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-b hover:bg-gray-100 gap-3"
                data-accordion-target="#accordion-open-body-3"
                aria-expanded="false"
                aria-controls="accordion-open-body-3">
                <span className="flex items-center">
                  Datos del títular
                </span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
              <div className="p-3 border border-t-0 border-gray-200 dark:border-gray-700">
                {INPUTS_OWNER.map(({ key, label, type, options, placeholder }) => (
                  Object.prototype.hasOwnProperty.call(data, key) && (
                    type === 'select'
                      ? (
                          <Select
                            key={key}
                            label={label}
                            id={key}
                            value={data[key]}
                            onChange={handleChange}
                            required
                            errors={errors}
                            options={options}
                            placeholder={placeholder}
                          />
                        )
                      : (
                          <Input
                            key={key}
                            label={label}
                            type={type}
                            id={key}
                            value={data[key]}
                            onChange={handleChange}
                            required
                            errors={errors}
                          />
                        )
                  )
                ))}
              </div>
            </div>
          </div>

          <div className='px-0.5'>
            <Button
              label="Guardar datos"
              type="submit"
              processing={processing}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
