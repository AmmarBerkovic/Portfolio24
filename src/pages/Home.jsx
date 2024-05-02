import Navigation from "../components/navigation/Navigation";
import Landing from "../components/landing/Landing";
import ParticlesBackground from "../components/particles/Particles";

export default function Home() {
  return (
    <>
      <ParticlesBackground id="particles"/>
      <Navigation />
      <Landing />
      <section></section>
    </>
  );
}
