import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import { Link, usePage } from '@inertiajs/react'
import { Toaster } from 'sonner'

const NAV = [
  { label: 'Dashboard', href: 'dashboard' },
  { label: 'Países', href: 'dashboard.countries.index' },
  { label: 'Bancos', href: 'dashboard.banks.index' },
  { label: 'Exchanges', href: 'dashboard.exchanges.index' }
]

export default function Authenticated ({ header, children, module, action }) {
  const user = usePage().props.auth.user

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12">
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <Link href="/dashboard">
                  <img className='h-6' src={'/images/logo-color.png'} />
                </Link>
              </div>

              <div className="space-x-8 sm:-my-px sm:ms-10 sm:flex">
                {NAV.map(({ label, href }, index) => (
                  <NavLink key={index} href={route(href)} active={route().current(href)}>
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ms-6">
              <div className="ms-3 relative">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                      >
                        {user.name}

                        <svg
                          className="ms-2 -me-0.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route('profile.edit')}>
                      Mi cuenta
                    </Dropdown.Link>
                    <Dropdown.Link href={route('logout')} method="post" as="button">
                        Salir
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>

          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          Aquí vamos a agregar los Widgets ...
        </div>
      </header>

      <div className="mb-6">
        <div className="max-w-7xl mx-auto pt-6 px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center">
              <li className="inline-flex items-center">
                <span className="inline-flex items-center text-sm font-medium text-gray-700">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg>
                  Multicambios
                </span>
              </li>
              {module && (
                <li>
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="ms-1 text-sm font-medium text-gray-700">
                      {module}
                    </span>
                  </div>
                </li>
              )}
              {action && (
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                      {action}
                    </span>
                  </div>
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>

      <main className='pb-6'>
        <Toaster richColors />
        {children}
      </main>
    </div>
  )
}
