"use client";
import React, { useState, useEffect } from "react";

const partners = [
  {
    name: "Rescaf",
    description: "Building innovative digital solutions and empowering young tech talents.",
    logo: "/partners/rescaf.jpg",
    website: "https://rescaf.io",
  },
  {
    name: "Scitylana",
    description: "Supporting local tech communities and educational initiatives.",
    logo: "/partners/Scitylana.jpg",
    website: "https://www.scitylana.co.uk",
  },
  {
    name: "8Cousins",
    description: "Investing in youth development and innovation projects.",
    logo: "/partners/8cousins.png",
    website: "https://example.com",
  },
  {
    name: "MJ Netwood",
    description: "Mentorship-driven tech community for young developers.",
    logo: "/mj-next.webp",
    website: "https://mjnextwoodglobal.com",
  },
];

const Partners = () => {
  const [visible, setVisible] = useState(false);

  const [selectedWebsite, setSelectedWebsite] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState("");

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">

      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Our Partners
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We collaborate with organizations that share our vision of empowering youth.
        </p>
      </div>

      {/* 🔵 Partners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg p-6 text-center transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 mx-auto mb-4 object-contain bg-white p-2 rounded-lg"
            />

            <h3 className="font-bold text-lg">{partner.name}</h3>

            <p className="text-sm mt-2 text-blue-100">
              {partner.description}
            </p>

            <div className="flex gap-2 justify-center mt-4 flex-wrap">
              <button
                onClick={() => {
                  setSelectedWebsite(partner.website);
                  setSelectedName(partner.name);
                }}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100"
              >
                Preview
              </button>

              <a
                href={partner.website}
                target="_blank"
                className="border border-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-blue-600"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 🌐 Website Preview Modal */}
      {selectedWebsite && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-6xl h-[80vh] rounded-xl overflow-hidden">

            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">{selectedName}</h3>
              <button
                onClick={() => setSelectedWebsite(null)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>
            </div>

            <iframe
              src={selectedWebsite}
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};

export default Partners;