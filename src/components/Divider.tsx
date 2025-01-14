import React from "react";

interface DividerProp {
    className?: string;

}

function Divider({ className = "" }: DividerProp) {
    return (
        <div className={`divider flex items-center gap-4 ${className}`}>
            <div className="flex-1 h-px bg-secondColor "></div>
            <div className="flex-1 h-px bg-secondColor "></div>
        </div>
    );
}

export default Divider;
