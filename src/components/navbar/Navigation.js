import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";

function Navigation({ navLinks }) {
  return (
    <nav className="flex justify-center items-center gap-12">
      <Link to="/" className="w-[50%]">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="flex justify-between gap-6 items-center">
        {navLinks.map((item, index) => (
          <Link
            to="/"
            key={index}
            className="text-white font-bold text-lg hover:text-red-600 transition-all delay-75"
          >
            <p>{item}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
