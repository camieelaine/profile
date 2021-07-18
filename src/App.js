import React from "react";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Testimonials from "./components/Testimonials";
import FitnessInstructor from "./components/FitnessClasses";

// Font Awesome Style Sheet
//import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "./assets/styles/tailwind.css";

export default function App() {
  //bg-light-blue-500
  return (
    <main className="text-white body-font">
      <Navbar />
      <Landing />
      <Projects />
      <Skills />

      <FitnessInstructor />
      <Testimonials />
      <Contact />
    </main>
  );
}
