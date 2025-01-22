import React from "react";
import Title from "../components/Title";
import { useLang } from "../context/LangContext"; // Importation du contexte de langue
import frContact from "../assets/fr/frContact.json";
import enContact from "../assets/en/enContact.json";
import deContact from "../assets/de/deContact.json";

// Typage explicite des données pour la page de contact
interface ContactStrings {
  contactTitle: string;
  contactSubtitle: string;
  phone: string;
  email: string;
  address: string;
  formTitle: string;
  nameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitButton: string;
}

// Choix des langues
const contactLang: Record<string, ContactStrings> = {
  fr: frContact,
  en: enContact,
  de: deContact,
};

const Contact = () => {
  const { lang } = useLang(); // Récupère la langue actuelle
  const currentLang = contactLang[lang]; // Récupère les données correspondant à la langue actuelle

  return (
    <div className="min-h-screen bg-grayBack home relative pos z-1 p-paddingS">
      <Title mainTitle={currentLang.contactTitle} subTitle={currentLang.contactSubtitle} />

      <div className="max-w-4xl mx-auto mt-16 bg-white shadow-lg rounded-lg p-6 space-y-8">
        {/* Numéro de téléphone */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">{currentLang.phone}</h2>
          <p className="mt-marginxS text-gray-600">
            <strong><i className="fa-solid fa-phone"></i> :</strong>{" "}
            <a href="tel:+123456789" className="text-blue-600 hover:underline">
              +1 234 567 89
            </a>
          </p>
        </section>

        {/* Adresse Email */}
        <section>
          <p className="text-gray-600">
            <strong><i className="fa-solid fa-envelope"></i> :</strong>{" "}
            <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
              contact@example.com
            </a>
          </p>
        </section>

        {/* Adresse Postale */}
        <section>
          <p className="text-gray-600">
            <strong> <i className="fa-solid fa-map-pin"></i> :</strong> 123 Rue Imaginaire, 75000 Paris, France
          </p>
        </section>

        {/* Formulaire de Contact */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800">{currentLang.formTitle}</h3>
          <form className=" flex-c mt-4 space-y-4">
            {/* Nom et Prénom */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                {currentLang.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                placeholder={currentLang.nameLabel}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Numéro de Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium">
                {currentLang.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                placeholder={currentLang.phoneLabel}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Adresse Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                {currentLang.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                placeholder={currentLang.emailLabel}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                {currentLang.messageLabel}
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={currentLang.messageLabel}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              ></textarea>
            </div>

            {/* Bouton Envoyer */}
            <button
              type="submit"
              className="w-1/2 m-auto bg-accentColor text-white border border-transparent font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-black hover:border-gray-300 transition duration-300"
            >
              {currentLang.submitButton}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
