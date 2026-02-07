import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Receipt, BookOpen, Shield, Building2 } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: 'Taxation Services',
      description:
        'Comprehensive tax planning, preparation, and filing services for individuals and businesses. Expert guidance on income tax, TDS compliance, advance tax calculations, and tax optimization strategies to ensure accurate returns and minimize liabilities under Indian tax laws.',
    },
    {
      icon: Receipt,
      title: 'GST Compliance',
      description:
        'End-to-end GST services including registration, return filing (GSTR-1, GSTR-3B, GSTR-9), input tax credit reconciliation, and GST audit support. We help businesses maintain seamless compliance with GST regulations and handle notices and assessments.',
    },
    {
      icon: BookOpen,
      title: 'Accounting & Bookkeeping',
      description:
        'Professional accounting services including bookkeeping, financial statement preparation, management reporting, and accounts finalization. We maintain accurate financial records, prepare balance sheets and profit & loss statements compliant with accounting standards.',
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description:
        'Comprehensive compliance management including ROC filings, annual returns, statutory audits, and mandatory submissions. We ensure compliance with Companies Act provisions, maintain proper documentation, and meet all statutory deadlines.',
    },
    {
      icon: Building2,
      title: 'Bank Audits & Concurrent Audits',
      description:
        'Specialized audit services for banking and financial institutions including statutory audits, concurrent audits, revenue audits, and stock audits. We provide thorough examination of financial records, real-time verification of transactions, identification of irregularities, compliance with RBI guidelines and internal policies, and continuous monitoring to strengthen internal controls.',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-base text-muted-foreground leading-relaxed">
            Comprehensive chartered accountant services designed to meet all your financial, tax, compliance, and audit requirements with precision and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
