import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";
import Assistant from "./components/Assistant/Assistant";
function App() {
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      ></BlurBlob>

      <div className="absolute insert-0 bg-[linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%),linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%),linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%),linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
        <Assistant className="bg-white" />
      </div>
    </div>
  );
}

export default App;
