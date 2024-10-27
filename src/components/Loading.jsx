import { motion, AnimatePresence } from 'framer-motion';

// Variants for the single circular loader with smoother rotation
const loaderVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 360,
    transition: { 
      duration: 1.5, 
      ease: "linear", 
      repeat: Infinity 
    }
  },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.6 } }
};

// Variants for animated text with soft color change
const textVariants = {
  initial: { opacity: 2, color: "#fffff" },
  animate: {
    opacity: [0, 1, 0],
    color: ["#ffffff", "#bde7d1", "#ffffff"],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  },
  exit: { opacity: 0, transition: { duration: 0.6 } }
};

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-primary-300/60 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Circular Loader */}
          <motion.div
            className="w-24 h-24 rounded-full border-4 border-white border-t-transparent shadow-lg" // Increased size
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          
          {/* Animated text with color and fade effect */}
          <motion.h1
            className="text-3xl font-semibold mt-6 text-center" // Increased font size
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Loading
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
