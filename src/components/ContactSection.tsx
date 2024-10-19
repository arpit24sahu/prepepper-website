import React from 'react';

const ContactSection: React.FC = () => {
  const openGoogleForm = () => {
    window.open('https://forms.gle/your-google-form-url', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold mb-8">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Contact us for a consultation and let's bring your ideas to life.</p>
        <button
          onClick={openGoogleForm}
          className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactSection;