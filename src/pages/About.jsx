import React from "react";

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
} from "../contexts/indexAbout";

import "../i18n";


const About = () => {
  return (
    <div className="flex flex-col items-center w-full p-6 text-white mt-[-40px]">
      <div className="max-w-3xl">

        <h1 className="text-4xl text-violet-800 font-bold mb-6 text-center">
          Welcome to <span className="text-orange-400">Cryptonite</span>
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{WHAT_IS_CRYPTO_HEADER}</h2>
          <p className="text-lg">{WHAT_IS_CRYPTO_CONTENT}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{HOW_IT_WORKS_HEADER}</h2>
          <p className="text-lg">{HOW_IT_WORKS_CONTENT}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{POPULAR_CRYPTO_HEADER}</h2>
          <ul className="list-disc pl-5">
            {POPULAR_CRYPTO_LIST.map((crypto, index) => (
              <li key={index}>
                <strong>{crypto.title}:</strong> {crypto.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{BLOCKCHAIN_HEADER}</h2>
          <p className="text-lg">{BLOCKCHAIN_CONTENT}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{STORAGE_HEADER}</h2>
          <p className="text-lg">{STORAGE_CONTENT}</p>
          <ul className="list-disc pl-5">
            {STORAGE_LIST.map((storage, index) => (
              <li key={index}>
                <strong>{storage.title}:</strong> {storage.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{BUY_CRYPTO_HEADER}</h2>
          <p className="text-lg">{BUY_CRYPTO_CONTENT}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{RISKS_HEADER}</h2>
          <ul className="list-disc pl-5">
            {RISKS_LIST.map((risk, index) => (
              <li key={index}>
                <strong>{risk.title}:</strong> {risk.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-800">{CONCLUSION_HEADER}</h2>
          <p className="text-lg">{CONCLUSION_CONTENT}</p>
        </section>

      </div>
    </div>
  );
};



export default About;

