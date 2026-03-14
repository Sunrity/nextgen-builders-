"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Mentoring: React.FC = () => {
  const programs = [
    {
      title: "Leadership Development",
      description:
        "Intensive training on leadership principles, vision casting, and team building.",
      duration: "12 weeks",
      format: "Online + Workshops",
    },
    {
      title: "Financial Literacy",
      description:
        "Comprehensive training on money management, investing, and business building.",
      duration: "8 weeks",
      format: "Online Sessions",
    },
    {
      title: "Mindset Mastery",
      description:
        "Transform your thinking patterns and develop a success-oriented mindset.",
      duration: "6 weeks",
      format: "Online Coaching",
    },
    {
      title: "Faith & Purpose",
      description:
        "Discover your divine purpose and align your goals with biblical principles.",
      duration: "10 weeks",
      format: "Online + Community",
    },
  ];

  const mentors = [
    {
      name: "Francis",
      role: "Tech Coach",
      image: "/mentors/Francis.jpg",
      description:
        "Helping young developers build practical tech skills and grow in the digital world.",
    },
    {
      name: "Michael",
      role: "Leadership Mentor",
      image: "/mentors/Michael.jpg",
      description:
        "Equipping young leaders with the principles needed to lead teams and build organizations.",
    },
    {
      name: "Samuel",
      role: "Financial Coach",
      image: "/mentors/Samuel.jpg",
      description:
        "Teaching financial discipline, wealth creation, and smart money management.",
    },
    {
      name: "Felix",
      role: "Mindset Coach",
      image: "/mentors/Felix.jpg",
      description:
        "Helping young people develop the mindset needed to succeed in life and leadership.",
    },
  ];

  const testimonials = [
  {
    name: "Jackson",
    role: "Web Developer",
    image: "/mentors/Jackson.png", // add actual path if different
    text: "The mentoring community helped me grow both professionally and personally.",
    
  },
  {
    name: "Success",
    role: "Entrepreneur",
    image: "/mentors/Success.png", // add image if you have one
    text: "This mentorship program changed my mindset and helped me start my first business.",
  },
  {
    name: "Esther",
    role: "Student Leader",
    image: "/mentors/Esther.png", // add image if you have one
    text: "I gained confidence in leadership and learned how to work with teams effectively.",
    
  },
];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Online <span className="text-blue-600">Mentoring</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mentoring program equips young people with leadership,
            mindset development, financial wisdom, and purpose-driven growth.
          </p>
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {programs.map((program, index) => (
            <Card key={index} className="rounded-xl shadow-md hover:shadow-lg">
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
                <p className="text-sm text-blue-600">
                  {program.duration} • {program.format}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mentors Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">Meet Our Mentors</h3>
          <motion.div
            className="overflow-x-auto flex gap-6 px-4"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
          >
            {mentors.map((mentor, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-64 p-6 text-center rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-100"
                />
                <h4 className="text-xl font-semibold">{mentor.name}</h4>
                <p className="text-blue-600 font-medium mb-2">{mentor.role}</p>
                <p className="text-gray-600 text-sm">{mentor.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Members Say</h3>
          <motion.div
            className="overflow-x-auto flex gap-6 px-4"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
          >
            {testimonials.map((item, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 p-6 text-center rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-100 object-cover"
                />
                <p className="text-gray-600 mb-4">"{item.text}"</p>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Apply Section */}
        <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Apply for Mentorship</h3>
          <p className="max-w-2xl mx-auto mb-6">
            Join our mentorship program and begin your journey toward leadership,
            financial wisdom, and purpose-driven success.
          </p>
          <a
            href="https://chat.whatsapp.com/JL6fsvqSshrAGbByW2K80Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-3 text-lg">
              Apply Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mentoring;