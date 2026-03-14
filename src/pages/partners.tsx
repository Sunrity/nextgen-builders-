import React, { useState } from "react";

const partners = [
  {
    name: "Rescaf",
    type: "Strategic Partner",
    description: "Building innovative digital solutions and empowering young tech talents.",
    logo: "/partners/rescaf.png",
    website: "https://example.com",
  },
  {
    name: "Scitylana",
    type: "Community Partner",
    description: "Supporting local tech communities and educational initiatives.",
    logo: "/partners/scitylana.png",
    website: "https://example.com",
  },
  {
    name: "8Cousins",
    type: "Sponsor",
    description: "Investing in youth development and innovation projects.",
    logo: "/partners/8cousins.png",
    website: "https://example.com",
  },
  {
    name: "MJ Netwood",
    type: "Strategic Partner",
    description: "Mentorship-driven tech community for young developers.",
    logo: "/partners/mjnetwood.png",
    website: "https://example.com",
  },
];

const Partners = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Company",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can send the data to a backend or API
    setFormData({ name: "", email: "", type: "Company", description: "" });
  };

  const partnerTypes = ["Strategic Partner", "Community Partner", "Sponsor"];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Partners</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Next Generation Builders collaborates with organizations, companies, and individuals
          who share our vision of empowering young people to build skills, leadership, and innovation.
        </p>
      </div>

      {/* Partners Grid by Type */}
      {partnerTypes.map((type) => {
        const filteredPartners = partners.filter((p) => p.type === type);
        if (filteredPartners.length === 0) return null;
        return (
          <div key={type}>
            <h2 className="text-2xl font-semibold mb-6">{type}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {filteredPartners.map((partner, idx) => (
                <a
                  key={idx}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <img src={partner.logo} alt={partner.name} className="h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </a>
              ))}
            </div>
          </div>
        );
      })}

      {/* Become a Partner Form */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-4">Become a Partner</h2>
        <p className="text-center text-gray-700 mb-8">
          If you or your organization would like to partner with Next Generation Builders,
          please fill out the form below.
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
            <p className="text-gray-700">We have received your partnership request and will contact you soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name / Organization Name"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Company">Company</option>
              <option value="NGO">NGO</option>
              <option value="Individual">Individual</option>
            </select>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief description about you or your organization"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-all"
            >
              Submit Partnership Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Partners;