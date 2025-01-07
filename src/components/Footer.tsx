import React from "react";
import frUi from "../assets/fr/frUi.json";

function Footer() {
  return (
    <footer className="footer flex flex-wrap p-3">
      <div className="w-full">
        <button
          className="
                btn
                w-full
                "
        >
          {frUi.rendezVous}
        </button>
      </div>

      <div
        className="
                flex 
                flex-col
                "
      >
        <p>{frUi.navigation}</p>
        <ul
          className="
                    flex
                    flex-wrap
                    gap-2
                    "
        >
          <li>{frUi.main}</li>
          <li>{frUi.prices}</li>
          <li>{frUi.about}</li>
          <li>{frUi.contact}</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
