import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OverWork from './components/OverWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme = {theme} setTheme = {setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OverWork/>
      <Teams/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
