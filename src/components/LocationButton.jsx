import React, { useState } from "react";

const LocationButton = () => {
  const [showAddress, setShowAddress] = useState(false);

  const address =
    "B122 cheran managar,4th bus stop, Vilankurchi post,Coimbatore - 641035";
  const mapQuery = encodeURIComponent(address); // URL-encode the address
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const toggleAddress = () => {
    setShowAddress((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showAddress && (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer bg-white shadow-lg rounded-lg px-4 py-2 text-sm text-gray-800 max-w-xs w-72 hover:bg-gray-100 transition"
        >
          {address}
        </a>
      )}

      <button
        onClick={toggleAddress}
        className="w-14 h-14 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg flex items-center justify-center transition text-2xl"
      >
        🗺️
      </button>
    </div>
  );
};

export default LocationButton;
