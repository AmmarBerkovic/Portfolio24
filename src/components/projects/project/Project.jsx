import "./../projects.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faNodeJs,
  faSass,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import express from "./../../../assets/images/express.svg";
import mongodb from "./../../../assets/images/mongodb.svg";

export default function Project({ title, description, link, tools }) {
  return (
    <article>
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
      <div className="article-footer">
        <div className="article-tools">
          {tools.map((tool) => {
            let icon = "none";
            switch (tool) {
              case "Angular":
                icon = faAngular;
                break;
              case "HTML5":
                icon = faHtml5;
                break;
              case "SASS":
                icon = faSass;
                break;
              case "Node.js":
                icon = faNodeJs;
                break;
              case "Express":
                icon = "express";
                break;
              case "MongoDB":
                icon = "mongo";
                break;
            }
            return (
              <>
                {icon === "express" ? (
                  <img src={express} alt="Express" />
                ) : icon === "mongo" ? (
                  <img src={mongodb} alt="MongoDB" />
                ) : (
                  <FontAwesomeIcon icon={icon} size="2x" />
                )}
              </>
            );
          })}
          {/* <FontAwesomeIcon icon={faReact} size="2x" />
          <FontAwesomeIcon icon={faAngular} size="2x" />
          <FontAwesomeIcon icon={faNodeJs} size="2x" />
          <FontAwesomeIcon icon={faHtml5} size="2x" />
          <FontAwesomeIcon icon={faSass} size="2x" /> */}
        </div>
        <Link to={link} target="_blank">
          View Code
        </Link>
      </div>
    </article>
  );
}
