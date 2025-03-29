import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 container mx-auto mt-10 p-12 rounded-2xl shadow-2xl max-w-4xl font-sans">
      <div className="bg-white p-12 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800 font-serif">
          Contact Us
        </h1>
        <p className="mb-8 text-lg text-gray-700 leading-relaxed text-center font-light">
          Get in touch with us for any inquiries, feedback, or support regarding
          our blog website. We're here to help!
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 border border-gray-300 font-medium">
          <h2 className="text-3xl font-bold mb-3 text-gray-800 font-serif">
            Email
          </h2>
          <p className="text-gray-700 leading-relaxed font-light">
            You can reach us via email at{" "}
            <a
              href="mailto:contact@blogwebsite.com"
              className="text-blue-600 hover:underline font-semibold"
            >
              contact@blogwebsite.com
            </a>
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 border border-gray-300 font-medium">
          <h2 className="text-3xl font-bold mb-3 text-gray-800 font-serif">
            Phone
          </h2>
          <p className="text-gray-700 leading-relaxed font-light">
            Call us at <span className="font-semibold">+1 (123) 456-7890</span>{" "}
            for immediate assistance.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 border border-gray-300 font-medium">
          <h2 className="text-3xl font-bold mb-3 text-gray-800 font-serif">
            Address
          </h2>
          <p className="text-gray-700 leading-relaxed font-light">
            123 Blog Street, Content City, Webland, 45678
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
