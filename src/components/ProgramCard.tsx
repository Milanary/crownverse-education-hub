
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  image: string;
  subjects: string[];
  brochureLink?: string;
}

const ProgramCard = ({ title, image, subjects, brochureLink = "#" }: ProgramCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="program-card"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-poppins font-semibold text-crown-navy mb-4">{title}</h3>
        <h4 className="font-medium text-gray-700 mb-2">Key Subjects:</h4>
        <ul className="space-y-1 mb-6">
          {subjects.map((subject, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="w-1.5 h-1.5 bg-crown-gold rounded-full mr-2"></span>
              {subject}
            </li>
          ))}
        </ul>
        <motion.a
          href={brochureLink}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center text-crown-navy font-medium border-2 border-crown-navy rounded-md px-4 py-2 hover:bg-crown-navy hover:text-white transition-colors duration-300"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Brochure
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
