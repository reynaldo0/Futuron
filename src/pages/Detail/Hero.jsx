import React from "react";
import { FlipWords } from "../../components/FlipWords";

const words = [
  "Mari Kita Lindungi Lingkungan Bersama!",
  "Jelajahi Solusi Ramah Lingkungan!",
  "Dukung Bumi dengan Teknologi Hijau!",
  "Bergabunglah dalam Aksi Nyata untuk Alam!"
];

const HeroDetail = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{
        backgroundImage: `url(/background/hero.gif)`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="absolute bottom-0 left-0 w-full h-60 via-white/20 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        {/* Teks dengan FlipWords */}
        <div className="mt-1">
          <h1 className="text-4xl md:text-6xl font-bold md:mx-40">
            <FlipWords className="text-center" words={words} />
          </h1>
        </div>
        <div className="mt-96 absolute">
        <a
            href="#about-section"
            className="mt-8 inline-block px-6 py-3 bg-white text-green-900 font-semibold text-lg rounded-lg hover:bg-gray-200 transition-all"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
