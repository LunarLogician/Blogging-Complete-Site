import React from "react";

const HeroSection = () => {
  const handleNavigateToBlogs = () => {
    window.location.href = "/blogs";
  };

  return (
    <section className="bg-gradient-to-br from-[#1E2C44] to-[#213555] text-[#F5EFE7] py-20 px-6">
      {/* Main Hero Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
          Welcome to the World of Stories
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-10">
          Discover, share, and connect through stories that inspire.
        </p>
        <button
          onClick={handleNavigateToBlogs}
          className="bg-[#3E5879] text-[#D8C4B6] py-4 px-8 rounded-full text-lg sm:text-xl lg:text-2xl font-semibold hover:bg-[#D8C4B6] hover:text-[#213555] transition-all duration-300 shadow-lg"
        >
          Get Started
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="w-72 h-72 bg-[#3E5879] rounded-full opacity-30 blur-3xl absolute top-16 left-10"></div>
        <div className="w-96 h-96 bg-[#D8C4B6] rounded-full opacity-20 blur-3xl absolute bottom-20 right-20"></div>
        <div className="w-52 h-52 bg-[#D1A456] rounded-full opacity-25 blur-3xl absolute top-36 right-36"></div>
      </div>

      {/* Feature Highlights Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {[
          { title: "Explore Stories", description: "Dive into a world of captivating tales and narratives from across the globe." },
          { title: "Share Your Passion", description: "Publish your own stories and connect with a community of storytellers." },
          { title: "Build Your Community", description: "Engage with readers and writers who share your interests and dreams." },
        ].map((feature, index) => (
          <div key={index} className="bg-[#3E5879] p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-base">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Advertisement and Spacer Section */}
      <div className="mt-20 py-10 bg-[#213555] rounded-lg shadow-lg flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Advertisement Space</h3>
          <p className="text-base">
            Promote your business or brand here! Reach thousands of readers and writers.
          </p>
          <button className="bg-[#D8C4B6] text-[#213555] py-2 px-6 rounded-lg mt-4 hover:bg-[#3E5879] hover:text-[#F5EFE7] transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-12 px-6">
        {[
          { title: "Tailored Recommendations", description: "Get personalized story suggestions based on your reading history and interests." },
          { title: "Monthly Competitions", description: "Participate in exciting writing contests and win amazing prizes." },
        ].map((feature, index) => (
          <div key={index} className="bg-[#3E5879] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At our platform, we believe in the power of stories to connect, inspire, and transform. Whether you’re a reader or a writer, there’s a place for you here.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {[
            { title: "Global Reach", description: "Connect with users and stories from around the world." },
            { title: "User-Friendly", description: "Enjoy an intuitive and seamless platform experience." },
            { title: "Secure Platform", description: "Your data is safe with our top-notch security measures." },
            { title: "24/7 Support", description: "Our team is always here to assist you whenever you need help." },
          ].map((reason, index) => (
            <div key={index} className="bg-[#3E5879] p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
