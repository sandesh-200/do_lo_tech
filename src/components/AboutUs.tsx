const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-on-scroll">
            About Us
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed animate-on-scroll delay-200">
            Dolotech is a technology company based in the Dubai, dedicated
            to delivering innovative IT solutions that transform businesses. With our
            team of skilled professionals and a passion for excellence, we help
            organizations leverage the power of technology to achieve their goals.
            From custom software development to cloud services and cybersecurity,
            we provide comprehensive solutions tailored to your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;