import React from "react";
import frModal from "../../assets/fr/frModal.json";

function Reservation(){
    return(
        <div className="reservation flex flex-col gap-3 p-3">
            <div className="plateform-logo  h-32 w-full flex z-50">
                <p className="m-auto">Plateforme Logo</p>
            </div>
            <h2>{frModal.title}</h2>
            <p>{frModal.CTA}</p>
            <a href={frModal.link}>{frModal.link}</a>
        </div>
    )
}

export default Reservation