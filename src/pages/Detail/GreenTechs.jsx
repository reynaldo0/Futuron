import React from "react";
import { FaGlobeAmericas, FaBatteryFull, FaLeaf, FaGem } from "react-icons/fa";
import leafImage from '/illustrasi/detail.png'; // Adjust the path accordingly

const GreenTech = () => {
  return (
    <>
      {/* Importance Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Mengapa Teknologi Hijau Penting?
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              Mengadopsi teknologi hijau sangat penting untuk menciptakan dunia
              yang lebih bersih dan berkelanjutan. Berikut adalah alasan utama
              untuk melakukannya:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-800 mb-6 space-y-2">
              <li className="flex items-center">
                <FaGlobeAmericas className="text-green-600 mr-2" />
                Menurunkan emisi karbon dan polusi udara.
              </li>
              <li className="flex items-center">
                <FaBatteryFull className="text-green-600 mr-2" />
                Mengurangi ketergantungan pada sumber daya tak terbarukan.
              </li>
              <li className="flex items-center">
                <FaLeaf className="text-green-600 mr-2" />
                Mendorong penggunaan sumber energi terbarukan.
              </li>
              <li className="flex items-center">
                <FaGem className="text-green-600 mr-2" />
                Melestarikan keanekaragaman hayati dan ekosistem.
              </li>
            </ul>
          </div>

          {/* Right Column: Image or Illustration */}
          <div className="md:w-1/2 flex justify-center">
            {/* Leaf Image */}
            <div className="rounded-lg p-2 md:flex items-center justify-center h-full">
              <img src={leafImage} alt="Leaf Illustration" className="h-auto max-w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreenTech;
