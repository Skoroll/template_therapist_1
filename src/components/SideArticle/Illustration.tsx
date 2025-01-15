import React from "react";

interface IllustrationProps {
    illuImage : string;
    altTxt: string;
    illuTxt: string;
    divClassName: string;
    imgClassName: string;

}

function Illustration({illuImage, altTxt, divClassName, imgClassName, illuTxt }: IllustrationProps) {
    return(
        <div className={`illustration relative max-h-80 w-full md:max-h-80 md:h-full ${divClassName}`}>
            <img src={illuImage} alt={altTxt} className={`illustration-img max-h-80  h-full w-full ${imgClassName}`}/>
            <p className="illustration-text flex absolute italic bottom-0 h-12 p-paddingS align-baseline bg-blackBG w-full text-white">{illuTxt}</p>
        </div>
    )
}

export default Illustration