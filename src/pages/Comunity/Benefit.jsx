import React from "react";
import { FaHandsHelping, FaLeaf, FaUsers, FaLightbulb } from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      icon: <FaHandsHelping className="text-primary-300 text-4xl" />,
      title: "Kolaborasi",
      description:
        "Bergabunglah dengan orang-orang yang memiliki visi serupa dan bersama-sama menciptakan dampak positif bagi lingkungan.",
    },
    {
      icon: <FaLeaf className="text-primary-300 text-4xl" />,
      title: "Sumber Daya Berkelanjutan",
      description:
        "Dapatkan akses ke sumber daya teknologi ramah lingkungan dan informasi terbaru tentang inovasi hijau.",
    },
    {
      icon: <FaUsers className="text-primary-300 text-4xl" />,
      title: "Jaringan Komunitas",
      description:
        "Perluas jaringan Anda dan temukan peluang baru dalam bidang teknologi hijau dengan bergabung bersama komunitas ini.",
    },
    {
      icon: <FaLightbulb className="text-primary-300 text-4xl" />,
      title: "Inspirasi & Edukasi",
      description:
        "Ikuti berbagai webinar, workshop, dan diskusi untuk meningkatkan pengetahuan dan kreativitas Anda dalam inovasi hijau.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">
          Keuntungan Bergabung dengan Komunitas
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          Temukan manfaat yang akan Anda dapatkan dengan menjadi bagian dari komunitas teknologi hijau kami.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 shadow-lg text-center hover:bg-green-50 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
