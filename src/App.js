// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
// @ts-ignore - fancy thing to ignore errors
import Projects from "./pages/Projects"
import PythonProject from "./pages/PythonProject"
import ProgrammingClass from "./pages/ProgrammingClass";
import About from "./pages/About";
import CounterThing from "./pages/CounterThing";
import AnimationThing from "./pages/AnimationThing";

import 'bulma/css/bulma.min.css';
import './App.css';
import CameraThing from "./pages/CameraThing";



function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/programmingclass" element={<ProgrammingClass />} />

          <Route path="/about" element={<About />} />

          <Route path="/counterthing" element={<CounterThing />} />
          <Route path="/animationthing" element={<AnimationThing />} />
          <Route path="/aboutyou" element={<CameraThing />} />


          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/pythonproject" element={<PythonProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;