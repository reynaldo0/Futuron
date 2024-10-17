import React, { useState } from 'react';
import Hero from './Hero';
import Mission from './Mission';
import ApproachSection from './Approuch';
import Values from './Values';

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

      <ApproachSection/>

      <Values/>

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
