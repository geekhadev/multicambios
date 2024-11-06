import { usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import { recalculateToReceive, recalculateToSend, recalculateToDollar } from '../Utils/Calculator'

export default function WidgetCalculator () {
  const { globalExchanges } = usePage().props
  const [selectedExchange, setSelectedExchange] = useState(globalExchanges.length === 1 ? globalExchanges[0].id : null)
  const [rate, setRate] = useState(0)
  const [inputs, setInputs] = useState({
    ammountSend: 0,
    ammountReceive: 0,
    inputRate: 0,
    inputDollar: 0
  })

  const handleSelectChange = (e) => {
    setSelectedExchange(e.target.value)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    const updatedInputs = {
      ...inputs,
      [id]: value
    }
    setInputs(updatedInputs)

    const exchange = globalExchanges.find((exchange) => exchange.id === selectedExchange)
    const recalculateFunctions = {
      ammountSend: recalculateToReceive,
      ammountReceive: recalculateToSend,
      inputDollar: recalculateToDollar
    }

    const recalculate = recalculateFunctions[id]
    if (recalculate) {
      recalculate({ rate, inputs: updatedInputs, exchange })
        .then((result) => {
          setInputs({
            ...updatedInputs,
            ammountSend: result.ammountSend || updatedInputs.ammountSend,
            ammountReceive: result.ammountReceive || updatedInputs.ammountReceive,
            inputRate: result.rate || updatedInputs.inputRate,
            inputDollar: result.rateDollar || updatedInputs.inputDollar
          })
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  useEffect(() => {
    const exchange = globalExchanges.find((exchange) => exchange.id === selectedExchange)
    if (exchange) {
      if (exchange.last_rate) {
        setRate(exchange.last_rate)
        const initialInputs = {
          ammountSend: exchange.amount_min,
          ammountReceive: exchange.amount_min,
          inputRate: exchange.last_rate.general_rate,
          inputDollar: exchange.last_rate.rate_dollar
        }
        setInputs(initialInputs)

        recalculateToReceive({ rate: exchange.last_rate, inputs: initialInputs, exchange }).then((result) => {
          setInputs({
            ...initialInputs,
            ammountSend: result.ammountSend,
            inputRate: result.rate,
            inputDollar: result.rateDollar,
            ammountReceive: result.ammountReceive
          })
        }).catch((error) => {
          console.error(error)
        })
      }
    }
  }, [selectedExchange])

  return (
    <form className="col-md-10 navbar-left" id="formRates">
      <div style={{ display: 'flex', marginTop: '7px' }}>
        <select
          value={selectedExchange}
          onChange={handleSelectChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">{'Selecciona una opción'}</option>
          {globalExchanges.map((exchange) => (
            <option key={exchange.id} value={exchange.id} disabled={rate === null || new Date(rate.created_at).toLocaleDateString() < new Date().toLocaleDateString()}>
              {exchange.origin.name} {' > '} {exchange.destination.name}
            </option>
          ))}
        </select>
        <input
          placeholder={'Monto a enviar'}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 send_amount'
          id='ammountSend'
          onChange={handleInputChange}
          value={parseInt(inputs.ammountSend)}
          disabled={rate === null || new Date(rate.created_at).toLocaleDateString() < new Date().toLocaleDateString()}
        />
        <input
          placeholder={'Monto a recibir'}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 receive_amount'
          id='ammountReceive'
          onChange={handleInputChange}
          value={inputs.ammountReceive}
          disabled={rate === null || new Date(rate.created_at).toLocaleDateString() < new Date().toLocaleDateString()}
        />
        <input
          placeholder={'Dolares a recibir'}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dolar_amount'
          id='inputDollar'
          onChange={handleInputChange}
          value={inputs.inputDollar}
        />
        <input
          placeholder={'Rate'}
          className='rate hidden'
          id='inputRate'
          value={inputs.inputRate}
          onChange={handleInputChange}
          readOnly
        />
      </div>
    </form>
  )
}
