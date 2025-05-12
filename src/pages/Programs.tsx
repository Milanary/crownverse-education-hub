import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import ProgramCard from "../components/ProgramCard";

const programsData = [
  {
    id: 1,
    title: "Executive Development Program on Leadership & Innovation",
    image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9",
    subjects: [
      "Poland's regulatory and financial system",
      "Banking & fintech market dynamics",
      "Transformational leadership in finance",
      "Decision-making during disruption",
      "Change & crisis management",
      "Hybrid work & talent retention",
      "AI in banking & digital innovation",
      "Sustainable finance & ESG",
      "Global leadership exposure"
    ],
    description:
      "A strategic program for senior executives to explore leadership, innovation, and global finance through immersive modules and institutional visits in Poland. Designed for professionals in banking, insurance, and financial sectors.",
    brochureLink: "/executive-development-program.pdf"
  },
  {
    id: 2,
    title: "Project Planning and Management (PPM)",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367d?auto=format&fit=crop&w=800&q=80",
    subjects: [
      "Project cycle management",
      "Logical framework approach",
      "Stakeholder and risk analysis",
      "Project proposal development",
      "Field exposure to development agencies"
    ],
    description:
      "Designed for professionals in NGOs and development cooperation, this 5-day intensive course builds expertise in planning and managing development projects using practical tools and real-world case studies.",
    brochureLink: "#"
  },
  {
    id: 3,
    title: "Local Economic Development (LED)",
    image: "https://images.unsplash.com/photo-1560264357-8f76c2f6f153?auto=format&fit=crop&w=800&q=80",
    subjects: [
      "Strategies for local economic growth",
      "Community-based development planning",
      "SME engagement and empowerment",
      "Case studies from Italy",
      "Municipal and agency collaboration"
    ],
    description:
      "This 5-day course empowers frontline workers and planners with tools to design and implement impactful local economic development strategies, with examples from Southern Italy.",
    brochureLink: "#"
  },
  {
    id: 4,
    title: "Proposal and Report Writing Workshop",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e00ef0d98?auto=format&fit=crop&w=800&q=80",
    subjects: [
      "Donor expectations and proposal structures",
      "Logical & results frameworks",
      "Monitoring and evaluation basics",
      "Impactful reporting techniques",
      "Hands-on writing practice"
    ],
    description:
      "This 5-day workshop builds practical skills in writing compelling project proposals and clear, concise reports for development organizations, helping enhance communication and resource mobilization.",
    brochureLink: "#"
  },
  {
    id: 5,
    title: "Hotel and Hospitality Management Course",
    image: "https://images.unsplash.com/photo-1555992336-03a23c90c4a9?auto=format&fit=crop&w=800&q=80",
    subjects: [
      "Introduction to Italian cuisine & culture",
      "Hospitality etiquette & service standards",
      "Hands-on hotel placement",
      "Restaurant operations",
      "Customer service excellence"
    ],
    description:
      "A 3-month immersive hospitality training with Italian language and culture basics, followed by direct placement in hotels and restaurants in Southern Italy for hands-on learning.",
    brochureLink: "#"
  },
  {
    id: 6,
    title: "Hotel & Hospitality Management Course (Italy)",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
    subjects: [
      "Italian language & culture",
      "Basics of Italian cuisine",
      "Hospitality service training",
      "On-site hotel placements",
      "Hands-on restaurant experience"
    ],
    description:
      "A 3-month intensive course blending hospitality training with cultural immersion in Italy. Includes foundational skills and two-month placements in hotels and restaurants.",
    brochureLink: "#"
  }
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setSelectedProgram((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9"
            alt="Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-crown-navy/70"></div>
        </div>
        <div className="relative z-10 text-white text-center container mx-auto px-4 md:px-6">
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
            Career-focused diplomas and global training experiences
          </motion.p>
        </div>
      </section>

      {/* Grid View */}
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

      {/* Accordion View */}
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
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedProgram === program.id
                      ? "border-crown-gold shadow-md"
                      : "border-gray-200"
                  }`}
                  onClick={() => toggleDropdown(program.id)}
                >
                  <div className="p-6 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-1/4">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-auto rounded-lg object-cover aspect-video md:aspect-square"
                      />
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
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={`transition-transform duration-300 ${
                            selectedProgram === program.id ? "rotate-180" : ""
                          }`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      selectedProgram === program.id ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <h4 className="font-medium text-crown-navy mb-3">
                        Key Subjects:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {program.subjects.map((subject, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className="w-1.5 h-1.5 bg-crown-gold rounded-full mr-2" />
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
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="mr-2"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          Download Brochure
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
