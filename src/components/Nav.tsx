import React, { useState } from "react";
import { Link } from "react-router-dom";
import frUi from "../assets/fr/frUi.json";
import enUi from "../assets/en/enUi.json";
import deUi from "../assets/de/deUi.json";
import Modal from "./Modal/Modal";
import { useLang } from "../context/LangContext";
import Reservation from "./Modal/Reservation";



function Nav() {
  const {lang} = useLang();

  const [modalOpen, isModalOpen] = useState(false);

  const chosenLang = {
    fr: frUi,
    en: enUi,
    de: deUi,
  }

  const handleModalClick = () => {
    isModalOpen(!modalOpen);
  };

  const navItems = [
    { path: "/", label: chosenLang[lang].main },
    { path: "/prices", label: chosenLang[lang].prices },
    { path: "/about", label: chosenLang[lang].about },
    { path: "/contact", label: chosenLang[lang].contact },
  ];

  return (
    <nav
      className="
        nav 
        flex 
        flex-col
        m-auto 
        mt-2
        relative
        text-secondColor
      "
    >
      <ul
        className="flex gap-2 m-auto mr-0 border-b-2 border-secondColor p-1">
          {navItems.map((item) =>(

 
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
        mt-3
       
            order-btn p-3             
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

      {modalOpen && (
        <Modal
        content={<Reservation/>}
        className=""/>
      )}
    </nav>
  );
}

export default Nav;
