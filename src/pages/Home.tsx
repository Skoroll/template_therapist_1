import React from "react";import Practices from "../components/Practices.tsx";
import How from "../components/How.tsx";
import frIntro from "../assets/fr/frIntro.json";

function Home() {

    return (
        <div className="home relative pos z-1 p-3 ">

            <div className="
                heading 
                z-1 
                text-white
                ">
                <h1 className="
                    text-4xl
                    font-handwriting
                    ">
                    {frIntro.name}
                </h1>
                <h2 className="
                    text-3xl
                    font-handwriting
                    ">
                    {frIntro.job}
                </h2>
            </div>

            <div className="presentation mt-16">
                <p className="
                    text-3xl 
                    italic 
                    text-mainColor 
                    text-center 
                    mb-4
                    font-handwriting
                    ">
                    {frIntro.who} {frIntro.where} {frIntro.jobDetails}
                </p>
            </div>

            <Practices />

            <How />
        </div>
    )
}


export default Home