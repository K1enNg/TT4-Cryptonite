// SectionHeading.jsx
import React from "react";

function SectionHeading({ title, subTitle }) {
  return (
    <div className="bg-purple-800 text-white p-4 rounded-lg">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <p className="text-xl text-center">{subTitle}</p>
    </div>
  );
}

export default SectionHeading;
