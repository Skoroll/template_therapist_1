import React from "react";
import frUi from "../assets/fr/frUi.json"

function Nav(){

    return(
        <nav className="
            nav 
            flex 
            m-auto 
            mt-2
             md:mr-2
             
             ">
            <ul className="
                flex 
                gap-2 
                m-auto
                mr-0
                border-b-2
                ">
                <li>{frUi.main}</li>
                <li>{frUi.prices}</li>
                <li>{frUi.about}</li>
                <li>{frUi.contact}</li>
            </ul>
        </nav>
    )
}


export default Nav