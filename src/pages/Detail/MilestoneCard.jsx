import React, { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: 2022,
    title: "Penerapan Drone Reboisasi",
    description:
      "Teknologi drone digunakan untuk menanam pohon otomatis di area yang terdampak deforestasi.",
    detailedDescription:
      "Inisiatif ini bertujuan untuk mempercepat proses reboisasi di daerah yang sulit dijangkau, menggunakan drone yang dilengkapi dengan teknologi canggih untuk menyebarkan biji-bijian secara efisien.",
    image: "/roadmap/drone.webp",
  },
  {
    year: 2025,
    title: "50% Energi Global dari Sumber Terbarukan",
    description:
      "Setengah dari energi global dipasok oleh sumber energi terbarukan, mengurangi ketergantungan pada bahan bakar fosil.",
    detailedDescription:
      "Dengan kemajuan teknologi dalam energi surya, angin, dan hidro, dunia semakin berkomitmen untuk beralih dari energi fosil, mendukung keberlanjutan dan mengurangi emisi karbon.",
    image: "/roadmap/turbin.jpg",
  },
  {
    year: 2030,
    title: "Mobil Listrik Menguasai Pasar",
    description:
      "Penerimaan mobil listrik yang masif di seluruh dunia, mengurangi emisi karbon secara signifikan.",
    detailedDescription:
      "Transisi ini diharapkan tidak hanya mengurangi polusi udara tetapi juga mempengaruhi industri otomotif secara keseluruhan, dengan banyak produsen beralih ke produksi mobil listrik.",
    image: "/roadmap/mobil.webp",
  },
  {
    year: 2035,
    title: "Penghentian Total Penggunaan Plastik Sekali Pakai",
    description:
      "Pencapaian penghentian penggunaan plastik sekali pakai di seluruh dunia, menggantinya dengan bahan ramah lingkungan.",
    detailedDescription:
      "Langkah ini bertujuan untuk mengurangi sampah plastik yang mencemari lingkungan, dengan peralihan ke alternatif biodegradable yang lebih aman bagi ekosistem.",
    image: "/roadmap/plastik.jpg",
  },
  {
    year: 2040,
    title: "Hutan Buatan untuk Mengatasi Deforestasi",
    description:
      "Penerapan hutan buatan skala besar untuk membantu pemulihan ekosistem yang rusak.",
    detailedDescription:
      "Inisiatif ini diharapkan dapat menciptakan habitat baru bagi flora dan fauna serta membantu menstabilkan iklim dengan menyerap karbon dioksida dari atmosfer.",
    image: "/roadmap/hutan.jpg",
  },
];

const Card = ({
  title,
  description,
  detailedDescription,
  image,
  isOpen,
  onToggle,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        if (isOpen) {
          onToggle();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div
      ref={cardRef}
      className="relative max-w-lg mx-auto bg-white rounded-3xl shadow-lg overflow-hidden md:w-[400px]"
    >
      <img
        src={image}
        className="w-full h-52 md:h-60 object-cover"
        alt={title}
        loading="lazy"
      />
      <div className="p-6">
        <h5 className="text-2xl font-bold mb-3">{title}</h5>
        <p className="text-gray-600 mb-4 text-md pb-7">{description}</p>
        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 mb-4 text-md pb-20">
            {detailedDescription}
          </p>
        </div>

        <div className="flex justify-start">
          <button
            onClick={onToggle}
            className="bg-primary-300 absolute bottom-4 text-white py-2 px-6 mt-4 hover:bg-primary-dark transition-colors duration-300 rounded-lg"
          >
            {isOpen ? "Tutup" : "Selangkapnya"}
          </button>
        </div>
      </div>
    </div>
  );
};

const MilestonesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-8 pt-20">
      <h1 className="text-4xl font-bold text-center mb-8">
      Menciptakan Masa Depan Hijau

      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {milestones.map((milestone, index) => (
          <Card
            key={milestone.year}
            title={milestone.title}
            description={milestone.description}
            detailedDescription={milestone.detailedDescription}
            image={milestone.image}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MilestonesPage;
