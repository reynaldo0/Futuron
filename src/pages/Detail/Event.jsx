import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
];

const Events = () => {
  const handleRegistrationClick = () => {
    toast.info("Pendaftaran belum dibuka untuk acara ini!", {
      position: 'top-center',
      autoClose: 3000,
      style: { backgroundColor: '#ffcc00', color: '#000' },
    });
  };

  return (
    <div className="container mx-auto p-8">
      <ToastContainer style={{ zIndex: 9999999999 }} />
      <h2 className="text-3xl font-bold text-center mb-6">Acara Mendatang</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <div key={event.title} className="border-2 border-primary-300 rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-primary-400 mb-2">{event.title}</h3>
            <p className="text-primary-400 mb-4">{event.date}</p>
            <p className="text-primary-400 mb-4 flex-1">{event.description}</p>
            <button onClick={handleRegistrationClick} className="bg-primary-300 hover:bg-primary-300/90 text-white py-2 px-4 rounded-lg transition duration-300">
              Daftar Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
