import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import snowflake from "./../../assets/images/snowflake.webp";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded successfully
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        background: {
          color: {
            value: "#16262e",
          },
        },
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
              quantity: 20, //number of particles created on click
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
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600, // Increase area to reduce density
            },
            value: 100, // Lower the number of particles
          },
          opacity: {
            value: 0.3, // Initial opacity //0.4 if snowflakes
            random: true, // Randomize opacity
            anim: {
              enable: true,
              speed: 1, // Speed of opacity change
              opacity_min: 0.1, // Minimum opacity
              sync: false,
            },
          },
          shape: {
            // type: ['circle']
            // To use custom image instead, uncomment the following lines:
            type: "image",
            image: {
              src: `${snowflake}`,
              width: 50,
              height: 50,
            },
          },
          size: {
            value: { min: 3, max: 8 },
            // anim: {
            //   enable: true, // Enable size animation
            //   speed: 9, // Speed of size change
            //   size_min: 3 , // Minimum size during animation
            //   sync: false, // If true, all particles will change size in sync
            // },
          },
          links: {
            color: "#e0ecff", //#F5EDF0
            // enable: true,
            opacity: 1,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
