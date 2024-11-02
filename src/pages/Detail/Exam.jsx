import React from "react";

const Exam = () => {
  return (
    <>
      {/* Examples Section */}
      <section className="md:py-24 mx-4 rounded-lg mb-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6 text-center">
            Contoh Teknologi Hijau
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Beberapa contoh teknologi hijau yang sedang berkembang saat ini
            meliputi:
          </p>

          {/* Card Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-primary-200/80 border-2 border-primary-400 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary-400 mb-2">Panel Surya</h3>
              <p className="text-gray-700">
                Menghasilkan energi dari sinar matahari untuk pemanfaatan
                sehari-hari.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-primary-200/80 border-2 border-primary-400 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary-400 mb-2">Pengolahan Air Limbah</h3>
              <p className="text-gray-700">
                Teknologi untuk mendaur ulang air limbah dan mengurangi polusi.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-primary-200/80 border-2 border-primary-400 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary-400 mb-2">Kendaraan Listrik</h3>
              <p className="text-gray-700">
                Mengurangi emisi gas rumah kaca dan menjaga kualitas udara.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-primary-200/80 border-2 border-primary-400 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary-400 mb-2">Pertanian Berkelanjutan</h3>
              <p className="text-gray-700">
                Inovasi untuk mengurangi penggunaan pestisida dan meningkatkan
                hasil panen.
              </p>
            </div>

            {/* Card 5 - Hidden on Mobile */}
            <div className="hidden md:block bg-primary-200/80 border-2 border-primary-400 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary-400 mb-2">Energi Angin</h3>
              <p className="text-gray-700">
                Menghasilkan energi bersih dengan memanfaatkan kekuatan angin.
              </p>
            </div>

            {/* Card 6 - Hidden on Mobile */}
            <div className="hidden md:block bg-primary-200/80 border-2 border-primary-400 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary-400 mb-2">Biogas</h3>
              <p className="text-gray-700">
                Mengubah limbah organik menjadi energi yang dapat digunakan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exam;
