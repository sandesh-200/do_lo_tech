import heroDevices from '@/assets/hero-devices.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary text-sm font-semibold tracking-wider mb-4 animate-on-scroll">
              TECHNOLOGY & IT SOLUTIONS
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6 leading-tight animate-on-scroll delay-100">
              Elevating Businesses through Technology
            </h1>
            <p className="text-muted-foreground text-md mb-8 animate-on-scroll delay-200">
              Driven to deliver revolutionary solutions!
            </p>
            <a
              href="#services"
              className="inline-block border border-foreground/30 text-foreground px-9 py-2 rounded text-md font-medium hover:bg-foreground/10 transition-colors animate-on-scroll delay-300"
            >
              EXPLORE
            </a>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={heroDevices}
              alt="Device mockups showing mobile, tablet and desktop screens"
              className="w-full max-w-lg lg:max-w-xl animate-[float_6s_ease-in-out_infinite] animate-fade-in delay-400"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;