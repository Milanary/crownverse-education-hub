
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, role, testimonial, image }: TestimonialCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
    >
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="mb-4 text-center sm:text-left">
            <h4 className="text-xl font-poppins font-semibold text-crown-navy">{name}</h4>
            <p className="text-gray-500">{role}</p>
          </div>
          <blockquote>
            <p className="text-gray-700 italic leading-relaxed">"{testimonial}"</p>
          </blockquote>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
