import { usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import { recalculateToReceive, recalculateToSend, recalculateToDollar } from '../Utils/Calculator'
import { toast } from 'sonner'

export default function WidgetCalculator () {
  let { globalExchanges } = usePage().props
  globalExchanges = globalExchanges.filter(exchange => exchange.is_open)
  const [selectedExchange, setSelectedExchange] = useState(globalExchanges.length === 1 ? globalExchanges[0].id : '')
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
      [id]: value || 0
    }
    setInputs(updatedInputs)

    const exchange = globalExchanges.find((exchange) => exchange.id == selectedExchange)
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

  const handleCopyMessage = (e) => {
    e.preventDefault()
    const sendAmount = document.querySelector('.send_amount')
    const receiveAmount = document.querySelector('.receive_amount')
    const dolarAmount = document.querySelector('.dolar_amount')
    const rate = document.querySelector('.rate')

    const message = `Monto a enviar: ${sendAmount.value} - Monto a recibir: ${receiveAmount.value} - Dólares a recibir: ${dolarAmount.value} - Rate: ${rate.value}`
    navigator.clipboard.writeText(message)

    toast.info('Mensaje copiado al portapapeles', { duration: 2000 })
  }

  useEffect(() => {
    const exchange = globalExchanges.find((exchange) => exchange.id == selectedExchange)
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

  useEffect(() => {
    if (globalExchanges.length === 1) {
      document.querySelector('.navbar-left select.select-exchange').style.display = 'none'
    }
  }, [])

  return (
    <form className="col-md-12 navbar-left" id="formRates">
      <h3 className='flex-1 text-gray-500 text-sm'>{'Calculadora de cambios'}</h3>
      <div className='flex mt-1 gap-1'>
        <select
          value={selectedExchange}
          onChange={handleSelectChange}
          required
          className="select-exchange flex-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">{'Selecciona una opción'}</option>
          {globalExchanges.filter(exchange => exchange.is_open).map((exchange) => (
            <option key={exchange.id} value={exchange.id}>
              {exchange.origin.name} {' > '} {exchange.destination.name}
            </option>
          ))}
        </select>
        <input
          placeholder={'Monto a enviar'}
          className='flex-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 send_amount'
          id='ammountSend'
          onChange={handleInputChange}
          value={parseInt(inputs.ammountSend)}
        />
        <input
          placeholder={'Monto a recibir'}
          className='flex-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 receive_amount'
          id='ammountReceive'
          onChange={handleInputChange}
          value={inputs.ammountReceive}
        />
        <input
          placeholder={'Dolares a recibir'}
          className='flex-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dolar_amount'
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
        <button
          onClick={handleCopyMessage}
          className='flex-1 bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-lg' id='btnRates'
          title='Copiar mensaje'
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512"> <path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/></svg>
        </button>
      </div>
    </form>
  )
}
