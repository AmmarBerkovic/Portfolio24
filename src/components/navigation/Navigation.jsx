import {
  faBurger,
  faEnvelope,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import BREAKPOINTS from "../../constants/breakpoints";

export default function Navigation() {
  const [hambMenu, setHambMenu] = useState(false);
  const headerRef = useRef(null);
  const hambMenuRef = useRef(null);
  const [activeSection, setActiveSection] = useState(""); // State to track the active section

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
      if (window.innerWidth > BREAKPOINTS.md) {
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
    if (hambMenu) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [hambMenu]);
  useEffect(() => {
    // Intersection Observer for detecting when sections are in the viewport
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section
        }
      });
    }, options);
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <>
      <FontAwesomeIcon
        ref={hambMenuRef}
        className="hamburgerMenuIcon"
        onClick={toggleHamburgerMenu}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleHamburgerMenu();
          }
        }}
        role="button"
        aria-label="Open navigation menu"
        aria-expanded={hambMenu}
        tabIndex={0}
        icon={faBurger}
        size="2x"
      />
      <header ref={headerRef} style={hambMenu ? { display: "block" } : {}}>
        <FontAwesomeIcon
          className="xMarkIcon"
          onClick={toggleHamburgerMenu}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleHamburgerMenu();
            }
          }}
          role="button"
          aria-label="Close navigation menu"
          tabIndex={0}
          icon={faXmark}
          size="2x"
        />
        <nav>
          <ul className="section-navigation">
            <li>
              <HashLink
                smooth
                to="#home"
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#projects"
                className={activeSection === "projects" ? "active" : ""}
              >
                Projects
              </HashLink>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AmmarBerkovic"
                aria-label="Visit Ammar's GitHub profile"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ammar-berkovic-8b6422247/"
                aria-label="Visit Ammar's LinkedIn profile"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:berkovicammar1@gmail.com"
                aria-label="Send email to Ammar"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
