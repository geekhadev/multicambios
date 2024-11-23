import { useForm } from '@inertiajs/react'
import Button from '../Button.jsx'
import Input from '../Form/Input.jsx'
import { toast } from 'sonner'
import { calculateProfitPercent } from '../../Utils/Calculator.js'
import Select from '../Form/Select.jsx'

export default function ExchangeConfigRates ({ exchange }) {
  const { data, setData, post, processing, errors } = useForm({
    exchange_id: exchange.id,
    general_rate: exchange?.last_rate?.general_rate ?? 0,
    general_profit: exchange?.last_rate?.general_profit ?? 0,
    general_profit_percent: exchange?.last_rate?.general_profit_percent ?? 0,
    preference_rate: exchange?.last_rate?.preference_rate ?? 0,
    preference_profit: exchange?.last_rate?.preference_profit ?? 0,
    preference_profit_percent: exchange?.last_rate?.preference_profit_percent ?? 0,
    rate_dollar: exchange?.last_rate?.rate_dollar ?? 0,
    operator: exchange?.operator ?? '*'
  })

  function handleChange (e) {
    const key = e.target.id
    let value = e.target.value

    if (key !== 'operator') {
      value = value ? parseFloat(value) : ''
    }

    const updatedData = {
      ...data,
      [key]: value // Manejar NaN
    }

    if (key === 'general_rate' || key === 'general_profit') {
      updatedData.general_profit_percent = calculateProfitPercent(updatedData.general_rate, updatedData.general_profit)
    }

    if (key === 'general_rate' || key === 'preference_rate' || key === 'preference_profit') {
      updatedData.preference_rate = updatedData.general_rate - updatedData.preference_profit
      updatedData.preference_profit_percent = calculateProfitPercent(updatedData.general_rate, updatedData.preference_profit)
    }

    setData(updatedData)
  }

  function submit (e) {
    e.preventDefault()

    post(`/dashboard/exchanges/${exchange.id}/rate`, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Tasa de cambio guardada exitosamente')
      }
    })
  }

  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mb-4">
      {
        (exchange.last_rate && new Date(exchange.last_rate.created_at).toLocaleDateString() < new Date().toLocaleDateString()) && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">¡Atención!</strong>
            <span className="block sm:inline"> Última actualización de la tasa: {new Date(exchange.last_rate.created_at).toLocaleString()}</span>
          </div>
        )
      }
      {
        !exchange.last_rate && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">¡Atención!</strong>
            <span className="block sm:inline"> Debe configurar la tasa de cambio</span>
          </div>
        )
      }
      <div className="flex justify-between items-center mt-2">
        <div className='flex flex-col'>
          <h4 className="text-lg font-bold">
            Configuración de tasas
          </h4>
        </div>
      </div>
      <div className="relative overflow-x-auto pt-2">
        <form onSubmit={submit} className="flex flex-col gap-2">
          <div className="grid grid-cols-3">
            <div className="grid-cols-1">
              <Input
                label={'Tasa general'}
                type={'number'}
                id={'general_rate'}
                value={data.general_rate}
                placeholder={'0.00'}
                onChange={handleChange}
                required
                errors={errors}
              />
            </div>
            <div className="grid-cols-1">
              <Input
                label={'Ganancia tasa general'}
                type={'number'}
                id={'general_profit'}
                placeholder={'0.00'}
                value={data.general_profit}
                onChange={handleChange}
                required
                errors={errors}
              />
            </div>
            <div className="grid-cols-1">
              <Input
                label={'% Gan. tasa general'}
                type={'number'}
                id={'general_profit_percent'}
                placeholder={'0.00'}
                value={data.general_profit_percent}
                onChange={handleChange}
                required
                readOnly
                errors={errors}
              />
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="grid-cols-1">
              <Input
                label={'Tasa preferencial'}
                type={'number'}
                id={'preference_rate'}
                placeholder={'0.00'}
                value={data.preference_rate}
                onChange={handleChange}
                required
                readOnly
                errors={errors}
              />
            </div>
            <div className="grid-cols-1">
              <Input
                label={'Ganancia tasa preferencial'}
                type={'number'}
                id={'preference_profit'}
                value={data.preference_profit}
                onChange={handleChange}
                required
                errors={errors}
              />
            </div>
            <div className="grid-cols-1">
              <Input
                label={'% Gan. tasa preferencial'}
                type={'number'}
                id={'preference_profit_percent'}
                placeholder={'0.00'}
                value={data.preference_profit_percent}
                onChange={handleChange}
                required
                readOnly
                errors={errors}
              />
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="grid-cols-1">
              <Input
                label={'Tasa dolar'}
                type={'number'}
                id={'rate_dollar'}
                placeholder={'0.00'}
                value={data.rate_dollar}
                onChange={handleChange}
                required
                errors={errors}
              />
            </div>
            <div className="grid-cols-1">
              <Select
                key={'operator'}
                label={'Operador'}
                id={'operator'}
                value={data.operator}
                onChange={handleChange}
                required
                errors={errors}
                options={[
                  { value: '*', label: 'Multiplicar' },
                  { value: '/', label: 'Dividir' }
                ]}
                placeholder={'Selecciona una opción'}
                infoIcon={'Multiplicar: Monto enviado * Tasa = Monto recibido \nDividir: Monto enviado / Tasa = Monto recibido'}
              />
            </div>
          </div>
          <div className="px-0.5">
            <Button
              label="Guardar tasa de cambio"
              type="submit"
              processing={processing}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
