import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';  // Import CountUp for animated counter

const StatCard = ({ title, value }) => {
  const [isVisible, setIsVisible] = useState(false);  // Track visibility of the component
  const cardRef = useRef(null);  // Ref to the component for intersection observer

  // This useEffect hooks into the Intersection Observer API
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the component is visible in the viewport (50% or more)
        setIsVisible(entry.isIntersecting);  
      },
      { threshold: 0.5 }  // Trigger when 50% of the element is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);  // Observe the card element
    }

    // Cleanup observer on unmount
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);  // Unobserve when component is removed
      }
    };
  }, []);  // Empty dependency array means this effect runs only on mount and unmount

  // Handle string values with commas or text and convert them to numbers
  const numberValue = typeof value === 'string'
    ? parseInt(value.replace(/[^0-9]/g, ''), 10) // Extract numeric value only
    : value;

  return (
    <div
      ref={cardRef}  // Attach the ref to the div for intersection observer
      className="bg-white shadow-lg border-y-2 border-primary-300 rounded-lg p-6 text-center transition-transform duration-500 transform hover:scale-105"
    >
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-primary-300">
        {isVisible ? (
          <CountUp
            start={0}  // Start counting from 0
            end={numberValue}  // The numeric value to count up to
            duration={2.5}  // Duration of the animation (in seconds)
            separator=","  // Add commas for thousands separator
            decimal="."  // Optional: decimal separator if needed
          />
        ) : (
          <span>{value}</span>  // Static value if not visible
        )}
      </p>
    </div>
  );
};

export default StatCard;
