import { createContext, useEffect, useState } from 'react';
import './style.scss';
import Aside from './components/Aside';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import { Routes, Route, Link } from 'react-router-dom';
import ColorMode from './components/ColorMode';
import Swiperjj from './components/Swiper';
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
        <Route path="/project" element={<Project />} />
      </Routes>
      <ColorMode />
    </div>
  );
}

export default App;
