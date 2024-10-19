import React from 'react';

const LandingSection: React.FC = () => {
  const openGoogleForm = () => {
    window.open('https://forms.gle/YXo49ytnkbTM9MHE7', '_blank');
  };

  const scrollToWhatYouGet = () => {
    const whatYouGetSection = document.getElementById('about');
    if (whatYouGetSection) {
      whatYouGetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27973-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up">
          <small className="block text-xl sm:text-2xl mb-2">Build on your</small>
          <span className="text-4xl sm:text-5xl md:text-6xl">Million Dollar Idea!</span>
        </h2>
        <p className="text-xl sm:text-2xl mb-8 animate-fade-in-up delay-200">
          Book your free consultation with us.
        </p>
        <div className="space-y-4">
          <button
            onClick={openGoogleForm}
            className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400"
          >
            Schedule Us
          </button>
          <div>
            <button
              onClick={scrollToWhatYouGet}
              className="text-white font-semibold py-2 px-4 rounded-full text-lg hover:underline transition duration-300 ease-in-out animate-fade-in-up delay-600"
            >
              See What You Can Get
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;