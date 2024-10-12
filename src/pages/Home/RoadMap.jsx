import React, { useState } from "react";

const milestones = [
  {
    year: 2022,
    title: "Penerapan Drone Reboisasi",
    description: "Teknologi drone digunakan untuk menanam pohon otomatis di area yang terdampak deforestasi.",
    image: "/roadmap/drone.webp",
  },
  {
    year: 2025,
    title: "50% Energi Global dari Sumber Terbarukan",
    description: "Setengah dari energi global dipasok oleh sumber energi terbarukan, mengurangi ketergantungan pada bahan bakar fosil.",
    image: "/roadmap/turbin.jpg",
  },
  {
    year: 2030,
    title: "Mobil Listrik Menguasai Pasar",
    description: "Penerimaan mobil listrik yang masif di seluruh dunia, mengurangi emisi karbon secara signifikan.",
    image: "/roadmap/mobil.webp",
  },
  {
    year: 2035,
    title: "Penghentian Total Penggunaan Plastik Sekali Pakai",
    description: "Pencapaian penghentian penggunaan plastik sekali pakai di seluruh dunia, menggantinya dengan bahan ramah lingkungan.",
    image: "/roadmap/plastik.jpg",
  },
  {
    year: 2040,
    title: "Hutan Buatan untuk Mengatasi Deforestasi",
    description: "Penerapan hutan buatan skala besar untuk membantu pemulihan ekosistem yang rusak.",
    image: "/roadmap/hutan.jpg",
  },
];

const Roadmap = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleHover = (milestone) => {
    setSelectedMilestone(milestone);
  };

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Langkah Teknologi Hijau</h2>
        <p className="text-gray-300 mb-12">
          Jelajahi perjalanan teknologi hijau dari masa kini hingga masa depan dan lihat bagaimana teknologi dapat mengubah dunia.
        </p>

        {/* Roadmap */}
        <div className="relative flex items-center justify-center">
          {/* Roadmap Line */}
          <div className="absolute w-full h-1 bg-gray-500 top-1/2"></div>

          {/* Milestones */}
          <div className="flex justify-between w-full px-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => handleHover(milestone)}
                onClick={() => handleHover(milestone)}
              >
                {/* Milestone Circle */}
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 transition-transform">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>

                {/* Title */}
                <span className="text-lg mt-4 text-gray-300">{milestone.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Milestone Details */}
        {selectedMilestone && (
          <div className="mt-12 bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-3xl font-bold text-green-400 mb-4">{selectedMilestone.title}</h3>
            <p className="text-lg text-gray-300 mb-4">{selectedMilestone.description}</p>
            <img src={selectedMilestone.image} alt={selectedMilestone.title} className="w-full h-full object-cover rounded-lg" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Roadmap;
