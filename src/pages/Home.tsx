import React from "react";
import Title from "../components/Title.tsx";
import How from "../components/How.tsx";
import frIntro from "../assets/fr/frIntro.json";
import Illustration from "../components/SideArticle/Illustration.tsx";
import IlluImg1 from "../assets/illustrations/istockphoto-1450268558-2048x2048.jpg";
import IlluImg2 from "../assets/illustrations/istockphoto-1391812172-2048x2048.jpg";
import IlluImg3 from "../assets/illustrations/istockphoto-1468616190-2048x2048.jpg"
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


      <SideArticle
        baseClasses="flex-col"
        partOneClasses=""
        wrapperClasses="flex-col md:flex-row"
        title={frSideArticle.title1}
        partOne={
          <Illustration
            illuImage={IlluImg1}
            altTxt={frSideArticle.illu1}
            illuTxt={frSideArticle.illu1}
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

<SideArticle
        baseClasses="flex-col"
        partOneClasses=""
        wrapperClasses="flex-col md:flex-row-reverse"
        title={frSideArticle.title2}
        partOne={
          <Illustration
            illuImage={IlluImg2}
            altTxt={frSideArticle.illu2}
            illuTxt={frSideArticle.illu2}
            divClassName=""
            imgClassName="h-full object-cover "
          />
        }
        partTwoClasses=""
        partTwo={
          <DescriptionText
            subtitle={frSideArticle.sub2}
            content={frSideArticle.content2}
          />
        }
      />

<SideArticle
        baseClasses="flex-col"
        partOneClasses=""
        wrapperClasses="flex-col md:flex-row"
        title={frSideArticle.title3}
        partOne={
          <Illustration
            illuImage={IlluImg3}
            altTxt={frSideArticle.illu3}
            illuTxt={frSideArticle.illu3}
            divClassName=""
            imgClassName="h-full object-cover "
          />
        }
        partTwoClasses=""
        partTwo={
          <DescriptionText
            subtitle={frSideArticle.sub3}
            content={frSideArticle.content3}
          />
        }
      />
      <How />


    </div>
  );
}

export default Home;
