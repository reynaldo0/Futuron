import React from 'react';
import { Globe, Cloud, Heart } from 'lucide-react'; // Use available icons

const Values = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Tujuan Website</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Card: Renewable Energy */}
        <div className="border-2 border-green-500 rounded-lg p-6 bg-white">
          <Globe className="mb-4 mx-auto text-5xl text-blue-500" />
          <h2 className="text-xl font-bold text-gray-700 mb-2">Energi Terbarukan</h2>
          <p className="text-gray-600">
            Kami berkomitmen untuk mempromosikan penggunaan energi terbarukan sebagai solusi untuk mengurangi dampak negatif terhadap lingkungan.
          </p>
        </div>

        {/* Second Card: Green Spaces */}
        <div className="rounded-lg p-6 bg-green-500 text-white">
          <Cloud className="mb-4 mx-auto text-5xl" />
          <h2 className="text-xl font-bold mb-2">Ruang Hijau</h2>
          <p>
            Menjaga keberlanjutan ruang hijau sebagai habitat alami untuk flora dan fauna serta tempat edukasi lingkungan yang mendalam bagi masyarakat.
          </p>
        </div>

        {/* Third Card: Community Action */}
        <div className="border-2 border-green-500 rounded-lg p-6 bg-white">
          <Heart className="mb-4 mx-auto text-5xl text-red-500" />
          <h2 className="text-xl font-bold text-gray-700 mb-2">Aksi Komunitas</h2>
          <p className="text-gray-600">
            Mendorong aksi bersama untuk mengurangi dampak lingkungan dan menciptakan kesadaran melalui proyek-proyek berbasis komunitas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;