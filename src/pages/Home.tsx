import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Users, Award, Briefcase, GraduationCap,
  ChevronLeft, ChevronRight, Building2, Globe2, Lightbulb, Newspaper,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <NewsSection />
      <AffiliatedSection />
      <CampusFacilities />
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
        {["Globally Recognized", "Career-Focused", "Trusted"].map((text, idx) => (
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
  </section>
);

const StatsSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
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
  </section>
);

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
          title="News & Updates"
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
    </section>
  );
};


// CONTINUED BELOW – tell me to continue for Affiliated, Testimonials, and CTA.
const AffiliatedSection = () => {
  const affiliates = [
    {
      name: "Crown University",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "NEQAAC",
      logo: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
    {
      name: "Ministry of Education",
      logo: "https://cdn-icons-png.flaticon.com/512/9128/9128146.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
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
                  className="h-16 w-auto max-w-[150px] mx-auto object-contain mb-3"
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
const CampusFacilities = () => {
  const facilities = [
    {
      icon: Building2,
      title: "Modern Classrooms",
      description: "Tech-enabled learning spaces with smart boards and high-speed internet.",
    },
    {
      icon: Globe2,
      title: "International Exposure",
      description: "Curriculum aligned with global standards for international opportunities.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Lab",
      description: "A creative space for students to build, test, and innovate ideas.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Campus Facilities"
          subtitle="Tools and spaces that support your learning journey"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {facilities.map((facility, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center p-6 rounded-lg shadow border hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full mx-auto bg-crown-gold/20 flex items-center justify-center mb-4">
                  <facility.icon className="w-6 h-6 text-crown-navy" />
                </div>
                <h4 className="text-lg font-semibold text-crown-navy mb-2">{facility.title}</h4>
                <p className="text-gray-600">{facility.description}</p>
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
          <ScrollReveal direction="right">
            <SectionTitle
              title="Ready to take the next step?"
              subtitle="Join Crown Institute today and start your journey towards a successful career."
              className="md:mt-0"
            />
            <ul className="space-y-4 mt-6 text-black">
              <li className="flex items-center">
                <ChevronRight className="text-crown-gold w-5 h-5 mr-2" />
                Explore career-focused diploma programs
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-crown-gold w-5 h-5 mr-2" />
                Get guidance on admissions and scholarships
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-crown-gold w-5 h-5 mr-2" />
                Join a growing community of professionals
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/contact">
                <button className="inline-flex items-center bg-crown-gold text-crown-navy font-medium rounded-md px-6 py-3 hover:bg-opacity-90 transition-colors duration-300">
                  Apply Now
                </button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl text-crown-navy shadow-lg">
              <h3 className="text-2xl font-poppins font-semibold mb-6 text-crown-gold">
                Why Crown?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="text-crown-gold mr-2 mt-1" />
                  Globally recognized diplomas
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-crown-gold mr-2 mt-1" />
                  Industry-ready skill development
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-crown-gold mr-2 mt-1" />
                  Supportive faculty & innovative learning
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};




export default Home;
