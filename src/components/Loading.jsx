import { motion, AnimatePresence } from 'framer-motion';

// Variants for the circular loaders
const loaderVariants = {
  initial: { y: 100, scale: 0.5, opacity: 0 },
  animate: {
    y: 0,
    scale: [1, 1.2, 1],
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: "easeInOut", 
      repeat: Infinity, 
      repeatType: "reverse" 
    }
  },
  exit: {
    y: -100, // Move upwards to close
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.8 }
  }
};

// Variants for background fade in/out
const fadeVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 1.2 } }
};

// Variants for text bouncing animation
const textVariants = {
  initial: { opacity: 0, x: -100 }, // Start slightly off-screen to the left
  animate: { 
    opacity: 1, 
    x: [0, 10, -10, 0], // Move left and right
    transition: { 
      duration: 1, 
      ease: "easeInOut", 
      repeat: Infinity, 
      repeatType: "reverse" 
    }
  },
  exit: { opacity: 0, x: 30, transition: { duration: 0.8 } } // Move to the right when exiting
};

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-primary-300/70 z-50"
          variants={fadeVariants}
          initial="initial"
          exit="exit"
        >
          {/* Circular loaders */}
          <motion.div
            className="w-16 h-16 rounded-full border-4 border-white border-t-transparent mb-4"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          <motion.div
            className="w-20 h-20 rounded-full border-4 border-white border-t-transparent mb-4"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          <motion.div
            className="w-24 h-24 rounded-full border-4 border-white border-t-transparent mb-4"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />

          {/* Animated text with bouncing effect */}
          <motion.h1
            className="text-white text-3xl font-bold mt-8"
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Loading Nature...
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
