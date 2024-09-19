import { Head } from '@inertiajs/react'

export default function Welcome ({ auth, laravelVersion, phpVersion }) {
  return (
        <>
            <Head title="Welcome" />
            <div className='bg-red-500 h-screen justify-center items-center flex'>
                <h1>MultiCambios</h1>
            </div>
        </>
  )
}
