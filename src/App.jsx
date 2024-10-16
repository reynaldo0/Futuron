import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Environment from "./pages/Enviroment/Environment";
import Quiz from "./pages/Quiz";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
