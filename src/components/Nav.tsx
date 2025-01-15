import React, { useState } from "react";
import { Link } from "react-router-dom";
import frUi from "../assets/fr/frUi.json";
import enUi from "../assets/en/enUi.json";
import deUi from "../assets/de/deUi.json";
import Modal from "./Modal/Modal";
import { useLang } from "../context/LangContext";
import Reservation from "./Modal/Reservation";

// Définir les types
type Lang = "fr" | "en" | "de";

interface UiStrings {
  main: string;
  prices: string;
  about: string;
  contact: string;
  rendezVous: string;
}

// Typage explicite de `chosenLang`
const chosenLang: Record<Lang, UiStrings> = {
  fr: frUi,
  en: enUi,
  de: deUi,
};

function Nav() {
  const { lang } = useLang(); // Typé comme "fr" | "en" | "de"

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClick = () => {
    setModalOpen(!modalOpen); // Inverser l'état de la modale
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Fonction pour fermer la modale
  };

  const navItems = [
    { path: "/template_therapist_1", label: chosenLang[lang].main },
    { path: "/prices", label: chosenLang[lang].prices },
    { path: "/about", label: chosenLang[lang].about },
    { path: "/contact", label: chosenLang[lang].contact },
  ];

  return (
    <nav
      className="
        nav 
        flex-c
        m-auto 
        mt-marginxS
        relative
        text-secondColor
      "
    >
      <ul className="flex gap-gapXS m-auto mr-0 border-b-2 border-secondColor p-1">
        {navItems.map((item) => (
          <li
            key={item.path}
            className="
              p-1
              cursor-pointer
              hover:bg-secondColor 
              hover:text-white
              transition
              duration-1000
            "
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <button
        onClick={handleModalClick}
        className="
          mt-marginxS
          order-btn p-paddingS             
          cursor-pointer
          hover:bg-secondColor 
          hover:text-white
          transition
          duration-1000
          border-secondColor
          border-2
          rounded-lg
        "
      >
        {chosenLang[lang].rendezVous}
      </button>

      {modalOpen && <Modal content={<Reservation />} onClose={handleCloseModal} />}
    </nav>
  );
}

export default Nav;
