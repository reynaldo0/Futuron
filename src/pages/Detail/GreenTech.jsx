// GreenTechnologyDetail.js
import React from "react";

const GreenTechnologyDetail = () => {
  return (
    <div className="bg-gray-50">
      
      {/* Examples Section */}
      <section className="py-10 bg-white shadow-lg mx-4 rounded-lg mb-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Contoh Teknologi Hijau
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Beberapa contoh teknologi hijau yang sedang berkembang saat ini
            meliputi:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Panel surya untuk menghasilkan energi dari sinar matahari.</li>
            <li>Teknologi pengolahan air limbah untuk daur ulang air.</li>
            <li>Kendaraan listrik yang mengurangi emisi gas rumah kaca.</li>
            <li>
              Inovasi dalam pertanian berkelanjutan untuk mengurangi penggunaan
              pestisida.
            </li>
          </ul>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-10 bg-white shadow-lg mx-4 rounded-lg mb-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Bergabunglah dengan Komunitas Kami
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Kami mengundang Anda untuk bergabung dengan komunitas kami dalam
            mempromosikan dan mengimplementasikan teknologi hijau. Ikuti acara
            mendatang kami untuk belajar lebih lanjut dan terlibat dalam
            inisiatif yang mendukung lingkungan. Bersama-sama, kita dapat
            menciptakan masa depan yang lebih baik.
          </p>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white rounded-lg py-2 px-6 hover:bg-green-700 transition-all">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenTechnologyDetail;
