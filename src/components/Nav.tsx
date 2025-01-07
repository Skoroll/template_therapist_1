import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import frUi from "../assets/fr/frUi.json";

function Nav() {
  return (
    <nav
      className="
        nav 
        flex 
        m-auto 
        mt-2
        md:mr-2
      "
    >
      <ul
        className="
          flex 
          gap-2 
          m-auto
          mr-0
          border-b-2
          p-1
        "
      >
        <li
          className="
            p-1
            cursor-pointer
            hover:bg-white 
            hover:text-black
            transition
            duration-1000
          "
        >
          <Link to="/">{frUi.main}</Link>
        </li>
        <li
          className="
            p-1
            cursor-pointer
            hover:bg-white 
            hover:text-black
            transition
            duration-1000
          "
        >
          <Link to="/prices">{frUi.prices}</Link>
        </li>
        <li
          className="
            p-1
            cursor-pointer
            hover:bg-white 
            hover:text-black
            transition
            duration-1000
          "
        >
          <Link to="/about">{frUi.about}</Link>
        </li>
        <li
          className="
            p-1
            cursor-pointer
            hover:bg-white 
            hover:text-black
            transition
            duration-1000
          "
        >
          <Link to="/contact">{frUi.contact}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;