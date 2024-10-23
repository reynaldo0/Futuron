import { useEffect, useRef, useState } from "react";
import Ball from "../../components/Ball";

const Hero = () => {
  const [transition, setTransition] = useState("fade-in");
  const videoRef = useRef(null);

  useEffect(() => {
    // Prevent horizontal scrolling by hiding overflow on the x-axis
    document.body.style.overflowX = "hidden";

    // Ensure scrolling is enabled vertically
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowX = "auto";
      document.body.style.overflowY = "auto";
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => {
      if (videoElement.currentTime >= 60) {
        console.log("Video reached 60 seconds");
        videoElement.currentTime = 60;
      }
    };

    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
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
      {/* Video Background within the Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black/30 w-full h-full"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="w-full object-cover"
          style={{ height: "100vh", minHeight: "calc(100vh - 50px)" }} // Adjusting height for mobile
        >
          <source
            src="https://sunenergy.id/cfind/source/video/sun-video-banner-v5.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Scrollable Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <div className="text-center px-4 mx-auto max-w-screen-xl">
          <h1 className="mb-4 text-3xl text-white font-extrabold tracking-tight font-poppins leading-none md:text-5xl lg:text-6xl md:px-32 pt-32">
            Lorem, ipsum{" "}
            <span className="text-yellow">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis error quas.
            </span>
          </h1>
          <p className="mb-8 text-sm font-normal text-gray-300 lg:text-base sm:px-16 lg:px-48 md:scale-110 pt-2 md:pt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, earum.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button
              onClick={handleClick}
              className="inline-flex justify-center items-center text-white bg-yellow/80 hover:bg-secondary/90 font-medium rounded-lg text-2xl px-8 py-2 text-center"
            >
              01/01
            </button>
          </div>
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
