import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import ProgramCard from "../components/ProgramCard";

const programsData = [
  {
    id: 1,
    title: "Diploma in Information Technology",
    image: "https://images.unsplash.com/photo-1581093588401-9c84f8d002d2",
    subjects: [
      "Python Programming",
      "Web Development",
      "Database Systems",
      "Networking",
      "IT Project"
    ],
    description: "Gain practical IT skills that are in high demand across industries. Our IT diploma program combines theoretical knowledge with hands-on practice in modern programming languages, web technologies, and system development.",
    brochureLink: "#"
  },
  {
    id: 2,
    title: "Diploma in Accounting",
    image: "https://images.unsplash.com/photo-1588776814546-ec77f4bd21aa",
    subjects: [
      "Financial Accounting",
      "Taxation",
      "Cost Management",
      "Business Law",
      "QuickBooks"
    ],
    description: "Develop expertise in financial management, taxation, and accounting software. Our accounting diploma prepares you for careers in financial analysis, corporate accounting, and financial management across multiple sectors.",
    brochureLink: "#"
  },
  {
    id: 3,
    title: "Diploma in Business Management",
    image: "https://images.unsplash.com/photo-1598257006634-dc9cb4a5411d",
    subjects: [
      "Organizational Behavior",
      "HR Management",
      "Marketing",
      "Entrepreneurship",
      "Business Ethics"
    ],
    description: "Master the fundamentals of business management and leadership. This program covers essential business functions including human resources, marketing, entrepreneurship, and strategic planning for today's competitive market.",
    brochureLink: "#"
  },
  {
    id: 4,
    title: "Diploma in Hospitality & Tourism",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    subjects: [
      "Tourism Management",
      "Front Office Ops",
      "F&B Basics",
      "CRM",
      "Event Planning"
    ],
    description: "Prepare for an exciting career in the global hospitality and tourism industry. Learn customer service excellence, event management, tourism operations, and develop the skills needed for hotel and travel industry roles.",
    brochureLink: "#"
  }
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  
  const handleProgramClick = (id: number) => {
    setSelectedProgram(id === selectedProgram ? null : id);
  };
  
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9"
            alt="Crown Institute Programs"
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
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Career-focused diplomas designed for employability
          </motion.p>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Accredited Programs" 
            subtitle="Choose from our globally recognized diplomas"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {programsData.map((program, index) => (
              <ScrollReveal key={program.id} delay={index * 0.1}>
                <ProgramCard 
                  title={program.title}
                  image={program.image}
                  subjects={program.subjects}
                  brochureLink={program.brochureLink}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Program Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Program Details" 
            subtitle="Click on a program to learn more"
            center
          />
          
          <div className="mt-12 space-y-6">
            {programsData.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className={`border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedProgram === program.id 
                      ? 'border-crown-gold shadow-md' 
                      : 'border-gray-200'
                  }`}
                  onClick={() => handleProgramClick(program.id)}
                >
                  <div className="p-6 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-1/4">
                      <div className="aspect-video md:aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={program.image} 
                          alt={program.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-poppins font-semibold text-crown-navy mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{program.description}</p>
                      
                      <div className="flex items-center text-crown-gold">
                        <span className="font-medium mr-2">View Subjects</span>
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
                          className={`transition-transform duration-300 ${
                            selectedProgram === program.id ? 'rotate-180' : ''
                          }`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      selectedProgram === program.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 pt-0 md:pl-[calc(25%+1.5rem)]">
                      <div className="p-4 bg-crown-bg rounded-lg">
                        <h4 className="font-medium text-crown-navy mb-3">Key Subjects:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                          {program.subjects.map((subject, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="w-1.5 h-1.5 bg-crown-gold rounded-full mr-2"></span>
                              {subject}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6">
                          <a
                            href={program.brochureLink}
                            download
                            className="inline-flex items-center text-crown-navy font-medium border-2 border-crown-navy rounded-md px-4 py-2 hover:bg-crown-navy hover:text-white transition-colors duration-300"
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              className="mr-2"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="7 10 12 15 17 10"></polyline>
                              <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Download Brochure
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Admissions Section */}
      <section className="py-16 bg-crown-navy text-white mb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="right">
              <SectionTitle 
                title="Admission Process" 
                subtitle="Simple steps to join Crown Institute"
                className="md:mt-0"
              />
              
              <ol className="space-y-6 mt-8">
                <li className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-crown-gold text-crown-navy font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-crown-gold mb-2">Application</h4>
                    <p className="text-gray-300">
                      Submit your application form online or in person with all required documents.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-crown-gold text-crown-navy font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-crown-gold mb-2">Assessment</h4>
                    <p className="text-gray-300">
                      Complete a brief assessment to determine your program readiness.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-crown-gold text-crown-navy font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-crown-gold mb-2">Interview</h4>
                    <p className="text-gray-300">
                      Meet with our admissions team to discuss your goals and expectations.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-crown-gold text-crown-navy font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-crown-gold mb-2">Enrollment</h4>
                    <p className="text-gray-300">
                      Receive your acceptance letter and complete registration to begin your journey.
                    </p>
                  </div>
                </li>
              </ol>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="p-8 bg-white rounded-xl text-crown-navy shadow-lg">
                <h3 className="text-2xl font-poppins font-semibold mb-6">Application Requirements</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
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
                      className="text-crown-gold mr-3 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Completed high school (10+2 or equivalent)</span>
                  </li>
                  
                  <li className="flex items-start">
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
                      className="text-crown-gold mr-3 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Academic transcripts</span>
                  </li>
                  
                  <li className="flex items-start">
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
                      className="text-crown-gold mr-3 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Identification documents</span>
                  </li>
                  
                  <li className="flex items-start">
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
                      className="text-crown-gold mr-3 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Passport-sized photographs</span>
                  </li>
                  
                  <li className="flex items-start">
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
                      className="text-crown-gold mr-3 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Basic English proficiency</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center bg-crown-gold text-crown-navy font-medium rounded-md px-6 py-3 hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
