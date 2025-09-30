import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Purpose from "@/components/Purpose";
import Mentoring from "@/components/Mentoring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Purpose />
      <Values />
      <Mentoring />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
