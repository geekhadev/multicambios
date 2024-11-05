import { useForm } from '@inertiajs/react'
import Button from '../../Components/Button'
import Input from '../../Components/Form/Input'
import Select from '../../Components/Form/Select'
import { Accordion } from 'flowbite-react'
import { toast } from 'sonner'

export default function ExchangeConfigGeneral ({ exchange, banks }) {
  const { data, setData, patch, processing, errors } = useForm(exchange)

  function handleChange (e) {
    const key = e.target.id
    const value = e.target.value
    setData(key, value)
  }

  function submit (e) {
    e.preventDefault()

    patch(`/dashboard/exchanges/${exchange.id}`,
      {
        preserveScroll: true,
        onSuccess: () => {
          toast.success('Configuración general guardada exitosamente')
        }
      }
    )
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
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="px-4 py-3">
                Montos
              </Accordion.Title>
              <Accordion.Content>
                {INPUTS_AMOUNTS.map(({
                  key,
                  label,
                  type,
                  options,
                  placeholder
                }) => (
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
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="px-4 py-3">
                Datos de la cuenta
              </Accordion.Title>
              <Accordion.Content>
                {INPUTS_BANK.map(({
                  key,
                  label,
                  type,
                  options,
                  placeholder
                }) => (
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
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="px-4 py-3">
                Datos del títular
              </Accordion.Title>
              <Accordion.Content>
                {INPUTS_OWNER.map(({
                  key,
                  label,
                  type,
                  options,
                  placeholder
                }) => (
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
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

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
