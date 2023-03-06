import { createContext, useEffect, useState } from 'react';
import './style.scss';
import Aside from './components/Aside';
import Home from './components/Home';
import About from './components/About';
import Project_1 from './components/Project_1';
import Project_2 from './components/Project_2';
import { Routes, Route, Link } from 'react-router-dom';
import ColorMode from './components/ColorMode';

export let ThemeContext = createContext();

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-themeColor', 'beige');
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  return (
    <div>
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project_1" element={<Project_1 />} />
        <Route path="/project_2" element={<Project_2 />} />
      </Routes>
      <ColorMode />
    </div>
  );
}

export default App;
