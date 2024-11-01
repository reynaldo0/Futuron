import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Import the ChevronDown icon

// Accordion component
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="accordion-item my-2">
          <button
            className={`accordion-title flex w-full items-center justify-between rounded-t-lg px-4 py-4 transition duration-300 focus:outline-none ${
              activeIndex === index ? "bg-primary-300/50" : "bg-primary-300/40"
            } text-white`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-base font-semibold md:text-2xl">
              {item.title}
            </span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
              size={24}
            />
          </button>
          <div
            className={`accordion-content rounded-b-lg px-4 py-6 text-xl ${
              activeIndex === index ? "block" : "hidden"
            } text-white bg-primary-300/70`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

// Accordion items data for "Pendekatan Kami"
const accordionItems = [
  {
    title: "Inovasi Berkelanjutan",
    content:
      "Kami berkomitmen untuk terus berinovasi dalam teknologi hijau, termasuk pengembangan energi terbarukan dan solusi ramah lingkungan yang mengurangi jejak karbon. Setiap inovasi yang kami hadirkan bertujuan untuk menciptakan dampak positif bagi lingkungan.",
  },
  {
    title: "Pendidikan Transformasional",
    content:
      "Edukasi adalah fondasi perubahan. Kami menyediakan sumber daya, workshop, dan konten interaktif untuk membekali individu dan bisnis dengan pengetahuan tentang praktik berkelanjutan dan manfaat teknologi hijau.",
  },
  {
    title: "Tindakan Nyata",
    content:
      "Kami percaya bahwa tindakan nyata adalah kunci untuk menciptakan perbedaan. Melalui kolaborasi dengan komunitas dan organisasi, kami menjalankan proyek yang berdampak, membantu implementasi solusi berkelanjutan untuk tantangan lingkungan.",
  },
];

// Section with "?" animated icon
const Approach = () => {
  return (
    <div className="" id="tujuan">
      <img
        src="/background/wave.svg"
        alt="wave"
        className="w-full"
        draggable="false"
      />
      <section className="px-6 md:px-20 pb-32 relative bg-primary-200">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Tujuan Kami
        </h2>
        <div className="mt-12 flex flex-col md:flex-row items-start gap-12">
          {/* Accordion section */}
          <div className="w-full md:flex-1">
            <Accordion items={accordionItems} />
          </div>

          {/* Animated question mark icon */}
          <div className="flex-shrink-0 hidden md:block md:relative">
            <div className="flex justify-center items-center scale-150 text-white text-9xl animate-bounce">
              <span className="font-bold w-52 px-28 pt-16">?</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
