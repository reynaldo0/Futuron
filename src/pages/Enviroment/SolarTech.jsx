// SolarTechHero.jsx
import React from 'react';
import { Leaf, Sun, Recycle, Droplet, TreeDeciduous } from 'lucide-react'; // Tambahkan ikon yang sesuai
import TypedText from '../../components/Typed';

const SolarTechHero = () => {
  return (
    <div className="bg-white pb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary-400">
          Pengembangan Alam <TypedText/>
        </h1>
        <p className="text-lg mb-16 text-primary-400/90">
          Memperbaiki dan melestarikan lingkungan dengan energi bersih dan berkelanjutan.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden border-2 border-y-primary-300"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="bg-green-200 p-3 rounded-full mb-4">
                  {tech.icon} {/* Ikon untuk teknologi sesuai konten */}
                </div>
                <h2 className="text-xl font-semibold">{tech.title}</h2>
                <p className="mt-2 text-center">{tech.description}</p>
              </div>
            </div>
          ))}
        </section>

        <h2 className="text-3xl font-bold mb-4 text-primary-400 pt-16">Manfaat Teknologi Surya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300 flex items-center border-y-2 border-primary-300"
            >
              <div className="bg-green-100 p-4 rounded-full mr-4 flex items-center justify-center">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Data Teknologi
const technologies = [
  {
    title: "Panel Surya untuk Pertanian",
    description: "Meningkatkan hasil pertanian dengan penggunaan energi surya.",
    icon: <Sun className="text-yellow-500 text-4xl" />, // Gunakan ikon Sun
  },
  {
    title: "Sistem Pemurnian Air",
    description: "Teknologi inovatif untuk pemurnian air dengan energi bersih.",
    icon: <Droplet className="text-blue-500 text-4xl" />, // Gunakan ikon Droplet
  },
  {
    title: "Restorasi Ekosistem",
    description: "Menggunakan teknologi untuk mengembalikan keseimbangan alam.",
    icon: <TreeDeciduous className="text-green-600 text-4xl" />, // Gunakan ikon TreeDeciduous
  },
];

// Data Manfaat
const benefits = [
  {
    title: "Meningkatkan Produktivitas Pertanian",
    description: "Menggunakan energi surya untuk mendukung pertanian berkelanjutan.",
    icon: <Leaf className="text-green-600 text-3xl" />,
  },
  {
    title: "Energi Bersih dari Matahari",
    description: "Mengandalkan tenaga surya untuk sumber energi berkelanjutan.",
    icon: <Sun className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Keberlanjutan dan Daur Ulang",
    description: "Mendorong praktik daur ulang dan keberlanjutan.",
    icon: <Recycle className="text-green-600 text-3xl" />,
  },
];

export default SolarTechHero;
