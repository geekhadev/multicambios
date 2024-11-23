import { AreaChart } from '@tremor/react'

export const ExchangeRatesChart = ({ rates }) => {
  const chartdata = rates.map((rate) => ({
    date: rate.created_at.replace('T', ' ').split('.')[0],
    'Tasa general': Number(rate.general_rate),
    'Tasa preferencial': Number(rate.preference_rate),
    'Tasa dolar': Number(rate.rate_dollar)
  })).reverse()

  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mb-4">
      <AreaChart
        className="h-80"
        data={chartdata}
        index="date"
        tickGap={5}
        categories={['Tasa general', 'Tasa preferencial', 'Tasa dolar']}
        valueFormatter={(number) =>
          `$${Intl.NumberFormat('us').format(number).toString()}`
        }
        onValueChange={(v) => console.log(v)}
      />
    </div>
  )
}
