import Image from 'next/image'
import Navbar from './components/Navbar'
import Reason from './components/Reason'
import Hero from './components/Hero'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Reason /> */}
    </div>
  )
}
