
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a"
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
            We're here to answer your questions
          </motion.p>
        </div>
      </section>
      
      {/* Contact Form and Info Section */}
      <section className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ScrollReveal direction="right">
              <ContactForm />
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <ContactInfo />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Find Us" 
            subtitle="Visit our campus in Kathmandu"
            center
          />
          
          <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0430151939433!2d85.33365607439792!3d27.714929676194824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199c0dd8a8ef%3A0x26c317d07ddf99c5!2sSifal%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1711695363242!5m2!1sen!2snp"
              width="100%" 
              height="450" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Crown Institute Location"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xpzvveoz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          program: "",
          message: ""
        });
        
        toast({
          title: "Thank you!",
          description: "We'll get back to you shortly.",
        });
        
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div>
      <SectionTitle 
        title="Get in Touch" 
        subtitle="We'd love to hear from you"
      />
      
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md mt-8">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-poppins font-semibold text-crown-navy mb-2">
              Thank You!
            </h3>
            <p className="text-gray-700">
              Your message has been sent successfully. We'll get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold focus:border-transparent"
                  placeholder="Your phone number (optional)"
                />
              </div>
              
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                  Interested Program
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold focus:border-transparent appearance-none bg-white"
                >
                  <option value="">Select a program (optional)</option>
                  <option value="IT">Diploma in Information Technology</option>
                  <option value="Accounting">Diploma in Accounting</option>
                  <option value="Business">Diploma in Business Management</option>
                  <option value="Tourism">Diploma in Hospitality & Tourism</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-crown-navy text-white font-medium py-3 rounded-md transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      content: "Crown Institute, Sifal, Kathmandu, Nepal",
    },
    {
      icon: Mail,
      title: "Email",
      content: "aryalmilan23@gmail.com",
      link: "mailto:aryalmilan23@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+977-1-1234567",
      link: "tel:+9771234567",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Sun–Fri: 9am–5pm | Sat: Closed",
    },
  ];
  
  return (
    <div>
      <SectionTitle 
        title="Contact Information" 
        subtitle="Reach out to us directly"
      />
      
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md mt-8">
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-crown-gold/10 rounded-full flex items-center justify-center">
                  <detail.icon className="w-5 h-5 text-crown-navy" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-crown-navy mb-1">{detail.title}</h3>
                {detail.link ? (
                  <a 
                    href={detail.link} 
                    className="text-gray-700 hover:text-crown-gold transition-colors duration-200"
                  >
                    {detail.content}
                  </a>
                ) : (
                  <p className="text-gray-700">{detail.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-medium text-crown-navy mb-3">Follow Us</h3>
          
          <div className="flex space-x-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-10 h-10 bg-crown-navy rounded-full flex items-center justify-center text-white hover:bg-crown-gold transition-colors duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </motion.a>
            
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-10 h-10 bg-crown-navy rounded-full flex items-center justify-center text-white hover:bg-crown-gold transition-colors duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-10 h-10 bg-crown-navy rounded-full flex items-center justify-center text-white hover:bg-crown-gold transition-colors duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
