import React from "react";
import Practices from "../components/Practices.tsx";
import Title from "../components/Title.tsx";
import How from "../components/How.tsx";
import frIntro from "../assets/fr/frIntro.json";

function Home() {
  return (
    <div className="home relative pos z-1 p-3 ">
        <Title mainTitle={frIntro.name} subTitle={frIntro.job}/>

      <div className="presentation mt-16">
        <p
          className="
                    text-3xl 
                    italic 
                    text-mainColor 
                    text-center 
                    mb-4
                    font-handwriting
                    "
        >
          {frIntro.who} {frIntro.where} {frIntro.jobDetails}
        </p>
      </div>

      <Practices />

      <How />
    </div>
  );
}

export default Home;
