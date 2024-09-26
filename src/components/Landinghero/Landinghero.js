import React, { useState, useEffect } from "react";
import Btn from "../btnRender/Btn";

function Landinghero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full flex justify-center items-center flex-col gap-8 h-full py-64 transition-opacity duration-500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-white text-7xl font-bold">Start Something Epic.</p>
      <div className="bg-white rounded-full">
        <Btn
          title="Create Account"
          styles="w-[12rem] rounded-full flex justify-center items-center bg-red-400 hover:cursor-pointer hover:opacity-80 transition-all delay-75 text-white font-bold text-lg py-2"
        />
      </div>
    </div>
  );
}

export default Landinghero;
