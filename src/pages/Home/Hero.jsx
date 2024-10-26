import { useEffect, useRef, useState } from "react";
import Ball from "../../components/Ball";

const Hero = () => {
  const [transition, setTransition] = useState("fade-in");
  const gifSrc = "/background/hero.gif"; // Update with the path to your GIF

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowX = "auto";
      document.body.style.overflowY = "auto";
    };
  }, []);

  const handleClick = () => {
    setTransition("fade-out");
    setTimeout(() => {
      setTransition("fade-in");
    }, 500);
  };

  return (
    <section className={`relative w-full min-h-screen ${transition}`}>
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black/70 w-full h-full"></div>
        <img
          src={gifSrc} // Displaying GIF instead of video
          alt="Descriptive alt text"
          className="w-full object-cover"
          style={{ height: "100vh", minHeight: "calc(100vh - 50px)" }} // Adjusting height for mobile
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <div className="text-center px-4 mx-auto max-w-screen-xl">
          <h1 className="mb-4 text-4xl text-white font-bold tracking-tight font-poppins leading-none md:text-5xl lg:text-6xl md:px-32 pt-32">
            Teknologi Hijau, Langkah Kecil Berdampak Besar!
          </h1>
          <p className="mb-8 text-sm font-normal text-gray-300 lg:text-base sm:px-16 lg:px-48 md:scale-110 pt-2 md:pt-5">
            Mengubah Dunia dengan Inovasi, Satu Langkah Kecil untuk Masa Depan
            Bumi
          </p>
          
        </div>
        <Ball
          classList="absolute right-8 top-36 animation-delay-1000"
          size={50}
          color="#D6EFD8"
        />
        <Ball
          classList="absolute left-8 bottom-16 animation-delay-1000"
          size={50}
          color="#D6EFD8"
        />
      </div>
    </section>
  );
};

export default Hero;
