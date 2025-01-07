import React from "react";
import myPractices from "../assets/fr/myPractices.json";
import frCards from "../assets/fr/frCards.json";

function Practices() {
  return (
    <div>
      {myPractices.map((practice) => (
        <div
          key={practice.id}
          className="practice-card rounded-2xl flex flex-col bg-mainColor text-white p-3 m-2"
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
            {practice.why.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Practices;
