import React, { useState } from "react";
import { createPortal } from "react-dom";

const events = [
  {
    title: "Webinar Inovasi Teknologi Hijau",
    date: "15 November 2024",
    location: "Online",
    description:
      "Bergabunglah dalam diskusi tentang inovasi terbaru dalam teknologi hijau bersama para ahli dari seluruh dunia.",
  },
  {
    title: "Workshop Energi Terbarukan",
    date: "25 November 2024",
    location: "Jakarta, Indonesia",
    description:
      "Pelajari cara memanfaatkan energi terbarukan dalam kehidupan sehari-hari melalui sesi praktik langsung di lokasi.",
  },
  {
    title: "Konferensi Teknologi dan Lingkungan",
    date: "5 Desember 2024",
    location: "Bandung, Indonesia",
    description:
      "Konferensi tahunan untuk mendiskusikan perkembangan teknologi yang ramah lingkungan dan dampaknya terhadap masa depan.",
  },
];

// Modal Component
const Modal = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };

  return createPortal(
    <div
      id="modalOverlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 float-right font-bold text-lg"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Daftar untuk {event.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Tanggal:</strong> {event.date}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Lokasi:</strong> {event.location}
        </p>
        <RegistrationForm />
      </div>
    </div>,
    document.body
  );
};

// Registration Form Component
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Pendaftaran berhasil! Kami akan menghubungi Anda lebih lanjut.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nama Lengkap"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Nomor Telepon"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
      />
      <textarea
        name="notes"
        placeholder="Catatan (Opsional)"
        value={formData.notes}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
      />
      <button
        type="submit"
        className="w-full bg-primary-300 text-white rounded-lg py-2 hover:bg-primary-400 transition-all"
      >
        Daftar Sekarang
      </button>
    </form>
  );
};

// Events Section
const EventsSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">
          Acara Komunitas Teknologi Hijau
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          Ikuti berbagai acara komunitas kami untuk memperluas pengetahuan dan
          terhubung dengan orang-orang yang memiliki visi yang sama dalam
          teknologi hijau.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-600"
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Tanggal:</strong> {event.date}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Lokasi:</strong> {event.location}
              </p>
              <p className="text-gray-700 mt-3">{event.description}</p>
              <button
                onClick={() => openModal(event)}
                className="mt-4 text-primary-300 hover:text-primary-400 font-medium"
              >
                Selengkapnya
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <Modal event={selectedEvent} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </section>
  );
};

export default EventsSection;
