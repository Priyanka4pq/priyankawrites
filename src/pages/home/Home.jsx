

import React from "react";
import Hero from "./Hero";
import Blogs from "../blogs/Blogs";

const Home = () => {
  return (
    <div className="bg-gray-100 text-primary container mx-auto mt-8 p-8 rounded-xl shadow-xl">
      {/* Hero Section */}
      <div className="mb-12">
        <Hero />
      </div>

      {/* Blogs Section */}
      <div className="bg-white text-primary p-8 rounded-lg shadow-lg">
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
