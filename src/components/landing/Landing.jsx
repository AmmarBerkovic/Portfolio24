import "./landing.scss";
import Contact from "../contact/Contact";
import resume from "./../../assets/CV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = resume; // Replace with your file's path
    link.download = "Ammar Berkovic CV.pdf"; // Specify the filename
    link.click();
  };

  return (
    <section className="landing-wrapper" id="home">
      <div className="info-block">
        <span>Need a Web solution?</span>
        <h1>
          Meet{" "}
          <span>
            Ammar Berkovic{" "}
            <a onClick={downloadCV}>
              <FontAwesomeIcon
                icon={faDownload}
                style={{ color: "#03c4ff", cursor: 'pointer' }}
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
