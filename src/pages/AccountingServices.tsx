import { motion } from "framer-motion";
import {
  FileText, BarChart2, DollarSign, Users, Briefcase,
  Search, Settings, PenTool, CheckCircle2, LifeBuoy
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import AffiliatedSection from "../components/AffiliatedSection";


const services = [
  {
    title: "Bookkeeping & Financial Reporting",
    description:
      "Maintain accurate records and generate clear, compliant financial statements for better decision-making.",
    icon: FileText,
  },
  {
    title: "Tax Planning & Filing",
    description:
      "Efficient tax strategies and timely filings to minimize liabilities and maximize returns.",
    icon: DollarSign,
  },
  {
    title: "Payroll Services",
    description:
      "Streamlined payroll processing and compliance for businesses of all sizes.",
    icon: Users,
  },
  {
    title: "Financial Analysis & Budgeting",
    description:
      "Get valuable insights into your financial performance and plan future growth with confidence.",
    icon: BarChart2,
  },
  {
    title: "Business Advisory",
    description:
      "Expert guidance on financial decisions, entity setup, cash flow management, and profitability strategies.",
    icon: Briefcase,
  },
];

const processSteps = [
  { label: "Consultation", icon: Search },
  { label: "Planning", icon: Settings },
  { label: "Documentation", icon: PenTool },
  { label: "Execution", icon: CheckCircle2 },
  { label: "Ongoing Support", icon: LifeBuoy },
];

const AccountingServices = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554224155-9993c6ae5e99"
          alt="Accounting Team"
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
            Expert Accounting & Financial Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-3xl mx-auto text-lg"
          >
            Partner with our experienced accountants to ensure financial clarity, compliance, and growth.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Accounting Services"
            subtitle="Solutions designed for financial accuracy and peace of mind"
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

      {/* Professionals Section */}
      <section className="py-16 bg-crown-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-crown-gold">Work With Trusted Experts</h2>
                <p className="mb-4 text-crown-navy">
                  Crown Accounting brings financial clarity and peace of mind to individuals and businesses.
                  We combine precision, compliance, and strategic thinking to help you grow.
                </p>
                <p className="text-crown-navy">
                  Whether you need bookkeeping, tax services, or in-depth financial advice — we're here to simplify your finances.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-crown-gold">Why Choose Our Firm?</h3>
                <ul className="space-y-3 text-crown-navy">
                  <li>✔ Qualified professionals with years of experience</li>
                  <li>✔ Tailored financial guidance</li>
                  <li>✔ Transparent and timely communication</li>
                  <li>✔ Long-term client relationships</li>
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
            title="Our Process"
            subtitle="From discovery to delivery — we’re with you all the way"
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
            subtitle="Flexible packages for every stage of your financial journey"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white text-crown-navy rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
              <p className="text-2xl font-semibold mb-4">$299</p>
              <ul className="space-y-2">
                <li>✔ Monthly bookkeeping</li>
                <li>✔ Tax filing support</li>
                <li>✔ Financial summaries</li>
                <li>✔ Email support</li>
              </ul>
            </div>
            <div className="bg-white text-crown-navy rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-2">Business Plan</h3>
              <p className="text-2xl font-semibold mb-4">$649</p>
              <ul className="space-y-2">
                <li>✔ Full financial reporting</li>
                <li>✔ Quarterly tax planning</li>
                <li>✔ Payroll processing</li>
                <li>✔ Priority support</li>
              </ul>
            </div>
            <div className="bg-white text-crown-navy rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-2xl font-semibold mb-4">Custom Quote</p>
              <ul className="space-y-2">
                <li>✔ Strategic advisory</li>
                <li>✔ CFO-level services</li>
                <li>✔ Audits & compliance</li>
                <li>✔ Dedicated account manager</li>
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
              Let’s Simplify Your Accounting
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Reach out today to schedule a consultation and discover how we can support your financial success.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-crown-gold text-crown-navy font-medium rounded-md px-6 py-3 hover:bg-opacity-90 transition-colors duration-300">
                Book a Free Consultation
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <AffiliatedSection />
    </div>
  );
};

export default AccountingServices;
