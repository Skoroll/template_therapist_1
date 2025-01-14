import React from "react";
import frUi from "../assets/fr/frUi.json";
import consultationHow from "../assets/fr/consultationHow.json";

interface ConsultationDetails {
  name: string;
  desc: string;
  text: string; // Ajout de la propriété 'text' si elle existe
}

interface ConsultationHow {
  first: ConsultationDetails[];
  second: ConsultationDetails[];
  third: ConsultationDetails[];
}

const howDetails: ConsultationHow = consultationHow as ConsultationHow;

function How() {
  return (
    <div className="how bg-green-100  p-6">
      <h2 className="text-3xl mb-3 ">
        {frUi.consultationHowHeading} :
      </h2>

      <div className="how__details flex flex-col gap-3">
        {Object.entries(howDetails).map(([key, consultations]) => (
          <div key={key} className="consultation-category p-5 bg-slate-50">
            {consultations.map((consultation: ConsultationDetails, index: number) => (
              <div
                key={`${key}-${index}`}
                className="consultation  flex flex-col gap-3"
              >
                <p className="text-2xl">
                  <strong>{consultation.name}</strong>
                </p>
                <p className="text-xl">{consultation.desc}</p>
                <p>{consultation.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default How;
