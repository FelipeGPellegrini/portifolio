import { Icon } from "@iconify/react";
import "./footer.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="container-footer">
            <div className="footer-content">
                <div className="footer-text">
                    <p>&copy; {currentYear} Felipe Pellegrini.</p>
                    <span>Desenvolvido com dedicação e muito código.</span>
                </div>

                <div className="footer-socials">
                    <a
                        href="https://github.com/FelipeGPellegrini"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Acessar GitHub"
                    >
                        <Icon icon="mdi:github" width="28" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/felipepellegrini/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Acessar LinkedIn"
                    >
                        <Icon icon="mdi:linkedin" width="28" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
