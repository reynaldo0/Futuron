import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import LoadingScreen from './components/Loading';
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Detail from './pages/Detail/Detail';
import Environment from "./pages/Enviroment/Environment";
import Home from "./pages/Home/Home";
import Comunity from "./pages/Comunity/Comunity";

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
              <Route path="/sumber" element={<Environment />} />
              <Route path="/temuan" element={<Detail />} />
              <Route path="/comunity" element={<Comunity />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
