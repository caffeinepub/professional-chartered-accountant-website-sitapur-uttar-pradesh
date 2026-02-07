import MarketingNavbar from './components/MarketingNavbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import HighlightsSection from './components/sections/HighlightsSection';
import ContactSection from './components/sections/ContactSection';
import MarketingFooter from './components/MarketingFooter';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingNavbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HighlightsSection />
        <ContactSection />
      </main>
      <MarketingFooter />
    </div>
  );
}

export default App;
