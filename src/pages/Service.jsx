// Service.jsx
import React from "react";
import SectionHeading from "../components/Service/SectionHeading";
import ServiceList from "../components/Service/ServiceList";
import Image from "../assets/service1.jpg";

const Service = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Explore Our Solutions"
        subTitle="Check out how we can help you stay ahead in the market!"
      />
      <div className="grid lg:grid-cols-2 gap-20 mt-20">
        <ServiceList />
        <div>
          <img
            src={Image}
            alt="Service Visual Representation"
            className="w-2/3 h-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
