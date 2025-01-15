import React from "react";
import Title from "../components/Title";
import How from "../components/How";
import { useLang } from "../context/LangContext"; // Importation du contexte de langue
import frIntro from "../assets/fr/frIntro.json";
import enIntro from "../assets/en/enIntro.json";
import deIntro from "../assets/de/deIntro.json";
import Illustration from "../components/SideArticle/Illustration";
import IlluImg1 from "../assets/illustrations/istockphoto-1450268558-2048x2048.webp";
import IlluImg2 from "../assets/illustrations/istockphoto-1391812172-2048x2048.webp";
import IlluImg3 from "../assets/illustrations/istockphoto-1468616190-2048x2048.webp";
import Divider from "../components/Divider";
import SideArticle from "../components/SideArticle/SideArticle";
import DescriptionText from "../components/SideArticle/DescriptionTxt";
import frSideArticle from "../assets/fr/frSideArticle.json";

const introLang: Record<string, typeof frIntro> = {
  fr: frIntro,
  en: enIntro,
  de: deIntro,
};

function Home() {
  const { lang } = useLang(); // Récupère la langue actuelle
  const currentLang = introLang[lang]; // Récupère les données correspondant à la langue actuelle

  const articles = [
    {
      title: frSideArticle.title1,
      illuImage: IlluImg1,
      altTxt: frSideArticle.illu1,
      illuTxt: frSideArticle.illu1,
      subtitle: frSideArticle.sub1,
      content: frSideArticle.content1,
      wrapperClasses: "flex-col md:flex-row",
    },
    {
      title: frSideArticle.title2,
      illuImage: IlluImg2,
      altTxt: frSideArticle.illu2,
      illuTxt: frSideArticle.illu2,
      subtitle: frSideArticle.sub2,
      content: frSideArticle.content2,
      wrapperClasses: "flex-col md:flex-row-reverse",
    },
    {
      title: frSideArticle.title3,
      illuImage: IlluImg3,
      altTxt: frSideArticle.illu3,
      illuTxt: frSideArticle.illu3,
      subtitle: frSideArticle.sub3,
      content: frSideArticle.content3,
      wrapperClasses: "flex-col md:flex-row",
    },
  ];

  return (
    <div className="home flex-c relative pos z-1 p-paddingS gap-gapBase ">
      <Title mainTitle={currentLang.name} subTitle={currentLang.job} />

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
          {currentLang.who} {currentLang.where} {currentLang.jobDetails}
        </p>
      </div>

      {articles.map((article, index) => (
        <SideArticle
          key={index}
          baseClasses="flex-col"
          partOneClasses=""
          wrapperClasses={article.wrapperClasses}
          title={article.title}
          partOne={
            <Illustration
              illuImage={article.illuImage}
              altTxt={article.altTxt}
              illuTxt={article.illuTxt}
              divClassName=""
              imgClassName="h-full object-cover"
            />
          }
          partTwoClasses=""
          partTwo={
            <DescriptionText
              subtitle={article.subtitle}
              content={article.content}
            />
          }
        />
      ))}

      <Divider className=" w-1/2 h-1 m-auto" />

      <How />
    </div>
  );
}

export default Home;
