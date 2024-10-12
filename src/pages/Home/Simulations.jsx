import React, { useState } from "react";
import { motion } from "framer-motion";
import BumiRusak from '../../../public/bumi/rusak.jpg';
import BumiSehat from '../../../public/bumi/sehat.jpg';


const Simulations = () => {
  const [sliderValue, setSliderValue] = useState(50); // Nilai slider dimulai di tengah

  // Fungsi untuk menangani perubahan slider
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <section className=" py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-8">
          Simulasi Masa Depan Bumi
        </h2>
        <p className="text-gray-400 mb-8">
          Seret slider untuk melihat perbedaan Bumi dengan atau tanpa teknologi
          yang digunakan untuk melestarikan lingkungan.
        </p>

        {/* Simulasi Bumi */}
        <div className="relative w-full h-96 mb-8 bg-gray-700 rounded-lg overflow-hidden">
          {/* Background: Healthy Earth */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              clipPath: `inset(0 ${100 - sliderValue}% 0 0)`, // Mengubah area yang terpotong berdasarkan nilai slider
              backgroundImage: `url(${BumiSehat})`, // Gambar bumi sehat
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(1.1)" // Meningkatkan kecerahan gambar
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Background: Damaged Earth */}
          <motion.div
            className="absolute top-0 right-0 w-full h-full"
            style={{
              clipPath: `inset(0 0 0 ${sliderValue}%)`, // Memotong gambar bumi rusak sesuai nilai slider
              backgroundImage: `url(${BumiRusak})`, // Gambar bumi rusak
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)" // Membuat gambar lebih gelap untuk efek rusak
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Overlay efek transisi */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 to-red-500 opacity-30 pointer-events-none" />
        </div>

        {/* Slider Control */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-1/2 cursor-pointer appearance-none bg-gray-600 h-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />

        <div className="flex justify-between mt-4 text-gray-600">
          <span>🌍 Teknologi Melestarikan</span>
          <span>🌍 Kerusakan Lingkungan</span>
        </div>

        {/* Informasi tambahan di bawah slider */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              Bumi Lestari
            </h3>
            <p className="text-gray-300">
              Teknologi digunakan untuk melestarikan hutan, menjaga kualitas
              udara, mengurangi suhu global, dan melindungi populasi satwa liar.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-red-400 mb-2">
              Bumi Rusak
            </h3>
            <p className="text-gray-300">
              Teknologi tidak digunakan dengan bijak, menyebabkan hutan rusak,
              kualitas udara menurun, suhu global naik, dan populasi satwa liar
              berkurang drastis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulations;
