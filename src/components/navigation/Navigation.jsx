import {
  faBurger,
  faEnvelope,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navigation() {
  const [hambMenu, setHambMenu] = useState(false);
  const headerRef = useRef(null);
  const hambMenuRef = useRef(null);

  const toggleHamburgerMenu = () => {
    setHambMenu(!hambMenu);
  };
  const handleClickOutside = (event) => {
    if (
      !hambMenuRef.current.contains(event.target) &&
      !headerRef.current.contains(event.target)
    ) {
      document.removeEventListener("click", handleClickOutside);
      toggleHamburgerMenu();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setHambMenu(() => false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    //WHEN hamb is open THEN listen
    if (hambMenu) document.addEventListener("click", handleClickOutside);
  }, [hambMenu]);

  return (
    <>
      <FontAwesomeIcon
        ref={hambMenuRef}
        className="hamburgerMenuIcon"
        onClick={toggleHamburgerMenu}
        icon={faBurger}
        size="2x"
      />
      <header ref={headerRef} style={hambMenu ? { display: "block" } : {}}>
        <FontAwesomeIcon
          className="xMarkIcon"
          onClick={toggleHamburgerMenu}
          icon={faXmark}
          size="2x"
        />
        <nav>
          <ul className="section-navigation">
            <li>
              <Link smooth to="#home" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="#about" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link smooth to="#projects" activeClassName="active">
                Projects
              </Link>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a target="_blank" href="https://github.com/AmmarBerkovic">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/ammar-berkovic-8b6422247/">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </li>
            <li>
              <a href="mailto:berkovicammar1@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
