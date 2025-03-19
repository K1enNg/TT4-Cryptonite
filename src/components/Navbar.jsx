import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import UKFlag from "../assets/en.png";
import FranceFlag from "../assets/fr.png";
import { CoinContext } from "../api/CoinContext";
import { useTranslation } from "react-i18next";
import "../utils/i18n";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "cad":
        setCurrency({ name: "cad", symbol: "C$" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
    }
  };

  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(function (prevLanguage) {
      if (prevLanguage === "en") {
        i18n.changeLanguage("fr");
        return "fr";
      } else {
        i18n.changeLanguage("en");
        return "en";
      }
    });
  };

  return (
    <header className="mb-20 flex items-center justify-between py-6">
      <h1 className="flex flex-shrink-0 items-center">
        <Link to="/">
          <img className="mx-2 w-40" src={Logo} alt="logo" />
        </Link>
      </h1>

      <div className="flex flex-grow justify-center text-xl text-violet-800 space-x-10 font-extrabold">
        <Link to="/about" className="hover:text-orange-400">
          {t("About")}
        </Link>
        <Link to="/services" className="hover:text-orange-400">
          {t("Services")}
        </Link>
        <Link to="/contact" className="hover:text-orange-400">
          {t("Contact")}
        </Link>
      </div>
      <div>
        <select
          onChange={currencyHandler}
          className="px-1 py-1 border bg-black text-white rounded-lg bg-gradient shadow-md mr-7"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="cad">CAD</option>
        </select>
      </div>
      <div className="mr-8 flex items-center">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 border bg-violet-800 rounded-lg bg-gradient shadow-md hover:bg-orange-400 transition"
        >
          <img
            src={language === "en" ? UKFlag : FranceFlag}
            alt={language === "en" ? "English Flag" : "French Flag"}
            className="w-5 h-5"
          />
          <span>{language === "en" ? "English" : "Français"}</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
