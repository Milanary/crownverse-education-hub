import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Users, Award, Briefcase, GraduationCap,
  ChevronLeft, ChevronRight, Building2, Globe2, Lightbulb, Newspaper, Layers, MessageCircle, Target,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import TestimonialCard from "../components/TestimonialCard";
import AffiliatedSection from "../components/AffiliatedSection";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <NewsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1588072432836-e10032774350"
        alt="Students in classroom"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-crown-navy/80 to-crown-navy/60" />
    </div>
    <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6"
      >
        Shape Your Future with Crown Institute
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
      >
        {["Professional Courses", "Consulting Services", "Training and Capacity Building"].map((text, idx) => (
          <span key={idx} className="flex items-center text-lg font-medium">
            <span className="w-2 h-2 bg-crown-gold rounded-full mr-2" />
            {text}
          </span>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Link to="/IT-services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-crown-gold text-crown-navy font-poppins font-medium px-8 py-3 rounded-md text-lg hover:shadow-lg transition-all duration-300"
          >
            Explore IT Services
          </motion.button>
        </Link>
      </motion.div>
    </div>
  </section>
);




const FeatureSection = () => {
  const features = [
    {
      title: "Quality Services",
      description: "We deliver consistent, high-quality educational services tailored to each learner.",
      icon: Layers,
    },
    {
      title: "Global Network",
      description: "Connect with international institutions and global learning opportunities.",
      icon: Globe2,
    },
    {
      title: "Result-Based Approach",
      description: "We prioritize real outcomes that lead to career and academic success.",
      icon: Target,
    },
    {
      title: "Instant Customer Service",
      description: "Responsive support and guidance to meet your needs anytime.",
      icon: MessageCircle,
    },
    {
      title: "Expert Team",
      description: "Our instructors and staff are industry-experienced and learner-focused.",
      icon: Users,
    },
  ];


  return (
    <section className="py-16 bg-crown-bg">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Why Choose Us"
          subtitle="At Crown Institute, we're committed to your success"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="feature-card">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-crown-gold/10 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-crown-navy" />
                </div>
                <h3 className="text-xl font-semibold text-crown-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};



const NewsSection = () => {
  const [index, setIndex] = useState(0);

  const news = [
    {
      title: "Crown Institute Launches New Innovation Lab",
      description: "Students can now explore AI, robotics, and more in our latest facility.",
    },
    {
      title: "Industry Collaboration with Tech Solutions Nepal",
      description: "A new partnership will help students with internships and placements.",
    },
    {
      title: "Scholarships for 2025 Announced",
      description: "Financial support available for eligible applicants. Apply now!",
    },
    {
      title: "Crown Alumni Meet 2025",
      description: "Over 300 alumni gathered to celebrate success and network.",
    },
    {
      title: "Free Career Counselling Week Starts April",
      description: "Students and parents can visit our career advisors all week.",
    },
  ];

  const handleNext = () => setIndex((prev) => (prev + 1) % news.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + news.length) % news.length);

  useEffect(() => {
    const auto = setInterval(() => handleNext(), 6000);
    return () => clearInterval(auto);
  }, []);

  const visibleNews = [...news, ...news].slice(index, index + 3);

  return (
    <section className="py-16 bg-crown-bg relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Highlights"
          subtitle="Stay informed about what's happening"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {visibleNews.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="mb-3">
                  <Newspaper className="text-crown-gold w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-crown-navy mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="bg-white p-2 rounded-full shadow hover:bg-crown-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={handleNext}
            className="bg-white p-2 rounded-full shadow hover:bg-crown-gold transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
       <AffiliatedSection />
    </section>
  );
};






const ServicesSection = () => {
  const services = [
    {
      icon: Layers,
      title: "IT Services",
      description: "Custom IT solutions and software tailored for educational institutions and businesses."
    },
    {
      icon: BookOpen,
      title: "Professional Courses",
      description: "Accredited diplomas and career-oriented certifications to boost your qualifications."
    },
    {
      icon: Users,
      title: "Training & Capacity Building",
      description: "Workshops and training sessions to enhance skills and build team capacity."
    },
    {
      icon: Briefcase,
      title: "Business Consulting Services",
      description: "Strategic consulting and advisory support for organizational growth and transformation."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Services"
          subtitle="Explore what we offer to empower your journey"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center p-6 rounded-lg shadow border hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full mx-auto bg-crown-gold/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-crown-navy" />
                </div>
                <h4 className="text-lg font-semibold text-crown-navy mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
           
        </div>
        
      </div>
       
    </section>
    
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Graduate, 2023",
      testimonial:
        "The IT program at Crown Institute gave me the practical skills I needed to land my dream job right after graduation. The instructors were supportive and the curriculum was cutting-edge.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      name: "Michael Chen",
      role: "Business Management Graduate, 2022",
      testimonial:
        "Crown Institute's business program perfectly balanced theory with practical case studies. The international perspective I gained has been invaluable in my career progression.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    {
      name: "Anita Sharma",
      role: "Accounting Graduate, 2023",
      testimonial:
        "The accounting diploma program equipped me with industry-standard skills and software knowledge. The faculty's real-world experience made complex concepts easy to understand.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-crown-bg relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Partnership Reviews"
          subtitle="Hear from our Partners"
          center
        />

        <div className="max-w-4xl mx-auto mt-12 relative">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              name={testimonials[currentIndex].name}
              role={testimonials[currentIndex].role}
              testimonial={testimonials[currentIndex].testimonial}
              image={testimonials[currentIndex].image}
            />
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-crown-gold transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-crown-gold transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-6 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-crown-gold scale-125"
                    : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 bg-crown-bg text-white mb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Info */}
          <ScrollReveal direction="right">
            <SectionTitle
              title="Looking for Expert Services?"
              subtitle="Whether you're exploring professional courses, IT solutions, consulting, or training — our team is ready to assist you. Send us a quick inquiry today."
              className="md:mt-0"
            />
            <ul className="space-y-4 mt-6 text-black">
              <li className="flex items-center">
                <ChevronRight className="text-crown-gold w-5 h-5 mr-2" />
                Tailored professional development programs
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-crown-gold w-5 h-5 mr-2" />
                Comprehensive IT and digital transformation services
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-crown-gold w-5 h-5 mr-2" />
                Organizational training & consulting support
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/contact">
                <button className="inline-flex items-center bg-crown-gold text-crown-navy font-medium rounded-md px-6 py-3 hover:bg-opacity-90 transition-colors duration-300">
                  Contact Our Team
                </button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Side - Form */}
          <ScrollReveal direction="left">
            <form className="p-8 bg-white text-crown-navy rounded-xl shadow-lg space-y-4">
              <h3 className="text-2xl font-poppins font-semibold text-crown-gold mb-2">
                General Inquiry Form
              </h3>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Area of Interest
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold"
                >
                  <option>-- Select a service --</option>
                  <option>Professional Courses</option>
                  <option>IT Services</option>
                  <option>Training & Capacity Building</option>
                  <option>Business Consulting</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crown-gold"
                  placeholder="Briefly describe what you’re looking for..."
                />
                 
              </div>
              <button
                type="submit"
                className="w-full bg-crown-gold text-crown-navy font-medium rounded-md px-6 py-3 hover:bg-opacity-90 transition-colors duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </ScrollReveal>
           
        </div>
      </div>
    </section>
  );
};






export default Home;
