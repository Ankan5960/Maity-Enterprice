// src/components/Services.tsx
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="h-full w-full py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Home Broadband</h3>
            <p className="text-gray-600 mt-2">Reliable high-speed broadband for your home needs.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Business Solutions</h3>
            <p className="text-gray-600 mt-2">Customized broadband plans for enterprises.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-600 mt-2">Round-the-clock technical support for your service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
