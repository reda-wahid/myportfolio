import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import { Outlet } from "react-router";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import Experience from "../../pages/Experience";
import Contact from "../../pages/Contact";

export default function Main() {
  return (
    <>
      <Header />
      <div className="container md:max-w-[90%] m-auto">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
