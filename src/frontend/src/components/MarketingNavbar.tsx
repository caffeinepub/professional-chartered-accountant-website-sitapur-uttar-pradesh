import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function MarketingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Choose Us', id: 'highlights' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
            >
              CA Professional Services
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 lg:px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-4"
              size="default"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2 text-left text-sm font-medium text-foreground hover:text-primary hover:bg-accent transition-colors rounded-md"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
                  size="default"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
