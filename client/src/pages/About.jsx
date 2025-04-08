import React from "react";

import Partnership from "../components/About/Partnership";
import Establishment from "../components/About/Establishment";
import Stats from "../components/About/Stats";
import Slogan from "../components/About/Slogan";
import Info from "../components/About/Info";


const About = () => {

  return (

    <div className="flex flex-col items-center w-full p-6 text-white mt-[-180px]">
      <div className="max-w-3xl">
        <div>
          <Slogan />
        </div>

        <div className="flex justify-center mt-[90px]">
          <Stats />
        </div>

        <div className="flex justify-center mt-[90px]">
          <Partnership />
        </div>

        <div className="flex justify-center mt-[90px]">
          <Establishment />
        </div>

        <div>
          <Info />
        </div>

      </div>
    </div >
  );
};



export default About;

