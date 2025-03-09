// ServiceList.js
import React from "react";

const services = [
  {
    name: "Market Analysis",
    description: "Detailed analysis of current market trends.",
  },
  {
    name: "Portfolio Management",
    description: "Manage your investments and track changes in real time.",
  },
  {
    name: "Crypto Education",
    description: "Learn about cryptocurrency and market dynamics.",
  },
];

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
