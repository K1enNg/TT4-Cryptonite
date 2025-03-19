// SectionHeading.jsx
import React from "react";

function SectionHeading({ title, subTitle }) {
  return (
    <div className="text-white p-4 rounded-lg mt-[-40px]">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <p className="text-xl text-center">{subTitle}</p>
    </div>
  );
}

export default SectionHeading;
