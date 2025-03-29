
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-crown-navy text-white pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Institute Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-crown-navy font-poppins font-bold text-lg">CI</span>
              </div>
              <h3 className="ml-2 text-xl font-poppins font-bold">
                <span className="text-white">Crown</span>
                <span className="text-crown-gold"> Institute</span>
              </h3>
            </div>
            <p className="text-gray-300 mt-4">
              Providing globally recognized, career-focused education for students who aim to excel in today's competitive job market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6 text-crown-gold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/programs", label: "Programs" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-crown-gold transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6 text-crown-gold">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-crown-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">Crown Institute, Sifal, Kathmandu, Nepal</span>
              </li>
              <li>
                <a href="mailto:aryalmilan23@gmail.com" className="flex items-center text-gray-300 hover:text-crown-gold transition-colors duration-200">
                  <Mail className="w-5 h-5 mr-3 text-crown-gold flex-shrink-0" />
                  aryalmilan23@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+9771234567" className="flex items-center text-gray-300 hover:text-crown-gold transition-colors duration-200">
                  <Phone className="w-5 h-5 mr-3 text-crown-gold flex-shrink-0" />
                  +977-1-1234567
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-crown-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">Sun–Fri: 9am–5pm</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6 text-crown-gold">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-crown-gold transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-crown-gold transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-crown-gold transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 pb-6 border-t border-white border-opacity-10 text-center text-gray-400">
          <p>© {currentYear} Crown Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
