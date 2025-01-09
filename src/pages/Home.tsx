import React from "react";
import Practices from "../components/Practices.tsx";
import Title from "../components/Title.tsx";
import How from "../components/How.tsx";
import frIntro from "../assets/fr/frIntro.json";
import frUi from "../assets/fr/frUi.json";
import Illustration from "../components/SideArticle/Illustration.tsx";
import IlluImg from "../assets/illustrations/istockphoto-1450268558-2048x2048.jpg";
import SideArticle from "../components/SideArticle/SideArticle.tsx";
import DescriptionText from "../components/SideArticle/DescriptionTxt.tsx";
import frSideArticle from "../assets/fr/frSideArticle.json";

function Home() {
  return (
    <div className="home flex flex-col relative pos z-1 p-3 gap-6 ">
      <Title mainTitle={frIntro.name} subTitle={frIntro.job} />

      <div className="presentation mt-10">
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

      <SideArticle
        baseClasses="flex-col"
        partOneClasses=""
        wrapperClasses="flex-col md:flex-row"
        title={frSideArticle.title1}
        partOne={
          <Illustration
            illuImage={IlluImg}
            altTxt={frUi.illu1}
            illuTxt={frUi.illu1}
            divClassName=""
            imgClassName="h-full object-cover "
          />
        }
        partTwoClasses=""
        partTwo={
          <DescriptionText
            subtitle={frSideArticle.sub1}
            content={frSideArticle.content1}
          />
        }
      />

      <How />


    </div>
  );
}

export default Home;
