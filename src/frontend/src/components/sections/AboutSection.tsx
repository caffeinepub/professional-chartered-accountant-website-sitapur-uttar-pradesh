import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const qualifications = [
    'Chartered Accountant (CA)',
    'Expert in Indian Taxation Laws',
    'GST Compliance Specialist',
    'Audit & Assurance Professional',
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg border border-border">
                <img
                  src="/assets/generated/ca-profile-placeholder.dim_800x800.png"
                  alt="Professional chartered accountant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                About Our Practice
              </h2>
              <div className="w-16 h-1 bg-primary" />
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-base">
                As a qualified Chartered Accountant based in Sitapur, Uttar Pradesh, our practice provides comprehensive financial and compliance services to businesses and individuals. We specialize in taxation, GST, accounting, regulatory compliance, and audit services.
              </p>
              <p className="text-base">
                Our approach is grounded in accuracy, confidentiality, and adherence to statutory requirements. We work closely with clients to ensure full compliance with Indian tax laws and regulatory frameworks while optimizing their financial position.
              </p>
              <p className="text-base">
                With expertise spanning tax planning, GST returns, financial statements, regulatory filings, and specialized audit engagements, we deliver professional services that meet the highest standards of the chartered accountancy profession.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{qualification}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
