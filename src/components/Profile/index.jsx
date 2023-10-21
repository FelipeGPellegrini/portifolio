import "./styles.css"
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <div className="containerPerfilPicture">
        <img src="https://avatars.githubusercontent.com/u/107892258?v=4" alt="Foto de Perfil" />
      </div>
      <div className="techs">
        <h2>Tecnologias</h2>
        <div className="containerImagesTechs">
          <img src="./js.png" alt="JavaScript" />
          <img src="./typescript.svg" alt="TypeScript" />
          <img src="./reacticon.png" alt="React" />
          <img src="./tailwindcssicon.webp" alt="Tailwind CSS" />
        </div>
      </div>
      <div className="projectLink">
        <h2><Link to="/projetos">Projetos <BiLinkExternal/></Link></h2>
      </div>
    </div>
  )
}

export default index