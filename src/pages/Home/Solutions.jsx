import React from "react";
import { FaCloud, FaTree, FaSolarPanel } from "react-icons/fa";

const TechnologySolutions = () => {
  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Solusi Teknologi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Pemantauan Polusi dengan Sensor AI */}
          <div className="bg-white text-gray-900 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform hover:shadow-2xl hover:bg-primary-200 hover:text-white group">
            <div className="flex justify-center mb-4">
              <FaCloud className="text-4xl text-blue-500 transition-colors group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Pemantauan Polusi dengan Sensor AI
            </h3>
            <p className="text-gray-700 group-hover:text-gray-100 text-center">
              Sensor cerdas berbasis AI dapat memantau kualitas udara dan
              memberikan data waktu nyata untuk mengurangi polusi.
            </p>
          </div>

          {/* Kolom 2: Reboisasi dengan Drone */}
          <div className="bg-white text-gray-900 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform hover:shadow-2xl hover:bg-primary-200 hover:text-white group">
            <div className="flex justify-center mb-4">
              <FaTree className="text-4xl text-green-500 transition-colors group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Reboisasi dengan Drone
            </h3>
            <p className="text-gray-700 group-hover:text-gray-100 text-center">
              Drone modern dapat membantu menanam ribuan pohon secara otomatis
              di area yang terdampak deforestasi.
            </p>
          </div>

          {/* Kolom 3: Energi Terbarukan dengan Teknologi Surya */}
          <div className="bg-white text-gray-900 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform hover:shadow-2xl hover:bg-primary-200 hover:text-white group">
            <div className="flex justify-center mb-4">
              <FaSolarPanel className="text-4xl text-yellow-500 transition-colors group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Energi Terbarukan dengan Teknologi Surya
            </h3>
            <p className="text-gray-700 group-hover:text-gray-100 text-center">
              Panel surya efisien terbaru mengubah energi matahari menjadi
              tenaga yang bersih dan ramah lingkungan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySolutions;
