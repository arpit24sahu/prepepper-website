import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhatYouGetSection: React.FC = () => {
  const benefits = [
    'Expert guidance to set up and manage website and software in your firm.',
    'Cost-cutting and automations to reduce your expenditure.',
    'Data Privacy and Security.',
    'Marketing, Digital Marketing, Social Media Marketing.',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">What You'll Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;