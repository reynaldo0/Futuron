import React from "react";

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
        <h1 className="text-4xl md:text-7xl font-black mb-1 text-stroke-md pt-16 md:text-stroke-lg font-sans tracking-wide pb-5">
          NATURE IN
        </h1>
        <div className="relative w-full max-w-md mx-auto mb-6">
          <div className="absolute inset-x-5 top-1/2 border-t-4 border-primary-300" />
        </div>

        <p className="max-w-2xl text-lg md:text-xl pt-5 md:pt-0 mb-8">
          Platform ini menggabungkan teknologi ramah lingkungan
          untuk menyediakan data real-time, illustrasi lingkungan hijau, mengajak masyarakat untuk berkolaborasi dengan tetap peduli pada lingkungan.
        </p>

        <a href="#map">
          <button className="bg-primary-300 hover:bg-primary-300/90 text-white px-6 py-3 rounded-xl font-semibold ">
            Jelajahi Sekarang
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
