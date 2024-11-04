import { useForm } from '@inertiajs/react'
import Button from '../../Components/Button'
import Input from '../../Components/Form/Input'
import { toast } from 'sonner'

// TODO: agregar esto a un utils reusable
function calculateProfitPercent (rate, profit) {
  if (!rate || !profit) return 0
  return (profit / rate) * 100
}

export default function ExchangeConfigRates ({ exchange, rate }) {
  const { data, setData, post, processing, errors } = useForm({
    exchange_id: exchange.id,
    general_rate: rate.general_rate,
    general_profit: rate.general_profit,
    general_profit_percent: rate.general_profit_percent,
    preference_rate: rate.preference_rate,
    preference_profit: rate.preference_profit,
    preference_profit_percent: rate.preference_profit_percent,
    rate_dolar: rate.rate_dolar
  })

  function handleChange (e) {
    const key = e.target.id
    let value = e.target.value

    value = value ? Number(value) : ''

    const updatedData = {
      ...data,
      [key]: value
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
    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 col-span-2">
      {
        rate && new Date(rate.timestamp).toLocaleDateString() < new Date().toLocaleDateString() && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">¡Atención!</strong>
            <span className="block sm:inline"> Última actualización de la tasa: {new Date(rate.timestamp).toLocaleString()}</span>
          </div>
        )
      }
      <div className="flex justify-between items-center">
        <div className='flex flex-col'>
          <h4 className="text-lg font-bold">
            Configuración de tasas
          </h4>
        </div>
      </div>
      <div className="relative overflow-x-auto pt-2">
        <form onSubmit={submit} className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <Input
              label={'Tasa general'}
              type={'number'}
              id={'general_rate'}
              value={data.general_rate}
              onChange={handleChange}
              required
              errors={errors}
            />
            <Input
              label={'Ganancia tasa general'}
              type={'number'}
              id={'general_profit'}
              value={data.general_profit}
              onChange={handleChange}
              required
              errors={errors}
            />
            <Input
              label={'% Gan. tasa general'}
              type={'number'}
              id={'general_profit_percent'}
              value={data.general_profit_percent}
              onChange={handleChange}
              required
              readOnly
              errors={errors}
            />
          </div>
          <div className='flex gap-2'>
            <Input
              label={'Tasa preferencial'}
              type={'number'}
              id={'preference_rate'}
              value={data.preference_rate}
              onChange={handleChange}
              required
              readOnly
              errors={errors}
            />
            <Input
              label={'Ganancia tasa preferencial'}
              type={'number'}
              id={'preference_profit'}
              value={data.preference_profit}
              onChange={handleChange}
              required
              errors={errors}
            />
            <Input
              label={'% Gan. tasa preferencial'}
              type={'number'}
              id={'preference_profit_percent'}
              value={data.preference_profit_percent}
              onChange={handleChange}
              required
              readOnly
              errors={errors}
            />
            <Input
              label={'Tasa dolar'}
              type={'number'}
              id={'rate_dolar'}
              value={data.rate_dolar}
              onChange={handleChange}
              required
              errors={errors}
            />
          </div>
          <div className='px-0.5'>
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
