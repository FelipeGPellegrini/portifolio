import "./hero.scss";
import { TypingEffect } from "../../store/typing-effect";
import foto from "../../assets/foto-pc.jpg";

function Hero() {
    return (
        <div className="container-hero">
            <div className="container-hello">
                <h1>
                    <TypingEffect text="&lt;_Hello World" />
                </h1>
                <div className="container-image">
                    <img src={foto} alt="Felipe Pellegrini foto" />
                </div>
                <div className="tech">
                    <h2>
                        <TypingEffect text="Felipe Pellegrini" />
                    </h2>
                    <p>
                        <TypingEffect text="Desenvolvedor Front-end" />
                    </p>
                </div>
                <div className="container-btn">
                    <button type="button" className="btn">
                        <strong>Explorar</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>

                        <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
