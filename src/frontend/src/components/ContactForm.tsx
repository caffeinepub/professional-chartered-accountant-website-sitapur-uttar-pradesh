import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Email or phone number is required';
    } else {
      // Check if it's an email or phone
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10,}$/;
      const cleanContact = formData.contact.replace(/[\s-]/g, '');
      
      if (!emailRegex.test(formData.contact) && !phoneRegex.test(cleanContact)) {
        newErrors.contact = 'Please enter a valid email or phone number';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card/50 border border-border/50 rounded-lg p-8 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            Message Received
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Thank you for contacting us. We will review your inquiry and respond within 24 hours on business days.
          </p>
        </div>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', contact: '', message: '' });
          }}
          variant="outline"
          className="mt-4"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 border border-border/50 rounded-lg p-6 sm:p-8">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={`${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact" className="text-sm font-medium">
          Email or Phone <span className="text-destructive">*</span>
        </Label>
        <Input
          id="contact"
          name="contact"
          type="text"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter your email or phone number"
          className={`${errors.contact ? 'border-destructive focus-visible:ring-destructive' : ''}`}
        />
        {errors.contact && (
          <p className="text-xs text-destructive">{errors.contact}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your inquiry or requirements"
          rows={5}
          className={`resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        By submitting this form, you agree to our confidentiality policy. We will only use your information to respond to your inquiry.
      </p>
    </form>
  );
}
