import React from "react";
import { Link } from "react-scroll";
import TypedText from "../../components/Typed";

const Hero = () => {
  return (
    <section className="pb-24 md:pb-0">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-screen">
        {/* Left Content */}
        <div className="md:w-1/2 px-5 md:px-16 text-left space-y-3 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800">
          Data Sumber<TypedText/>
          </h1>
          <p className="text-lg md:text-xl text-justify md:text-left text-gray-700 mb-4">
          Temukan berbagai sumber data penting tentang teknologi hijau untuk mendukung keberlanjutan dan inisiatif ramah lingkungan. Jelajahi data mengenai energi terbarukan, efisiensi energi, pengelolaan limbah, dan masih banyak lagi.
          </p>
          <div className="pt-3">
            <Link to="events" smooth={true} duration={500} offset={-50}>
              <button className="bg-primary-300 rounded-full text-white py-2 px-6 hover:bg-primary-300/80 transition-all">
                Jelajahi Data
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 h-full flex justify-center items-center">
          <img
            src="/illustrasi/data.png"
            alt="Komunitas Teknologi Hijau"
            className="w-10/12 h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
