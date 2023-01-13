import './style.scss';
import Aside from './components/Aside';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Aside />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
