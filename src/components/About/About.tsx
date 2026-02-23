import React from "react";
import { Icon } from "@iconify/react";
import "./about.scss";

const About = () => {
    return (
        <section id="sobre" className="container-about">
            <h2 className="section-title">
                <span className="purple-text">#</span> Sobre mim
            </h2>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        Sou um Desenvolvedor Front-end apaixonado por inovação e
                        aprendizado contínuo. Minha base começou no suporte
                        técnico, o que me deu uma visão muito pragmática sobre
                        como a tecnologia resolve dores reais de negócio.
                    </p>
                    <p>
                        Iniciei o curso de Análise e Desenvolvimento de Sistemas
                        e mergulhei de cabeça no ecossistema Javascript,
                        TypeScript e React. Após uma passagem desenvolvendo
                        páginas de alta conversão para o setor educacional, hoje
                        dedico minhas habilidades à criação de aplicações
                        robustas em React.
                    </p>
                </div>

                <div className="about-skills">
                    <div className="skill-card">
                        <Icon icon="mdi:react" width="32" className="icon" />
                        <span>React</span>
                    </div>

                    <div className="skill-card">
                        <Icon
                            icon="mdi:language-javascript"
                            width="32"
                            className="icon"
                        />
                        <span>JavaScript</span>
                    </div>

                    <div className="skill-card">
                        <Icon
                            icon="mdi:language-typescript"
                            width="32"
                            className="icon"
                        />
                        <span>TypeScript</span>
                    </div>

                    <div className="skill-card">
                        <Icon icon="mdi:sass" width="32" className="icon" />
                        <span>Sass</span>
                    </div>

                    <div className="skill-card">
                        <Icon icon="mdi:tailwind" width="32" className="icon" />
                        <span>Tailwind</span>
                    </div>

                    <div className="skill-card">
                        <Icon icon="mdi:nodejs" width="32" className="icon" />
                        <span>Node.js</span>
                    </div>

                    <div className="skill-card">
                        <Icon icon="mdi:github" width="32" className="icon" />
                        <span>GitHub</span>
                    </div>
                    <div className="skill-card">
                        <Icon icon="mdi:docker" width="32" className="icon" />
                        <span>Docker</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
