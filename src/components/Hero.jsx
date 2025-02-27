import React from 'react'
import { HERO_CONTENT, HERO_HEADER } from '../contexts'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-[-40px]">
      <h1 className="text-6xl font-extrabold text-amber-50 mb-6 drop-shadow-lg animate-fadeIn">
        {HERO_HEADER}
      </h1>

      <p className="text-lg text-amber-100 max-w-2xl leading-relaxed px-4 animate-slideUp">
        {HERO_CONTENT}
      </p>

      <button className="mt-8 px-6 py-3 bg-orange-400 text-violet-900 rounded-lg text-lg font-semibold hover:bg-orange-500 transition transform hover:scale-105">
        Get Started
      </button>
    </div>
  )
}

export default Hero
