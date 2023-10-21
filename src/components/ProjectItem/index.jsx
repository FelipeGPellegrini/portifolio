import "./styles.css"
import { BiLinkExternal } from "react-icons/bi";

const index = () => {
    return (
        <div>
            <div className="containerInfosProjects">
                <div className="infoProject">
                    <img src="./naruto-wiki.png" alt="" />
                    <div className="textInfo">
                        <h2>
                            <a href="https://wiki-naruto.netlify.app/" target="_blank" rel="noreferrer">
                                Wiki Naruto <BiLinkExternal />
                            </a>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sed expedita eius quisquam dicta maiores culpa deserunt vel, totam cum nobis dolores voluptate inventore excepturi, aut alias neque nesciunt natus?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index