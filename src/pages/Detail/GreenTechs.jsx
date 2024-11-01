import React from "react";

const GreenTech = () => {
  return (
    <>
      {/* Importance Section */}
      <section className="py-20 bg-green-50">
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
            <ul className="list-disc list-inside text-lg text-gray-800 mb-6">
              <li>🌍 Menurunkan emisi karbon dan polusi udara.</li>
              <li>
                🔋 Mengurangi ketergantungan pada sumber daya tak terbarukan.
              </li>
              <li>🌱 Mendorong penggunaan sumber energi terbarukan.</li>
              <li>🐾 Melestarikan keanekaragaman hayati dan ekosistem.</li>
            </ul>
          </div>

          {/* Right Column: Image or Illustration */}
          <div className="md:w-1/2 flex justify-center">
            {/* Placeholder for an illustration or graphic */}
            <div className="bg-green-200 rounded-lg p-8 shadow-lg flex items-center justify-center h-full w-10/12">
              <span className="text-green-800 text-6xl">🌿</span>{" "}
              {/* Example illustration, can replace with an image */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreenTech;
