import "./landing.scss";
// import selfImage from "../../assets/me.jpg";
import Contact from '../contact/Contact'

export default function Landing() {
  return (
    <section className="landing-wrapper" id="home">
      <div className="info-block">
        <span>Need a Web solution?</span>
        <h1>
          Meet <span>Ammar Berkovic</span>
        </h1>
        <p>
          Experienced full stack developer equipped with a diverse and promising
          skill-set looking for a growth-oriented company where I can contribute
          to impactful projects and further enhance my expertise in web
          development. Experienced developer equipped with a diverse and
          promising skill-set looking for a growth-oriented company.{" "}
        </p>
      </div>
      <div className="contact-block">
        <Contact />
        {/* <picture>
          <img src={selfImage} alt="Ammar Berkovic" />
        </picture> */}
      </div>
    </section>
  );
}
