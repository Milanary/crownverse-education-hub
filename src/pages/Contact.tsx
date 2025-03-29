
// Modify or create this file to add the proper Formspree integration
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch("https://formspree.io/f/xpzvveoz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormStatus("success");
        form.reset();
        toast({
          title: "Message sent!",
          description: "Thank you! We'll get back to you shortly.",
        });
      } else {
        setFormStatus("error");
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setFormStatus("error");
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
            alt="Contact Crown Institute"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-crown-navy/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-poppins font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Have questions? We're here to help you.
          </motion.p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-md p-8">
                <SectionTitle 
                  title="Get In Touch" 
                  subtitle="Send us a message and we'll respond as soon as possible"
                  className="mb-8 text-left"
                />
                
                {formStatus === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-green-600 text-lg font-medium mb-2"
                    >
                      Message Sent Successfully!
                    </motion.div>
                    <p className="text-gray-700">Thank you for contacting Crown Institute. We'll get back to you shortly.</p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    method="POST"
                    action="https://formspree.io/f/xpzvveoz"
                    accept-charset="UTF-8"
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold/50 focus:border-crown-gold"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold/50 focus:border-crown-gold"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number (Optional)</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold/50 focus:border-crown-gold"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="program" className="block text-gray-700 font-medium mb-2">Interested Program</label>
                      <select 
                        id="program" 
                        name="program" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold/50 focus:border-crown-gold bg-white"
                      >
                        <option value="">Select a program</option>
                        <option value="IT">Diploma in Information Technology</option>
                        <option value="Accounting">Diploma in Accounting</option>
                        <option value="Business">Diploma in Business Management</option>
                        <option value="Tourism">Diploma in Hospitality & Tourism</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold/50 focus:border-crown-gold"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full bg-crown-navy hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center"
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <span className="mr-2">Sending...</span>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
            
            {/* Contact Information & Map */}
            <div className="space-y-8">
              <ScrollReveal>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <SectionTitle 
                    title="Contact Information" 
                    subtitle="Our office is open Sunday to Friday"
                    className="mb-8 text-left"
                  />
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-crown-gold/10 p-3 rounded-full mr-4">
                        <MapPin className="w-6 h-6 text-crown-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-crown-navy">Address</h4>
                        <p className="text-gray-600 mt-1">Crown Institute, Sifal, Kathmandu, Nepal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-crown-gold/10 p-3 rounded-full mr-4">
                        <Mail className="w-6 h-6 text-crown-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-crown-navy">Email</h4>
                        <a href="mailto:aryalmilan23@gmail.com" className="text-gray-600 mt-1 hover:text-crown-gold transition-colors">aryalmilan23@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-crown-gold/10 p-3 rounded-full mr-4">
                        <Phone className="w-6 h-6 text-crown-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-crown-navy">Phone</h4>
                        <a href="tel:+9771234567" className="text-gray-600 mt-1 hover:text-crown-gold transition-colors">+977-1-1234567</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-crown-gold/10 p-3 rounded-full mr-4">
                        <Clock className="w-6 h-6 text-crown-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-crown-navy">Opening Hours</h4>
                        <p className="text-gray-600 mt-1">Sun–Fri: 9am–5pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-xl shadow-md p-3 h-[300px] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0430151939433!2d85.33365607439792!3d27.714929676194824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199c0dd8a8ef%3A0x26c317d07ddf99c5!2sSifal%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1711695363242!5m2!1sen!2snp"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Crown Institute Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
