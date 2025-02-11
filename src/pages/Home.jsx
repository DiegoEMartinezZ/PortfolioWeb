import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Studies from "../components/Studies";

const Home = () => {
  return (
    <>
      <section className="bg-black relative top-0 bottom-0 right-0 left-0">
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Studies />
        <Footer />
      </section>
    </>
  );
};

export default Home;
