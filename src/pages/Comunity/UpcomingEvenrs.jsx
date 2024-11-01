// UpcomingEventsSection.jsx
import React from "react";

const UpcomingEventsSection = () => {
  const events = [
    {
      title: "Workshop Energi Terbarukan",
      date: "15 November 2024",
      location: "Jakarta, Indonesia",
      description:
        "Belajar tentang sumber energi terbarukan dan cara penerapannya dalam kehidupan sehari-hari.",
    },
    {
      title: "Seminar Teknologi Hijau",
      date: "20 Desember 2024",
      location: "Bandung, Indonesia",
      description:
        "Ikuti seminar ini untuk memahami perkembangan terbaru dalam teknologi ramah lingkungan.",
    },
    {
      title: "Konferensi Solusi Berkelanjutan",
      date: "5 Januari 2025",
      location: "Yogyakarta, Indonesia",
      description:
        "Diskusi tentang solusi berkelanjutan dan inovasi teknologi untuk masa depan yang lebih hijau.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          Acara Mendatang
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Jangan lewatkan acara komunitas kami yang akan datang. Ikuti kegiatan untuk meningkatkan pengetahuan dan jaringan Anda.
        </p>

        {/* Events Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg p-6 border-l-4 border-green-600 text-left"
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Tanggal:</strong> {event.date}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Lokasi:</strong> {event.location}
              </p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button className="bg-primary-300 text-white rounded-lg py-2 px-4 hover:bg-primary-400 transition-all">
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection; // Export default komponen
