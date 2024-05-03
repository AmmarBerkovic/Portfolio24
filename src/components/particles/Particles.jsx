import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#434343",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 20,
            },
            grab: {
              distance: 150, // Adjust the distance at which particles are grabbed by the cursor
            },
          },  
        },
        particles: {
          move: {
            direction: "none",
            enable: true,
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 120,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            // type: 'none', // No shape defined (to create a starry sky effect)
            // To use custom image instead, uncomment the following lines:
            type: "image",
            image: {
              src: "https://www.svgrepo.com/show/77656/snowflake.svg",
              width: 50,
              height: 50,
            },
          },
          size: {
            value: { min: 3, max: 7 },
          },
          links: {
            color: "#855858",
            distance: 150,
            // enable: true,
            opacity: 0.5,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
