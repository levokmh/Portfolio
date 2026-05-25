import { Brain, Code2, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        const glow = document.getElementById("cursor-glow");

        const moveGlow = (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        };

        window.addEventListener("mousemove", moveGlow);

        return () => {
            window.removeEventListener("mousemove", moveGlow);
        };
    }, []);

    const projects = [
        {
            title: "AI Comment Analyzer",
            status: "Completed",
            category: "AI / NLP",
            description:
                "Sentiment analysis dashboard built with Python, Streamlit, Transformers and Plotly.",
            stack: ["Python", "Transformers", "Streamlit", "Plotly"],
            link: "https://github.com/LevoKMH/ai-comment-analyzer",
        },
        {
            title: "AI CV Analyzer",
            status: "Next Project",
            category: "AI / Career",
            description:
                "AI tool to analyze resumes, detect skills and compare them with job offers.",
            stack: ["Python", "NLP", "PDF Parsing", "AI"],
            link: "#",
        },
        {
            title: "Portfolio Website",
            status: "Currently Building",
            category: "Frontend",
            description:
                "Personal developer portfolio built with React and Vite.",
            stack: ["React", "Vite", "JavaScript", "CSS"],
            link: "#",
        },
    ];

    const roadmap = [
        {
            month: "May 2026",
            title: "Build first AI project",
            text: "Created AI Comment Analyzer and learned Git, GitHub, Streamlit and Transformers.",
        },
        {
            month: "June 2026",
            title: "Create portfolio",
            text: "Build and improve a modern React portfolio to showcase projects professionally.",
        },
        {
            month: "July 2026",
            title: "Start AI CV Analyzer",
            text: "Develop a resume analysis tool with PDF parsing, skill detection and job matching.",
        },
        {
            month: "August 2026",
            title: "Strengthen fundamentals",
            text: "Improve C, Linux, algorithms and software engineering fundamentals before 42.",
        },
    ];

    return (
        <main className="page">
            <div id="cursor-glow" className="cursor-glow"></div>

            <nav className="navbar">

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <motion.section
                className="hero"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="hero-content">

                    <img
                        src="/logo.png"
                        alt="LevoKMH logo"
                        className="avatar"
                    />

                    <p className="tag">
                        AI • Developer • Student
                    </p>

                    <h1>
                        Building modern AI tools and interactive digital experiences.
                    </h1>

                    <p className="hero-text">
                        I’m Hector, a student passionate about artificial intelligence,
                        software development, cybersecurity and astronomy. I build practical
                        projects to improve my skills and create a strong technical
                        portfolio.
                    </p>

                    <div className="buttons">
                        <a href="#projects" className="primary-btn">
                            View Projects
                        </a>

                        <a
                            href="mailto:hec.g@icloud.com"
                            className="secondary-btn"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero-card">
                    <p>Currently focused on</p>

                    <h3>AI-powered applications</h3>

                    <span>
                        Python • React • NLP • Data Visualization
                    </span>
                </div>
            </motion.section>

            <motion.section
                id="about"
                className="section about-section"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="section-label">About</p>

                <h2>Who I am</h2>

                <div className="about-grid">
                    <p>
                        I am currently building my technical profile by creating concrete
                        projects around artificial intelligence, web development and data
                        visualization.
                    </p>

                    <p>
                        My goal is to become stronger in programming fundamentals while also
                        building modern applications that are useful, clean and easy to
                        understand.
                    </p>
                </div>
            </motion.section>

            <motion.section
                id="skills"
                className="section"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >

                <p className="section-label">Skills</p>

                <h2>Technologies I use</h2>

                <div className="skills-cards">

                    <div className="skill-card">

                        <div className="skill-icon">
                            <Brain size={34} />
                        </div>

                        <h3>AI & Data</h3>

                        <p>
                            Sentiment analysis, NLP models and data visualization.
                        </p>

                        <div className="skills-grid">
                            <div className="skill">Python</div>
                            <div className="skill">Transformers</div>
                            <div className="skill">NLP</div>
                            <div className="skill">Plotly</div>
                        </div>
                    </div>

                    <div className="skill-card">

                        <div className="skill-icon">
                            <Code2 size={34} />
                        </div>

                        <h3>Web Development</h3>

                        <p>
                            Modern interfaces, responsive layouts and interactive apps.
                        </p>

                        <div className="skills-grid">
                            <div className="skill">React</div>
                            <div className="skill">JavaScript</div>
                            <div className="skill">CSS</div>
                            <div className="skill">Vite</div>
                        </div>
                    </div>

                    <div className="skill-card">

                        <div className="skill-icon">
                            <TerminalSquare size={34} />
                        </div>

                        <h3>Tools & Fundamentals</h3>

                        <p>
                            Version control, terminal usage and programming fundamentals.
                        </p>

                        <div className="skills-grid">
                            <div className="skill">Git</div>
                            <div className="skill">GitHub</div>
                            <div className="skill">Linux</div>
                            <div className="skill">C Basics</div>
                        </div>
                    </div>

                </div>
            </motion.section>

            <motion.section id="projects" className="section">

                <p className="section-label">Projects</p>

                <h2>Featured work</h2>

                <div className="projects-grid">

                    {projects.map((project) => (
                        <motion.article
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                            className="project-card"
                            key={project.title}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >

                            <div className="project-top">
                                <p className="project-category">
                                    {project.category}
                                </p>

                                <span className="status">
                                    {project.status}
                                </span>
                            </div>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="stack">
                                {project.stack.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>

                            <a href="/projects" className="project-link">
                                View all projects →
                            </a>

                        </motion.article>
                    ))}

                </div>
            </motion.section>

            <motion.section
                id="roadmap"
                className="section"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >

                <p className="section-label">Roadmap</p>

                <h2>Current progression</h2>

                <div className="roadmap">

                    {roadmap.map((item) => (
                        <div className="roadmap-item" key={item.month}>

                            <span>{item.month}</span>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>

                        </div>
                    ))}

                </div>
            </motion.section>

            <motion.section
                id="contact"
                className="section contact"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >

                <p className="section-label">Contact</p>

                <h2>Let’s connect</h2>

                <p>
                    You can contact me by email or follow my work on GitHub.
                </p>

                <div className="buttons centered">

                    <a
                        href="mailto:hec.g@icloud.com"
                        className="primary-btn"
                    >
                        hec.g@icloud.com
                    </a>

                    <a
                        href="https://github.com/LevoKMH"
                        target="_blank"
                        className="secondary-btn"
                    >
                        GitHub
                    </a>

                </div>
            </motion.section>

            <footer className="footer">

                <div className="footer-left">
                    <span className="footer-line"></span>

                    <div>
                        <h3>LevoKMH</h3>
                        <p>Building AI-powered digital experiences.</p>
                    </div>
                </div>

                <div className="footer-right">
                    <span>Portfolio 2026</span>
                </div>

            </footer>

        </main>
    );
}

export default Home;