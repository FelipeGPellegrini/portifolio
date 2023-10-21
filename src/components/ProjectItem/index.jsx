import "./styles.css"
import { BiLinkExternal } from "react-icons/bi";

const index = ({imgProject, linkProject, nameProject, descriptionProject}) => {
    return (
        <div>
            <div className="containerInfosProjects">
                <div className="infoProject">
                    <img src={imgProject} alt="Imagem do projeto" />
                    <div className="textInfo">
                        <h2>
                            <a href={linkProject} target="_blank" rel="noreferrer">
                                {nameProject} <BiLinkExternal />
                            </a>
                        </h2>
                        <p>{descriptionProject}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index