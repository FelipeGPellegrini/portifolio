import "./styles.css"
import ProjectItem from "../ProjectItem"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div className="containerProjectPage"> 
      <h1>Projetos</h1>
      <ProjectItem imgProject={"./naruto-wiki.png"} linkProject={"https://wiki-naruto.netlify.app/"} nameProject={"Wiki Naruto"} descriptionProject={"O projeto se trata de um site que utiliza uma API para permitir aos usuários pesquisar e obter informações detalhadas sobre personagens do anime Naruto."}/>
      <ProjectItem imgProject={"./pedrapapeltesoura.png"} linkProject={"https://pedra-papel-tesoura-2.netlify.app/"} nameProject={"Pedra, papel e Tesoura"} descriptionProject={"O projeto foi desenvolvido com o objetivo de criar uma aplicação iterativa que oferece um versão digital do famoso jogo Pedra, Papel e Tesoura."}/>
      <ProjectItem imgProject={"./conversor.png"} linkProject={"https://oconversordemoedas.netlify.app/"} nameProject={"Conversor de Moedas"} descriptionProject={"Esse projeto foi desenvolvido para facilitar a conversão de moedas, consultando o valor da moeda selecionada em uma API que possuí os valores atualizados."}/>
      <div className="backToHome">
        <p className="textBackToHome"><Link to="/"> <BiArrowBack/> Voltar para página inicial</Link></p>
      </div>
    </div>
  )
}

export default ProjectsPage