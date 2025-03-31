import React from 'react'
import { 
  CONTACT_HEADER, 
  CONTACT_DESCRIPTION, 
  CONTACT_FIELDS, 
  CONTACT_BUTTON_TEXT } 
from "../contexts/contact";
import emailjs from '@emailjs/browser';


const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_afj8cbp', 'template_qoxmt7y', e.target, '_1ABS6fA6XBGSa1r0')
  }
  return (
    <div className="flex flex-col items-center w-full p-6 mt-[-80px]">
      <div className="w-full max-w-lg rounded-2xl shadow-xl p-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-3">
          {CONTACT_HEADER}
        </h2>
        <p className="text-center mb-6">{CONTACT_DESCRIPTION}</p>

        <form className="space-y-6" onSubmit={sendEmail}>
          {CONTACT_FIELDS.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block font-semibold">{field.label}</label>
              {field.type === "textarea" ? (
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
            className="w-full bg-gradient-to-r from-black to-violet-800 text-white py-3 rounded-lg text-lg font-semibold tracking-wide shadow-md hover:opacity-90 transition duration-300"
          >
            {CONTACT_BUTTON_TEXT}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact