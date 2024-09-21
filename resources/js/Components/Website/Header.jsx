import HeaderLink from './HeaderLink'

const Header = () => {
  return (
      <head className="flex py-6 sticky top-0 bg-white shadow-md z-50" id="inicio">
        <div className="flex max-w-6xl mx-auto w-full justify-between">
          <div className="flex">
            <img className='h-8' src={'images/logo-color.png'} />
          </div>
          <div className="flex">
            <nav className="flex items-center gap-2">
              <HeaderLink label="Inicio" href="#inicio" />
              <HeaderLink label="Calculadora" href="#calculadora" />
              <HeaderLink label="Sobre la app" href="#caracteristicas" />
              <HeaderLink label="Calificaciones" href="#comentarios" />

              <div className="flex h-full items-center px-4 border-l-2 border-gray-300">
                <HeaderLink label="Login" href="/login" />
                <a
                  href="/register"
                  className="
                    bg-teal-700 text-white rounded-full py-1 px-4
                    flex h-full items-center font-bold scale-100
                    transition duration-300
                    hover:scale-[105%] hover:bg-teal-800
                  "
                >
                  Register
                </a>
              </div>
            </nav>
          </div>
        </div>
      </head>
  )
}

export default Header
