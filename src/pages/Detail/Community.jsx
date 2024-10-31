import React from 'react';

const communityShowcase = [
  {
    name: "Program Reboisasi Komunitas",
    description: "Masyarakat bekerja sama untuk menanam pohon di area yang terdampak.",
    date: "Januari 2024",
    image: "/comunity/reboisasi.jpeg",
  },
  {
    name: "Kampanye Pengurangan Plastik",
    description: "Inisiatif lokal untuk mengurangi penggunaan plastik di toko dan pasar.",
    date: "Maret 2024",
    image: "/comunity/plastic.jpeg",
  },
  {
    name: "Workshop Energi Terbarukan",
    description: "Pelatihan tentang penggunaan panel surya dan energi angin untuk rumah.",
    date: "Mei 2024",
    image: "/comunity/solar.jpeg",
  },
];

const CommunityShowcase = () => {
  return (
    <div className="container mx-auto p-8 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-400 text-center mb-8">Kolaborasi dan Komunitas</h1>
      <p className="text-center text-lg mb-6">
        Bergabunglah dengan kami dalam berbagai inisiatif untuk mendukung keberlanjutan dan lingkungan.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communityShowcase.map((event) => (
          <div key={event.name} className="bg-white border-2 border-primary-300 rounded-lg shadow-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{event.name}</h3>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <p className="text-gray-500 italic">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityShowcase;
