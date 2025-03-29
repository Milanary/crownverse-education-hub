
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Award, 
  Briefcase, 
  GraduationCap, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AnimatedCounter from "../components/AnimatedCounter";
import ScrollReveal from "../components/ScrollReveal";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Why Choose Us Section */}
      <FeatureSection />
      
      {/* Affiliated Brands Section */}
      <AffiliatedSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="Students in classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-crown-navy/80 to-crown-navy/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl">
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
            <span className="flex items-center text-lg font-medium">
              <span className="w-2 h-2 bg-crown-gold rounded-full mr-2"></span>
              Globally Recognized
            </span>
            <span className="flex items-center text-lg font-medium">
              <span className="w-2 h-2 bg-crown-gold rounded-full mr-2"></span>
              Career-Focused
            </span>
            <span className="flex items-center text-lg font-medium">
              <span className="w-2 h-2 bg-crown-gold rounded-full mr-2"></span>
              Trusted
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-crown-gold text-crown-navy font-poppins font-medium px-8 py-3 rounded-md text-lg hover:shadow-lg transition-all duration-300"
              >
                Explore Our Programs
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <ScrollReveal delay={0.1}>
            <div>
              <AnimatedCounter end={2000} suffix="+" />
              <p className="text-lg text-gray-600 mt-2">Students Graduated</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div>
              <AnimatedCounter end={4} suffix="+" />
              <p className="text-lg text-gray-600 mt-2">Accredited Diplomas</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.5}>
            <div>
              <AnimatedCounter end={30} suffix="+" />
              <p className="text-lg text-gray-600 mt-2">Qualified Faculty</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "Quality Curriculum",
      description: "Internationally aligned curriculum designed for maximum employability.",
      icon: BookOpen,
    },
    {
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of practical experience.",
      icon: Users,
    },
    {
      title: "Career-Oriented Training",
      description: "Develop skills that are in high demand in today's job market.",
      icon: Briefcase,
    },
    {
      title: "Scholarships & Support",
      description: "Financial aid and academic support to help you succeed.",
      icon: GraduationCap,
    },
  ];
  
  return (
    <section className="section-padding bg-crown-bg">
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
                <h3 className="text-xl font-poppins font-semibold text-crown-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const AffiliatedSection = () => {
  const affiliates = [
    {
      name: "Crown University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/University_of_Cambridge_coat_of_arms.svg/2560px-University_of_Cambridge_coat_of_arms.svg.png",
    },
    {
      name: "NEQAAC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/UNESCO_logo.svg/2560px-UNESCO_logo.svg.png",
    },
    {
      name: "Ministry of Education Nepal",
      logo: "https://moe.gov.np/storage/banner/1667472029.png",
    },
  ];
  
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Affiliations" 
          subtitle="Backed by trusted institutions"
          center
        />
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mt-10">
          {affiliates.map((affiliate, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center">
                <img 
                  src={affiliate.logo} 
                  alt={affiliate.name}
                  className="h-16 md:h-20 mx-auto object-contain mb-3"
                />
                <p className="text-gray-700 font-medium">{affiliate.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Graduate, 2023",
      testimonial: "The IT program at Crown Institute gave me the practical skills I needed to land my dream job right after graduation. The instructors were supportive and the curriculum was cutting-edge.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      name: "Michael Chen",
      role: "Business Management Graduate, 2022",
      testimonial: "Crown Institute's business program perfectly balanced theory with practical case studies. The international perspective I gained has been invaluable in my career progression.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    {
      name: "Anita Sharma",
      role: "Accounting Graduate, 2023",
      testimonial: "The accounting diploma program equipped me with industry-standard skills and software knowledge. The faculty's real-world experience made complex concepts easy to understand.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604",
    },
  ];
  
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
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section-padding bg-crown-bg">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Student Testimonials" 
          subtitle="Hear from our graduates"
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
          
          <div className="flex justify-center mt-6 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-crown-gold scale-125" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
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
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-crown-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4"
          >
            Ready to take the next step?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8"
          >
            Join Crown Institute today and start your journey towards a successful career
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-crown-gold text-crown-navy font-medium text-lg px-8 py-3 rounded-md hover:shadow-lg transition-all duration-300"
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
