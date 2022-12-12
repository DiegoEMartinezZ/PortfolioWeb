import "./App.css";
import { About } from "./components/about/About";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import { SocialMedia } from "./components/socialmedia/SocialMedia";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
