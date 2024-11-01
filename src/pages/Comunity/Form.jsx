import React, { useState } from "react";

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
    // Here you can add your submit logic, like sending data to an API
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">
          Formulir Pendaftaran Acara
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          Isi formulir di bawah ini untuk mendaftar mengikuti acara teknologi hijau kami.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
              placeholder="Masukkan email Anda"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
              placeholder="Masukkan nomor telepon Anda"
            />
          </div>

          {/* Notes Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="notes">
              Catatan (Opsional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
              placeholder="Tambahkan catatan atau pesan untuk panitia acara"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-300 text-white rounded-lg py-3 hover:bg-primary-400 transition-all"
          >
            Daftar Sekarang
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
