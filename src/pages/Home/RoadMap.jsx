import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { milestones } from "../../docs/RoadMapData";

const Roadmap = () => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(0);

  const handleNext = () => {
    setSelectedMilestoneIndex((prevIndex) =>
      prevIndex < milestones.length - 1 ? prevIndex + 1 : 0
    );
  };

  const selectedMilestone = milestones[selectedMilestoneIndex];

  // Motion variants for smoother animation
  const variants = {
    initial: { opacity: 0, scale: 0.8, x: 100 }, // Start small, move from right
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // Smooth easing
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: -100, // Slide to the left on exit
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section className="py-16 bg-normal-100 text-normal-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-300 mb-5">
          Langkah Teknologi Hijau
        </h2>
        <p className="text-normal-200 mb-12">
          Jelajahi perjalanan teknologi hijau dari masa kini hingga masa depan
          dan lihat bagaimana teknologi dapat mengubah dunia.
        </p>

        {/* Roadmap */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          {/* Roadmap Line for Mobile */}
          <div className="absolute h-full w-1 bg-normal-200 top-0 left-1/2 transform -translate-x-1/2 lg:hidden"></div>

          {/* Roadmap Line for Desktop */}
          <div className="absolute w-full h-1 bg-normal-200 top-1/2 hidden lg:block"></div>

          {/* Milestones */}
          <div className="md:flex lg:flex-row flex-col justify-center w-full px-4 hidden lg:flex">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center cursor-pointer group mb-8 lg:mb-0 lg:mx-4 ${
                  index === selectedMilestoneIndex ? "scale-110" : ""
                }`}
                onClick={() => setSelectedMilestoneIndex(index)} // Change only on click
              >
                {/* Milestone Circle */}
                <div
                  className={`w-14 h-14 ${
                    index === selectedMilestoneIndex
                      ? "bg-primary-300 text-white border-4 border-primary-200"
                      : "bg-gray-100 border-4 border-primary-200"
                  } rounded-full flex items-center justify-center shadow-md transform transition-transform`}
                >
                  <span className="font-bold">{milestone.year}</span>
                </div>

                {/* Line Connector for Mobile */}
                {index < milestones.length - 1 && (
                  <div className="w-1 h-16 bg-primary-400 lg:hidden"></div>
                )}

                {/* Title */}
                <span className="text-lg mt-4 text-normal-300 px-4 lg:px-0">
                  {milestone.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Milestone Details with Smooth Animation */}
        <AnimatePresence mode="wait">
          {selectedMilestone && (
            <motion.div
              key={selectedMilestoneIndex}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-12 bg-primary-300/30 p-8 rounded-lg shadow-lg flex flex-col items-center"
            >
              {/* Mobile View: Show Only the Selected Milestone */}
              <div className="lg:hidden">
                <div
                  className={`w-14 h-14 ${
                    "bg-primary-300 text-white border-4 border-primary-200"
                  } rounded-full flex items-center justify-center shadow-md transform transition-transform`}
                >
                  <span className="font-bold">{selectedMilestone.year}</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-primary-300 mb-4">
                {selectedMilestone.title}
              </h3>
              <p className="text-lg text-primary-400 font-semibold mb-4">
                {selectedMilestone.description}
              </p>
              <img
                src={selectedMilestone.image}
                alt={selectedMilestone.title}
                className="w-full h-full md:h-96 object-cover rounded-lg mb-4"
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="mt-4 bg-primary-300 hover:bg-primary-300/90 text-white font-bold py-2 px-14 rounded-full transition-all"
              >
                Next
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Roadmap;
