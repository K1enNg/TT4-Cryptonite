import React from 'react'
import { HERO_CONTENT, HERO_HEADER } from '../contexts/hero'
import { useTranslation } from "react-i18next";
import "../utils/i18n";

const Hero = ({ onGetStarted }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center text-center mt-[-40px]">
      <h1 className="text-5xl font-extrabold text-amber-50 mb-6 drop-shadow-lg animate-fadeIn">
        {t('HERO_HEADER')}
      </h1>

      <p className="text-lg text-amber-100 max-w-2xl leading-relaxed px-4 animate-slideUp">
        {t('HERO_CONTENT')}
      </p>

      <button 
        onClick={onGetStarted}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent rounded-lg text-lg font-semibold hover:bg-orange-500 transition transform hover:scale-105"
      >
        {t('GETSTARTEDBTN')}
      </button>
    </div>

    
  )
}

export default Hero
