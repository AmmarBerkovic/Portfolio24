import "./projects.scss";
import projects from "./../../assets/projects.json";
import Project from "./project/Project";

export default function Projects() {
  return (
    <section id="projects">
      {projects.map((el) => {
        return (
          <Project
            {...el}
          />
        );
      })}
    </section>
  );
}
