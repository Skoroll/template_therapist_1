import React from "react";
import Title from "../components/Title";
import Practices from "../components/Practices";
import { useLang } from "../context/LangContext"; // Importation du contexte de langue
import frPrices from "../assets/fr/frPrices.json";
import enPrices from "../assets/en/enPrices.json";
import dePrices from "../assets/de/dePrices.json";

// Typage explicite des données pour la page des prix
interface PricesStrings {
  mainTitle: string;
  subTitle: string;
}

const pricesLang: Record<string, PricesStrings> = {
  fr: frPrices,
  en: enPrices,
  de: dePrices,
};

function Prices() {
  const { lang } = useLang(); // Récupère la langue actuelle
  const currentLang = pricesLang[lang]; // Récupère les données correspondant à la langue actuelle

  return (
    <div className="prices flex flex-col mt-10 md:mt-0 relative pos z-1 p-3 gap-6 ">
      <Title mainTitle={currentLang.mainTitle} subTitle={currentLang.subTitle} />

      <div className="prices-details">
        <Practices />
      </div>
    </div>
  );
}

export default Prices;
