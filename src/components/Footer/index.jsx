import "./styles.css"
import { BiArrowToTop } from "react-icons/bi";

const index = () => {
  return (
    <div className="containerFooter">
        <div className="socialIcons">
            <a href="https://www.linkedin.com/in/felipepellegrini/" target="_blank" rel="noreferrer"><img src="./linkedin.png" alt="Logo Linkedin" /></a>
            <a href="https://github.com/FelipeGPellegrini/" target="_blank" rel="noreferrer" ><img src="./github.png" alt="Logo GitHub" /></a>
        </div>
        <a href="#name" className="backToTop">
            <p className="textFooter"> <BiArrowToTop/> Voltar para o início <BiArrowToTop/> </p>
        </a>
    </div>
  )
}

export default index