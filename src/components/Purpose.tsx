const Purpose = () => {
  const purposes = [
    {
      title: "Mindset Training",
      description: "To train and empower young people with the right mindset for success.",
      icon: "🧠"
    },
    {
      title: "Financial Wisdom",
      description: "To teach financial wisdom and encourage building companies, not just small businesses.",
      icon: "💰"
    },
    {
      title: "Practical Skills",
      description: "To equip youths with practical skills that help them create opportunities, not wait for them.",
      icon: "🛠️"
    },
    {
      title: "Spiritual Foundation",
      description: "To build spiritual and moral foundations through biblical principles.",
      icon: "📖"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-accent-gradient bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We exist to transform lives and build the next generation of purpose-driven leaders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {purposes.map((purpose, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {purpose.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {purpose.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {purpose.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;