const REVIEWS = [
  {
    name: 'Juan Pérez',
    review: '¡Excelente servicio! Me encantó la calidad de los productos y la rapidez en la entrega.'
  },
  {
    name: 'María Rodríguez',
    review: '¡Muy buenos productos! La calidad es excelente y el precio es muy bueno.'
  },
  {
    name: 'Pedro Gómez',
    review: '¡Los mejores productos! La calidad es excelente y el precio es muy bueno.'
  }
]

const Reviews = () => {
  return (
    <section id="comentarios">
      <div className="max-w-6xl px-16 py-12 mx-auto bg-teal-700 rounded-xl text-center">
        <h2 className="mb-2 text-4xl text-balance text-white font-bold">
          ¿Qué opinan nuestros clientes?
        </h2>
        <p className="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl text-balance">
          Ya somos más de 1.5 millones de personas felices :)
        </p>
        <div className="flex gap-4">
          {REVIEWS.map(({ name, review }, index) => {
            return (
              <div key={index} className="flex flex-col justify-center bg-white p-8 rounded">
                <h4 className="text-blue-700 font-bold text-xl">{name}</h4>
                <p className="text-gray-500">{review}</p>
                <a href="#" className="text-blue-700 font-bold hover:underline">Ver comentario</a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Reviews
