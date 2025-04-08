import React from 'react'
import { useTranslation } from "react-i18next";
import '../../utils/i18n';

const Stats = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className='flex justify-center items-center text-4xl font-semibold text-center mt-40px bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent'>
      {t('MISSION_STATS_ABOUT')}
      </h1>
      <div className='text-white text-center mt-20 text-2xl'>
       {t('MISSION_STATS_BODY_ABOUT')}
      </div>
      <div className='mt-60px'>
        <div className='flex justify-center items-center font-semibold text-center space-x-20 m-60px'>
          <div>
            <h2 className='text-9xl bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent'>20+</h2>
            <p>{t('COUNTRIES_STATS_ABOUT')}</p>
          </div>
          <div>
            <h2 className='text-9xl bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent'>10k+</h2>
            <p>{t('USERS_STATS_ABOUT')}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Stats
