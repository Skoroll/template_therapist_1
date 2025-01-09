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
        <div className={`illustration relative h-auto md:h-full ${divClassName}`}>
            <img src={illuImage} alt={altTxt} className={`illustration-img h-full ${imgClassName}`}/>
            <p className="illustration-text flex absolute italic bottom-0 h-12 p-3 align-baseline bg-blackBG w-full text-white">{illuTxt}</p>
        </div>
    )
}

export default Illustration