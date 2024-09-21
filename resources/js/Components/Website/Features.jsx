const FEATURES = [
  {
    title: 'Convierte tus pesos a dólares, euros y otras monedas',
    description: 'Puedes convertir desde tu moneda principal a +8 monedas, como el Dólar o el Euro para ahorrar, enviar o comprar con tarjeta',
    image: 'https://global66.com/assets/home/cuenta-global.png'
  },
  {
    title: 'Smart Card Global66',
    description: '8 monedas en 1 tarjeta. Con tu Smart Card, pagas directamente desde USD, EUR o CLP, con un tipo de cambio conveniente y sin cobro de mantención al usarla',
    image: 'https://global66.com/assets/home/tarjeta.png'
  },
  {
    title: 'Smart Card Global66',
    description: '8 monedas en 1 tarjeta. Con tu Smart Card, pagas directamente desde USD, EUR o CLP, con un tipo de cambio conveniente y sin cobro de mantención al usarla',
    image: 'https://global66.com/assets/home/tarjeta.png'
  }
]

const Features = () => {
  return (
    <section id="caracteristicas">
      <div className="flex flex-col max-w-4xl text-center mx-auto py-12 mt-12">
        <h2 className="font-bold text-5xl">
          Descubre todos los beneficios de
          <br />
          <span className="text-teal-700"> Tu Cuenta Global</span>
        </h2>
        <p className="max-w-2xl mt-4 mx-auto font-light text-gray-500 text-xl">
          Con Global66 puedes pagar, cobrar, convertir, enviar dinero y más
        </p>
      </div>
      {FEATURES.map(({ title, description, image }, index) => {
        const order = index % 2 === 0 ? 'left' : 'right'
        return (
          <div key={index} className="grid max-w-4xl px-16 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
            <div className={`${order === 'left' ? 'order-first' : 'order-last'} mr-auto place-self-center col-span-6`}>
              <h3 className="max-w-3xl text-3xl text-balance font-bold mb-2">
                {title}
              </h3>
              <p className="font-light text-gray-500 text-xl text-balance">
                {description}
              </p>
            </div>
            <div className="flex col-span-6">
              <div className="flex justify-center bg-white rounded-xl w-96 mx-auto">
                <img src={image} alt={title} />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Features
