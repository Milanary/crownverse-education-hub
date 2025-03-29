import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
            alt="About Crown Institute"
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Excellence in education since 2010
          </motion.p>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <SectionTitle 
                title="Our Mission" 
                subtitle="Why we exist"
                className="text-left"
              />
              <p className="text-gray-700 mt-6">
                To provide internationally aligned, career-oriented education for Nepalese students, 
                empowering them with the knowledge, skills, and confidence to excel in the global job market. 
                We strive to create a learning environment that nurtures innovation, critical thinking, and 
                personal growth.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <SectionTitle 
                title="Our Vision" 
                subtitle="Where we're headed"
                className="text-left"
              />
              <p className="text-gray-700 mt-6">
                To be the leading educational institution in Nepal for employable skills and global recognition. 
                We aim to be known for our excellence in technical education, strong industry connections, and 
                graduates who contribute meaningfully to their communities and the global workforce.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Story" 
            subtitle="A journey of academic excellence"
            center
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 text-center mb-12">
              Crown Institute was founded in 2010 with a mission to transform technical education. 
              Today, it proudly partners with Crown University of Higher Education to deliver globally 
              recognized diplomas. Our journey has been marked by continuous improvement, innovation, 
              and commitment to student success.
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-crown-bg relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Journey" 
            subtitle="How we've grown over the years"
            center
          />
          
          {/* Timeline Container with fixed styling */}
          <div className="relative mt-12 max-w-4xl mx-auto">
            {/* Vertical Line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-crown-gold/30 z-0"></div>
            
            {/* Timeline Items */}
            {[
              { year: "2010", title: "Founded", description: "Crown Institute was established with a vision to transform technical education in Nepal." },
              { year: "2013", title: "500+ Students", description: "Reached a milestone of 500 students, expanding our programs and facilities." },
              { year: "2018", title: "Crown University Affiliation", description: "Secured academic affiliation with Crown University of Higher Education, enhancing our global recognition." },
              { year: "2024", title: "2000+ Graduates", description: "Celebrated over 2000 successful graduates working in various industries worldwide." }
            ].map((item, index) => (
              <div key={index} className="relative z-10 mb-12 last:mb-0">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Year Box - For Mobile, always centered */}
                  <div className="md:hidden flex justify-center mb-6">
                    <div className="flex flex-col items-center">
                      <div className="bg-crown-navy text-white text-lg font-bold py-2 px-4 rounded-md">
                        {item.year}
                      </div>
                      <div className="h-8 w-1 bg-crown-gold"></div>
                    </div>
                  </div>
                  
                  {/* Timeline Content - For Desktop */}
                  <div className="md:w-5/12">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-crown-gold ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                    >
                      <h3 className="text-xl font-semibold text-crown-navy mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Year Box - For Desktop, alternating sides */}
                  <div className="hidden md:block md:w-2/12 flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-crown-navy text-white font-bold py-2 px-4 rounded-md">
                        {item.year}
                      </div>
                      <div className="h-4 w-4 bg-crown-gold rounded-full mt-2 border-4 border-white"></div>
                    </div>
                  </div>
                  
                  {/* Empty div for spacing on desktop */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Accreditations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Affiliations" 
            subtitle="Institutions that recognize our quality"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {[
              { 
                name: "Crown University", 
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Crown_College_seal.svg/1200px-Crown_College_seal.svg.png", 
                description: "Academic partner providing global recognition to our programs." 
              },
              { 
                name: "NEQAAC", 
                image: "https://cdn-icons-png.flaticon.com/512/8066/8066341.png", 
                description: "Quality assurance certification for educational excellence." 
              },
              { 
                name: "Ministry of Education", 
                image: "https://moe.gov.np/storage/banner/1667472029.png", 
                description: "Recognized by the Nepal Ministry of Education." 
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-full flex flex-col items-center">
                  <div className="mb-4 h-16 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-crown-navy mb-2">{item.name}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Section - Updated to prevent blending with footer */}
      <section className="py-16 bg-crown-navy text-white mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Leadership Message" 
            subtitle="A word from our director"
            center
          />
          
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <p className="text-xl italic">
                "We don't just teach — we prepare students for the future. Our programs are designed to 
                bridge the gap between academic learning and industry requirements, ensuring our graduates 
                are not just degree holders, but skilled professionals ready to make an impact."
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-crown-gold">Dr. Rajesh Kumar</h4>
                <p className="text-gray-300">Director, Crown Institute</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
