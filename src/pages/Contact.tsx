import React from "react";
import Title from "../components/Title.tsx";
import frIntro from "../assets/fr/frIntro.json";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 home relative pos  z-1 p-3">
        <Title mainTitle={frIntro.contactTitle} subTitle={frIntro.contactSubtitle} />



      <div className="max-w-4xl mx-auto mt-20 bg-white shadow-lg rounded-lg p-6 space-y-8">
        {/* Numéro de téléphone */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Contactez-nous</h2>
          <p className="mt-2 text-gray-600">
            <strong>Téléphone :</strong> <a href="tel:+123456789" className="text-blue-600 hover:underline">+1 234 567 89</a>
          </p>
        </section>

        {/* Adresse Email */}
        <section>
          <p className="text-gray-600">
            <strong>Email :</strong> <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">contact@example.com</a>
          </p>
        </section>

        {/* Adresse Postale */}
        <section>
          <p className="text-gray-600">
            <strong>Adresse :</strong> 123 Rue Imaginaire, 75000 Paris, France
          </p>
        </section>

        {/* Formulaire de Contact */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800">Formulaire de contact</h3>
          <form className="mt-4 space-y-4">
            {/* Nom et Prénom */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Nom et Prénom</label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom et prénom"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Numéro de Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium">Numéro de Téléphone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Votre numéro de téléphone"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Adresse Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Adresse Email</label>
              <input
                type="email"
                id="email"
                placeholder="Votre adresse email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Votre message"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              ></textarea>
            </div>

            {/* Bouton Envoyer */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
