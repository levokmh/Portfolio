import { Link } from "react-router-dom";
import { Brain, Briefcase, Code2 } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            icon: <Brain size={28} />,
            title: "AI Comment Analyzer",
            status: "Completed",
            category: "AI / NLP",
            description:
                "A sentiment analysis dashboard built with Python, Streamlit, Transformers and Plotly.",
            stack: ["Python", "Transformers", "Streamlit", "Plotly", "Pandas"],
            github: "https://github.com/LevoKMH/ai-comment-analyzer",
            slug: "ai-comment-analyzer",
        },
        {
            icon: <Briefcase size={28} />,
            title: "AI CV Analyzer",
            status: "Next Project",
            category: "AI / Career",
            description:
                "AI tool to analyze resumes, detect skills and compare them with job offers.",
            stack: ["Python", "NLP", "PDF Parsing", "AI"],
            github: "#",
            slug: "ai-cv-analyzer",
        },
        {
            icon: <Code2 size={28} />,
            title: "Portfolio Website",
            status: "Currently Building",
            category: "Frontend",
            description:
                "Personal developer portfolio built with React and Vite.",
            stack: ["React", "Vite", "JavaScript", "CSS"],
            github: "#",
            slug: "portfolio-website",
        },
    ];

    return (
        <main className="page">
            <nav className="navbar">

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/projects" className="active">
                        Projects
                    </Link>
                </div>
            </nav>
            <section className="section">
                <span className="section-label">Projects</span>

                <h2>All Projects</h2>

                <p
                    style={{
                        color: "#cbd5e1",
                        marginBottom: "50px",
                        maxWidth: "700px",
                        lineHeight: "1.8",
                    }}
                >
                    A collection of projects I've built and am currently working on.
                </p>

                <motion.div
                    className="projects-grid"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                >
                    {projects.map((project) => (
                        <motion.div
                            className="project-card"
                            key={project.title}
                            whileHover={{ y: -6, scale: 1.01 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <div className="project-top">
                                <span className="project-category">
                                    {project.category}
                                </span>

                                <span className="status">{project.status}</span>
                            </div>

                            <div className="skill-icon">
                                {project.icon}
                            </div>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="stack">
                                {project.stack.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-actions">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="secondary-btn project-btn"
                                >
                                    GitHub
                                </a>

                                <Link
                                    to={`/projects/${project.slug}`}
                                    className="primary-btn project-btn"
                                >
                                    Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
}

export default Projects;