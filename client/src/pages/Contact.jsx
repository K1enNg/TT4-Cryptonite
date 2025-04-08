import React from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_afj8cbp', 'template_qoxmt7y', e.target, '_1ABS6fA6XBGSa1r0');
  };

  return (
    <div className="flex flex-col items-center w-full p-6 mt-[-80px]">
      <div className="w-full max-w-lg rounded-2xl shadow-xl p-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-3">
          {t('CONTACT_HEADER')}
        </h2>

        <p className="text-center mb-6">
          {t('CONTACT_DESCRIPTION')}
        </p>

        <form className="space-y-6" onSubmit={sendEmail}>
          {t('CONTACT_FIELDS', { returnObjects: true }).map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block font-semibold">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
                  rows="5"
                  placeholder={field.placeholder}
                  required
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
                  placeholder={field.placeholder}
                  required
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-200 to-yellow-500 text-white py-3 rounded-lg text-lg font-semibold tracking-wide shadow-md hover:opacity-90 transition duration-300"
          >
            {t('CONTACT_BUTTON_TEXT')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
