import React from "react";
import { useLang } from "../context/LangContext"; 
import frCards from "../assets/fr/frCards.json";
import enCards from "../assets/en/enCards.json";
import deCards from "../assets/de/deCards.json";
import frMyPractices from "../assets/fr/frMyPractices.json"; 
import enMyPractices from "../assets/en/enMyPractices.json"; 
import deMyPractices from "../assets/de/deMyPractices.json"; 

// Typage explicite pour les cartes de pratique
interface CardStrings {
  time: string;
  mins: string;
  price: string;
  who: string;
}

const cardsLang: Record<string, CardStrings> = {
  fr: frCards,
  en: enCards,
  de: deCards,
};

// Typage pour les pratiques
interface Practice {
  id: number;
  name: string;
  price: string;
  number: string;
  desc: string;
  time: string;
  why: string[];
}

// Liste des pratiques par langue
const practicesLang: Record<string, Practice[]> = {
  fr: frMyPractices,
  en: enMyPractices,
  de: deMyPractices,
};

function Practices() {
  const { lang } = useLang(); // Récupère la langue actuelle
  const currentLang = cardsLang[lang]; // Récupère les données correspondant à la langue actuelle
  const currentPractices = practicesLang[lang]; // Récupère les pratiques correspondant à la langue actuelle

  return (
    <div className="flex flex-wrap gap-gapXS">
      {currentPractices.map((practice, index) => (
        <div
          key={practice.id}
          className={`practice-card rounded-2xl ${
            index === currentPractices.length - 1 && currentPractices.length % 2 !== 0
              ? "w-full" // Dernier élément seul prend toute la largeur
              : "w-full sm:w-[49%]"
          } flex-c bg-mainColor text-white p-paddingS`}
        >
          <h3 className="text-2xl border-b-2 p-1">{practice.name}</h3>
          <p>
            {currentLang.time} : {practice.time} {currentLang.mins}
          </p>
          <p>
            {currentLang.price} : {practice.price}€
          </p>
          <p>{practice.desc}</p>
          <h4 className="mt-marginxS mb-marginxS text-xl underline">{currentLang.who}</h4>
          <ul className="list-disc pl-7">
            {practice.why.map((reason, reasonIndex) => (
              <li key={reasonIndex}>{reason}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Practices;
