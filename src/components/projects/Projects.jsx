import "./projects.scss";
import projects from "./../../assets/projects.json";
import Project from "./project/Project";

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="articles-wrapper">
        {projects.map((el) => {
          return <Project key={el.title} {...el} />;
        })}
      </div>
    </section>
  );
}
