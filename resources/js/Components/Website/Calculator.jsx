import { usePage } from '@inertiajs/react'
import { useState } from 'react'
import { recalculateToReceive, separatorThousands } from '../../Utils/Calculator'

const Calculator = () => {
  const { globalExchanges } = usePage().props
  const [inputs, setInputs] = useState({
    ammountSend: globalExchanges[0].amount_min,
    ammountReceive: 0,
    inputRate: globalExchanges[0].last_rate.general_rate,
    inputDollar: 0,
    origin: globalExchanges[0].origin.id,
    destination: globalExchanges[0].destination.id
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    const updatedInputs = {
      ...inputs,
      [id]: value || 0
    }
    setInputs(updatedInputs)
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    // determina el exchange seleccionado según el destino y origen
    const exchange = globalExchanges.find((exchange) => exchange.origin.id == inputs.origin && exchange.destination.id == inputs.destination)
    const initialInputs = {
      ...inputs,
      ammountReceive: exchange.amount_min,
      inputRate: exchange.last_rate.general_rate,
      inputDollar: exchange.last_rate.rate_dollar
    }
    setInputs(initialInputs)
    recalculateToReceive({ rate: exchange.last_rate, inputs: initialInputs, exchange })
      .then((result) => {
        setInputs({
          ...inputs,
          ammountSend: result.ammountSend || inputs.ammountSend,
          ammountReceive: result.ammountReceive || inputs.ammountReceive,
          inputRate: result.rate || inputs.inputRate,
          inputDollar: result.rateDollar || inputs.inputDollar
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <section id="calculadora">
      <div className="grid max-w-6xl px-16 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-teal-700 rounded-xl">
        <div className="mr-auto place-self-center lg:col-span-6 px-12">
          <h2 className="max-w-2xl mb-4 text-4xl text-balance text-teal-300">
            Transferencias internacionales al
            <span className="font-extrabold text-white"> MEJOR PRECIO GARANTIZADO</span>
          </h2>
          <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl text-balance">
            Descarga la App, crea Tu Cuenta y envía dinero al mundo entero.
          </p>
          <div className="flex items-center mb-4 gap-2">
            <a href="#">
              <img className="w-48 scale-100 transition duration-300 transform hover:scale-[105%]" src="https://global66.com/ui-kit/assets/at-misc-app-store/playstore.svg" alt="Imagen descarga Android" />
            </a>
            <a href="#">
              <img className="w-48 scale-100 transition duration-300 transform hover:scale-[105%]" src="https://global66.com/ui-kit/assets/at-misc-app-store/appstore.svg" alt="Imagen descarga iOS" />
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <div className="flex justify-center bg-white rounded-xl w-96 mx-auto">
            <form className="flex flex-col gap-4 p-8 w-full">
              <h3 className="text-2xl font-bold text-teal-700">Calcula tu envío</h3>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700" htmlFor="amount">Cantidad a enviar</label>
                <input
                  className="p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id='ammountSend'
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700" htmlFor="origin">Moneda</label>
                <select
                  className="p-2 border border-gray-300 rounded-lg"
                  id="origin"
                  onChange={handleInputChange}
                >
                  {
                    globalExchanges.map((exchange) => (
                      <option key={exchange.origin.id} value={exchange.origin.id}>{exchange.origin.prefix}</option>
                    ))
                  }
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700" htmlFor="destination">País de destino</label>
                <select
                  className="p-2 border border-gray-300 rounded-lg"
                  id="destination"
                  onChange={handleInputChange}
                >
                  {
                    globalExchanges.map((exchange) => (
                      <option key={exchange.id} value={exchange.destination.id}>{exchange.destination.name}</option>
                    ))
                  }
                </select>
              </div>
              {/* div receive results */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-700" htmlFor="amount">
                  Tasa de cambio: { separatorThousands(inputs.inputRate) }
                </label>
                <label className="text-sm font-bold text-gray-700" htmlFor="amount">
                  Recibe: {separatorThousands(inputs.ammountReceive) }
                </label>
                <label className="text-sm font-bold text-gray-700" htmlFor="amount">
                  Dolares: {inputs.inputDollar}
                </label>
              </div>
              <button
                className="bg-teal-700 text-white rounded-lg py-2 font-bold"
                onClick={handleCalculate}
              >Calcular</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
