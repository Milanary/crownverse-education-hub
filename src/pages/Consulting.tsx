import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const Consulting = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Consulting Services"
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
            Business Consulting Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Strategic consulting and advisory support for organizational growth
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Coming Soon"
            subtitle="We're preparing comprehensive consulting solutions for you"
            center
          />
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Our Business Consulting Services will provide strategic guidance and advisory support 
              to help your organization achieve sustainable growth and transformation.
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Us for More Information
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
