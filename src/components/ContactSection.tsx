
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from 'emailjs-com';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const EMAILJS_SERVICE_ID = "service_lznjofo";
const EMAILJS_TEMPLATE_ID = "template_i9pftdq";
const EMAILJS_USER_ID = "006GGeJ7-UgE1vn8M";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const timestamp = new Date().toISOString();
      
      const contactData = {
        ...data,
        createdAt: timestamp,
        status: 'unread'
      };
      
      const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      existingMessages.push(contactData);
      localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
      
      const emailParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: "Rahul Kumawat",
        reply_to: data.email,
      };
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams,
        EMAILJS_USER_ID
      );
      
      console.log('Email sent successfully:', response);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-full h-full bg-hero-pattern opacity-10 -z-10"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-portfolio-purple/10 to-transparent -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <p className="text-gray-300 mb-6">
              I'm currently open to new opportunities and collaborations. Whether you have a question,
              a project idea, or just want to say hi, feel free to reach out and I'll do my best to
              get back to you!
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-purple/20 p-3 rounded-full text-portfolio-light-purple">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">
                    <a href="mailto:rahulkumawat200901@gmail.com" className="hover:text-portfolio-purple transition-colors">
                      rahulkumawat200901@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-purple/20 p-3 rounded-full text-portfolio-light-purple">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-400">
                    <a href="tel:+918780948614" className="hover:text-portfolio-purple transition-colors">
                      +91 8780948614
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-purple/20 p-3 rounded-full text-portfolio-light-purple">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Social Media</h3>
                  <p className="text-gray-400">
                    <a 
                      href="https://www.linkedin.com/in/rahul-kumawat-8780/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-portfolio-purple transition-colors"
                    >
                      @rahul-kumawat-8780 on LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect p-6 rounded-xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="bg-white/5 border-gray-700 focus:border-portfolio-purple" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email" 
                          className="bg-white/5 border-gray-700 focus:border-portfolio-purple" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="bg-white/5 border-gray-700 focus:border-portfolio-purple min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-purple hover:bg-portfolio-light-purple text-white transition-all duration-300 shadow-lg hover:shadow-portfolio-purple/30"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
