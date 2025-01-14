import React from "react";
import { useLang } from "../../context/LangContext"; // Importation du contexte de langue
import frModal from "../../assets/fr/frModal.json";
import enModal from "../../assets/en/enModal.json";
import deModal from "../../assets/de/deModal.json";

// Typage explicite des données pour le module de réservation
interface ReservationStrings {
  title: string;
  CTA: string;
  link: string;
}

// Choix des langues
const modalLang: Record<string, ReservationStrings> = {
  fr: frModal,
  en: enModal,
  de: deModal,
};

const Reservation = () => {
  const { lang } = useLang(); // Récupère la langue actuelle
  const currentLang = modalLang[lang]; // Récupère les données correspondant à la langue actuelle

  return (
    <div className="reservation flex flex-col gap-3 p-3">
      <div className="plateform-logo h-32 w-full flex z-50">
        <p className="m-auto">Plateforme Logo</p>
      </div>
      <h2>{currentLang.title}</h2>
      <p>{currentLang.CTA}</p>
      <a href={currentLang.link} target="_blank" rel="noopener noreferrer">
        {currentLang.link}
      </a>
    </div>
  );
};

export default Reservation;
