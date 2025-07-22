import {HashRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

// Importing pages
import Home from "./pages/home/Home.jsx"
import Experiences from "./pages/experiences/Experience.jsx";
import PublicationsPatents from "./pages/publications_patents/PublicationPatent.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Education from "./pages/education/Education.jsx"
import About from "./pages/about/About.jsx"

const App = () => {
	return(
    <Router>
  		<div className="min-h-screen font-[Josefin_Slab] border-bottom bg-black px-20 text-white antialiased">
	  		<Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/publications" element={<PublicationsPatents />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />	    
        </Routes>
      </div>
    </Router>
	);
}

export default App;
