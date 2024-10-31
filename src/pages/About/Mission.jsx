import React from 'react';
import { Camera, Target } from 'lucide-react';

const Mission = () => {
  return (
    <section className="container mx-auto px-4 py-8 my-24">
      <h2 className="text-3xl font-semibold text-center mb-8">Visi dan Misi Kami</h2>
      <div className="flex flex-wrap justify-center gap-24">
        {/* Vision Section */}
        <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-lg max-w-xs">
          <div className="flex justify-center items-center bg-green-500 text-white rounded-full w-16 h-16 mb-4">
            <Target size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Visi</h3>
          <p className="text-center text-gray-700">
            Menjadi pemimpin global dalam solusi teknologi ramah lingkungan, dengan
            inovasi yang berkelanjutan untuk melestarikan Bumi bagi generasi mendatang.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-lg max-w-xs">
          <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-16 h-16 mb-4">
            <Camera size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Misi</h3>
          <p className="text-center text-gray-700">
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
