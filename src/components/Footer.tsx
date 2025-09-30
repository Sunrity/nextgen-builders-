const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Next Generation <span className="text-accent">Builders</span>
            </h3>
            <p className="text-background/80 leading-relaxed mb-6">
              Shaping the future by raising a generation of value-driven leaders who build companies, 
              transform nations, and inspire global change through mindset, skills, financial wisdom, and faith.
            </p>
            <div className="text-background/70">
              <p>📍 Port-Harcourt, Nigeria</p>
              <p>📞 0814-700-8005</p>
              <p>✉️ felixkpormon@gmail.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Our Focus</h4>
            <ul className="space-y-2 text-background/80">
              <li>Mindset Training</li>
              <li>Company Building</li>
              <li>Faith & Purpose</li>
              <li>Financial Wisdom</li>
              <li>Leadership Development</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Our Values</h4>
            <ul className="space-y-2 text-background/80">
              <li>Faith in God</li>
              <li>Discipline</li>
              <li>Excellence</li>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/70">
            © 2024 Next Generation Builders. All rights reserved. Building tomorrow's leaders today.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;