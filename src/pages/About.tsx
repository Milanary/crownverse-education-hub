
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { Award, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <HeaderBanner />
      
      {/* Mission & Vision */}
      <MissionVisionSection />
      
      {/* Our Story */}
      <OurStorySection />
      
      {/* Leadership Message */}
      <LeadershipSection />
      
      {/* Timeline */}
      <TimelineSection />
      
      {/* Accreditations */}
      <AccreditationsSection />
    </div>
  );
};

const HeaderBanner = () => {
  return (
    <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
          alt="University campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crown-navy/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-poppins font-bold mb-4"
        >
          About Crown Institute
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 bg-crown-gold rounded mx-auto" 
        />
      </div>
    </section>
  );
};

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Mission & Vision" 
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <ScrollReveal>
            <div className="bg-crown-bg rounded-xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-poppins font-semibold text-crown-navy mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide internationally aligned, career-oriented education for Nepalese students. 
                We strive to equip our students with the knowledge, skills, and professional network 
                they need to excel in their chosen fields, both locally and globally.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-crown-navy rounded-xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-poppins font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading educational institution in Nepal for employable skills and global recognition. 
                We aim to create a community of skilled professionals who contribute positively to society and 
                drive economic growth through innovation and excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const OurStorySection = () => {
  return (
    <section className="py-16 bg-crown-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollReveal direction="right">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              alt="Crown Institute Campus"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <SectionTitle 
              title="Our Story" 
              className="md:mt-0"
            />
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Crown Institute was founded in 2010 with a mission to transform technical education in Nepal. 
              What began as a small training center with just three programs has evolved into a premier 
              educational institution offering globally recognized diplomas.
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our journey has been one of continuous growth and innovation. In 2018, we established a 
              strategic partnership with Crown University of Higher Education, which allowed us to offer 
              internationally recognized qualifications to our students.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Today, Crown Institute proudly stands as a beacon of quality education, having helped 
              over 2,000 students achieve their career goals and make meaningful contributions to 
              their communities and beyond.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const LeadershipSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollReveal>
            <div>
              <SectionTitle 
                title="Leadership Message" 
                className="md:mt-0"
              />
              
              <blockquote className="border-l-4 border-crown-gold pl-6 py-2 my-6">
                <p className="text-lg text-gray-700 italic font-medium">
                  "We don't just teach — we prepare students for the future. Our commitment goes beyond 
                  classroom education to nurturing well-rounded professionals who are ready to take on the 
                  challenges of a rapidly evolving global workforce."
                </p>
              </blockquote>
              
              <div className="flex items-center mt-6">
                <div className="mr-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                      alt="Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-crown-navy">Dr. Rajesh Sharma</h4>
                  <p className="text-gray-600">Director, Crown Institute</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-crown-bg p-6 rounded-lg shadow-sm">
                <h4 className="font-poppins font-semibold text-crown-navy mb-2">Our Philosophy</h4>
                <p className="text-gray-700">Education that balances theory with practical skills for real-world success.</p>
              </div>
              
              <div className="bg-crown-bg p-6 rounded-lg shadow-sm">
                <h4 className="font-poppins font-semibold text-crown-navy mb-2">Our Approach</h4>
                <p className="text-gray-700">Student-centered learning with industry-relevant curriculum and experienced faculty.</p>
              </div>
              
              <div className="bg-crown-bg p-6 rounded-lg shadow-sm">
                <h4 className="font-poppins font-semibold text-crown-navy mb-2">Our Commitment</h4>
                <p className="text-gray-700">Providing quality education that leads to meaningful employment opportunities.</p>
              </div>
              
              <div className="bg-crown-bg p-6 rounded-lg shadow-sm">
                <h4 className="font-poppins font-semibold text-crown-navy mb-2">Our Values</h4>
                <p className="text-gray-700">Excellence, integrity, innovation, and inclusivity in all we do.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: 2010,
      title: "Foundation",
      description: "Crown Institute was established with a vision to transform technical education in Nepal."
    },
    {
      year: 2013,
      title: "500+ Students",
      description: "Reached milestone of 500 students and expanded to a larger campus."
    },
    {
      year: 2018,
      title: "Crown University Affiliation",
      description: "Established partnership with Crown University of Higher Education for international recognition."
    },
    {
      year: 2024,
      title: "2000+ Graduates",
      description: "Celebrated the achievement of helping 2000+ students launch successful careers."
    }
  ];
  
  return (
    <section className="py-16 bg-crown-bg">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Journey" 
          subtitle="Key milestones in our growth"
          center
        />
        
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute h-full w-1 bg-crown-gold/30 left-1/2 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year Circle for Desktop */}
                  <div className="hidden md:flex items-center justify-center w-full">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-crown-gold flex items-center justify-center shadow-lg">
                        <span className="text-crown-navy font-poppins font-bold">{event.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Box */}
                  <div className="bg-white rounded-xl p-6 shadow-md md:w-full">
                    {/* Year for Mobile */}
                    <div className="flex items-center mb-3 md:hidden">
                      <div className="w-12 h-12 rounded-full bg-crown-gold flex items-center justify-center mr-4">
                        <span className="text-crown-navy font-poppins font-bold">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-poppins font-semibold text-crown-navy">{event.title}</h3>
                    </div>
                    
                    {/* Title for Desktop */}
                    <h3 className="text-xl font-poppins font-semibold text-crown-navy mb-3 hidden md:block">{event.title}</h3>
                    
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AccreditationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Accreditations" 
          subtitle="Globally recognized credentials"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ScrollReveal>
            <div className="bg-crown-bg rounded-xl p-8 text-center shadow-sm h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crown-gold/10 rounded-full mb-6">
                <Award className="w-8 h-8 text-crown-navy" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-crown-navy mb-4">
                NEQAAC Certified
              </h3>
              <p className="text-gray-700">
                Our programs are certified by the Nepal Education Quality Assurance and Accreditation Council, ensuring high-quality educational standards.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-crown-bg rounded-xl p-8 text-center shadow-sm h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crown-gold/10 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-crown-navy" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-crown-navy mb-4">
                Ministry of Education Recognition
              </h3>
              <p className="text-gray-700">
                Fully recognized by the Ministry of Education, Nepal, validating our commitment to educational excellence and compliance with national standards.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="bg-crown-bg rounded-xl p-8 text-center shadow-sm h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crown-gold/10 rounded-full mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-crown-navy"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-crown-navy mb-4">
                Academic Affiliation
              </h3>
              <p className="text-gray-700">
                Proud academic partner of Crown University of Higher Education, providing our students with globally recognized diplomas and qualifications.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
