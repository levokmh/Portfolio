import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import {
    ArrowLeft,
    ExternalLink,
    CheckCircle,
} from "lucide-react";

function ProjectDetail() {
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <main className="page">
                <nav className="navbar">
                    <Link to="/" className="logo">
                        LevoKMH
                    </Link>
                </nav>

                <section className="section">
                    <p className="section-label">Error</p>

                    <h2>Project not found</h2>

                    <Link to="/projects" className="primary-btn">
                        Back to projects
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="page">
            <nav className="navbar">

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </nav>

            <section className="section project-detail">
                <Link to="/projects" className="project-link back-link">
                    <ArrowLeft size={18} />
                    Back to projects
                </Link>

                <motion.div
                    className="project-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                >
                    <div>
                        <p className="section-label">{project.category}</p>

                        <h2>{project.title}</h2>

                        <p className="detail-description">
                            {project.longDescription}
                        </p>

                        <div className="buttons">
                            <a
                                href={project.github}
                                target="_blank"
                                className="primary-btn"
                            >
                                Open GitHub
                                <ExternalLink size={18} />
                            </a>

                            <Link to="/projects" className="secondary-btn">
                                View all projects
                            </Link>
                        </div>
                    </div>

                    <div className="project-showcase">
                        <span className="detail-status">
                            {project.status}
                        </span>

                        {/* =========================
                DASHBOARD PREVIEW
            ========================= */}

                        {project.preview === "dashboard" && (
                            <div className="project-preview dashboard">
                                <div className="preview-topbar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="preview-content">
                                    <div className="preview-card">
                                        <p>Total Comments</p>
                                        <strong>100+</strong>
                                    </div>

                                    <div className="preview-card">
                                        <p>Sentiment Analysis</p>
                                        <strong>AI / NLP</strong>
                                    </div>

                                    <div className="preview-chart">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* =========================
                CV PREVIEW
            ========================= */}

                        {project.preview === "cv" && (
                            <div className="project-preview cv-preview-clean">
                                <div className="cv-left">
                                    <div className="cv-avatar"></div>

                                    <div className="cv-line w80"></div>
                                    <div className="cv-line w60"></div>
                                    <div className="cv-line w90"></div>
                                    <div className="cv-line w50"></div>
                                </div>

                                <div className="cv-right">
                                    <span>Match Score</span>

                                    <strong>92%</strong>

                                    <p>Skills detected</p>

                                    <div className="mini-tags">
                                        <span>Python</span>
                                        <span>NLP</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* =========================
                WEBSITE PREVIEW
            ========================= */}

                        {project.preview === "website" && (
                            <div className="project-preview website-preview-clean">
                                <div className="mini-browser-bar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="mini-hero"></div>

                                <div className="mini-card-row">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        )}

                        <h3>{project.title}</h3>

                        <p>{project.category}</p>
                    </div>
                </motion.div>

                <div className="detail-grid">

                    <motion.div
                        className="detail-card"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                        <h3>Overview</h3>

                        <p>{project.description}</p>
                    </motion.div>

                    <motion.div
                        className="detail-card"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                        <h3>Tech stack</h3>

                        <div className="stack">
                            {project.stack.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="detail-card large-card"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                        <h3>Main features</h3>

                        <div className="features-list">
                            {project.features.map((feature) => (
                                <div className="feature-item" key={feature}>
                                    <CheckCircle size={18} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="detail-card large-card"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                        <h3>What I learned</h3>

                        <p>
                            This project helped me improve my understanding
                            of real-world development workflows, project
                            architecture, user interface design, GitHub usage
                            and practical problem solving.
                        </p>
                    </motion.div>

                </div>
            </section>
        </main >
    );
}

export default ProjectDetail;