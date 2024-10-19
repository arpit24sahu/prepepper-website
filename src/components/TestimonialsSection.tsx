import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "TechSolutions transformed our business with their innovative software solutions.",
      author: "Jane Doe",
      company: "Tech Innovators Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote: "Their CTO-as-a-service offering provided us with the strategic guidance we needed.",
      author: "John Smith",
      company: "StartUp Ventures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote: "The team's expertise in software development exceeded our expectations.",
      author: "Emily Brown",
      company: "Global Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img className="h-12 w-12 rounded-full mr-4" src={testimonial.image} alt={testimonial.author} />
                <div>
                  <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;