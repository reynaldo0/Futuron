import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col  md:flex-row items-center justify-between w-full h-screen bg-green-50">
      
      {/* Left Content */}
      <div className="md:w-1/2 px-8 md:px-16 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Membangun Masa Depan Berkelanjutan
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Kami berkomitmen untuk menggunakan teknologi hijau dalam setiap langkah yang kami ambil. Bersama, kita menciptakan dampak positif bagi lingkungan dan mewariskan planet yang lebih sehat untuk generasi mendatang.
        </p>
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all">
          Pelajari Lebih Lanjut
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 h-full flex justify-center items-center">
        <img
          src="/illustrasi/heroabout.png"
          alt="Inovasi Teknologi Hijau"
          className="w-10/12 h-auto rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
