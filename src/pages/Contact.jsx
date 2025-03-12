import React from 'react'
import { CONTACT_HEADER, CONTACT_DESCRIPTION, CONTACT_FIELDS, CONTACT_BUTTON_TEXT } from "../contexts/ContactIndex";


const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full p-6 text-whit">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">
          {CONTACT_HEADER}
        </h2>
        <p className="text-gray-500 text-center mb-6">{CONTACT_DESCRIPTION}</p>

        <form className="space-y-6">
          {CONTACT_FIELDS.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-gray-700 font-semibold">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  rows="5"
                  placeholder={field.placeholder}
                  required
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder={field.placeholder}
                  required
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg text-lg font-semibold tracking-wide shadow-md hover:opacity-90 transition duration-300"
          >
            {CONTACT_BUTTON_TEXT}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact