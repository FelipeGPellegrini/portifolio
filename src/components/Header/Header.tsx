import { useState } from "react";
import logo from "../../assets/logo.png";
import "./header.scss";
import { menuOptions } from "./menu-opt";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

function Header() {
    // Menu hamburguer
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Inverte o menu atual
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="container-header">
            <div className="container-logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="menu-options desktop-only">
                <ul>
                    {menuOptions.map((option) => (
                        <li key={option.id}>
                            <a href={option.link}>{option.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <button className="hamburguer-btn mobile-only" onClick={toggleMenu}>
                <motion.div
                    initial={false}
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Icon
                        icon={
                            isMenuOpen
                                ? "material-symbols:close-rounded"
                                : "material-symbols:menu-rounded"
                        }
                        width={32}
                        height={32}
                    />
                </motion.div>
            </button>

            {/*MENU MOBILE*/}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul>
                            {menuOptions.map((option) => (
                                <li key={option.id}>
                                    <a href={option.link}>{option.label}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
