import React, { createContext, useState, useContext } from "react";


// Créez le contexte
const LangContext = createContext();

// Créez un fournisseur pour le contexte
export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");

  const changeLang = (newLang) => setLang(newLang);

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function useLang() {
  return useContext(LangContext);
}
