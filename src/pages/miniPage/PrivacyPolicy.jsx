import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 text-gray-900 container mx-auto mt-10 p-12 rounded-2xl shadow-2xl max-w-4xl font-[Poppins]">
      <div className="bg-white p-12 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800 tracking-wide">
          Privacy Policy
        </h1>
        <p className="mb-8 text-lg text-gray-700 leading-relaxed text-center font-medium">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and safeguard your information when you visit our blog
          website.
        </p>

        {[
          {
            title: "Information We Collect",
            content:
              "We collect information such as your name, email address, IP address, and browsing behavior to improve user experience and analyze trends. Your data helps us personalize content and enhance our services.",
          },
          {
            title: "How We Use Your Information",
            content:
              "We use your data to provide a better browsing experience, respond to inquiries, and send relevant updates. We do not sell your information to third parties.",
          },
          {
            title: "Cookies and Tracking",
            content:
              "Our website uses cookies to track user activity and optimize functionality. You can manage your cookie preferences through your browser settings.",
          },
          {
            title: "Third-Party Links",
            content:
              "Our website may contain links to third-party sites. We are not responsible for their privacy practices. Please review their privacy policies before providing any personal information.",
          },
          {
            title: "Data Security",
            content:
              "We implement strict security measures to protect your data. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.",
          },
          {
            title: "Children's Privacy",
            content:
              "Our services are not directed to children under 13. We do not knowingly collect information from children. If you believe a child has shared personal data, contact us immediately.",
          },
          {
            title: "Changes to This Privacy Policy",
            content:
              "We may update this policy from time to time. Changes will be reflected on this page with an updated revision date. Please review it periodically.",
          },
          {
            title: "Contact Us",
            content:
              "If you have any questions about our Privacy Policy, please contact us at ",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 border border-gray-300 font-light"
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-800 tracking-wide">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              {section.content}{" "}
              {section.title === "Contact Us" && (
                <a
                  href="mailto:contact@blogwebsite.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  contact@blogwebsite.com
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
