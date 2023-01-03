import './App.css';

import { Home } from './pages/home/Home';
import { Projects } from './pages/projects/Projects';
import { AboutMe } from './pages/aboutMe/AboutMe';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/AboutMe" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
