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

  return (
    <div className="lang-setting absolute top-marginxS right-marginxS text-black">
      <label htmlFor="lang">
        <select
          id="lang"
          value={lang}
          onChange={handleChange}
          className="appearance-none py-marginxS px-3 rounded-lg"
          style={{
            backgroundImage: `url(${
              lang === "fr" ? frFlag : lang === "en" ? enFlag : deFlag
            })`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10px center",
            backgroundSize: "20px 20px",
          }}
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
