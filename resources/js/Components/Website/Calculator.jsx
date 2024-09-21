const Calculator = () => {
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
                <input className="p-2 border border-gray-300 rounded-lg" type="text" id="amount" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700" htmlFor="currency">Moneda</label>
                <select className="p-2 border border-gray-300 rounded-lg" id="currency">
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="cop">COP</option>
                  <option value="pen">PEN</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700" htmlFor="country">País de destino</label>
                <select className="p-2 border border-gray-300 rounded-lg" id="country">
                  <option value="us">Estados Unidos</option>
                  <option value="ve">Venezuela</option>
                  <option value="co">Colombia</option>
                  <option value="pe">Perú</option>
                </select>
              </div>
              <button className="bg-teal-700 text-white rounded-lg py-2 font-bold">Calcular</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
