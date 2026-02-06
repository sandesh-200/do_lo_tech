import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Services', href: '#services', type: 'anchor' },
    { name: 'Why Us?', href: '#why-us', type: 'anchor' },
    { name: 'About Us', href: '#about', type: 'anchor' },
    { name: 'Career', href: '/career', type: 'route' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img src="/do_lo_logoo.png" alt="" />
            </div>
            <span className="text-foreground font-bold text-xl hidden sm:block">
              DO LO TECH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Contact Button */}
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            className="hidden lg:block border border-foreground/30 text-foreground px-6 py-2 rounded text-sm font-medium hover:bg-foreground/10 transition-colors"
          >
            CONTACT US
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-sm py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium px-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={isHomePage ? link.href : `/${link.href}`}
                    className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium px-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href={isHomePage ? "#contact" : "/#contact"}
                className="border border-foreground/30 text-foreground px-6 py-2 rounded text-sm font-medium hover:bg-foreground/10 transition-colors mx-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT US
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;