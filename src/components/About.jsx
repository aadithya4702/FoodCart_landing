import React, { useState } from "react";
import AboutCard from "./AboutCard";
import best from "../assets/best.png";
import organic from "../assets/orrganic.jpg";
import fresh from "../assets/fresh.jpg";

const About = () => {
  const [cardItems, setCardItems] = useState([
    {
      title: "Fuel your body, feed your soul.",
      content:
        "At D'square, we create meals that are as nutritious as they are delicious—made from clean, wholesome ingredients.",
      logo: best,
    },
    {
      title: `🥗 Fresh. Organic. Flavorful.`,
      content:
        "Every ingredient we use is carefully selected—organic, locally sourced, and free from artificial preservatives. Our goal? To help you eat better and feel amazing.",
      logo: organic,
    },
    {
      title: "🌿 Eat Clean, Feel Great",
      content:
        "We believe in balance, not restriction. From plant-powered bowls to protein-rich plates, our menu supports your wellness goals without sacrificing taste.",
      logo: fresh,
    },
  ]);
  return (
    <section className="w-full px-4 py-10 bg-gray-50">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Why Choose Us for Your Healthy Food
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mb-10">
          We're committed to cooking healthy meals to ensure they retain their
          freshness and nutritional value, guaranteeing a delightful experience.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {cardItems.map((item, index) => (
            <AboutCard
              key={index}
              title={item.title}
              content={item.content}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
