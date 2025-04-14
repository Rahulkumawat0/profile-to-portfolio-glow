
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <p className="text-gray-300 mb-6">
              I'm currently open to new opportunities and collaborations. Whether you have a question,
              a project idea, or just want to say hi, feel free to reach out and I'll do my best to
              get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-purple/20 p-3 rounded-full text-portfolio-purple">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-purple/20 p-3 rounded-full text-portfolio-purple">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-400">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-purple/20 p-3 rounded-full text-portfolio-purple">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Social Media</h3>
                  <p className="text-gray-400">@johndoe on LinkedIn</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg border border-portfolio-purple/20">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white/10 border-gray-700 focus:border-portfolio-purple"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-white/10 border-gray-700 focus:border-portfolio-purple"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="bg-white/10 border-gray-700 focus:border-portfolio-purple min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-purple hover:bg-portfolio-light-purple text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
