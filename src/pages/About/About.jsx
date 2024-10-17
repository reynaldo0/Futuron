import React, { useState } from 'react';
import Hero from './Hero';
import Mission from './Mission';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-300">
      <button
        className="w-full text-left p-6 bg-gray-200 hover:bg-gray-300 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-100 text-gray-700">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">

      <Hero/>

      <Mission/>

      

      {/* Accordion Section - What We Do */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-900">Apa yang Kami Lakukan</h2>

        <div className="mt-12">
          {/* Accordion Items */}
          <AccordionItem
            title="Energi Terbarukan"
            content="Kami mempromosikan dan mendukung adopsi teknologi energi terbarukan, seperti energi surya, angin, dan energi pasang surut, yang menyediakan energi bersih dan berkelanjutan untuk komunitas di seluruh dunia."
          />
          <AccordionItem
            title="Kota Pintar & Desain Berkelanjutan"
            content="Urbanisasi semakin meningkat, dan dengan itu datanglah kebutuhan akan kota yang efisien, hijau, dan berkelanjutan. Kami mempromosikan konsep kota pintar—ruang urban yang dirancang dengan infrastruktur berkelanjutan, bangunan hemat energi, dan transportasi ramah lingkungan."
          />
          <AccordionItem
            title="Restorasi Lingkungan"
            content="Dengan menggunakan teknologi, kami mendukung upaya untuk memulihkan ekosistem yang rusak. Mulai dari proyek reforestasi menggunakan drone hingga sistem pemantauan lingkungan berbasis AI, kami menunjukkan bagaimana teknologi dapat membawa keseimbangan kembali ke alam."
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-b from-green-600 to-green-900">
        <h2 className="text-4xl font-bold text-white">Visi Kami untuk Masa Depan</h2>
        <p className="mt-6 text-lg text-white leading-relaxed">
          Kami membayangkan masa depan di mana kota-kota bernapas, hutan berkembang, dan umat manusia berkembang harmonis dengan alam. Dengan Sustainability 2.0, kami dapat mengurangi jejak karbon, menciptakan lapangan pekerjaan hijau, dan membangun gerakan global menuju tanggung jawab lingkungan.
        </p>
        <p className="mt-4 text-lg text-white leading-relaxed">
          Bersama-sama, kita dapat membangun masa depan di mana kemajuan teknologi berjalan seiring dengan pelestarian ekologi.
        </p>
      </section>
    </div>
  );
};

export default About;
