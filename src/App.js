import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App light">
         <Header />
         <main>
             <About />
             <hr />
             <Projects />
             
         </main>
    </div>
  );
};



export default App;
