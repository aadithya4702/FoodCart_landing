import React from "react";

const MenuCard = ({ image, title, price, available }) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[85%] max-w-sm mx-auto bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <img
        className="h-48 w-full object-cover rounded-t-xl"
        src={image}
        alt={title}
      />

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-base font-medium text-green-600">${price}</p>
        </div>
        {!available && (
          <span className="mt-2 inline-block text-xs px-2 py-1 bg-red-100 text-red-700 rounded-md">
            Not Available
          </span>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
