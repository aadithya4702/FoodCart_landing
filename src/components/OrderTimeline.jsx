import React from "react";
import orderImg from "../assets/order.png";
import foodImg from "../assets/prepare.png";
import deliveryImg from "../assets/deliver.png";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      image: orderImg,
      title: "Order Online",
      description:
        "Browse our menu and place your order easily through our platform.",
    },
    {
      id: 2,
      image: foodImg,
      title: "Food Preparation",
      description:
        "Our chefs prepare your meal fresh with high-quality ingredients.",
    },
    {
      id: 3,
      image: deliveryImg,
      title: "Delivered to You",
      description:
        "Our delivery partners bring the food to your doorstep in no time.",
    },
  ];

  return (
    <section className="bg-white py-14 flex items-center flex-col px-4 md:px-10">
      <h2 className="text-center text-rose-500 font-semibold text-xl mb-2">
        How It Works
      </h2>
      <h3 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        Order to Doorstep
      </h3>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs w-full"
          >
            {/* Show text on top for even index (step 2) only on medium and larger screens */}
            {index % 2 === 1 && (
              <div className="hidden md:block mb-4">
                <h4 className="text-xl font-semibold  text-gray-800 mb-2">
                  <span className=" bg-orange-500 text-white p-2 mr-1 rounded-full">
                    {step.id}
                  </span>
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            )}

            <img
              src={step.image}
              alt={step.title}
              className="w-40 h-40 object-contain mb-4 md:mb-0"
            />

            {/* Always show text below on small screens, and for odd-index steps on larger screens */}
            <div className="block md:hidden text-center">
              <h4 className="text-xl font-semibold  text-gray-800 mb-2">
                <span className=" bg-orange-500 text-white p-2 mr-1 rounded-full">
                  {step.id}
                </span>
                {step.title}
              </h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>

            {/* For large screens, show text below for odd-index steps */}
            {index % 2 !== 1 && (
              <div className="hidden md:block mt-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  <span className=" bg-orange-500 text-white p-2 mr-1 rounded-full">
                    {step.id}
                  </span>
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
