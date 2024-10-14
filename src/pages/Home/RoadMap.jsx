import React, { useState } from "react";

const milestones = [
  {
    year: 2022,
    title: "Penerapan Drone Reboisasi",
    description:
      "Teknologi drone digunakan untuk menanam pohon otomatis di area yang terdampak deforestasi.",
    image: "/roadmap/drone.webp",
  },
  {
    year: 2025,
    title: "50% Energi Global dari Sumber Terbarukan",
    description:
      "Setengah dari energi global dipasok oleh sumber energi terbarukan, mengurangi ketergantungan pada bahan bakar fosil.",
    image: "/roadmap/turbin.jpg",
  },
  {
    year: 2030,
    title: "Mobil Listrik Menguasai Pasar",
    description:
      "Penerimaan mobil listrik yang masif di seluruh dunia, mengurangi emisi karbon secara signifikan.",
    image: "/roadmap/mobil.webp",
  },
  {
    year: 2035,
    title: "Penghentian Total Penggunaan Plastik Sekali Pakai",
    description:
      "Pencapaian penghentian penggunaan plastik sekali pakai di seluruh dunia, menggantinya dengan bahan ramah lingkungan.",
    image: "/roadmap/plastik.jpg",
  },
  {
    year: 2040,
    title: "Hutan Buatan untuk Mengatasi Deforestasi",
    description:
      "Penerapan hutan buatan skala besar untuk membantu pemulihan ekosistem yang rusak.",
    image: "/roadmap/hutan.jpg",
  },
];

const Roadmap = () => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(0);

  const handleHover = (index) => {
    setSelectedMilestoneIndex(index);
  };

  const handleNext = () => {
    setSelectedMilestoneIndex((prevIndex) =>
      prevIndex < milestones.length - 1 ? prevIndex + 1 : 0
    );
  };

  const selectedMilestone = milestones[selectedMilestoneIndex];

  return (
    <section className="py-16 bg-normal-100 text-normal-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-300 mb-8">
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
          <div className="flex lg:flex-row flex-col justify-center w-full px-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center cursor-pointer group mb-8 lg:mb-0 lg:mx-4 ${
                  index === selectedMilestoneIndex ? "scale-110" : ""
                }`}
                onMouseEnter={() => handleHover(index)}
                onClick={() => handleHover(index)}
              >
                {/* Milestone Circle */}
                <div
                  className={`w-12 h-12 ${
                    index === selectedMilestoneIndex
                      ? "bg-primary-100 border-4 border-white"
                      : "bg-primary-200"
                  } rounded-full flex items-center justify-center shadow-md transform transition-transform`}
                >
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>

                {/* Line Connector for Mobile */}
                {index < milestones.length - 1 && (
                  <div className="w-1 h-16 bg-normal-200 lg:hidden"></div>
                )}

                {/* Title */}
                <span className="text-lg mt-4 text-normal-300 px-4 lg:px-0">
                  {milestone.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Milestone Details */}
        {selectedMilestone && (
          <div className="mt-12 bg-normal-200 p-8 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-3xl font-bold text-primary-300 mb-4">
              {selectedMilestone.title}
            </h3>
            <p className="text-lg text-normal-300 mb-4">
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
              className="mt-4 bg-primary-100 hover:bg-primary-200 text-white font-bold py-2 px-6 rounded-full transition-all"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Roadmap;
