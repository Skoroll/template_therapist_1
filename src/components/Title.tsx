import React from "react";

interface TitleProps {
  mainTitle: string;
  subTitle: string;
}

const Title: React.FC<TitleProps> = ({ mainTitle, subTitle }) => {
  return (
    <div
      className="
            heading 
            z-20 
            text-white
            relative
            text-center
            "
    >
      <h1
        className="
                text-4xl
                font-handwriting
                "
      >
        {mainTitle}
      </h1>
      <h2
        className="
                text-3xl
                font-handwriting
                "
      >
        {subTitle}
      </h2>
    </div>
  );
};

export default Title;
