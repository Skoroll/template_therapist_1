import React from "react";

interface DescriptionProps {
    subtitle: string;
    content: string;
}

function DescriptionText({subtitle, content}: DescriptionProps) {
    return(
        <div className="description-text p-3">
            <h3 className="desc-sub text-2xl">{subtitle}</h3>
            <p className="desc-text" dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    )
}

export default DescriptionText