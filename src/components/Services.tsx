const services = [
  { icon: "/design.svg", title: 'Design', description: 'UI/UX Design' },
  { icon: "/developement.svg", title: 'Development', description: 'Web & Mobile' },
  { icon: "/digital_marketing.svg", title: 'Digital Strategy & Marketing', description: 'Growth Solutions' },
  { icon: "/cybersecurity.svg", title: 'Cyber Security', description: 'Protection' },
  { icon: "/ai.svg", title: 'AI', description: 'Artificial Intelligence' },
  { icon: "/cloud_services.svg", title: 'Cloud Services', description: 'Infrastructure' },
  { icon: "/quality_assurance.svg", title: 'Quality Assurance', description: 'Testing' },
  { icon: "/seo.svg", title: 'SEO', description: 'Optimization' },
  { icon: "/many_more.svg", title: '& Many More', description: 'Explore' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 gradient-services">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services We Offer
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Services Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-10 text-center hover:scale-105 transition-transform duration-300 group cursor-pointer shadow-md animate-on-scroll delay-${Math.min((index + 1) * 100, 600)}`}
            >
              <div className="w-40 h-40 flex items-center justify-center mx-auto mb-6">
                <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-gray-900 font-semibold text-xl">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;