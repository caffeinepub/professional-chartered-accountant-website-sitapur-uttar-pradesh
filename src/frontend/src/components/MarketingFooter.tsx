import { SiFacebook, SiLinkedin, SiX } from 'react-icons/si';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function MarketingFooter() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">CA Professional Services</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert chartered accountant services in Sitapur, Uttar Pradesh. Specializing in taxation, GST, accounting, and regulatory compliance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Taxation Services</li>
              <li>GST Compliance</li>
              <li>Accounting & Bookkeeping</li>
              <li>Regulatory Compliance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span>Sitapur, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <span>Available on request</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <span>Contact via form</span>
              </li>
            </ul>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2026. Built with love using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
