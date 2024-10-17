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

    </div>
  );
};

export default About;
