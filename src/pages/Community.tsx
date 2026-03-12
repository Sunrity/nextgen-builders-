// pages/community-guide.jsx
import React from "react";

const communityValues = [
  "Inclusivity & Equity – Every member is valued, regardless of background.",
  "Innovation & Excellence – Encourage creativity and strive for the best.",
  "Impact & Measurability – Focus on results that make a real difference.",
  "Sustainability & Responsibility – Think long-term and act ethically.",
  "Resilience & Faith – Stay persistent, motivated, and hopeful even through challenges."
];

const communityRules = [
  "Respect Everyone – No discrimination, harassment, or offensive language.",
  "Stay Positive & Encouraging – Support each other’s growth.",
  "Contribute Meaningfully – Share knowledge and participate actively.",
  "Protect Privacy – Don't share personal information of others without permission.",
  "No Spam or Promotion – Only share relevant resources aligned with our purpose."
];

const Community = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-gray-800">
        Next Generation Builders Community Guide
      </h1>

      {/* Purpose Section */}
      <section className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Purpose of Our Community</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to Next Generation Builders! Our community exists to empower African youth through mindset development, leadership training, and skill-building initiatives. 
          We aim to create a space where members support each other, share knowledge, and take actionable steps toward personal and collective growth.
        </p>
      </section>

      {/* Core Values */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Core Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {communityValues.map((value, index) => (
            <li key={index} className="hover:text-blue-700 transition-colors">{value}</li>
          ))}
        </ul>
      </section>

      {/* Community Rules */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Community Rules</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {communityRules.map((rule, index) => (
            <li key={index} className="hover:text-blue-700 transition-colors">{rule}</li>
          ))}
        </ul>
      </section>

      {/* Engagement */}
      <section className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Engagement & Participation</h2>
        <p className="text-gray-700 leading-relaxed">
          Introduce yourself, join discussions, attend events, and collaborate on projects. Active participation helps you grow and contributes to the community’s success.
        </p>
      </section>

      {/* Support */}
      <section className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Support & Guidance</h2>
        <p className="text-gray-700 leading-relaxed">
          Seek mentorship, access resources, and report conflicts to moderators. We're here to help you succeed.
        </p>
      </section>

      {/* Getting Started */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Getting Started</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Introduce yourself in the community forum.</li>
          <li>Read and follow this guide.</li>
          <li>Attend your first community event.</li>
          <li>Start sharing your skills and learning from others!</li>
        </ol>
      </section>
    </div>
  );
};

export default Community;