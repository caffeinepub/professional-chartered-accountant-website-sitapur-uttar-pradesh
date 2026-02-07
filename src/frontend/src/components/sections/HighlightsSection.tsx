import { Target, Clock, Lock, Award } from 'lucide-react';

export default function HighlightsSection() {
  const highlights = [
    {
      icon: Target,
      title: 'Compliance-First Approach',
      description:
        'We prioritize regulatory compliance in every engagement, ensuring your business meets all statutory requirements and maintains good standing with authorities.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description:
        'Deadlines matter in financial compliance. We ensure all filings, returns, and submissions are completed accurately and submitted well before due dates.',
    },
    {
      icon: Lock,
      title: 'Confidentiality Assured',
      description:
        'Your financial information is handled with the utmost discretion. We maintain strict confidentiality protocols and secure data management practices.',
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description:
        'Backed by chartered accountant credentials and continuous professional development, we deliver services that meet the highest standards of the profession.',
    },
  ];

  return (
    <section id="highlights" className="py-24 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-base text-muted-foreground leading-relaxed">
            Our commitment to excellence, accuracy, and client satisfaction distinguishes our professional chartered accountant services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
