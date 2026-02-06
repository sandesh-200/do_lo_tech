const steps = [
  { number: '01', title: 'Discussion', description: 'Understanding your needs and goals' },
  { number: '02', title: 'Ideas & Concepts', description: 'Brainstorming innovative solutions' },
  { number: '03', title: 'Testing & Trying', description: 'Rigorous quality assurance' },
  { number: '04', title: 'Execute & Install', description: 'Seamless deployment' },
];

const HowWeWork = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-on-scroll">
              How DO LO Tech can assist your business
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed animate-on-scroll delay-100">
              We follow a structured approach to ensure your project is delivered
              on time and exceeds expectations. Our team of experts works closely
              with you at every stage to bring your vision to life.
            </p>
            <a
              href="#contact"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors animate-on-scroll delay-200"
            >
              LEARN MORE
            </a>
          </div>

          {/* Right Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 p-6 rounded-xl hover:bg-secondary/50 transition-colors group animate-on-scroll delay-${(index + 1) * 100}`}
              >
                <div className="text-4xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;