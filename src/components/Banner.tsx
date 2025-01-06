import React from "react";

interface BannerProps {
    bannerIMG: string; 
}

function Banner({ bannerIMG }: BannerProps) {
    return (
        <div className="banner h-60 md:h-44 w-full absolute top-0 left-0 z-0">
            <img
                className="w-full h-full  object-cover"
                src={bannerIMG} 
                alt="Banner" 
            />
        </div>
    );
}

export default Banner;
