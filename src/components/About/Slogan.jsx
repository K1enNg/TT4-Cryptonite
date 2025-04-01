import React from 'react'
import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import "../utils/i18n";
import {
  SLOGAN_ABOUT
}
from "../contexts/about";

const Slogan = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex justify-center">
            <img src={Logo} alt="logo"/>
          </div>
          <div>
            <h1 className="text-6xl flex justify-center mt-[-50px] bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent font-serif">
            {t('SLOGAN_ABOUT')}
            </h1>
          </div>
    </div>
  )
}

export default Slogan
