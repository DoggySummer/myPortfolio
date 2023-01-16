import { createContext, useState } from 'react';
import './style.scss';
import Aside from './components/Aside';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import { Routes, Route, Link } from 'react-router-dom';
import ColorMode from './components/ColorMode';
export let ThemeContext = createContext();

function App() {
  let [재고] = useState([1, 2, 3]);
  let [가격] = useState(3600);
  return (
    <div>
      <ThemeContext.Provider value={{ 재고, 가격 }}>
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <ColorMode />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
