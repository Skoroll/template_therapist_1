import React from "react";
import { useLang } from "../context/LangContext"; // Utilisation du contexte
const frFlag: string = require("../assets/icons/france.png").default;
const enFlag: string = require("../assets/icons/united-kingdom.png").default;
const deFlag: string = require("../assets/icons/germany.png").default;


function LangSetting() {
  const { lang, changeLang } = useLang(); // Récupérer la langue et la fonction pour la changer

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLang(event.target.value); // Changer la langue globalement via le contexte
  };

  // Drapeaux associés aux langues
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
          <option value="fr">
            <div className="flex items-center">
              <img src={frFlag} alt="Français" className="w-6 h-6 mr-2" />
              Français
            </div>
          </option>
          <option value="en">
            <div className="flex items-center">
              <img src={enFlag} alt="English" className="w-6 h-6 mr-2" />
              English
            </div>
          </option>
          <option value="de">
            <div className="flex items-center">
              <img src={deFlag} alt="Deutsch" className="w-6 h-6 mr-2" />
              Deutsch
            </div>
          </option>
        </select>
      </label>
    </div>
  );
}

export default LangSetting;
