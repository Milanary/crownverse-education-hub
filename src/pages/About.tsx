import { motion } from "framer-motion"; 
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import {
  Lightbulb, Code, FileText, BookOpenCheck, BarChart4, ClipboardList,
  Users2, Globe, ShieldCheck, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";
import AffiliatedSection from "../components/AffiliatedSection";

const About = () => {
  const expertiseItems = [
    {
      icon: <Lightbulb className="text-crown-navy w-6 h-6" />,
      year: "01",
      title: "IT Services & Digital Innovation",
      description: "Offering custom software, websites, marketing, and tech consulting to drive business results.",
    },
    {
      icon: <Code className="text-crown-navy w-6 h-6" />,
      year: "02",
      title: "Professional & Executive Courses",
      description: "Delivering certified programs that upskill professionals in leadership, tech, and management.",
    },
    {
      icon: <FileText className="text-crown-navy w-6 h-6" />,
      year: "03",
      title: "Training & Capacity Building",
      description: "Enhancing institutional and workforce capacities through workshops, consulting, and coaching.",
    },
    {
      icon: <BookOpenCheck className="text-crown-navy w-6 h-6" />,
      year: "04",
      title: "Business Consulting Services",
      description: "Strategic solutions in project design, M&E, entrepreneurship, and digital transformation.",
    },
    {
      icon: <BarChart4 className="text-crown-navy w-6 h-6" />,
      year: "05",
      title: "Academic Collaboration",
      description: "Working with global universities for higher education pathways and academic exchanges.",
    },
    {
      icon: <ClipboardList className="text-crown-navy w-6 h-6" />,
      year: "06",
      title: "Project Management & Research",
      description: "Delivering evidence-based studies, training, and sustainable development interventions.",
    },
  ];

  const faqs = [
    {
      question: "What type of IT services do you offer?",
      answer: "We offer web and app development, digital marketing, custom software solutions, graphic design, and IT consulting."
    },
    {
      question: "Are your training programs certified?",
      answer: "Yes, our professional courses come with local and international certifications aligned with industry needs."
    },
    {
      question: "Do you partner with global institutions?",
      answer: "Yes, we work with universities and NGOs across Europe, Australia, and Nepal for education and development programs."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
            alt="About Crown Institute"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-crown-navy/70" />
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
            Empowering Individuals, Building Futures
          </motion.p>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="About Crown Institute"
            subtitle="Education. Innovation. Transformation."
            center
          />
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p>
              Crown Institute is a multidisciplinary hub providing IT services, professional education, and consulting
              solutions. With a team of experts, we drive value across development, business, and technology sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Objectives */}
      <section className="py-16 bg-crown-bg text-crown-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <ShieldCheck className="w-8 h-8 mx-auto text-crown-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p>To become a regional leader in IT, skills, and consulting solutions for lasting impact.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users2 className="w-8 h-8 mx-auto text-crown-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p>Deliver client-centric services that empower individuals and institutions to thrive globally.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Globe className="w-8 h-8 mx-auto text-crown-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Objectives</h3>
                <p>Promote tech adoption, entrepreneurship, and international collaboration for capacity building.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Areas of Expertise"
            subtitle="Driving transformation across diverse sectors"
            center
          />
          <div className="relative mt-12 max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-crown-gold/30 z-0"></div>
            {expertiseItems.map((item, index) => (
              <div key={index} className="relative z-10 mb-12 last:mb-0">
                <div className={`md:flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="md:w-5/12">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-crown-gold ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {item.icon}
                        <h3 className="text-xl font-semibold text-crown-navy">{item.title}</h3>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-2/12 flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-crown-navy text-white font-bold py-2 px-4 rounded-md">
                        {item.year}
                      </div>
                      <div className="h-4 w-4 bg-crown-gold rounded-full mt-2 border-4 border-white"></div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Frequently Asked Questions" subtitle="Quick answers to common queries" center />
          <div className="max-w-3xl mx-auto mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-md shadow p-4">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="flex items-center justify-between w-full text-left text-crown-navy font-medium text-lg"
                >
                  {faq.question}
                  {openIndex === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openIndex === idx && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Networks Section */}
      <AffiliatedSection />
    </div>
  );
};

export default About;
