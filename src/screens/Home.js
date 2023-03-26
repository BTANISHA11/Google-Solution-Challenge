import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'



export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}
