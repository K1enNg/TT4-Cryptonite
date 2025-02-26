import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import UKFlag from '../assets/en.png' 
import FranceFlag from '../assets/fr.png'

const Navbar = () => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'))
  }

  return (
    <header className="mb-20 flex items-center justify-between py-6">
      <h1 className='flex flex-shrink-0 items-center'>
        <Link to="/" >
          <img className='mx-2 w-40' src={Logo} alt="logo" />
        </Link>
      </h1>

      <div className='flex flex-grow justify-center text-xl text-violet-800 space-x-10'>
        <Link to="/about" className='hover:text-orange-400'>About</Link>
        <Link to="/services" className='hover:text-orange-400'>Services</Link>
        <Link to="/contact" className='hover:text-orange-400'>Contact</Link>
      </div>

      <div className='ml-8 flex items-center'>
        <button 
          onClick={toggleLanguage} 
          className='flex items-center gap-2 px-4 py-2 border bg-violet-800 rounded-lg bg-gradient shadow-md hover:bg-orange-400 transition'
        >
          <img 
            src={language === 'en' ? UKFlag : FranceFlag} 
            alt={language === 'en' ? "English Flag" : "French Flag"} 
            className="w-5 h-5"
          />
          <span>{language === 'en' ? 'English' : 'Français'}</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
