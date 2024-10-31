import React from 'react';
import ApproachSection from './Approuch';
import Hero from './Hero';
import Mission from './Mission';
import Values from './Values';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen pt-16 md:pt-5">

      <Hero/>
      <ApproachSection/>
      <Mission/>
      <Values/>

    </div>
  );
};

export default About;
