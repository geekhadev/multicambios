const Hero = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-balance">
            Giros de dinero a Venezuela
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-balance">
            Enviamos tu dinero, ofreciendo la mejor tasa y el proceso mas rápido y seguro.
          </p>
          <a href="#" className="
            inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-full bg-blue-700
            scale-100 transition duration-300 transform hover:scale-[105%] hover:bg-blue-800
          ">
              Calcula tu envío
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img src="https://global66.com/assets/home/hero.png" alt="Es una imagen que muestra la App Multicambios" />
        </div>
      </div>
  </section>
  )
}

export default Hero
