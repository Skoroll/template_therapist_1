
import { useLang } from "../context/LangContext";
import Divider from "../components/Divider";
import Title from "../components/Title";
import therapistImg from "../assets/illustrations/istockphoto-1336275809-2048x2048.webp";
import frIntro from "../assets/fr/frIntro.json";
import enIntro from "../assets/en/enIntro.json";
import deIntro from "../assets/de/deIntro.json";
// Définir les types
type Lang = "fr" | "en" | "de";

interface IntroStrings {
  name: string;
  job: string;
  who: string;
  where: string;
  jobDetails: string;
  contactTitle: string;
  contactSubtitle: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutMyLife: string;
  text: string;
  diploma: string;
  diploma1: string;
  diploma2: string;
  diploma3: string;
  futurFormation: string;
  futurFormationName: string;

  [key: string]: string;
}



const introLang: Record<Lang, IntroStrings> = {
  fr: frIntro,
  en: enIntro,
  de: deIntro,
};

const About = () => {
  const { lang } = useLang(); // Typé comme "fr" | "en" | "de"


  return (
    <div className="about flex-c relative pos z-1 p-paddingS gap-gapBase ">
      <Title
        mainTitle={introLang[lang].aboutTitle}
        subTitle={introLang[lang].aboutSubtitle}
      />

      <div className="
        who 
        flex-c
        bg-thirdColor  
        p-paddingS  
        mt-10 
        md:flex-row 
        md:bg-transparent 
        md:text-black">

        <div className="who-img w-full md:w-1/2 p-2 ">
          <img
            src={therapistImg}
            alt={introLang[lang].name}
            className="w-full h-auto md:max-w-[500px] m-auto"
          />
        </div>
        <div className="who-text w-full md:w-1/2 p-2">
          <h3 className="text-2xl">
            {" "}
            {introLang[lang].name} {introLang[lang].job}
          </h3>
          <p
            className="p-paddingS"
            dangerouslySetInnerHTML={{
              __html: introLang[lang].aboutMyLife,
            }}
          />
          <p
            className="p-paddingS"
            dangerouslySetInnerHTML={{ 
              __html: introLang[lang].text }}
          />
        </div>
      </div>

      <Divider className=" w-1/2 h-1 m-auto" />

      <div
        className="formation flex-c gap-gapS p-6 border-2 bg-gray-200 rounded-2xl"
        style={{ minHeight: "300px" }}
      >
        <h3
          className="p-paddingS bg-white text-center text-4xl rounded-2xl"
          dangerouslySetInnerHTML={{
            __html: introLang[lang].diploma,
          }}
        />
        {["diploma1", "diploma2", "diploma3"].map((key, index) => (
          <div
            key={index}
            className="formation-detail bg-white p-paddingS rounded-2xl"
          >
            <h4
              className="text-2xl"
              dangerouslySetInnerHTML={{
                __html: introLang[lang][key],
              }}
            />
            <p dangerouslySetInnerHTML={{ __html: introLang[lang].text }} />
          </div>
        ))}
      </div>

      <Divider className=" w-1/2 h-1 m-auto" />
    </div>
  );
};

export default About;
