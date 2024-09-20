import { Head } from '@inertiajs/react'
import Header from '../Components/Website/Header'
import Hero from '../Components/Website/Hero'
import Calculator from '../Components/Website/Calculator'
import Features from '../Components/Website/Features'
import Reviews from '../Components/Website/Reviews'
import Footer from '../Components/Website/Footer'

export default function Welcome ({ auth, laravelVersion, phpVersion }) {
  return (
        <>
            <Head title="Welcome" />

            <Header />
            <Hero />
            <Calculator />
            <Features />
            <Reviews />
            <Footer />
        </>
  )
}
