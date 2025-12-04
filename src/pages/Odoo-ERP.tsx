import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  CloudCog,
  Layers,
  Plug,
  Rocket,
  Settings,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import AffiliatedSection from "../components/AffiliatedSection";

const benefits = [
  {
    title: "Expert-Handled Customizations",
    description: "Our senior developers manage complex customizations with precision—ensuring smooth integrations, faster delivery, and clear requirement gathering that makes the entire process easier and stress-free for your team.",
    icon: Layers,
  },
  {
    title: "Process-Driven Innovation",
    description: "We’re business-process engineers, not just developers. Instead of simply installing Odoo modules, we redesign and optimize your workflows to unlock higher efficiency and lasting operational improvement.",
    icon: Rocket,
  },
  {
    title: "Localised Expertise",
    description: "Our certified Odoo specialists are backed by technical support available 6 AM to 8 PM, ensuring faster responses and reliable assistance whenever you need it.",
    icon: ShieldCheck,
  },
];

const modules = [
  {
    title: "Sales & CRM",
    points: [
      "Automated sales pipelines",
      "Quotation → order workflow",
      "Customer portal & follow-ups"
    ],
    icon: BarChart3,
  },
  {
    title: "Finance & Accounting",
    points: [
      "Nepal VAT & e-invoice ready",
      "Payment tracking & matching",
      "Real-time financial dashboards"
    ],
    icon: Building2,
  },
  {
    title: "Inventory & Procurement",
    points: [
      "Multi-warehouse control",
      "Automated reordering rules",
      "Vendor & purchase workflow"
    ],
    icon: Workflow,
  },
  {
    title: "HR & Payroll",
    points: [
      "Streamlined onboarding",
      "Attendance & shift tracking",
      "Payroll automation & compliance"
    ],
    icon: Users,
  },
  {
    title: "Manufacturing",
    points: [
      "MRP with BOM & routings",
      "Work center scheduling",
      "Quality checks & traceability"
    ],
    icon: Settings,
  },
  {
    title: "Website & POS",
    points: [
      "Professional website management",
      "POS synced with inventory",
      "Integrated billing & receipt management"
    ],
    icon: Plug,
  },
];

const steps = [
  {
    title: "Discovery",
    description: "Understand your processes, integrations, and reporting goals with key stakeholders.",
    icon: CloudCog,
  },
  {
    title: "Configuration",
    description: "Set up Odoo apps, permissions, workflows, and required customizations aligned to your business operations.",
    icon: Settings,
  },
  {
    title: "Data & Integrations",
    description: "Migrate clean data and connect APIs to keep your existing tools fully aligned.",
    icon: Plug,
  },
  {
    title: "Training & Go-Live",
    description: "Provide role-based training, UAT support, and ensure a smooth system launch.",
    icon: CheckCircle2,
  },
];

const OdooERP = () => {
  return (
    <div className="pt-20 bg-white text-crown-navy">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-crown-navy via-[#0b3b70] to-[#021c35] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-crown-gold blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold font-poppins"
            >
              Odoo ERP, Delivered by Crown
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-white/90 leading-relaxed max-w-2xl"
            >
                As an <b>Official Odoo Partner</b>, we deliver ERP solutions that adapt to your business—not the other way around. We customize, integrate, and support Odoo to accelerate performance, enhance visibility, and empower your teams with connected data and confident decisions.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary bg-crown-gold text-crown-navy hover:bg-yellow-400">
                Talk to an ERP specialist
              </Link>
              <a href="#modules" className="btn-primary bg-crown-gold text-crown-navy hover:bg-yellow-400">
                Explore modules
              </a>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-crown-gold/20 flex items-center justify-center">
                  <ShieldCheck className="text-crown-gold" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Preferred Implementation Partner</p>
                  <p className="text-xl font-semibold">Crown Institute</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Process-first discovery workshops",
                  "Configurable dashboards for leadership",
                  "Change management and role-based training",
                ].map((line, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="text-crown-gold" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Why Odoo with Crown?"
            subtitle="We translate your processes into a streamlined ERP experience."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {benefits.map((benefit, idx) => (
              <ScrollReveal key={benefit.title} delay={idx * 0.1}>
                <div className="h-full rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-crown-bg/60">
                  <div className="w-12 h-12 rounded-full bg-crown-gold/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-crown-navy" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Key Odoo Modules We Implement"
            subtitle="Pick the apps you need today; add more as you grow."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, idx) => (
              <ScrollReveal key={module.title} delay={idx * 0.08}>
                <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-crown-gold/15 flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-crown-navy" />
                    </div>
                    <h3 className="text-lg font-semibold">{module.title}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    {module.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-crown-gold mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="How We Deliver"
            subtitle="A guided, collaborative rollout to keep teams aligned."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <ScrollReveal key={step.title} delay={idx * 0.1} direction="up">
                <div className="relative h-full rounded-xl border border-gray-200 p-5 shadow-sm bg-crown-bg/60">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-crown-gold/25 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-crown-navy" />
                    </div>
                    <div className="text-sm font-semibold text-crown-navy/80">Step {idx + 1}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute right-[-12px] top-1/2 -translate-y-1/2 h-px w-6 bg-crown-gold" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-16 bg-gray-100 text-crown-navy -mb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div>
              <h2 className="text-3xl font-bold font-poppins mb-3 text-crown-navy">Ready for a connected ERP?</h2>
              <p className="text-gray-700 text-lg max-w-2xl">
                Let&apos;s map your Odoo rollout, align teams, and launch with confidence. We tailor the stack, training,
                and support for your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary bg-crown-gold text-crown-navy hover:bg-yellow-400">
                Schedule a call
              </Link>
              <a
                href="mailto:info@crowninstitites.com"
                className="btn-secondary border-crown-navy text-crown-navy hover:bg-crown-navy hover:bg-yellow-400"
              >
                Email our ERP team
              </a>
            </div>
          </div>
        </div>
      </section>
            <AffiliatedSection />
    </div>
  );
};

export default OdooERP;
