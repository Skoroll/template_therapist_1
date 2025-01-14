import React from "react";
import Title from "../components/Title";
import frIntro from "../assets/fr/frIntro.json";
import Divider from "../components/Divider";
import therapistImg from "../assets/illustrations/istockphoto-1336275809-2048x2048.webp";

function About() {
  return (
    <div className="about flex flex-col relative pos z-1 p-3 gap-6 ">
      <Title mainTitle={frIntro.aboutTitle} subTitle={frIntro.aboutSubtitle} />

      <div className="who flex flex-col bg-green-100  p-3 mt-10 md:flex-row md:bg-transparent  md:text-black">
        <div className="who-img w-full md:w-1/2 p-2 ">
          <img 
            src={therapistImg} 
            alt={frIntro.name}
            className="w-full h-auto"
            
            />
        </div>
        <div className="who-text w-full md:w-1/2 p-2">
          <h3 className="text-2xl">
            {" "}
            {frIntro.name} {frIntro.job}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: frIntro.aboutMyLife }} />
          <p dangerouslySetInnerHTML={{ __html: frIntro.text }} />
        </div>
      </div>

      <Divider className=" w-1/2 h-1 m-auto" />

      <div 
  className="formation flex flex-col gap-3 p-6 border-2 bg-gray-200 rounded-2xl" 
  style={{ minHeight: "300px" }} // Ajustez selon le contenu attendu
>
        <h3
          className="p-3 bg-white text-center text-4xl rounded-2xl"
          dangerouslySetInnerHTML={{ __html: frIntro.diploma }}
        />
        {["diploma1", "diploma2", "diploma3"].map((key, index) => (
          <div
            key={index}
            className="formation-detail bg-white p-3 rounded-2xl"
          >
            <h4
              className="text-2xl"
              dangerouslySetInnerHTML={{ __html: frIntro[key] }}
            />
            <p dangerouslySetInnerHTML={{ __html: frIntro.text }} />
          </div>
        ))}
      </div>

      <Divider className=" w-1/2 h-1 m-auto" />
      
      <div className="future-formation p-3">
        <h3
          className="p-3 bg-white text-center text-4xl"
          dangerouslySetInnerHTML={{ __html: frIntro.futurFormation }}
        />
        {["futurFormationName", "futurFormationName2"].map((key, index) => (
          <div key={index} 
            className="future-formation-detail p-3"
            style={{ minHeight: "100px" }}>
            <h4
              className="text-2xl"
              dangerouslySetInnerHTML={{ __html: frIntro[key] }}
            />
            <p dangerouslySetInnerHTML={{ __html: frIntro.text }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
