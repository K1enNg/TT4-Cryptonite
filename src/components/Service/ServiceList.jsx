// ServiceList.js
import React from "react";
import services from "../../contexts/service.js"


const ServiceList = () => {
  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-purple-600 text-white p-4 rounded-lg shadow"
        >
          <h2 className="text-lg font-bold">{service.name}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
