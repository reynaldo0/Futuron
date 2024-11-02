import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background/hero.gif')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/100 via-white/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl mb-7 pt-12 font-bold md:font-bold tracking-widest md:pb-2 font-sans">
          FUTURON
        </h1>

        <div className="relative w-full max-w-md mx-auto mb-6">
          <div className="absolute inset-x-5 top-1/2 border-t-4 border-primary-300" />
        </div>

        <p className="max-w-2xl text-lg md:text-xl pt-5 md:pt-0 mb-8">
          Futoron adalah platfrom untuk menggabungkan teknologi ramah lingkungan untuk
          menyediakan berbagai informasi, illustrasi lingkungan hijau, berbagai data, serta menyediakan informasi event untuk berkolaborasi dengan tetap peduli pada lingkungan.
        </p>

        <Link to="solutions" smooth={true} duration={500} offset={-50}>
          <button className="bg-primary-300 rounded-full hover:bg-primary-300/80 text-white px-6 py-3 font-semibold ">
            Jelajahi Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
