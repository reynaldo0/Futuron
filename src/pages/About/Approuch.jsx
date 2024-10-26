import React, { useState } from "react";

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
              activeIndex === index ? "bg-primary-300/90" : "bg-primary-300/80"
            } text-white`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-base font-semibold md:text-2xl">
              {item.title}
            </span>
            <svg
              className={`plus-icon h-4 w-4 fill-current ${
                activeIndex === index ? "hidden" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10V4a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H4a1 1 0 1 1 0-2h6z" />
            </svg>
            <svg
              className={`minus-icon h-4 w-4 fill-current ${
                activeIndex === index ? "" : "hidden"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 9h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
          <div
            className={`accordion-content rounded-b-lg px-4 py-6 text-xl ${
              activeIndex === index ? "block" : "hidden"
            } text-white bg-primary-300/75`}
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
    title: "Inovasi",
    content:
      "Kami menjelajahi perkembangan terbaru dalam teknologi ramah lingkungan, mulai dari inovasi energi surya hingga kota pintar dan bahan ramah lingkungan. Tim kami berdedikasi untuk menemukan solusi berkelanjutan yang bermanfaat bagi masyarakat dan planet ini.",
  },
  {
    title: "Edukasi",
    content:
      "Kami percaya bahwa kesadaran adalah langkah pertama menuju perubahan. Melalui alat interaktif, konten yang mendalam, dan contoh nyata, kami mengedukasi individu dan bisnis tentang manfaat mengadopsi teknologi berkelanjutan.",
  },
  {
    title: "Aksi",
    content:
      "Perubahan dimulai dengan aksi. Melalui proyek dan inisiatif kami, kami bekerja dengan komunitas, organisasi, dan inovator untuk menerapkan solusi nyata yang mengurangi dampak lingkungan.",
  },
];

// Section with "?" animated icon
const Approach = () => {
  return (
    <section className="py-16 px-6 md:px-20 relative">
      <h2 className="text-4xl font-bold text-center text-primary-400">
        Pendekatan Kami
      </h2>
      <p className="mt-6 text-lg text-center text-gray-800">
        Inovasi, Edukasi, dan Aksi
      </p>

      <div className="mt-12 flex flex-col md:flex-row items-start gap-12">
        {/* Accordion section */}
        <div className="w-full md:flex-1">
          <Accordion items={accordionItems} />
        </div>

        {/* Animated question mark icon */}
        <div className="flex-shrink-0 hidden md:block md:relative">
          <div className="flex justify-center items-center scale-150 text-white text-9xl animate-bounce">
            <span className="font-bold w-52 px-28 pt-16">?</span>
            <img
              src="/background/rroll.svg"
              alt="Wave Decoration"
              className="absolute right-0 top-0 -z-10"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
