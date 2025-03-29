
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
  isHomePage: boolean;
}

const Navbar = ({ isScrolled, isHomePage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navbarBgClass = isHomePage
    ? isScrolled
      ? "bg-white shadow-md py-3"
      : "bg-transparent py-5 md:py-6"
    : "bg-white/95 backdrop-blur-md shadow-sm py-3";

  const navLinkTextClass = isHomePage && !isScrolled ? "text-white" : "text-crown-navy";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBgClass}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-crown-navy rounded-full flex items-center justify-center">
                <span className="text-crown-gold font-poppins font-bold text-lg">CI</span>
              </div>
              <h1 className="ml-2 text-xl font-poppins font-bold">
                <span className={`${isHomePage && !isScrolled ? "text-white" : "text-crown-navy"}`}>Crown</span>
                <span className="text-crown-gold"> Institute</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" isHomePage={isHomePage} isScrolled={isScrolled} />
            <NavLink to="/about" label="About" isHomePage={isHomePage} isScrolled={isScrolled} />
            <NavLink to="/programs" label="Programs" isHomePage={isHomePage} isScrolled={isScrolled} />
            <NavLink to="/contact" label="Contact" isHomePage={isHomePage} isScrolled={isScrolled} />
          </nav>

          {/* Apply Now Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Apply Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-crown-navy" />
            ) : (
              <Menu className={`w-6 h-6 ${navLinkTextClass}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatedMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isHomePage: boolean;
  isScrolled: boolean;
}

const NavLink = ({ to, label, isHomePage, isScrolled }: NavLinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  
  const textColorClass = isActive 
    ? "text-crown-gold" 
    : isHomePage && !isScrolled 
      ? "text-white" 
      : "text-crown-navy";
  
  return (
    <Link 
      to={to} 
      className={`nav-link ${textColorClass}`}
    >
      {label}
    </Link>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AnimatedMobileMenu = ({ isOpen }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className={`fixed inset-0 bg-white p-6 flex flex-col md:hidden z-40`}
    >
      <div className="flex flex-col h-full justify-center items-center space-y-6">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/programs", label: "Programs" },
          { to: "/contact", label: "Contact" },
        ].map((link, index) => (
          <motion.div
            key={link.to}
            custom={index}
            variants={linkVariants}
          >
            <Link
              to={link.to}
              className="text-crown-navy text-2xl font-medium hover:text-crown-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        
        <motion.div
          custom={5}
          variants={linkVariants}
          className="mt-6"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full mt-6"
            >
              Apply Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
