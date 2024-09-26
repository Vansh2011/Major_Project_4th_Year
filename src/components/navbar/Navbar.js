import React from "react";
import Navigation from "./Navigation";
import Btn from "../btnRender/Btn";

const navLinks = ["Navlink", "Navlink", "Navlink"];
function Navbar() {
  return (
    <header className="w-full h-[5rem] flex justify-between items-center pr-4 bg-none sticky top-2">
      <div>
        <Navigation navLinks={navLinks} />
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="text-white font-bold text-lg hover:text-red-600 transition-all delay-75 hover:cursor-pointer">
          <h2> Languages </h2>
        </div>
        <div>
          <Btn
            title="Login"
            styles="w-[9rem] rounded-full flex justify-center items-center bg-white hover:cursor-pointer font-bold text-lg py-2 "
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
