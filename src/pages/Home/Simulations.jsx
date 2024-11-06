import React, { useState } from "react";
import { motion } from "framer-motion";
import SimulationsData from "../../docs/SimulationsData.jsx";
import Ball from "../../components/Ball.jsx";

const Simulations = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  // Function to generate gradient color based on slider value
  const getSliderBackground = (value) => {
    const red = Math.min(255, value * 2.55); // Higher value, more red
    const green = Math.min(255, (100 - value) * 2.55); // Lower value, more green
    return `linear-gradient(to left, rgb(${green}, 255, 100), rgb(255, ${red}, 100))`; // Reverse gradient order
  };

  return (
    <section className="py-16">
      <img
        src="/background/wave.svg"
        alt="wave"
        className="w-full"
        draggable="false"
      />
      <div className="bg-primary-200 pb-12">
        <div className="container mx-auto text-center px-4 md:px-0">
          {/* Title and Subtitle */}
          <h2 className="text-3xl md:text-5xl pt-10 font-bold text-white mb-8">
            {SimulationsData.simulationDescription.title}
          </h2>
          <p className="text-gray-100 mb-8">
            {SimulationsData.simulationDescription.subtitle}
          </p>

          {/* Earth Simulation */}
          <div className="relative w-full h-96 mb-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            {/* Background: Healthy Earth */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
                backgroundImage: `url(${SimulationsData.earthImages.healthy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(1.1)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Background: Damaged Earth */}
            <motion.div
              className="absolute top-0 right-0 w-full h-full"
              style={{
                clipPath: `inset(0 0 0 ${sliderValue}%)`,
                backgroundImage: `url(${SimulationsData.earthImages.damaged})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.7)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Overlay effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-100 to-primary-200 opacity-20 pointer-events-none" />
          </div>

          {/* Slider Control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-1/2 cursor-pointer scale-150 md:scale-100 border-2 border-white appearance-none h-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 transition transform hover:scale-105"
            style={{
              background: getSliderBackground(sliderValue),
            }}
          />

          <div className="flex justify-between mt-4 md:px-10">
            <span className="text-white font-bold hidden md:block">
              {SimulationsData.sliderLabels.damage}
            </span>
            <span className="text-white font-bold hidden md:block">
              {SimulationsData.sliderLabels.technology}
            </span>
          </div>

          {/* Additional information below slider */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left md:px-10">
            {SimulationsData.cards.map((card, index) => (
              <div
                key={index}
                className={`bg-white text-gray-900 border-[2.5px] ${card.borderColor} p-6 rounded-xl shadow-lg relative overflow-hidden group`}
              >
                <h3
                  className={`text-xl font-bold ${card.title === "Bumi Lestari"
                      ? "text-primary-300"
                      : "text-red-700"
                    } group-hover:text-primary-400 mb-2 relative z-10`}
                >
                  {card.title}
                </h3>
                <p className="text-gray-700 group-hover:text-black relative z-10">
                  {card.description}
                </p>

                {/* Hover Background Animation */}
                <div
                  className={`absolute inset-0 ${card.hoverColor} transform scale-y-0 group-hover:scale-y-100 transition-all duration-500 ease-in-out origin-center z-0`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulations;
