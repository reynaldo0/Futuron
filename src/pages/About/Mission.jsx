import React from 'react';
import { Camera, Target } from 'lucide-react';

const Mission = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Mission and Vision Statement</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Vision Section */}
        <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-lg max-w-xs">
          <div className="flex justify-center items-center bg-green-500 text-white rounded-full w-16 h-16 mb-4">
            <Target size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Vision</h3>
          <p className="text-center text-gray-700">
            To become the largest website design firm by emphasizing innovative thinking to establish ourselves as a worldwide-recognized company by offering the highest standard services and solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-lg max-w-xs">
          <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-16 h-16 mb-4">
            <Camera size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p className="text-center text-gray-700">
            To provide customer-centric, result-oriented, cost-competitive, innovative, and functional IT solutions to our valuable worldwide customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
