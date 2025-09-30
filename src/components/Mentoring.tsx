import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import mentoringImage from "@/assets/mentoring-image.jpg";

const Mentoring = () => {
  const programs = [
    {
      title: "Leadership Development",
      description: "Intensive training on leadership principles, vision casting, and team building.",
      duration: "12 weeks",
      format: "Online + Workshops"
    },
    {
      title: "Financial Literacy",
      description: "Comprehensive training on money management, investing, and business building.",
      duration: "8 weeks",
      format: "Online Sessions"
    },
    {
      title: "Mindset Mastery",
      description: "Transform your thinking patterns and develop a success-oriented mindset.",
      duration: "6 weeks",
      format: "Online Coaching"
    },
    {
      title: "Faith & Purpose",
      description: "Discover your divine purpose and align your goals with biblical principles.",
      duration: "10 weeks",
      format: "Online + Community"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Online <span className="bg-accent-gradient bg-clip-text text-transparent">Mentoring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our comprehensive online mentoring programs designed to transform your mindset, 
            build your skills, and prepare you for leadership excellence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-up">
            <img 
              src={mentoringImage} 
              alt="Online mentoring session with young leaders"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Transform Your Future Online
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our online mentoring platform provides flexible, accessible training that fits your schedule. 
              Learn from experienced mentors, connect with like-minded peers, and build the foundation 
              for extraordinary success.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Live interactive sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Personalized mentoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Community support network</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Practical assignments & projects</span>
              </div>
            </div>
            
            <Button variant="cta" size="lg" className="w-full sm:w-auto">
              Join Online Mentoring
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {program.title}
                </CardTitle>
                <div className="text-sm text-accent font-medium">
                  {program.duration} • {program.format}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentoring;