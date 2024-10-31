import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { ArrowLeft, ArrowRight } from 'lucide-react';

const upcomingEvents = [
  {
    title: "Pembersihan Pantai",
    date: "15 November 2024",
    description: "Bergabunglah dengan kami untuk membersihkan pantai dari sampah dan plastik.",
  },
  {
    title: "Festival Energi Terbarukan",
    date: "5 Desember 2024",
    description: "Ikuti festival yang menampilkan teknologi energi terbarukan terbaru.",
  },
  {
    title: "Sesi Edukasi Daur Ulang",
    date: "20 Desember 2024",
    description: "Pelajari cara mendaur ulang dengan efektif melalui sesi edukasi interaktif.",
  },
  {
    title: "Pelatihan Energi Hijau",
    date: "10 Januari 2025",
    description: "Pelatihan mengenai teknologi energi hijau dan aplikasinya.",
  },
  {
    title: "Konferensi Lingkungan",
    date: "25 Januari 2025",
    description: "Diskusi tentang tantangan lingkungan dan solusi berkelanjutan.",
  },
  {
    title: "Pameran Inovasi Teknologi",
    date: "15 Februari 2025",
    description: "Pameran yang menampilkan inovasi terbaru di bidang teknologi.",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -left-5 md:-left-10 z-10 transform -translate-y-1/2 bg-primary-300 text-white p-3 rounded-full shadow-lg hover:bg-primary-400 transition duration-300"
    onClick={onClick}
  >
    <ArrowLeft/>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -right-5 md:-right-10 z-10 transform -translate-y-1/2 bg-primary-300 text-white p-3 rounded-full shadow-lg hover:bg-primary-400 transition duration-300"
    onClick={onClick}
  >
    <ArrowRight/>
  </button>
);

const Events = () => {
  const handleRegistrationClick = () => {
    toast.info("Pendaftaran belum dibuka untuk acara ini!", {
      position: 'top-center',
      autoClose: 3000,
      style: { backgroundColor: '#ffcc00', color: '#000' },
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-32 p-8 relative">
      <ToastContainer style={{ zIndex: 9999999999 }} />
      <h2 className="text-4xl md:text-5xl font-bold text-primary-400 text-center mb-6">Acara Mendatang</h2>
      <Slider {...settings}>
        {upcomingEvents.map((event) => (
          <div key={event.title} className="">
            <div className="border border-primary-300 rounded-lg mx-5 shadow-lg p-6 flex flex-col justify-between">
              <h3 className="text-xl font-bold text-primary-400 mb-2">{event.title}</h3>
              <p className="text-primary-400 mb-4">{event.date}</p>
              <p className="text-primary-400 mb-4 flex-1">{event.description}</p>
              <button onClick={handleRegistrationClick} className="bg-primary-300 hover:bg-primary-300/90 text-white py-2 px-4 rounded-lg transition duration-300">
                Daftar Sekarang
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Events;
