// src/components/Plans.tsx
import React from 'react';

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Our Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-blue-100 p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Basic Plan</h3>
            <p className="text-gray-600 mt-2">Up to 50 Mbps at affordable rates.</p>
          </div>
          <div className="bg-blue-100 p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Premium Plan</h3>
            <p className="text-gray-600 mt-2">Up to 100 Mbps with premium support.</p>
          </div>
          <div className="bg-blue-100 p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Business Plan</h3>
            <p className="text-gray-600 mt-2">Tailored solutions for businesses.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
