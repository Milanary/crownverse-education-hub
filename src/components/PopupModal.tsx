import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto-show popup on first visit (session-based)
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    
    if (!hasSeenPopup) {
      // Delay the popup slightly for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-xl shadow-2xl max-w-[90vw] max-h-[85vh] flex flex-col overflow-visible"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Moved outside the image container */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 md:-right-12 z-20 bg-white text-crown-navy hover:text-red-500 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Scrollable content */}
            <div className="overflow-auto max-h-[85vh] flex items-center justify-center bg-gray-50 rounded-xl">
               <img
                src="/popup.png"
                alt="Notice"
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain block rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
