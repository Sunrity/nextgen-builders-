import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Values = () => {
  const values = [
    {
      title: "Faith in God",
      description: "Putting God first and building on biblical truth.",
      icon: "🙏"
    },
    {
      title: "Discipline",
      description: "Training the mind to stay focused, consistent, and responsible.",
      icon: "💪"
    },
    {
      title: "Excellence",
      description: "Doing everything with quality and purpose.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "Encouraging creativity, problem-solving, and company building.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "Living with honesty and strong moral principles.",
      icon: "🛡️"
    },
    {
      title: "Leadership",
      description: "Raising leaders who influence with vision and humility.",
      icon: "👑"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core <span className="bg-accent-gradient bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape the leaders we're raising for tomorrow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;