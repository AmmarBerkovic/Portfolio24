import {
  faBurger,
  faEnvelope,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [hambMenu, setHambMenu] = useState(false);
  const headerRef = useRef(null);
  const hambMenuRef = useRef(null);

  const toggleHamburgerMenu = () => {
    setHambMenu(!hambMenu)
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
          <ul>
            <li>
              <a href="#1">Home</a>
            </li>
            <li>
              <a href="#2">About</a>
            </li>
            <li>
              <a href="#3">Projects</a>
            </li>
            <li>
              <a href="#4">Contact</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="www.google.com">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a href="www.google.com">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </li>
            <li>
              <a href="www.google.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
