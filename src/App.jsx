import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
// import CustomCursor from "./components/CustomCursor";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div className="bg-[#0f0f0f] text-white min-h-screen">
        <Navbar />
        {/* <CustomCursor /> */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
