import React from "react";
import "./home.css";
import image from "./home.jpg";
import image1 from "./image1.jpeg";
import image2 from "./ap-website.png";
import image3 from "./portfolio.png";

export default function Home() {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-align">
          <div className="logo">Kartik</div>

          {/* Checkbox to toggle the menu */}
          <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
          <label htmlFor="menu-toggle" className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>

          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="content-wrapper">
        {/* Landing Page */}
        <section id="home" className="landing">
          <div className="landing-content">
            <h1 className="name">Kartik Kumawat</h1>
            <p className="description">
              I am a <span className="highlight">Web Developer</span> passionate
              about creating interactive and responsive web applications. I
              specialize in modern frameworks like{" "}
              <span className="highlight">React</span> and love to explore{" "}
              <span className="highlight">AI technologies</span>.
            </p>
            <button onclick={()=>{window.location.href="#contact";}} className="contact-btn">Contact Me</button>
          </div>
          <div className="landing-image">
            <img src={image} alt="Kartik Kumawat" />
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="about">
          <div className="about-image">
            <img src={image1} alt="About Kartik" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Hello! I'm <span className="highlight">Kartik Kumawat</span>, a
              web developer with a passion for building seamless user
              experiences. My expertise lies in front-end technologies like{" "}
              <span className="highlight">React</span> and creating responsive
              designs.
            </p>
            <p>
              I enjoy solving challenging problems and am always keen to learn
              about emerging trends in technology. My goal is to build web
              applications that make life easier and more efficient.
            </p>
          </div>
        </section>

        <section id="education" className="education">
          <h2>Education</h2>
          <div className="education-details">
            <h3>Bachelor of Vocational [B.Voc]</h3>
            <p>Bhartiya Skill Development University, Jaipur</p>
            <h4>Relevant Coursework:</h4>
            <div className="education-courses">
              <div className="course-card">
                <div className="course-icon">
                  <i className="fa fa-shield-alt"></i>{" "}
                  {/* Cyber Security icon */}
                </div>
                <h4>Cyber Security</h4>
                <p>
                  Understanding of network security protocols and ethical
                  hacking.
                </p>
              </div>

              <div className="course-card">
                <div className="course-icon">
                  <i className="fa fa-cloud"></i> {/* Cloud Computing icon */}
                </div>
                <h4>Cloud Computing</h4>
                <p>
                  Experience with cloud platforms like AWS and Google Cloud.
                </p>
              </div>

              <div className="course-card">
                <div className="course-icon">
                  <i className="fa fa-network-wired"></i>{" "}
                  {/* Computer Networking icon */}
                </div>
                <h4>Computer Networking</h4>
                <p>Knowledge of routing, switching, and network protocols.</p>
              </div>

              <div className="course-card">
                <div className="course-icon">
                  <i className="fas fa-desktop course-icon"></i>{" "}
                  {/* Windows Server Administration icon */}
                </div>
                <h4>Windows Server Administration</h4>
                <p>
                  Hands-on experience with Windows Server management and
                  configuration.
                </p>
              </div>

              <div className="course-card">
                <div className="course-icon">
                  <i className="fa fa-code"></i> {/* Python Programming icon */}
                </div>
                <h4>Python Programming</h4>
                <p>
                  Proficient in Python for both backend and scripting tasks.
                </p>
              </div>

              <div className="course-card">
                <div className="course-icon">
                  <i className="fa fa-laptop-code"></i>{" "}
                  {/* Network Designing icon */}
                </div>
                <h4>Network Designing</h4>
                <p>
                  Experience in designing efficient network topologies for
                  large-scale infrastructures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="skills">
          <h2>Technical Skills</h2>
          <div className="skill">
            <label>Flask</label>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
          <div className="skill">
            <label>Python</label>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </div>
          <div className="skill">
            <label>JavaScript</label>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </div>
          <div className="skill">
            <label>SQLite</label>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </div>
          <div className="skill">
            <label>ReactJS</label>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
          <div className="skill">
            <label>Web Development</label>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "90%" }}>
                90%
              </div>
            </div>
          </div>
          <div className="skill">
            <label>Cloud Computing</label>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="projects-container">
            {/* Project Card */}
            <div className="project-card">
              <div className="card-image">
                <img src={image2} alt="Project Thumbnail" />
              </div>
              <div className="card-content">
                <h3>ApanBackup website</h3>
                <p className="project-desc">
                  I developed the <strong>ApnaBackup</strong> software website
                  using <strong>React JS</strong> to deliver a{" "}
                  <em>comprehensive solution for data backup and recovery</em>.
                  The project ensures seamless user interaction, secure data
                  management, and efficient recovery processes, providing a
                  reliable tool for safeguarding valuable information.
                </p>
                <div className="visit-btn">
                  <a
                    href="https://www.apnabackup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>

            {/* Repeat the card for multiple projects */}
            <div className="project-card">
              <div className="card-image">
                <img src={image3} alt="Project Thumbnail" />
              </div>
              <div className="card-content">
                <h3>Personal portfolio</h3>
                <p className="project-desc">
                  I developed my <strong>personal portfolio</strong> using
                  modern web technologies like <strong>React JS</strong>,
                  showcasing my skills, projects, and achievements. The
                  portfolio is fully <em>responsive</em>
                  and features a clean, eye-catching design that highlights my
                  expertise in web development, software solutions, and cloud
                  technologies.
                </p>
                <div className="visit-btn">
                  <a
                    href="https://kartikkumawat.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <div className="contact-container">
            <p>
              If you’d like to connect or collaborate, feel free to reach out!
            </p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </section> */}

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">
            <p>© 2024 Kartik Kumawat. All Rights Reserved.</p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/kartik-kumawat-developer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/kartikkumawat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
