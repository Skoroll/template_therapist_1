import React from "react";
import myPractices from "../assets/fr/myPractices.json";
import frCards from "../assets/fr/frCards.json";

function Practices() {
  return (
    <div className="flex flex-wrap gap-2">
      {myPractices.map((practice, index) => (
        <div
          key={practice.id}
          className={`practice-card rounded-2xl ${
            index === myPractices.length - 1 && myPractices.length % 2 !== 0
              ? "w-full" // Dernier élément seul prend toute la largeur
              : "w-full sm:w-[49%]"
          } flex flex-col bg-mainColor text-white p-3`}
        >
          <h3 className="text-2xl border-b-2 p-1">{practice.name}</h3>
          <p className="">
            {frCards.time} : {practice.time} {frCards.mins}
          </p>
          <p>
            {frCards.price} : {practice.price}€
          </p>
          <p>{practice.desc}</p>
          <h4 className="mt-2 mb-2 text-xl underline">{frCards.who}</h4>
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
