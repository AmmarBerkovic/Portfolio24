import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import snowflake from "./../../assets/snowflake.svg"

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
            value: "#171717",
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
              distance: 100, // Adjust the distance at which particles are grabbed by the cursor
            },
          },  
        },
        particles: {
          move: {
            direction: "none",
            enable: true,
            random: false,
            speed: 0.7,
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
            value: 0.4, // Initial opacity
            random: true, // Randomize opacity
            anim: {
              enable: true,
              speed: 1, // Speed of opacity change
              opacity_min: 0.1, // Minimum opacity
              sync: false,
            },
          },
          shape: {
            // type: 'none', // No shape defined (to create a starry sky effect)
            // To use custom image instead, uncomment the following lines:
            type: "image",
            image: {
              src: `${snowflake}`,
              width: 50,
              height: 50,
            },
          },
          size: {
            value: { min: 3, max: 7 },
          },
          links: {
            color: "#7C7C7C",
            // enable: true,
            opacity: 1,
            width: 0.5,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
