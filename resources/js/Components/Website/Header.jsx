import HeaderLink from './HeaderLink'

const Header = () => {
  return (
      <head className="flex py-2">
        <div className="flex max-w-6xl mx-auto w-full justify-between">
          <div className="flex">
            <img src="https://global66.com/ui-kit/assets/at-logo-text-right/logo-textRight.svg" />
          </div>
          <div className="flex">
            <nav className="flex items-center gap-2">
              <HeaderLink label="Home" href="#" />
              <HeaderLink label="About" href="#" />
              <HeaderLink label="Services" href="#" />
              <HeaderLink label="Contact" href="#" />

              <div className="flex h-full items-center px-4 border-l-2 border-gray-300">
                <HeaderLink label="Login" href="/login" />
                <a
                  href="/register"
                  className="
                    bg-blue-500 text-white rounded-full py-1 px-4
                    flex h-full items-center font-bold scale-100
                    transition duration-300
                    hover:scale-[105%] hover:bg-blue-600
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
