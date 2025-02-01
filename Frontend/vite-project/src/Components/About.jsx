import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#213555] via-[#3E5879] to-[#D8C4B6] text-[#F5EFE7]">
      <div className="container mx-auto py-20 px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Title Section */}
          <h1 className="text-5xl font-extrabold text-center animate-fadeIn">
            About Us
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto animate-fadeIn">
            We are a forward-thinking, innovative team dedicated to pushing
            the boundaries of what's possible. Our passion for technology and
            our commitment to excellence drive everything we do. Whether it's
            AI, cybersecurity, or web development, we are always on the cutting
            edge.
          </p>

          {/* Image Section */}
          <div className="w-full flex justify-center animate-fadeIn">
            <div className="w-40 h-40 bg-gradient-to-r from-[#3E5879] via-[#D8C4B6] to-[#F5EFE7] rounded-full flex items-center justify-center shadow-2xl">
              <img
                src="1.jpeg"
                alt="Our team"
                className="rounded-full border-4 border-[#F5EFE7] shadow-lg transform hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>

          {/* Core Values Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            <div className="flex flex-col items-center space-y-4 p-6 bg-[#3E5879] text-[#F5EFE7] rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-[#D8C4B6]">Innovation</div>
              <p className="text-center">
                We embrace new ideas and creative solutions to shape the future.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-[#3E5879] text-[#F5EFE7] rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-[#D8C4B6]">Collaboration</div>
              <p className="text-center">
                Our success comes from working together and supporting each other.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-[#3E5879] text-[#F5EFE7] rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-[#D8C4B6]">Excellence</div>
              <p className="text-center">
                We strive for perfection in everything we do, never settling for less.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
