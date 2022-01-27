import React, { useContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Theme } from "react-switch-theme";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import themeWrapper from "./ThemeWrapper";


function App() {

  const [theme, toggleTheme] = useContext(Theme);


  return (
    <div className={`App ${theme}`}>
         <Header theme={theme} toggleTheme={toggleTheme} />
         {/* <h1>Theme: {theme}</h1>
      <button onClick={() => toggleTheme()} type="button">change</button> */}
         <main>
             <About />
             <Skills />
             <Projects />
             
         </main>
    </div>
  );
};



export default themeWrapper(App);
