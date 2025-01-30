import React from "react";
import { FaCloud, FaSolarPanel, FaTree } from "react-icons/fa";
import SolutionsData from "../../docs/SolutionsData.jsx";

const TechnologySolutions = () => {
  return (
    <section className="py-16 text-primary-400" id="solutions">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl pt-20 md:text-5xl font-bold text-center mb-12">
          Solusi Teknologi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  md:px-10">
          {SolutionsData.map((solution) => (
            <div
              key={solution.id}
              className="bg-white text-gray-900 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform hover:shadow-2xl hover:bg-primary-200 hover:text-white group border-2 border-y-primary-300"
            >
              <div className="flex justify-center mb-4">
                {solution.icon === "cloud" && (
                  <FaCloud
                    className={`text-4xl ${solution.iconClass} transition-colors group-hover:${solution.hoverIconClass}`}
                  />
                )}
                {solution.icon === "tree" && (
                  <FaTree
                    className={`text-4xl ${solution.iconClass} transition-colors group-hover:${solution.hoverIconClass}`}
                  />
                )}
                {solution.icon === "solarPanel" && (
                  <FaSolarPanel
                    className={`text-4xl ${solution.iconClass} transition-colors group-hover:${solution.hoverIconClass}`}
                  />
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {solution.title}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-100 text-center">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySolutions;
