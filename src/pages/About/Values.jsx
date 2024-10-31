import React from 'react';
import { Globe, Cloud, Heart } from 'lucide-react'; // Use available icons

const Values = () => {
  return (
    <div className="container mx-auto p-8 my-24">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-400 mb-16 text-center">Membangun Masa Depan Hijau</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* First Card: Renewable Energy */}
        <div className="border-2 border-primary-300 rounded-lg p-6 py-16 bg-white group hover:bg-primary-200 hover:scale-105 transition-transform shadow-lg">
          <Globe className="mb-4 mx-auto text-5xl text-blue-500 group-hover:text-white" size={70} />
          <h2 className="text-xl font-bold text-gray-700 mb-2 group-hover:text-white">Energi Terbarukan</h2>
          <p className="text-gray-600 group-hover:text-white">
            Dengan mempromosikan energi terbarukan, kami berupaya menciptakan dunia yang lebih bersih dan berkelanjutan. Bergabunglah dengan kami untuk mengurangi jejak karbon dan melindungi bumi.
          </p>
        </div>

        {/* Second Card: Green Spaces */}
        <div className="rounded-lg p-6 py-16 border-2 border-primary-300 bg-white group hover:bg-primary-200 hover:scale-105 transition-transform shadow-lg">
          <Cloud className="mb-4 mx-auto text-5xl group-hover:text-white" size={70} />
          <h2 className="text-xl font-bold mb-2 group-hover:text-white">Ruang Hijau</h2>
          <p className="text-gray-600 group-hover:text-white">
            Kami berkomitmen untuk menjaga dan memperluas ruang hijau sebagai habitat yang kaya untuk keanekaragaman hayati, serta sebagai tempat pembelajaran yang menyenangkan bagi generasi mendatang.
          </p>
        </div>

        {/* Third Card: Community Action */}
        <div className="border-2 border-primary-300 rounded-lg p-6 py-16 bg-white group hover:bg-primary-200 hover:scale-105 transition-transform shadow-lg">
          <Heart className="mb-4 mx-auto text-5xl text-red-500 group-hover:text-white" size={70} />
          <h2 className="text-xl font-bold text-gray-700 mb-2 group-hover:text-white">Aksi Komunitas</h2>
          <p className="text-gray-600 group-hover:text-white">
            Kami percaya bahwa aksi kolektif dapat mengubah dunia. Dengan proyek berbasis komunitas, kami membangun kesadaran dan mendorong partisipasi aktif dalam perlindungan lingkungan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
