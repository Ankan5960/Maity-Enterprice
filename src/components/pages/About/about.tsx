// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">About Us</h2>
        <p className="text-gray-600 mt-4 text-center">
          Maity Enterprise is committed to delivering high-speed BSNL broadband to homes and businesses, ensuring smooth connectivity and customer satisfaction.
        </p>
      </div>
    </section>
  );
};

export default About;
