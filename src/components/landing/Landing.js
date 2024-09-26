import React from "react";
import Navbar from "../navbar/Navbar";
import Landinghero from "../Landinghero/Landinghero";
import Team from "../team/Team";
import Bgimg from "../../images/background_landing.jpeg"; // Importing the image
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <div className="w-full pb-80 flex flex-col  bg-black">
      <div
        className="bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${Bgimg})`,
        }}
      >
        <Navbar />
        <Landinghero />
      </div>
      <Team />
      <Footer />
    </div>
  );
}

export default Landing;
