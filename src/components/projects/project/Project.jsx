import "./../projects.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faAngular, faNodeJs, faSass, faHtml5 } from "@fortawesome/free-brands-svg-icons";

export default function Project({ title, description, link }) {
  return (
    <article>
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
      <div className="article-footer">
        <div className="article-tools">
          <FontAwesomeIcon icon={faReact} size="2x" />
          <FontAwesomeIcon icon={faAngular} size="2x" />
          <FontAwesomeIcon icon={faNodeJs} size="2x" />
          <FontAwesomeIcon icon={faHtml5} size="2x" />
          <FontAwesomeIcon icon={faSass} size="2x" />
        </div>
        <Link to={link} target="_blank">
          View Repo
        </Link>
      </div>
    </article>
  );
}
