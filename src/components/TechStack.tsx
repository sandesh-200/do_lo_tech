const techLogos = [
  {
    name: "Figma",
    color: "#F24E1E",
    icon: "/figma.png",
  },
  {
    name: "Golang",
    color: "#00ADD8",
    icon: "/golang.png",
  },
  {
    name: "Illustrator",
    color: "#FF9A00",
    icon: "/illustrator.png",
  },
  {
    name: "InVision",
    color: "#FF3366",
    icon: "/invision.png",
  },
  {
    name: "Java",
    color: "#007396",
    icon: "/java.png",
  },
  {
    name: "Laravel",
    color: "#FF2D20",
    icon: "/laravel.png",
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: "/mongodb.png",
  },
  {
    name: "MySQL",
    color: "#4479A1",
    icon: "/mysql.png",
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: "/nodejs.png",
  },
  {
    name: "Photoshop",
    color: "#31A8FF",
    icon: "/photoshop.png",
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: "/python.png",
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: "/react.png",
  },
  {
    name: "Ruby on Rails",
    color: "#CC0000",
    icon: "/ruby_on_rails.png",
  },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies We Work With
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
      </div>

      {/* Scrolling Tech Logos */}
      <div className="max-w-5xl mx-auto px-8 animate-on-scroll delay-200">
        <div className="relative overflow-hidden bg-secondary/30 rounded-2xl shadow-lg py-4">
          <div className="flex animate-scroll hover:pause-animation">
            {/* Triple the logos for seamless infinite loop */}
            {[...techLogos, ...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-2"
              >
                <div className="bg-secondary/50 rounded-lg p-4 flex items-center justify-center w-20 h-20 hover:bg-secondary transition-colors">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;