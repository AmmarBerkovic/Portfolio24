import Navigation from "../components/navigation/Navigation";
import Landing from "../components/landing/Landing";
import ParticlesBackground from "../components/particles/Particles";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";

export default function Home() {
  return (
    <>
      <ParticlesBackground id="particles"/>
      <Navigation />
      <Landing />
      <About />
      <Projects />
    </>
  );
}
