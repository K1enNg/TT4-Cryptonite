import React from "react";
import { useTranslation } from "react-i18next";
import "../utils/i18n";

import {
  WHAT_IS_CRYPTO_HEADER,
  WHAT_IS_CRYPTO_CONTENT,
  HOW_IT_WORKS_HEADER,
  HOW_IT_WORKS_CONTENT,
  POPULAR_CRYPTO_HEADER,
  POPULAR_CRYPTO_LIST,
  BLOCKCHAIN_HEADER,
  BLOCKCHAIN_CONTENT,
  STORAGE_HEADER,
  STORAGE_CONTENT,
  STORAGE_LIST,
  BUY_CRYPTO_HEADER,
  BUY_CRYPTO_CONTENT,
  RISKS_HEADER,
  RISKS_LIST,
  CONCLUSION_HEADER,
  CONCLUSION_CONTENT,
} from "../contexts/about";

import "../utils/i18n";
import Logo from "../assets/logo.png";
import Partnership from "../components/About/Partnership";
import Establishment from "../components/About/Establishment";


const About = () => {
  const { t } = useTranslation();
  const popular_crypto_list = t('POPULAR_CRYPTO_LIST', { returnObjects: true });
  const storage_list = t('STORAGE_LIST', { returnObjects: true });
  const risks_list = t('RISKS_LIST', { returnObjects: true });

  return (

    <div className="flex flex-col items-center w-full p-6 text-white mt-[-180px]">
      <div className="max-w-3xl">
        <div>
          <div className="flex justify-center">
            <img src={Logo} alt="cryptonite-logo" />
          </div>
          <div>
            <h1 className="text-6xl flex justify-center mt-[-50px] bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent font-serif">
              Stay foolish. Stay broke.
            </h1>
          </div>
        </div>


        <div className="flex justify-center mt-[90px]">
          <Partnership />
        </div>

        <div className="flex justify-center mt-[90px]">
          <Establishment />
        </div>


        {/* <section>
          <h2 className="text-2xl font-semibold text-violet-800">{t('WHAT_IS_CRYPTO_HEADER')}</h2>
          <p className="text-lg">{t('WHAT_IS_CRYPTO_CONTENT')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{t('HOW_IT_WORKS_HEADER')}</h2>
          <p className="text-lg">{t('HOW_IT_WORKS_CONTENT')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{t('POPULAR_CRYPTO_HEADER')}</h2>
          <ul className="list-disc pl-5">
            {popular_crypto_list.map((crypto, index) => (
              <li key={index}>
                <strong>{crypto.title}:</strong> {crypto.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{t('BLOCKCHAIN_HEADER')}</h2>
          <p className="text-lg">{t('BLOCKCHAIN_CONTENT')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{t('STORAGE_HEADER')}</h2>
          <p className="text-lg">{t('STORAGE_CONTENT')}</p>
          <ul className="list-disc pl-5">
            {storage_list.map((storage, index) => (
              <li key={index}>
                <strong>{storage.title}:</strong> {storage.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{t('BUY_CRYPTO_HEADER')}</h2>
          <p className="text-lg">{t('BUY_CRYPTO_CONTENT')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{t('RISKS_HEADER')}</h2>
          <ul className="list-disc pl-5">
            {risks_list.map((risk, index) => (
              <li key={index}>
                <strong>{risk.title}:</strong> {risk.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{t('CONCLUSION_HEADER')}</h2>
          <p className="text-lg">{t('CONCLUSION_CONTENT')}</p>
        </section> */}

      </div>
    </div >
  );
};



export default About;

