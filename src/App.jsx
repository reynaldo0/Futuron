import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Environment from "./pages/Enviroment/Environment";
import Quiz from "./pages/Quiz";
import Footer from "./components/Footer";
import LoadingScreen from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; // Allow scrolling after loading
    }, 1500); // Simulate loading time

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Ensure overflow reset on cleanup
    };
  }, [location]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/data" element={<Environment />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
