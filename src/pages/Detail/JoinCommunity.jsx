// GreenTechnologyDetail.js
import React from "react";

const JoinCommunity = () => {
  return (
    <section>
      {/* Community Section */}
      <section className="py-24 mx-4 rounded-lg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-green-800 mb-4">
            Bergabunglah dengan Komunitas Kami
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Kami mengundang Anda untuk menjadi bagian dari solusi dalam
            mempromosikan dan mengimplementasikan teknologi hijau. Ikuti acara
            mendatang kami dan terlibat dalam inisiatif yang mendukung
            lingkungan. Bersama-sama, kita dapat menciptakan masa depan yang
            lebih baik dan berkelanjutan.
          </p>

          <div className="flex justify-center mb-8">
            <a href="/comunity">
              <button className="bg-primary-300 hover:bg-primary-300/80 text-white rounded-full py-3 px-10  transition-all shadow-lg transform hover:scale-105">
                Daftar Sekarang
              </button>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Bergabunglah dengan kami dan jadilah bagian dari gerakan untuk
              lingkungan yang lebih baik!
            </p>
            <p className="text-xs text-gray-500">
              *Pendaftaran gratis dan terbuka untuk semua.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default JoinCommunity;