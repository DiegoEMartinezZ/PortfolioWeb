import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navBar/NavBar";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
