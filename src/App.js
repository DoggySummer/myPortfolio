import './style.scss';
import Aside from './components/Aside';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
