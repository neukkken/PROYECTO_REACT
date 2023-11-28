import Layout from "../../Components/Layout" 
import Banner from "../../Components/Banner" 
import CardDev from "../../Components/CardDev" 
//import all the components that will be use in the website :)

import './index.css' //import styles

const About = () => {
    return(
        <Layout>
                <Banner></Banner>
            <div className="container_info">
                <div className="block_left">
                    <div className="text_info_left">
                        <h1>
                            Welcome to 
                        </h1>
                        <p>INFO</p>
                    </div>
                    <div className="info_text">
                        <p>
                            Hi! Welcome to the League of legends Esports page, where you can find all of your favorite teams and players.
                        </p>

                        <p>
                            This side was made by a league of legends's fan, Santiago Narvaez, a Software Develoment student at SENA.
                        </p>

                        <p>
                            You can download and see how this side was made in this link: <a href="https://github.com/neukkken/PROYECTO_REACT.git" target="_blank" className="underline text-azul-lol-opaco">Github Repository</a>
                        </p>

                        <p>My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead– murdered by my brother-in-law, Hank Schrader. Hank has been building a meth empire for over a year now, and using me as his chemist. Shortly after my 50th birthday, he asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using connections that he made through his career with the DEA. I was... astounded. I... I always thought Hank was a very moral man, and I was particularly vulnerable at the time – something he knew and took advantage of.</p>

                    </div>

                    
                </div>

                <div className="block_right">
                    <h1>Our Dev's</h1>
                    <CardDev
                        name={"Santiago Narvaez"}
                        rol={"Front End"}
                        photo={"https://freepngimg.com/download/league_of_legends/85777-league-legends-of-green-emote-warcraft-world.png"}
                    ></CardDev>

                    <CardDev
                        name={"Walter White"}
                        rol={"BackEnd"}
                        photo={"https://freepngimg.com/download/league_of_legends/85777-league-legends-of-green-emote-warcraft-world.png"}
                    ></CardDev>

                    
                </div>


            </div>
        </Layout>
    )
}

export default About