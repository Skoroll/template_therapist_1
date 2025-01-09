import React, { ReactNode } from "react";


interface SideArticleProps {
    partOne : ReactNode;
    partTwo : ReactNode;
    baseClasses?: string;
    wrapperClasses?: string;
    partOneClasses?: string;
    partTwoClasses?: string;
    title: string;
}

function SideArticle({title, wrapperClasses, partOne, partTwo, baseClasses,partOneClasses, partTwoClasses}: SideArticleProps){
    return(
        <div className={`side-article flex bg-gray-100 gap-3 p-3 ${baseClasses}`}>
          <h2 className="-title text-2xl border-b-2 border-t-2">{title}</h2>
        <div className={`side-article-wrapper flex ${wrapperClasses}`}>
            <div className={`partOne x w-full md:w-full ${partOneClasses}`}>
              {partOne}
            </div>
            <div className={`partTwo w-full md:w-full ${partTwoClasses}`}>
              {partTwo}
            </div>
          </div>
        </div>
    )
}

export default SideArticle