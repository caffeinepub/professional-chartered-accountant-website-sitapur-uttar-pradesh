import ContactForm from '../ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-base text-muted-foreground leading-relaxed">
            For inquiries about our services or to schedule a consultation, please contact us. All communications are treated with complete confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Sitapur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      +91 7607105253
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      cakamalkishoreagarwal@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours on business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-muted/30 border border-border/50">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Confidentiality Notice:</strong> All information shared through this contact form is treated with strict confidentiality and used solely for responding to your inquiry.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
