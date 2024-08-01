import React from 'react';
import Home from './components/home/Home';
import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from './components/skills/Skills';
import Project from './components/project/Project';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Project />
    </main>
    
    </>
  );
}

export default App;
