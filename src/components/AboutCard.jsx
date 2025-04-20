import React from "react";

const AboutCard = ({ title, content, logo }) => {
  return (
    <div className="w-[90%] max-w-xs bg-gradient-to-tr from-white via-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out border border-gray-200">
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
        <img
          className="h-full w-full object-cover rounded-t-2xl"
          src={logo}
          alt="quality"
        />
      </div>
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default AboutCard;
