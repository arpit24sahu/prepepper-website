import React from 'react';
import { Code, Users, Cpu } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Software Consultation',
      description: 'Expert guidance for setting up or improving your software systems.',
      icon: Code,
      bullets: [
        'Personalized software strategy',
        'Technology stack recommendations',
        'Scalability planning',
        'Security assessment'
      ]
    },
    {
      title: 'Hire a CTO',
      description: 'On-demand CTOs for technology strategy and leadership.',
      icon: Users,
      bullets: [
        'Strategic technology planning',
        'Team leadership and mentoring',
        'Vendor management',
        'Technology risk assessment'
      ]
    },
    {
      title: 'Software Development',
      description: 'End-to-end software development services, from planning to deployment.',
      icon: Cpu,
      bullets: [
        'Custom software solutions',
        'Web and mobile app development',
        'Cloud integration',
        'Ongoing maintenance and support'
      ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <service.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {service.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;