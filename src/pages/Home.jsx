import Navigation from "../components/navigation/Navigation";
import Landing from "../components/landing/Landing";
import ParticlesBackground from "../components/particles/Particles";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import ErrorBoundary from "../components/ErrorBoundary";

export default function Home() {
  return (
    <>
      <ParticlesBackground id="particles" />
      <Navigation />
      <ErrorBoundary>
        <Landing />
      </ErrorBoundary>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>
    </>
  );
}
