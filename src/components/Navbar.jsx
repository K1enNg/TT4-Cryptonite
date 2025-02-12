import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header className="mb-20 flex items-center justify-between py-6">
        <h1 className='flex flex-shrink-0 items-center'>
          <Link to="/" >
              <img className='mx-2 w-40' src={Logo} alt="logo" />
          </Link>
        </h1>
            <div className='m-8 flex items-center justify-center gap-4 text-xl text-white'>
            </div>
    </header>
  )
}

export default Navbar
