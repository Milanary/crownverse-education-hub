import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
  isHomePage: boolean;
}

const Navbar = ({ isScrolled, isHomePage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setIsOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const navLinkBase = "text-[16px] font-medium nav-link";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 transition-all duration-300`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
        <img src="/logo.png" alt="Logo" style={{ width: "80px", height: "80px" }} className="object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center justify-center flex-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About Us" />
          <NavLink to="/IT-services" label="IT-Services" />
          <NavLink to = '/odoo-erp' label = "Odoo ERP" />
          <NavLink to="/AccountingServices" label="Accounting Services" />
          <NavLink to="/bit-dual-degree" label="BIT dual degree programme" />

          {/* Services Dropdown */}
          <div className="relative group">
            <div className="flex items-center cursor-pointer text-crown-navy text-[16px] font-medium hover:text-crown-gold transition">
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </div>
            <div className="absolute top-full mt-2 left-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
              <Link
                to="/programs"
                className="block px-4 py-3 text-crown-navy text-[16px] font-medium hover:bg-crown-bg hover:text-crown-gold"
              >
                Professional Courses
              </Link>
              <Link
                to="/training"
                className="block px-4 py-3 text-crown-navy text-[16px] font-medium hover:bg-crown-bg hover:text-crown-gold"
              >
                Training & Capacity Building
              </Link>
              <Link
                to="/consulting"
                className="block px-4 py-3 text-crown-navy text-[16px] font-medium hover:bg-crown-bg hover:text-crown-gold"
              >
                Consulting Services
              </Link>
            </div>
          </div>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"

            >
              Contact
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6 text-crown-navy" /> : <Menu className="w-6 h-6 text-crown-navy" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatedMobileMenu isOpen={isOpen} />
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  const textColor = isActive ? "text-crown-gold" : "text-crown-navy";

  return (
    <Link to={to} className={`nav-link ${textColor} text-[16px] font-medium`}>
      {label}
    </Link>
  );
};

const AnimatedMobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About US" },
    { to: "/it-services", label: "IT-Services" },
    { to: "/odoo-erp", label: "Odoo ERP" },
    { to: "/AccountingServices", label: "Accounting Services" },
    { to: "/bit-dual-degree", label: "BIT dual degree programme" },
    { to: "/programs", label: "Professional Courses" },
    { to: "/training", label: "Training & Capacity Building" },
    { to: "/consulting", label: "Consulting Services" },
  ];

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 bg-white p-6 flex flex-col md:hidden z-40"
    >
      <div className="flex flex-col h-full justify-center items-center space-y-6">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="text-crown-navy text-2xl font-medium hover:text-crown-gold transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full mt-6"
          >
            Contact
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
