
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false,
  className = "" 
}: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-poppins font-bold text-crown-navy"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 mt-3"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: center ? 80 : 120 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 bg-crown-gold mt-4 rounded ${center ? 'mx-auto' : ''}`} 
      />
    </div>
  );
};

export default SectionTitle;
