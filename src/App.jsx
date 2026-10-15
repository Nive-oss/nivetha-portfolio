
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const skills = [
  { name: "HTML", type: "Frontend", level: 90 },
  { name: "CSS", type: "Frontend", level: 88 },
  { name: "JavaScript", type: "Frontend", level: 82 },
  { name: "React JS", type: "Frontend", level: 78 },
  { name: "Node JS", type: "Backend", level: 72 },
  { name: "Express JS", type: "Backend", level: 70 },
  { name: "Python", type: "Backend", level: 80 },
  { name: "Java", type: "Backend", level: 72 },
  { name: "PHP", type: "Backend", level: 78 },
  { name: "MySQL", type: "Database", level: 82 },
  { name: "MongoDB", type: "Database", level: 75 },
  { name: "SQL", type: "Database", level: 80 },
  { name: "Power BI", type: "Other", level: 70 },
];

const projects = [
  {
    number: "01",
    title: "WorkNest",
    type: "FULL STACK APPLICATION",
    description:
      "A smart business management platform designed to streamline business operations with user authentication and a modern dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    featured: true,
    symbol: "✳",
    color: "purple",
  },
  {
    number: "02",
    title: "Namu's Cakes Shop",
    type: "E-COMMERCE WEBSITE",
    description:
      "A cake ordering website featuring a responsive product gallery, custom cake ordering and backend order management.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    symbol: "✿",
    color: "pink",
  },
  {
    number: "03",
    title: "TMJ Management System",
    type: "BUSINESS MANAGEMENT",
    description:
      "A digital solution for tailoring, makeup and jewellery businesses with appointment scheduling, measurements, inventory, billing and order tracking.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    symbol: "◈",
    color: "blue",
  },
];

const certificates = [
  { name: "Python 101 for Data Science", issuer: "IBM", icon: "01" },
  { name: "Cloud Computing", issuer: "NPTEL", icon: "02" },
  { name: "Data Visualization using Power BI", issuer: "Certification", icon: "03" },
  { name: "Frontend Developer (React)", issuer: "HackerRank", icon: "04" },
  { name: "Data Analytics with Data Science", issuer: "NPTEL", icon: "05" },
  { name: "SQL", issuer: "HackerRank", icon: "06" },
];

const education = [
  {
    year: "2025 — PRESENT",
    degree: "Master of Computer Applications",
    college: "MEPCO Schlenk Engineering College",
    score: "8.49",
    label: "CGPA",
  },
  {
    year: "2022 — 2025",
    degree: "B.Sc. Computer Science",
    college: "Sri Kaliswari College",
    score: "8.2",
    label: "CGPA",
  },
  {
    year: "2021 — 2022",
    degree: "Higher Secondary — Computer Science",
    college: "N.P.S.S.R.K. Rotary Matric. Hr. Sec. School",
    score: "80%",
    label: "MARKS",
  },
  {
    year: "2019 — 2020",
    degree: "SSLC",
    college: "N.P.S.S.R.K. Rotary Matric. Hr. Sec. School",
    score: "71%",
    label: "MARKS",
  },
];

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Certificates", "certificates"],
  ["Contact", "contact"],
];

function SparkCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;
    let lastSpawn = 0;
    const particles = [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(
        window.devicePixelRatio,
        0,
        0,
        window.devicePixelRatio,
        0,
        0
      );
    };

    const move = (event) => {
      if (reduceMotion) return;

      const now = performance.now();
      if (now - lastSpawn < 18) return;
      lastSpawn = now;

      for (let i = 0; i < 2; i++) {
        particles.push({
          x: event.clientX + (Math.random() - 0.5) * 9,
          y: event.clientY + (Math.random() - 0.5) * 9,
          size: Math.random() * 2.5 + 0.8,
          vx: (Math.random() - 0.5) * 2.4,
          vy: (Math.random() - 0.5) * 2.4 - 0.5,
          life: 1,
          decay: Math.random() * 0.018 + 0.014,
          hue: Math.random() > 0.5 ? 270 : 305,
        });
      }

      if (particles.length > 100) {
        particles.splice(0, particles.length - 100);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.vx *= 0.985;
        p.vy += 0.015;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsl(${p.hue}, 100%, 75%)`;
        ctx.fillStyle = `hsl(${p.hue}, 100%, 82%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();

        if (p.size > 2) {
          ctx.strokeStyle = `rgba(220, 190, 255, ${p.life})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(p.x - 3, p.y);
          ctx.lineTo(p.x + 3, p.y);
          ctx.moveTo(p.x, p.y - 3);
          ctx.lineTo(p.x, p.y + 3);
          ctx.stroke();
        }

        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="spark-canvas" aria-hidden="true" />;
}

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function App() {
  const [activeSkill, setActiveSkill] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const filteredSkills =
    activeSkill === "All"
      ? skills
      : skills.filter((skill) => skill.type === activeSkill);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.15, 0.4] }
    );

    navigation.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <SparkCursor />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVIGATION */}
      <header className="navbar">
        <button
          className="brand"
          onClick={() => scrollTo("home")}
          aria-label="Go to homepage"
        >
          Nivetha Murugapandi
        </button>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map(([label, id]) => (
            <button
              key={id}
              className={activeSection === id ? "nav-active" : ""}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
          <a className="nav-hire" href="mailto:nivethamurugapandi05@gmail.com">
            Hire me ↗
          </a>
        </nav>
      </header>

      {/* HOME */}
      <main id="home" className="hero section-anchor">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO INTERNSHIP OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I'M NIVETHA MURUGAPANDI</p>

          <h1>
            I build digital
            <br />
            experiences
            <br />
            <span className="gradient-text">that make a difference.</span>
          </h1>

          <p className="hero-description">
            MCA student and aspiring Full Stack Developer who enjoys
            turning ideas into responsive, interactive and meaningful
            web applications.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              Explore my work <span>↗</span>
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo("about")}>
              Get to know me <span>↓</span>
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Nive-oss"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <span />
            <a
              href="https://www.linkedin.com/in/nivetha-murugapandi-b75820318/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <span />
            <a href="mailto:nivethamurugapandi05@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

        
<a href="#home" className="logo">
  <span className="logo-icon">
    <i className="dev-symbol">&lt;/&gt;</i>
  </span>
  <span className="logo-name">
    Nivetha<span className="logo-dot">.</span>
  </span>
</a>



          <div className="hero-chip chip-top">
            <span className="chip-icon">✦</span>
            <div>
              <small>MY APPROACH</small>
              <strong>Build · Learn · Improve</strong>
            </div>
          </div>

          <div className="hero-chip chip-bottom">
            <span className="code-icon">&lt;/&gt;</span>
            <div>
              <small>DEVELOPER MODE</small>
              <strong>Turning ideas into code</strong>
            </div>
          </div>

          <div className="hero-mini-badge">MCA · 2025–PRESENT</div>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollTo("about")}
          aria-label="Scroll to About"
        >
          <span /> SCROLL TO EXPLORE
        </button>
      </main>

      {/* ABOUT — PHOTO AND RESUME BELONG HERE */}
      <section id="about" className="section section-anchor">
        <Reveal>
          <div className="section-heading">
            <p className="section-label">01 — ABOUT ME</p>
            <h2>
              The person behind
              <br />
              <span className="gradient-text">the pixels.</span>
            </h2>
            <p className="section-intro">
              A little about my background, interests and the journey
              I'm building in technology.
            </p>
          </div>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-photo-column">
            <div className="about-photo-frame">
              <div className="photo-decoration" />
              <img
                className="about-photo"
                src="/profile.png"
                alt="Nivetha Murugapandi"
              />
              <div className="photo-caption">
                <span className="status-dot" />
                <div>
                  <strong>Nivetha Murugapandi</strong>
                  <small>Aspiring Full Stack Developer</small>
                </div>
              </div>
            </div>

            <div className="photo-note">
              <span>✦</span> Curious mind. Creative thinking. Clean code.
            </div>
          </Reveal>

          <Reveal className="about-content">
            <p className="about-kicker">NICE TO MEET YOU!</p>
            <h3>
              I love learning how things work — and building them myself.
            </h3>

            <p>
              I'm a final-year MCA student with a background in Computer
              Science and a growing interest in full-stack web development.
              I enjoy working on both the user-facing side of applications
              and the backend logic that powers them.
            </p>

            <p>
              Through projects like WorkNest, Namu's Cakes Shop and TMJ
              Management System, I'm developing my skills in building
              practical applications, solving problems and creating
              user-friendly digital experiences.
            </p>

            <p>
              I'm looking for an internship or entry-level opportunity
              where I can contribute to real projects, learn from
              experienced developers and grow as a Full Stack Developer.
            </p>

            <div className="about-facts">
              <div>
                <span className="fact-icon">⌘</span>
                <div>
                  <small>EDUCATION</small>
                  <strong>Master of Computer Applications</strong>
                </div>
              </div>
              <div>
                <span className="fact-icon">⌖</span>
                <div>
                  <small>CAREER INTEREST</small>
                  <strong>Full Stack / Web Development</strong>
                </div>
              </div>
              <div>
                <span className="fact-icon">↗</span>
                <div>
                  <small>LOOKING FOR</small>
                  <strong>Internships & Entry-Level Roles</strong>
                </div>
              </div>
            </div>

            <div className="about-actions">
  <a
    className="btn btn-primary"
    href="/NIVETHAMURUGAPANDI.pdf"
    target="_blank"
    rel="noreferrer"
  >
    View My Resume ↗
  </a>

  <a
    className="text-link"
    href="/NIVETHAMURUGAPANDI.pdf"
    download="NIVETHAMURUGAPANDI.pdf"
  >
    Download CV ↓
  </a>
</div>
          </Reveal>
        </div>

        <Reveal className="stats-row">
          <div className="stat-item">
            <strong>8.49</strong>
            <span>MCA CGPA</span>
          </div>
          <div className="stat-item">
            <strong>8.2</strong>
            <span>B.Sc. CGPA</span>
          </div>
          <div className="stat-item">
            <strong>03</strong>
            <span>Featured Projects</span>
          </div>
          <div className="stat-item">
            <strong>12+</strong>
            <span>Technical Skills</span>
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-anchor">
        <Reveal>
          <div className="section-heading">
            <p className="section-label">02 — SKILLS & TECHNOLOGIES</p>
            <h2>
              My tools for
              <br />
              <span className="gradient-text">building things.</span>
            </h2>
            <p className="section-intro">
              Technologies I'm learning and using across frontend,
              backend and database development.
            </p>
          </div>
        </Reveal>

        <div className="skill-filters">
          {["All", "Frontend", "Backend", "Database", "Other"].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeSkill === filter ? "filter-active" : ""}`}
              onClick={() => setActiveSkill(filter)}
            >
              {filter}
              {activeSkill === filter && <span> ↗</span>}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <Reveal key={skill.name} className="skill-reveal">
              <article
                className="skill-card"
                style={{ "--skill-delay": `${index * 45}ms` }}
              >
                <div className="skill-top">
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.type}</p>
                  </div>
                  <span className="skill-arrow">↗</span>
                </div>
                <div
                  className="skill-track"
                  role="progressbar"
                  aria-label={`${skill.name} self-assessed proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="skill-progress"
                    style={{ "--skill-level": `${skill.level}%` }}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="skills-note">
          Skill levels are indicative self-assessments, not test scores.
        </p>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section section-anchor">
        <Reveal>
          <div className="section-heading">
            <p className="section-label">03 — EDUCATION</p>
            <h2>
              Learning is a
              <br />
              <span className="gradient-text">continuous journey.</span>
            </h2>
          </div>
        </Reveal>

        <div className="timeline">
          {education.map((item, index) => (
            <Reveal key={item.degree}>
              <article className="education-card">
                <div className="timeline-index">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="education-details">
                  <p className="education-year">{item.year}</p>
                  <h3>{item.degree}</h3>
                  <p className="education-college">{item.college}</p>
                </div>
                <div className="education-score">
                  <strong>{item.score}</strong>
                  <span>{item.label}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-anchor">
        <Reveal>
          <div className="section-heading project-heading">
            <div>
              <p className="section-label">04 — SELECTED PROJECTS</p>
              <h2>
                Ideas turned
                <br />
                <span className="gradient-text">into applications.</span>
              </h2>
            </div>
            <p className="section-intro">
              Academic and personal projects showcasing my development
              journey and technical interests.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal key={project.number}>
              <article className={`project-card project-${project.color}`}>
                <div className="project-visual">
                  <span className="project-symbol">{project.symbol}</span>
                  <span className="project-number">{project.number}</span>
                  <div className="visual-orb" />
                  <div className="visual-line visual-line-one" />
                  <div className="visual-line visual-line-two" />
                  {project.featured && (
                    <span className="featured-badge">FEATURED PROJECT</span>
                  )}
                </div>

                <div className="project-content">
                  <p className="project-category">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-bottom">
  <span>PROJECT {project.number}</span>
  <span className="project-status">Portfolio Project</span>
</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="project-note">
          Project cards describe the work; add a live demo or repository
          link when one is available.
        </p>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="section section-anchor">
        <Reveal>
          <div className="section-heading">
            <p className="section-label">05 — CERTIFICATIONS</p>
            <h2>
              Always learning.
              <br />
              <span className="gradient-text">Always growing.</span>
            </h2>
            <p className="section-intro">
              Courses and certifications supporting my technical learning.
            </p>
          </div>
        </Reveal>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <Reveal key={certificate.name}>
              <article className="certificate-card">
                <span className="certificate-number">{certificate.icon}</span>
                <div>
                  <h3>{certificate.name}</h3>
                  <p>{certificate.issuer}</p>
                </div>
                <span className="certificate-arrow">↗</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-anchor">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-decoration contact-decoration-one" />
            <div className="contact-decoration contact-decoration-two" />

            <div className="contact-content">
              <p className="section-label">06 — LET'S CONNECT</p>
              <h2>
                Have an opportunity?
                <br />
                <span className="gradient-text">Let's talk.</span>
              </h2>
              <p className="contact-description">
                I'm ready to learn, contribute and grow with a team that
                builds meaningful digital products. Let's connect!
              </p>

              <a
                className="btn btn-primary"
                href="mailto:nivethamurugapandi05@gmail.com?subject=Internship%20Opportunity"
              >
                Start a conversation <span>↗</span>
              </a>
            </div>

            <div className="contact-links">
              <a href="mailto:nivethamurugapandi05@gmail.com">
                <span className="contact-icon">@</span>
                <span>
                  <small>EMAIL</small>
                  <strong>Send me an email</strong>
                </span>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nivetha-murugapandi-b75820318/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">in</span>
                <span>
                  <small>LINKEDIN</small>
                  <strong>Connect professionally</strong>
                </span>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://github.com/Nive-oss"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">&lt;/&gt;</span>
                <span>
                  <small>GITHUB</small>
                  <strong>Explore my repositories</strong>
                </span>
                <span className="contact-arrow">↗</span>
              </a>

              <a href="tel:9942610839">
                <span className="contact-icon">☎</span>
                <span>
                  <small>PHONE</small>
                  <strong>9942610839</strong>
                </span>
                <span className="contact-arrow">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <button className="footer-brand" onClick={() => scrollTo("home")}>
          Nivetha Murugapandi
        </button>
        <p>Designed & built with React by Nivetha Murugapandi</p>
        <button className="back-to-top" onClick={() => scrollTo("home")}>
          BACK TO TOP ↑
        </button>
      </footer>
    </div>
  );
}

export default App;
