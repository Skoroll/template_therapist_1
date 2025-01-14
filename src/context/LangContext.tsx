import React, { createContext, useContext, useState } from "react";

// Type des langues supportées
type Lang = "fr" | "en" | "de";

type LangContextType = {
  lang: Lang; // Utilisation du type littéral ici
  changeLang: (newLang: Lang) => void; // Changer la langue avec un type strict
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr"); // Langue par défaut

  const changeLang = (newLang: Lang) => {
    setLang(newLang);
  };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};
