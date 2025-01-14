import React, { createContext, useContext, useState } from "react";

// Type de contexte
type LangContextType = {
  lang: string;
  changeLang: (newLang: string) => void; // Définir la fonction changeLang dans le type
};

// Création du contexte avec un type par défaut
const LangContext = createContext<LangContextType | undefined>(undefined);

export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

// LangProvider pour gérer la langue dans l'application
export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<string>("fr"); // Langue par défaut

  // Fonction pour changer la langue
  const changeLang = (newLang: string) => {
    setLang(newLang);
  };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};
