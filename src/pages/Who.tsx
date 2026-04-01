"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Eye, Rocket, Heart, Globe2 } from "lucide-react";
import bgImage from "..NGB-FAMILY.jpeg";


const WhoPage = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Who We Are
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            Next Generation Builders is a movement dedicated to raising young
            leaders equipped with the mindset, skills, and values needed to
            build a better future.
          </motion.p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg rounded-2xl p-8 border"
        >
          <Target className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To empower young people with the right mindset, practical skills,
            and leadership capacity to become builders of impact in their
            communities and beyond.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white shadow-lg rounded-2xl p-8 border"
        >
          <Eye className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To raise a generation of purpose-driven leaders who innovate,
            create opportunities, and transform Africa and the world.
          </p>
        </motion.div>
      </section>

      {/* ================= AIM ================= */}
      <section className="py-20 bg-blue-50 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Rocket className="mx-auto text-blue-600 mb-4" size={45} />
          <h2 className="text-3xl font-bold mb-6">Our Aim</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our aim is to equip individuals with the tools, mindset, and
            opportunities needed to grow, lead, and build sustainable impact
            in their personal lives, careers, and communities.
          </p>
        </motion.div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            "Growth Mindset",
            "Discipline & Consistency",
            "Leadership",
            "Innovation",
            "Integrity",
            "Impact-Driven Living",
          ].map((value, idx) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center"
            >
              <Heart className="mx-auto text-blue-600 mb-3" />
              <p className="font-semibold">{value}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-20 bg-gray-900 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <Globe2 className="mx-auto text-blue-400 mb-4" size={45} />
          <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Through mentorship, training, and community building, we are shaping
            individuals who are not just skilled, but are prepared to lead,
            innovate, and create real change in society.
          </p>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Become a Builder?
        </motion.h2>

        <Button
          onClick={() => (window.location.href = "/skills")}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700"
        >
          Explore Programs
        </Button>
      </section>

    </div>
  );
};

export default WhoPage;