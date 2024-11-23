import { useForm } from '@inertiajs/react'
import Button from '../Button.jsx'
import Input from '../Form/Input.jsx'
import Select from '../Form/Select.jsx'
import { Accordion } from 'flowbite-react'
import { toast } from 'sonner'
import { roundDecimals } from '../../Utils/Calculator.js'

export default function ExchangeConfigGeneral ({ exchange, banks, types_account, document_type }) {
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
      type: 'number',
      placeholder: '10000'
    },
    {
      key: 'amount_max',
      label: 'Monto máximo',
      type: 'number',
      placeholder: '1000000'
    },
    {
      key: 'amount_preferential',
      label: 'Monto preferencial',
      type: 'number',
      placeholder: '50000'
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
      type: 'text',
      placeholder: '1234567890'
    },
    {
      key: 'bank_origin_account_type_id',
      label: 'Tipo de cuenta',
      type: 'select',
      options: types_account.map((type) => ({ value: type.id, label: type.name }))
    }
  ]

  const INPUTS_OWNER = [
    {
      key: 'bank_origin_owner_document_type_id',
      label: 'Tipo de documento',
      type: 'select',
      options: document_type.map((type) => ({ value: type.id, label: type.name }))
    },
    {
      key: 'bank_origin_owner_document_number',
      label: 'Número de documento',
      type: 'text',
      placeholder: '1234567890'
    },
    {
      key: 'bank_origin_owner_name',
      label: 'Nombre del propietario',
      type: 'text',
      placeholder: 'Juan Pérez'
    },
    {
      key: 'bank_origin_owner_phone',
      label: 'Teléfono del propietario',
      type: 'text',
      placeholder: '04121234567'
    },
    {
      key: 'bank_origin_owner_email',
      label: 'Correo del propietario',
      type: 'email',
      placeholder: 'name@mail.com'
    }
  ]

  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3">
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
                          value={roundDecimals(data[key])}
                          onChange={handleChange}
                          required
                          errors={errors}
                          placeholder={placeholder}
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
                          placeholder={placeholder}
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
                          placeholder={placeholder}
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
