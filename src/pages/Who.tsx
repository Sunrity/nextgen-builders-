"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Eye, Globe2, Wallet } from "lucide-react";
import bgImage from "../assets/NGB-FAMILY.jpeg";
import "/src/style/who.css";

const WhoPage = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-overlay" />

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
            className="text-lg md:text-xl text-gray-200"
          >
            Next Generation Builders is a movement dedicated to raising young
            leaders equipped with the mindset, skills, and values needed to
            build a better future.
          </motion.p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card-hover bg-white rounded-2xl p-8 border soft-shadow"
        >
          <Target className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600">
            We empower young people with the mindset, discipline, and faith for lasting success,
            equip them with financial wisdom and practical skills to build sustainable companies,
            nurture leaders of excellence, integrity, and innovation, and foster a strong community
            of nation-builders who create positive impact in families, communities, and the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-hover bg-white rounded-2xl p-8 border soft-shadow"
        >
          <Eye className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To raise visionary leaders who create value, build sustainable companies, and transform nations through integrity, innovation, and collaboration.
            We are committed to building Africa by bringing people together to shine the light within us—unlocking potential, fostering unity, and driving collective growth across the continent.
          </p>
        </motion.div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-20 bg-gray-900 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">

          <Globe2 className="mx-auto text-blue-400 mb-4" size={45} />
          <h2 className="text-3xl font-bold mb-6">Our Impact</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { number: "15+", title: "Students Trained", desc: "Individuals who completed our programs." },
              { number: "10+", title: "Employment", desc: "Participants who secured jobs or income." },
              { number: "25+", title: "Engagement", desc: "Active participation in sessions." },
              { number: "2+", title: "Projects", desc: "Real-world projects built." },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="impact-card p-6 rounded-2xl text-center"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-3">{item.number}</h3>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass-dark max-w-3xl mx-auto p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">🔥 Our Focus</h3>
            <p className="text-gray-300">
              We don’t just count numbers — we build transformation. We are raising disciplined, confident, and skilled individuals ready to create value and lead.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FINANCIAL TRANSPARENCY ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <Wallet className="mx-auto text-blue-600 mb-4" size={45} />
          <h2 className="text-3xl font-bold mb-4">How We Use Our Funds</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to transparency, accountability, and sustainability. Every resource is strategically allocated to maximize impact and long-term growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Programs & Training", percent: "45%", desc: "Skills training, mentorship programs, learning tools, and project support." },
            { title: "Mentorship & Team Support", percent: "15%", desc: "Supporting mentors, instructors, and leadership development." },
            { title: "Operations", percent: "10%", desc: "Website, tools, admin, and smooth execution." },
            { title: "Marketing & Growth", percent: "10%", desc: "Expanding reach and attracting more young people." },
            { title: "Outreach & Scholarships", percent: "10%", desc: "Visiting persons in need, supporting motherless homes, and providing scholarships to young talents." },
            { title: "Investment & Growth Fund", percent: "5%", desc: "Investing in sustainable opportunities to generate profit, support the organization, and empower young entrepreneurs." },
            { title: "Reserve Fund", percent: "5%", desc: "Ensuring stability, emergencies, and future sustainability." },
            { title: "Staff Salaries", percent: "10%", desc: "Paying salaries to the people working in the organization to ensure smooth operation and motivation." },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg text-left"
            >
              <h3 className="font-bold text-lg text-blue-600 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.percent}</p>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-600">
            We don’t just spend funds — we invest in people, build sustainable systems, and create opportunities. Through strategic investments, we are building a self-sustaining ecosystem that supports both the organization and the next generation of entrepreneurs.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Step Into Your Purpose. Start Building Today.
        </h2>

        <Button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg">
          Explore Programs
        </Button>
      </section>

    </div>
  );
};

export default WhoPage;