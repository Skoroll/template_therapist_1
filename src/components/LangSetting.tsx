import React, { useState } from "react";

function LangSetting() {
  const [lang, setLang] = useState("fr");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className="lang-setting absolute top-2 right-2 text-black">
      <label htmlFor="lang">
        <select id="lang" value={lang} onChange={handleChange}>
          <option value="fr">FR</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
      </label>
    </div>
  );
}

export default LangSetting;
