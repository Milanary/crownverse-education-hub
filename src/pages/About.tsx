import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import {
  Lightbulb,
  Code,
  FileText,
  BookOpenCheck,
  BarChart4,
  ClipboardList,
  Users2,
  Globe,
  ShieldCheck,
} from "lucide-react";

const About = () => {
  const expertiseItems = [
    {
      icon: <Lightbulb className="text-crown-navy w-6 h-6" />,
      year: "01",
      title: "Skill Training for Employability",
      description: "Empowering youth with job-ready technical and vocational training aligned with industry needs.",
    },
    {
      icon: <Code className="text-crown-navy w-6 h-6" />,
      year: "02",
      title: "Information Technology & Digital Services",
      description: "Delivering future-ready IT education including software, networking, and digital transformation tools.",
    },
    {
      icon: <FileText className="text-crown-navy w-6 h-6" />,
      year: "03",
      title: "Accounting and Financial Literacy",
      description: "Building competency in finance, bookkeeping, taxation, and accounting systems with practical tools.",
    },
    {
      icon: <BookOpenCheck className="text-crown-navy w-6 h-6" />,
      year: "04",
      title: "Higher Education Programs",
      description: "Offering academic diplomas and degrees through partnerships with international universities.",
    },
    {
      icon: <BarChart4 className="text-crown-navy w-6 h-6" />,
      year: "05",
      title: "Entrepreneurship & Business Development",
      description: "Nurturing innovation and self-employment through incubation, mentoring, and financial guidance.",
    },
    {
      icon: <ClipboardList className="text-crown-navy w-6 h-6" />,
      year: "06",
      title: "Research & Project Intervention",
      description: "Engaging in evidence-based studies and monitoring & evaluation of development programs.",
    },
  ];

  const affiliations = [
    "Crown Institute of Higher Education (CIHE), Sydney",
    "University of Pavia, Italy",
    "Social Media Culture University, Toruń, Poland",
    "Cooperation and Development Network of Pavia",
    "Crown Institute of Business and Technology (CIBT), Sydney",
    "MU Institute of Cooperation and Development (MICD), Kathmandu",
    "Kathmandu Technical School, Kathmandu",
    "Resources Himalaya Foundation (RHF), Lalitpur",
    "Unnati, a national NGO, Kathmandu",
  ];

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
            Empowering Individuals, Building Futures
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="About Crown Institute"
            subtitle="Education. Innovation. Transformation."
            center
          />
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p>
              Crown Institute is a visionary venture driven by a team of educators, entrepreneurs, and technologists to create meaningful impact through skills, higher education, consultancy, and innovation. We offer programs that meet global market demands and foster personal and institutional transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission Objectives */}
      <section className="py-16 bg-crown-bg text-crown-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <ShieldCheck className="w-8 h-8 mx-auto text-crown-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p>
                  To become a global leader in skills, education, innovation, and consultancy services—driving transformative change.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users2 className="w-8 h-8 mx-auto text-crown-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p>
                  Deliver cutting-edge programs that empower individuals and organizations to thrive and innovate in a rapidly evolving world.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Globe className="w-8 h-8 mx-auto text-crown-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Objectives</h3>
                <p>
                  Offer vocational & higher education, consulting, entrepreneurship support, and global partnerships to meet international workforce needs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Areas of Expertise (Timeline Style) */}
      <section className="py-16 bg-white relative">
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
                  {/* Mobile Year */}
                  <div className="md:hidden flex justify-center mb-6">
                    <div className="flex flex-col items-center">
                      <div className="bg-crown-navy text-white text-lg font-bold py-2 px-4 rounded-md">
                        {item.year}
                      </div>
                      <div className="h-8 w-1 bg-crown-gold"></div>
                    </div>
                  </div>

                  {/* Content */}
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

                  {/* Desktop Year */}
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

      {/* Affiliations & Partnerships - Auto-Scroll */}
      <section className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Affiliations & Partnerships"
            subtitle="Collaborating for greater impact"
            center
          />
          <div className="overflow-hidden relative mt-12">
            <div
              className="flex animate-scroll-slow space-x-8 items-center"
              style={{ animation: "scroll-left 40s linear infinite" }}
            >
              {affiliations.map((name, index) => (
                <div
                  key={index}
                  className="min-w-[200px] flex flex-col items-center text-center bg-white rounded-lg shadow-md px-4 py-6 mx-2"
                >
                  <img
                    src="https://via.placeholder.com/80"
                    alt={name}
                    className="w-16 h-16 object-contain mb-3"
                  />
                  <p className="text-crown-navy font-medium text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default About;
