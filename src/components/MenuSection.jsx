import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import axios from "axios";
import api from "../api/AxiosInstance";

const MenuSection = () => {
  const [showAll, setShowAll] = useState(false);

  const [menuItems, setMenuItems] = useState([]);

  const displayedItems = showAll ? menuItems : menuItems.slice(0, 6);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch food items
        const response = await api.get("/items-list");
        const productData = response.data.data;

        if (Array.isArray(productData)) {
          setMenuItems(productData); // ✅ set to menuItems here
        } else {
          throw new Error("Invalid product data format");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="menu" className="w-full px-4 py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Menu Section
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Our freshly prepared, wholesome meals made with love
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full ${
            showAll ? "overflow-y-auto max-h-screen" : ""
          }`}
        >
          {displayedItems.map((item, index) => (
            <MenuCard
              key={index}
              image={item.image}
              title={item.name}
              price={item.price}
              available={item.is_available === 1}
            />
          ))}
        </div>

        {!showAll && menuItems.length > 6 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-10 px-6 py-2 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-700 transition duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
