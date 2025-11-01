import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Resume() {
  useEffect(() => {
    document.body.classList.add('resume-page-active');
    return () => {
      document.body.classList.remove('resume-page-active');
    };
  }, []);

  return (
    <section id="resume-page" className="resume-page">
      <div className="container py-5">
        

        <section className="mb-5 resume-section">
          <h3 className="border-bottom pb-2 resume-section-title">Professional Summary</h3>
          <p className="resume-text">
            Front-end developer with full-stack experience specializing in creating responsive, accessible, and visually engaging web applications.
            Proficient in modern frameworks like Astro, React, and Tailwind CSS, with a strong focus on usability and performance.
            Currently pursuing a B.S. in Software Engineering while managing multiple freelance projects that combine custom design, SEO, and CI/CD deployment workflows.
            U.S. Air Force veteran with proven leadership, adaptability, and problem-solving skills.
          </p>
        </section>

        <section className="mb-5 resume-section">
          <h3 className="border-bottom pb-2 resume-section-title">Technical Skills</h3>
          <ul className="resume-list">
            <li><strong>Languages:</strong> TypeScript, JavaScript (ES6+), HTML5, CSS3, Sass</li>
            <li><strong>Frameworks & Libraries:</strong> Astro, React, Tailwind CSS, Alpine.js, Node.js, Express, MongoDB</li>
            <li><strong>Build Tools:</strong> Vite, PostCSS, Webpack, npm</li>
            <li><strong>Plugins & Extensions:</strong> @tailwindcss/forms, @tailwindcss/typography, @tailwindcss/aspect-ratio</li>
            <li><strong>Tools & Platforms:</strong> Git, GitHub, Netlify, Heroku, AWS (S3, Lambda), Google Analytics</li>
            <li><strong>Core Competencies:</strong> Responsive Web Design, Accessibility, Static Site Generation (Astro), SEO Optimization, CI/CD Pipelines, UI/UX Design, Performance Optimization, Cross-Browser Testing, Git Workflow</li>
          </ul>
        </section>

        <section className="mb-5 resume-section">
          <h3 className="border-bottom pb-2 resume-section-title">Professional Experience</h3>
          <div className="mb-4 resume-experience-item">
            <h5 className="fw-bold resume-job-title">Freelance Web Developer | Self-Employed, Remote | 2023 – Present</h5>
            <ul className="resume-list">
              <li>Manage and maintain websites for two long-term clients, ensuring high performance and accessibility.</li>
              <li>Deliver front-end development services using Astro, Tailwind CSS, and Alpine.js.</li>
              <li>Implement CI/CD pipelines through Netlify and GitHub for automated builds and deployments.</li>
              <li>Optimize websites for SEO and performance through meta configuration and build process tuning.</li>
            </ul>
          </div>

          <div className="mb-4 resume-experience-item">
            <h5 className="fw-bold resume-job-title">Office Manager | Marine Engineers Beneficial Association, Tacoma, WA | Dec 2020 – Present</h5>
            <ul className="resume-list">
              <li>Lead annual MARAD exercises ensuring union compliance with military readiness requirements.</li>
              <li>Streamline administrative operations, vendor management, and record-keeping systems.</li>
              <li>Coordinate logistics and communications to support members across multiple departments.</li>
            </ul>
          </div>

          <div className="mb-4 resume-experience-item">
            <h5 className="fw-bold resume-job-title">Maintenance Manager | Sunbelt Rentals, Seatac, WA | May 2017 – Dec 2020</h5>
            <ul className="resume-list">
              <li>Managed maintenance and repair of equipment valued over $3 million.</li>
              <li>Implemented a new inventory tracking system, reducing waste by 15%.</li>
              <li>Supervised and trained a team of technicians, improving efficiency and performance.</li>
            </ul>
          </div>

          <div className="mb-4 resume-experience-item">
            <h5 className="fw-bold resume-job-title">Aerospace Maintenance Technician | U.S. Air Force, McChord AFB | May 2010 – May 2017</h5>
            <ul className="resume-list">
              <li>Trained and supervised over 15 personnel annually on maintenance procedures and safety standards.</li>
              <li>Maintained complex aircraft systems under high-pressure conditions with precision and accountability.</li>
              <li>Recognized for exceptional teamwork and mission-readiness contributions.</li>
            </ul>
          </div>
        </section>

        <section className="mb-5 resume-section">
          <h3 className="border-bottom pb-2 resume-section-title">Education</h3>
          <ul className="resume-list">
            <li><strong>Western Governors University – Remote:</strong> Bachelor of Science, Software Engineering (In Progress)</li>
            <li><strong>Code Fellows Tech Academy – Seattle, WA:</strong> Certificate – Advanced Software Development in Full-Stack JavaScript (2023)</li>
            <li><strong>Pierce College – Puyallup, WA:</strong> Certificate – Emergency Medical Technician</li>
          </ul>
        </section>

        <section className="resume-section">
          <h3 className="border-bottom pb-2 resume-section-title">Additional Information</h3>
          <p className="resume-text">U.S. Air Force Veteran – Secret Security Clearance (Inactive)</p>
          <p className="resume-text">Portfolio: <a href="https://josh-hahn.com" target="_blank" rel="noreferrer">josh-hahn.com</a></p>
        </section>
      </div>
    </section>
  );
}

