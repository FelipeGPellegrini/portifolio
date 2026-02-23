import React from "react";
import { Icon } from "@iconify/react";
import { projectsData } from "./projects-data";
import "./projects.scss";

const Projects = () => {
    return (
        <section id="projetos" className="container-projects">
            <h2 className="section-title">
                <span className="purple-text">#</span> Meus Projetos
            </h2>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image-container">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="bw-image"
                            />

                            {!project.finished && (
                                <span className="status-badge in-progress">
                                    <Icon
                                        icon="mdi:progress-clock"
                                        width="16"
                                    />
                                    Em andamento
                                </span>
                            )}

                            <div className="tech-tab">
                                {project.techIcons.map((iconStr, idx) => (
                                    <Icon
                                        key={idx}
                                        icon={iconStr}
                                        width="24"
                                        className="tech-icon"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-links">
                                {project.githubUrl ? (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-link"
                                    >
                                        <Icon icon="mdi:github" width="24" />
                                        Código
                                    </a>
                                ) : (
                                    <span className="btn-link disabled">
                                        <Icon icon="mdi:github" width="24" />
                                        Privado
                                    </span>
                                )}

                                {project.liveUrl && project.liveUrl !== "#" && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-link live"
                                    >
                                        <Icon
                                            icon="mdi:open-in-new"
                                            width="24"
                                        />
                                        Deploy
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
