import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { GraduationCap, Globe, Award, Users, BookOpen, TrendingUp } from "lucide-react";

const BITDualDegree = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop"
            alt="BIT Dual Degree Programme"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-crown-navy/80"></div>
        </div>
        <div className="relative z-10 text-white text-center container mx-auto px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-poppins font-bold mb-6"
          >
            BIT Dual Degree Programme
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl max-w-3xl mx-auto font-light"
          >
            Kathmandu University & Crown Institute of Higher Education
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 inline-block border border-crown-gold px-4 py-1 rounded-full text-crown-gold bg-crown-navy/30 backdrop-blur-sm"
          >
            Bachelor of Information Technology
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Program Overview"
            subtitle="A unique opportunity to earn degrees from two prestigious institutions"
            center
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Bachelor of Information Technology (BIT) is a collaborative undergraduate program run by 
                <span className="font-semibold text-crown-navy"> Kathmandu University (KU)</span>, Nepal, covering the first two years of study, 
                and <span className="font-semibold text-crown-navy">Crown Institute of Higher Education (CIHE)</span>, Australia, 
                overseeing the remaining two years of study.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Students spend <span className="font-semibold text-crown-navy">two years in Nepal</span> and 
                <span className="font-semibold text-crown-navy"> two more years in Australia</span> as part of this dual degree program. 
                After completing the program, graduates receive degrees from both universities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each intake can accommodate a total of <span className="font-semibold">30 students</span>, providing an excellent 
                opportunity to immerse themselves in the robust academic environments of both KU and Australia within the promising 
                field of information technology.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Program Highlights"
            subtitle="Why choose the BIT Dual Degree Programme"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Globe,
                title: "International Exposure",
                description: "Study in two countries and experience diverse academic cultures and learning environments."
              },
              {
                icon: Award,
                title: "Double Degrees",
                description: "Receive degrees from both Kathmandu University and Crown Institute of Higher Education upon graduation."
              },
              {
                icon: TrendingUp,
                title: "Cost-Effective",
                description: "Benefit from a more cost-effective fee structure compared to standard programs, with numerous scholarship opportunities."
              },
              {
                icon: GraduationCap,
                title: "Quality Education",
                description: "Learn from experienced faculty at two reputable institutions with strong industry connections."
              },
              {
                icon: BookOpen,
                title: "Flexible Pathways",
                description: "Alternative options available for students who choose to continue in Nepal or face visa challenges."
              },
              {
                icon: Users,
                title: "Small Cohorts",
                description: "Limited intake of 30 students ensures personalized attention and better learning outcomes."
              }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className="w-12 h-12 text-crown-gold mb-4" />
                  <h3 className="text-xl font-poppins font-semibold text-crown-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Academic Structure"
            subtitle="Your journey through the dual degree program"
            center
          />
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal>
                <div className="bg-crown-bg p-8 rounded-lg border-l-4 border-crown-navy h-full">
                  <h3 className="text-2xl font-poppins font-bold text-crown-navy mb-4">
                    Years 1-2: Nepal
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Complete the first two years of your Bachelor of Information Technology at Kathmandu University's 
                    Department of Computer Science and Engineering.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-crown-navy rounded-full mr-3"></span>
                      Foundation courses in IT and computer science
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-crown-navy rounded-full mr-3"></span>
                      Programming and software development
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-crown-navy rounded-full mr-3"></span>
                      Core mathematics and theory
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-crown-bg p-8 rounded-lg border-l-4 border-crown-gold h-full">
                  <h3 className="text-2xl font-poppins font-bold text-crown-navy mb-4">
                    Years 3-4: Australia
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Continue your studies at Crown Institute of Higher Education in Australia for the final two years 
                    with advanced coursework and specializations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-crown-gold rounded-full mr-3"></span>
                      Advanced IT specializations
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-crown-gold rounded-full mr-3"></span>
                      Industry projects and internships
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-crown-gold rounded-full mr-3"></span>
                      International networking opportunities
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Pathways */}
      <section className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Alternative Pathways"
            subtitle="Flexible options for every student"
            center
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-poppins font-semibold text-crown-navy mb-4">
                  Continue Your Studies in Nepal
                </h3>
                <p className="text-gray-700 mb-4">
                  Students who choose to continue their studies in Nepal or encounter challenges securing an Australian visa 
                  have the option to transition to either the <span className="font-semibold">Bachelor of Computer Science</span> or 
                  the <span className="font-semibold">Bachelor of Technology in Artificial Intelligence</span> program at 
                  Kathmandu University.
                </p>
                <p className="text-gray-700">
                  In case the number of such students is 50% or more of the intake size, the Department will offer a full-fledged 
                  BIT program for the remaining two years, with the possibility of graduating as a BIT graduate from Kathmandu 
                  University itself.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Educational Resources & CTA */}
      <section className="py-16 bg-crown-navy">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Curriculum & Admissions
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Review the detailed course structure, admission requirements, and scholarship opportunities in our comprehensive program brochure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/download.pdf" download="BIT_Dual_Degree_Brochure.pdf">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-crown-gold text-crown-navy px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center mx-auto sm:mx-0"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Download Brochure
                </motion.button>
              </a>
              <a href="https://comp.ku.edu.np/program/bachelor-of-information-technology-bit" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-crown-navy transition-colors duration-300"
                >
                  Visit KU Website
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BITDualDegree;
