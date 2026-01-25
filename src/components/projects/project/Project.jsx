import React from "react";
import PropTypes from "prop-types";
import "./../projects.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faNodeJs,
  faReact,
  faSass,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import express from "./../../../assets/images/express.svg";
import mongodb from "./../../../assets/images/mongodb.svg";

const Project = React.memo(function Project({
  title,
  description,
  link,
  tools,
}) {
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
              case "React":
                icon = faReact;
                break;
              case "Express":
                icon = "express";
                break;
              case "MongoDB":
                icon = "mongo";
                break;
            }
            return (
              <React.Fragment key={tool}>
                {icon === "express" ? (
                  <img src={express} alt="Express" />
                ) : icon === "mongo" ? (
                  <img src={mongodb} alt="MongoDB" />
                ) : (
                  <FontAwesomeIcon icon={icon} size="2x" />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <Link to={link} target="_blank" rel="noopener noreferrer">
          View Code
        </Link>
      </div>
    </article>
  );
});

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
