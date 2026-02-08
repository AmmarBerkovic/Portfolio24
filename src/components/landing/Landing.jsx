import "./landing.scss";
import Contact from "../contact/Contact";
import resume from "./../../assets/CV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
  return (
    <section className="landing-wrapper" id="home">
      <div className="info-block">
        <span>Need a Web solution?</span>
        <h1>
          Meet{" "}
          <span>
            Ammar Berkovic{" "}
            <a
              href={resume}
              download="Ammar Berkovic CV.pdf"
              aria-label="Download Ammar Berkovic's CV"
            >
              <FontAwesomeIcon
                icon={faDownload}
                style={{ color: "#03c4ff", cursor: "pointer" }}
                aria-hidden="true"
                beatFade
              />
            </a>
          </span>
        </h1>
        <p>
          Experienced full stack developer equipped with a diverse and promising
          skill-set looking for a growth-oriented company where I can contribute
          to impactful projects and further enhance my expertise in web
          development.{" "}
        </p>
      </div>
      <div className="contact-block">
        <Contact />
      </div>
    </section>
  );
}
