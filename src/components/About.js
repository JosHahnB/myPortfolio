import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import nodeIcon from "@iconify/icons-logos/nodejs-icon";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
      var name = this.props.sharedBasicInfo.name;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    // Split description into paragraphs for better readability
    // First try splitting by double newlines, then by periods if no newlines found
    const paragraphs = about ? (about.includes('\n\n')
      ? about.split(/\n\n+/).filter(p => p.trim().length > 0)
      : about.split(/\.\s+(?=[A-Z])/).filter(p => p.trim().length > 0).map(p => p.trim() + (p.trim().endsWith('.') ? '' : '.')))
      : [];

    return (
      <section id="about">
        <div className="container-fluid">
          {/* Hero Section */}
          <div className="row mb-5">
            <div className="col-12 text-center mb-4">
              <h1 style={{ color: "black", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, marginBottom: "20px" }}>
                <span>{sectionName}</span>
              </h1>
              <div className="about-hero-intro">
                <span className="wave" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300 }}>{hello} I'm {name}!</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="row justify-content-center">
            {/* Profile Picture Section - Centered next to story */}
            <div className="col-lg-4 col-md-5 mb-5">
              <div className="about-profile-wrapper">
                <div className="about-profile-image">
                  <img
                    src={profilepic}
                    alt={name}
                    className="profile-img"
                  />
                  <div className="profile-overlay">
                    <div className="profile-icons">
                      <Icon icon={reactIcon} style={{ fontSize: "2.5rem", color: "#61DAFB" }} />
                      <Icon icon={nodeIcon} style={{ fontSize: "2.5rem", color: "#339933" }} />
                    </div>
                  </div>
                </div>
                <div className="profile-highlight">
                  <div className="highlight-item">
                    <span className="iconify" data-icon="mdi:code-tags" style={{ fontSize: "2rem", marginRight: "12px" }}></span>
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="highlight-item">
                    <span className="iconify" data-icon="mdi:shield-star" style={{ fontSize: "2rem", marginRight: "12px" }}></span>
                    <span>Military Veteran</span>
                  </div>
                  <div className="highlight-item">
                    <span className="iconify" data-icon="mdi:airplane" style={{ fontSize: "2rem", marginRight: "12px" }}></span>
                    <span>Aerospace Background</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Section */}
            <div className="col-lg-6 col-md-7">
              <div className="about-story-card">
                <div className="story-header">
                  <span className="iconify" data-icon="mdi:account-circle" style={{ fontSize: "2.5rem", marginRight: "15px" }}></span>
                  <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}>My Journey</h2>
                </div>
                <div className="story-content">
                  {paragraphs.map((paragraph, index) => (
                    <p key={index} className="story-paragraph">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Feature Cards - 2 columns */}
          <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="about-feature-card">
                    <div className="feature-icon">
                      <span className="iconify" data-icon="mdi:lightbulb-on" style={{ fontSize: "3.5rem" }}></span>
                    </div>
                    <h3>Problem Solver</h3>
                    <p>Mechanical troubleshooting background translates to systematic software debugging and creative solutions.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="about-feature-card">
                    <div className="feature-icon">
                      <span className="iconify" data-icon="mdi:trending-up" style={{ fontSize: "3.5rem" }}></span>
                    </div>
                    <h3>Growth Mindset</h3>
                    <p>Thriving in environments where continuous learning and professional development are essential.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="about-feature-card">
                    <div className="feature-icon">
                      <span className="iconify" data-icon="mdi:account-group" style={{ fontSize: "3.5rem" }}></span>
                    </div>
                    <h3>Team Player</h3>
                    <p>Believing exceptional teamwork is essential for building outstanding software and achieving goals.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="about-feature-card">
                    <div className="feature-icon">
                      <span className="iconify" data-icon="mdi:code-braces" style={{ fontSize: "3.5rem" }}></span>
                    </div>
                    <h3>Full Stack Focus</h3>
                    <p>Creating intuitive front-end experiences while building robust back-end systems that work seamlessly together.</p>
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

export default About;
