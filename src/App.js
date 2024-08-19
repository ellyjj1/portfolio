import React from 'react';
import Home from './components/home/Home';
import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experience from './components/experience/Experience';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
    
    </>
  );
}

export default App;
