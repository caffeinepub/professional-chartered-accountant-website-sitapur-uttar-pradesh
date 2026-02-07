import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/ca-hero-bg-professional.dim_1600x900.png"
          alt="Professional accounting services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Professional Gradient Overlay - Light Mode */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-background/95 via-background/90 to-background/85 dark:from-background/92 dark:via-background/88 dark:to-background/82" />
      
      {/* Subtle Blue Tint Overlay for Brand Consistency */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-primary/5 via-transparent to-accent/8 dark:from-primary/8 dark:via-transparent dark:to-accent/12" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Chartered Accountant • Sitapur, Uttar Pradesh
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professional Financial & Compliance Services
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Delivering comprehensive chartered accountant services with expertise in taxation, GST compliance, accounting, regulatory matters, and specialized audit services for businesses across Uttar Pradesh.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-base"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-base"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
