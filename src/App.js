import React, { useContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Theme } from "react-switch-theme";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Top from "./components/top/Top";
import themeWrapper from "./ThemeWrapper";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


function App() {
  const [theme, toggleTheme] = useContext(Theme);

  return (
    <div className={`App ${theme}`}>
         <Header theme={theme} toggleTheme={toggleTheme} />
         <main>
             <About />
             <Skills />
             <Projects />
             <Contact />
         </main>
        <Footer />
        <Top />
    </div>
  );
};

export default themeWrapper(App);
