import React from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast dan ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Impor stylesheet untuk toast

const UpcomingEvents = () => {
  const handleRegistrationClick = () => {
    // Tampilkan toast info ketika tombol diklik
    toast.info("Pendaftaran belum dibuka untuk acara ini!", {
      position: 'top-center',
      autoClose: 3000,
      style: { backgroundColor: '#ffcc00', color: '#000' },
    });
  };

  return (
    <section className="py-16 bg-white">
      <ToastContainer className="z-[999999999]" /> {/* Menambahkan ToastContainer di sini */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          Acara Mendatang
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Jangan lewatkan acara komunitas kami yang akan datang. Ikuti kegiatan untuk meningkatkan pengetahuan dan jaringan Anda.
        </p>

        {/* Events Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Acara 1 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 border-l-4 border-green-600 text-left">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Workshop Energi Terbarukan
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Tanggal:</strong> 15 November 2024
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Lokasi:</strong> Jakarta, Indonesia
            </p>
            <p className="text-gray-700 mb-4">
              Belajar tentang sumber energi terbarukan dan cara penerapannya dalam kehidupan sehari-hari.
            </p>
            <button
              className="bg-primary-300 hover:bg-primary-300/90 text-white rounded-lg py-2 px-4 hover:bg-primary-400 transition-all"
              onClick={handleRegistrationClick} // Terapkan handler di sini
            >
              Daftar
            </button>
          </div>

          {/* Acara 2 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 border-l-4 border-green-600 text-left">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Seminar Teknologi Hijau
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Tanggal:</strong> 20 Desember 2024
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Lokasi:</strong> Bandung, Indonesia
            </p>
            <p className="text-gray-700 mb-4">
              Ikuti seminar ini untuk memahami perkembangan terbaru dalam teknologi ramah lingkungan.
            </p>
            <button
              className="bg-primary-300 hover:bg-primary-300/90 text-white rounded-lg py-2 px-4 hover:bg-primary-400 transition-all"
              onClick={handleRegistrationClick}
            >
              Daftar
            </button>
          </div>

          {/* Acara 3 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 border-l-4 border-green-600 text-left">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Konferensi Solusi Berkelanjutan
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Tanggal:</strong> 5 Januari 2025
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Lokasi:</strong> Yogyakarta, Indonesia
            </p>
            <p className="text-gray-700 mb-4">
              Diskusi tentang solusi berkelanjutan dan inovasi teknologi untuk masa depan yang lebih hijau.
            </p>
            <button
              className="bg-primary-300 hover:bg-primary-300/90 text-white rounded-lg py-2 px-4 hover:bg-primary-400 transition-all"
              onClick={handleRegistrationClick}
            >
              Daftar
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
