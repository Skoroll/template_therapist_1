import React from "react";
import { useLang } from "../context/LangContext";
const frFlag: string = require("../assets/icons/france.png").default;
const enFlag: string = require("../assets/icons/united-kingdom.png").default;
const deFlag: string = require("../assets/icons/germany.png").default;

function LangSetting() {
  const { lang, changeLang } = useLang();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLang(event.target.value as "fr" | "en" | "de"); // Assertion explicite ici
  };

  const flagImages = {
    fr: frFlag,
    en: enFlag,
    de: deFlag,
  };

  return (
    <div className="lang-setting absolute top-2 right-2 text-black">
      <label htmlFor="lang">
        <select
          id="lang"
          value={lang}
          onChange={handleChange}
          className="appearance-none py-2 px-3 rounded-lg"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </label>
    </div>
  );
}

export default LangSetting;
