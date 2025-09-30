const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Our <span className="bg-accent-gradient bg-clip-text text-transparent">Mission</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                To empower young people with the right mindset, discipline, and faith for lasting success.
              </p>
              <p>
                To equip youths with financial wisdom and practical skills to build sustainable companies and create opportunities.
              </p>
              <p>
                To nurture leaders who will influence society with excellence, integrity, and innovation.
              </p>
              <p>
                To build a strong community of nation-builders who impact families, communities, and the world with positive change.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To raise a generation of value-driven leaders who build companies, transform nations, and inspire global change through mindset, skills, financial wisdom, and faith.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Our Aim</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To raise a generation of youths who are strong in mindset, money management, skills, and faith, 
                  equipping them to become leaders, company builders, and positive change-makers in society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;