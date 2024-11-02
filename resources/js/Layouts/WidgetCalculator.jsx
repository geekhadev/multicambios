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
      setRate(exchange.rate)
      const initialInputs = {
        ammountSend: exchange.amount_min,
        ammountReceive: exchange.amount_min,
        inputRate: exchange.rate.general_rate,
        inputDollar: exchange.rate.rate_dolar
      }
      setInputs(initialInputs)

      recalculateToReceive({ rate: exchange.rate, inputs: initialInputs, exchange }).then((result) => {
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
            <option key={exchange.id} value={exchange.id}>
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
        />
        <input
          placeholder={'Monto a recibir'}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 receive_amount'
          id='ammountReceive'
          onChange={handleInputChange}
          value={inputs.ammountReceive}
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
        <div className="input-group-addon copy-msg-information" style={{ height: '34px', borderRadius: '2pt', width: '45px' }} data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Da click aquí para copiar la tasa del dia y los datos bancarios">
          <i className="fa fa-copy"></i>
        </div>
      </div>
    </form>
  )
}
