import React from 'react';
import { Camera, Target } from 'lucide-react';

const Mission = () => {
  return (
    <section className="container mx-auto px-4 py-8 my-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-500 mb-12">
        Visi dan Misi Kami
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {/* Vision Section */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 max-w-xs">
          <div className="flex justify-center items-center bg-green-600 text-white rounded-full w-16 h-16 mb-6 shadow-lg">
            <Target size={48} />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Visi</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            Menjadi pemimpin global dalam solusi teknologi ramah lingkungan, dengan
            inovasi yang berkelanjutan untuk melestarikan Bumi bagi generasi mendatang.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 max-w-xs">
          <div className="flex justify-center items-center bg-blue-600 text-white rounded-full w-16 h-16 mb-6 shadow-lg">
            <Camera size={48} />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Misi</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            Menyediakan solusi teknologi berkelanjutan yang berfokus pada pelestarian
            lingkungan, guna menciptakan dampak positif pada ekosistem global dengan
            teknologi inovatif yang mendukung kelestarian alam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
