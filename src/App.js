import './App.css';
import { About } from './components/about/About';
import { NavBar } from './components/navBar/NavBar';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
