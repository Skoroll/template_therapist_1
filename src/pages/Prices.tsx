import React from "react";
import Title from "../components/Title.tsx";
import myPractices from "../assets/fr/myPractices.json";
import Practices from "../components/Practices.tsx";

function Prices(){
    return(
        <div className="prices flex flex-col mt-10 md:mt-3 relative pos z-1 p-3 gap-6 ">
            <Title 
            mainTitle="Prix"
            subTitle="voilà"
            />

            <div className="prices-details">
                <Practices />
                
            </div>
        </div>
    )
}

export default Prices