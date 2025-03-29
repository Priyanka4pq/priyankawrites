import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 container mx-auto mt-8 p-8 rounded-xl shadow-xl backdrop-blur-md font-[Poppins]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8 font-medium leading-relaxed">
          Welcome to our blog! We are dedicated to bringing you insightful
          articles, thought-provoking discussions, and the latest trends in the
          digital world.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed font-light">
          Our mission is to create a platform where writers, tech enthusiasts,
          and creative thinkers can share knowledge and inspire each other. We
          believe in the power of words and ideas to shape the world.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">
          Meet Our Team
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed font-light">
          Our team consists of passionate writers, developers, and designers who
          work together to bring you high-quality content. We are always looking
          for new voices to join our community.
        </p>
      </div>

      {/* Community Engagement Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">
          Join Our Community
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed font-light">
          We love engaging with our readers! Follow us on social media, share
          your thoughts in the comments, and become a part of our growing
          community. Your ideas and feedback help us improve and grow.
        </p>
      </div>
    </div>
  );
};

export default About;
