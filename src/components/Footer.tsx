import React from "react";
import contactInfo from "../assets/contactInfo.json";
import frUi from "../assets/fr/frUi.json";
import frIntro from "../assets/fr/frIntro.json";
import deUi from "../assets/de/deUi.json";
import deIntro from "../assets/de/deIntro.json";
import enUi from "../assets/en/enUi.json";
import enIntro from "../assets/en/enIntro.json";
import { useLang } from "../context/LangContext";

// Déclarez un type pour les langues
type Lang = "fr" | "en" | "de";

function Footer() {
    const { lang } = useLang();

    // Associer chaque langue à ses objets de texte
    const chosenLang: Record<Lang, { ui: typeof frUi, intro: typeof frIntro }> = {
        fr: { ui: frUi, intro: frIntro },
        en: { ui: enUi, intro: enIntro },
        de: { ui: deUi, intro: deIntro },
    };

    // Sélectionner les traductions en fonction de la langue active
    const currentLang = chosenLang[lang as Lang];

    return (
        <footer className="bg-thirdColor  text-gray-800 p-paddingBase md:px-8">
            <div className="max-w-7xl mx-auto flex-c md:flex-row justify-between items-center">
                {/* Informations principales */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="font-semibold text-lg">{currentLang.ui.yourTherapist}</p>
                    <p>{currentLang.intro.name}</p>
                    <p>{currentLang.ui.email} : <a href="mailto:email@therapeute.com" className="text-accentColor underline">{contactInfo.email}</a></p>
                    <p>{currentLang.ui.phone} : <a href={`tel:${contactInfo.telephone}`} className="text-accentColor underline">{contactInfo.telephone}</a></p>
                </div>

                {/* Mentions légales et politique de confidentialité */}
                <div className="text-sm text-center md:text-right">
                    <p className="mb-marginxS min-w-1/2">{currentLang.ui.dataCollection}</p>
                    <p>
                        <a href="#" className="text-accentColor underline">{currentLang.ui.legal}</a> | <a href="#" className="text-accentColor underline">{currentLang.ui.confidential}</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
