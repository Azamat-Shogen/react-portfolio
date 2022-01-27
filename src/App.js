import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";


function App() {
  return (
    <div className="App light">
         <Header />
         <main>
             <About />
             <Skills />
             <Projects />
             
         </main>
    </div>
  );
};



export default App;
