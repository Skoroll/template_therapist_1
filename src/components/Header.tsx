import React from "react";
import Nav from "./Nav";
import LangSetting from "./LangSetting";

function Header() {
  return (
    <header
      className="
            header 
            flex-c
            z-20 
            p-paddingS 
            text-white
             relative
            md:flex-row

             "
    >
      <p
        className="
          h-12 
          w-12 
          border
          m-auto
          flex
          justify-center
          items-center 
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
