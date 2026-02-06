import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Email Contact */}
          <div className="bg-secondary/30 rounded-2xl p-8 animate-on-scroll">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg">Email Us</h3>
                <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
              </div>
            </div>
            <a
              href="mailto:info@do_lo_tech.com"
              className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
            >
              info@dolotech.com
            </a>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground text-sm">
              <Clock className="w-4 h-4" />
              <span>24hr response time</span>
            </div>
          </div>

          {/* Locations */}
          <div className="bg-secondary/30 rounded-2xl p-8 animate-on-scroll delay-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg">Our Locations</h3>
                <p className="text-muted-foreground text-sm">Global presence</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* United States */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏴󠁡󠁥󠁤󠁵󠁿</div>
                <div>
                  <h4 className="text-foreground font-medium">Dubai</h4>
                  <p className="text-muted-foreground text-sm">2203 Standpoint Tower A Downtown</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;