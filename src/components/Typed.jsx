import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Dengan Teknologi Surya"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    // Cleanup function to destroy typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h1 className="md:text-5xl font-bold md:mt-7 mb-4">
      <span ref={el} className='md:bg-primary-400/80 px-3 rounded-e-3xl py-1 md:text-white' />
    </h1>
  );
};

export default TypedText;
