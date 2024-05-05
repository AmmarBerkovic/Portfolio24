import "./about.scss";
import timeline from "./../../assets/timeline.json";
import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section className="about-wrapper" id="about">
      <VerticalTimeline>
        {timeline.map((el) => {
          let isWork = el.icon === "work";
          return (
            <VerticalTimelineElement
              key={el.id}
              date={el.date}
              dateClassName="date"
              icon={
                isWork ? (
                  <FontAwesomeIcon icon={faBriefcase} />
                ) : (
                  <FontAwesomeIcon icon={faSchool} />
                )
              }
            >
              <h3 className="vertical-timeline-element-title">{el.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                Bosnia & Hercegovina, Tuzla
              </h5>
              <p id="description">{el.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
