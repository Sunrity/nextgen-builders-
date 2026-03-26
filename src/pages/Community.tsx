import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  ShieldCheck,
  Heart,
  Lightbulb,
  Handshake,
  MessageCircle,
  Star
} from "lucide-react";

const values = [
  { icon: <Users />, text: "Inclusivity & Equity – Every member is valued." },
  { icon: <Lightbulb />, text: "Innovation & Excellence – Creativity and high standards." },
  { icon: <Target />, text: "Impact & Measurability – Focus on real results." },
  { icon: <ShieldCheck />, text: "Sustainability & Responsibility – Think long-term." },
  { icon: <Heart />, text: "Resilience & Faith – Stay strong and hopeful." },
];

const rules = [
  "Respect everyone at all times",
  "Stay positive and encouraging",
  "Contribute meaningfully",
  "Protect privacy",
  "No spam or irrelevant promotion",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Section = ({ title, icon, children, bg = "bg-white" }) => (
  <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`${bg} p-6 rounded-2xl shadow-md`}
  >
    <div className="flex items-center gap-3 mb-4 text-blue-700">
      {icon}
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </motion.section>
);

const Community = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Community Guide
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Welcome to Next Generation Builders — where purpose meets growth and leaders are built.
        </p>
      </motion.div>

      {/* WELCOME */}
      <Section title="Welcome" icon={<Users />}>
        Next Generation Builders is a movement of young individuals committed to building a better future.
        This is where purpose is discovered, potential is developed, and greatness is built.
      </Section>

      {/* PURPOSE */}
      <Section title="Our Purpose" icon={<Target />} bg="bg-blue-50">
        We empower African youth through mindset development, leadership training, and skill-building.
        We create opportunities for growth, collaboration, and impact.
      </Section>

      {/* VISION + MISSION GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        <Section title="Our Vision" icon={<Eye />}>
          To raise a generation of empowered, skilled, and disciplined leaders who create lasting impact.
        </Section>

        <Section title="Our Mission" icon={<Handshake />} bg="bg-blue-50">
          <ul className="list-disc list-inside space-y-2">
            <li>Develop valuable skills</li>
            <li>Build strong character</li>
            <li>Connect like-minded individuals</li>
            <li>Encourage action and growth</li>
          </ul>
        </Section>
      </div>

      {/* VALUES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">
          Core Values
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {values.map((val, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-blue-600">{val.icon}</div>
              <p className="text-gray-700">{val.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* RULES */}
      <Section title="Community Rules" icon={<ShieldCheck />}>
        <ul className="list-disc list-inside space-y-2">
          {rules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>
      </Section>

      {/* ENGAGEMENT */}
      <Section title="Engagement & Participation" icon={<MessageCircle />} bg="bg-blue-50">
        Introduce yourself, join discussions, attend events, and collaborate on projects.
        Growth happens through participation.
      </Section>

      {/* LEADERSHIP */}
      <Section title="Leadership & Growth" icon={<Star />}>
        Members are encouraged to lead, mentor, and build. Leadership is about impact, not titles.
      </Section>

      {/* FINAL CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-blue-700 text-white p-10 rounded-2xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4">You Are a Builder</h2>
        <p className="text-lg">
          This is your time to grow, lead, and create impact.  
          Don’t wait. Don’t doubt. Start building.
        </p>
      </motion.section>

    </div>
  );
};

export default Community;