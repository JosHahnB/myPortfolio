import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        // Parse description into paragraphs if it exists
        var descriptionContent = null;
        if (work.description) {
          const paragraphs = work.description.split(/\n\n+/).filter(p => p.trim().length > 0);
          descriptionContent = (
            <div style={{ textAlign: "left", marginTop: "15px", marginBottom: "15px" }}>
              {paragraphs.map((paragraph, idx) => (
                <p key={idx} style={{
                  marginBottom: "18px",
                  lineHeight: "2",
                  color: "#333",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                  fontWeight: 400
                }}>
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          );
        }

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#0d6efd",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fab fa-angular experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "12px", lineHeight: "1.6" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{
                textAlign: "left",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 600,
                marginBottom: "12px"
              }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{
                textAlign: "left",
                fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                fontWeight: 500,
                marginBottom: "15px",
                color: "#666"
              }}
            >
              {work.company}
            </h4>
            {descriptionContent}
            <div style={{ textAlign: "left", marginTop: "15px", lineHeight: "1.6" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="section-title" style={{ color: "black" }}>
                <span className="text-black" style={{ textAlign: "center" }}>
                  {sectionName}
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-xl-8">
                    <VerticalTimeline layout="1-column">
                      {work}
                      <VerticalTimelineElement
                        iconStyle={{
                          background: "#0d6efd",
                          color: "#fff",
                          textAlign: "center",
                        }}
                        icon={
                          <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                        }
                      />
                    </VerticalTimeline>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
