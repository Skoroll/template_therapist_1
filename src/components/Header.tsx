import React from "react";
import Nav from "./Nav.tsx";
import LangSetting from "./LangSetting.tsx";

function Header() {
  return (
    <header
      className="
            header 
            flex 
            flex-col 
            z-20 
            p-3 
            text-white
             relative
            md:flex-row

             "
    >
      <p
        className="
                h-10 
                w-12 
                border
                m-auto
                
                md:m-0
                "
      >
        Logo
      </p>
      <Nav />
      <LangSetting />
    </header>
  );
}

export default Header;
