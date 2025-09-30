import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      title: "Phone",
      value: "0814-700-8005",
      icon: "📞",
      href: "tel:+2348147008005"
    },
    {
      title: "Email",
      value: "felixkpormon@gmail.com",
      icon: "✉️",
      href: "mailto:felixkpormon@gmail.com"
    },
    {
      title: "Office",
      value: "Port-Harcourt, Nigeria",
      icon: "📍",
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your 
            <span className="block bg-accent-gradient bg-clip-text text-transparent">
              Transformation?
            </span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Take the first step towards becoming the leader you were meant to be. 
            Connect with us today and begin your journey of purpose, growth, and impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index} 
              className="group bg-card/10 border-primary-foreground/20 hover:bg-card/20 transition-all duration-300 hover:-translate-y-2 animate-slide-up backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <CardTitle className="text-lg font-bold text-primary-foreground">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {contact.href !== "#" ? (
                  <a 
                    href={contact.href}
                    className="text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-primary-foreground/90 font-medium">
                    {contact.value}
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-primary-foreground/20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Schedule Your Free Consultation
            </h3>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              Book a one-on-one session to discuss your goals, challenges, and how our mentoring 
              programs can help you achieve extraordinary success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open('tel:+2348147008005')}
              >
                Call Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('mailto:felixkpormon@gmail.com')}
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;