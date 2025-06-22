import { motion } from "framer-motion";
import {
  Briefcase, Code2, Paintbrush, Globe2, MonitorSmartphone,
  Search, Target, PenTool, Rocket, LifeBuoy
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import AffiliatedSection from "../components/AffiliatedSection";


const services = [
  {
    title: "Tailored Website Development",
    description:
      "Custom-designed websites that reflect your brand and drive engagement across devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Digital Marketing",
    description:
      "Result-driven strategies including SEO, SEM, email campaigns, and social media growth.",
    icon: Globe2,
  },
  {
    title: "Graphic Design",
    description:
      "Creative and modern designs for logos, brochures, social media, and marketing materials.",
    icon: Paintbrush,
  },
  {
    title: "Custom Software Solutions",
    description:
      "Streamline your operations with scalable, high-performance web and mobile apps.",
    icon: Code2,
  },
  {
    title: "IT Consulting",
    description:
      "Expert advice to help align your IT strategy with your business goals.",
    icon: Briefcase,
  },
];

const processSteps = [
  { label: "Discovery", icon: Search },
  { label: "Strategy", icon: Target },
  { label: "Design", icon: PenTool },
  { label: "Delivery", icon: Rocket },
  { label: "Support", icon: LifeBuoy },
];

const ITServices = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
          alt="IT Team at work"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-crown-navy/80 z-10" />
        <div className="relative z-20 text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-poppins"
          >
            Expert-led IT Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-3xl mx-auto text-lg"
          >
            Partner with our expert team to transform your business through digital innovation.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our IT Services"
            subtitle="Built to accelerate your digital transformation"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
                  <div className="w-12 h-12 rounded-full bg-crown-gold/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-crown-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-crown-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Professionals Section */}
      <section className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-crown-gold">Work With Professionals</h2>
                <p className="mb-4 text-crown-navy">
                  Crown Institute brings together creative minds, technical expertise, and a passion for results. We
                  prioritize meaningful partnerships, innovation, and support every step of the way.
                </p>
                <p className="text-crown-navy">
                  Whether you need a brand-new site, an effective digital presence, or expert tech consulting — we’re
                  here to help you thrive in a fast-moving digital world.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-crown-gold">Why Choose Our IT Services?</h3>
                <ul className="space-y-3 text-crown-navy">
                  <li>✔ Skilled and dedicated team</li>
                  <li>✔ Fast turnaround with attention to quality</li>
                  <li>✔ Tailored strategy for your business</li>
                  <li>✔ Ongoing consultation and support</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="How We Work"
            subtitle="A collaborative journey from concept to launch"
            center
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12">
            {processSteps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center">
                  <step.icon className="w-8 h-8 text-crown-gold mb-2" />
                  <div className="text-lg font-semibold text-crown-navy">
                    {idx + 1}. {step.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-crown-bg text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionTitle
            title="Pricing & Engagement"
            subtitle="Flexible plans to suit your business"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white text-crown-navy rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-2">Starter Plan</h3>
              <p className="text-2xl font-semibold mb-4">$499</p>
              <ul className="space-y-2">
                <li>✔ Website setup</li>
                <li>✔ Basic SEO</li>
                <li>✔ Brand identity kit</li>
                <li>✔ 1-month support</li>
              </ul>
            </div>
            <div className="bg-white text-crown-navy rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-2">Growth Plan</h3>
              <p className="text-2xl font-semibold mb-4">$899</p>
              <ul className="space-y-2">
                <li>✔ Full-stack website</li>
                <li>✔ Advanced SEO</li>
                <li>✔ Content & Ads</li>
                <li>✔ 3-month support</li>
              </ul>
            </div>
            <div className="bg-white text-crown-navy rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-2">Custom Solution</h3>
              <p className="text-2xl font-semibold mb-4">Contact for Quote</p>
              <ul className="space-y-2">
                <li>✔ Tailored project</li>
                <li>✔ End-to-end consulting</li>
                <li>✔ Priority delivery</li>
                <li>✔ Long-term support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-crown-navy mb-4">
              Start Your Digital Journey Today
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Connect with our team to discuss your goals and explore custom solutions. Let’s innovate together.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-crown-gold text-crown-navy font-medium rounded-md px-6 py-3 hover:bg-opacity-90 transition-colors duration-300">
                Get a Free Quote
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <AffiliatedSection />
    </div>
  );
};

export default ITServices;
