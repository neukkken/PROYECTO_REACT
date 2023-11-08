import Layout from "../../Components/Layout"
import InBuilding from "../../Components/InBuilding"
import Banner from "../../Components/Banner"
import CardDev from "../../Components/CardDev"
import './index.css'

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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magnam, corrupti, modi perferendis ut earum laborum labore cupiditate veniam minus saepe et aliquid numquam odit aut nobis laboriosam porro suscipit.
                        </p>
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
                        name={"El Darwon"}
                        rol={"Front End - Tal"}
                        photo={"https://freepngimg.com/download/league_of_legends/85777-league-legends-of-green-emote-warcraft-world.png"}
                    ></CardDev>

                    <CardDev
                        name={"Santiago Narvaez"}
                        rol={"Front End"}
                        photo={"https://freepngimg.com/download/league_of_legends/85777-league-legends-of-green-emote-warcraft-world.png"}
                    ></CardDev>

                    <CardDev
                        name={"Santiago Narvaez"}
                        rol={"Front End"}
                        photo={"https://freepngimg.com/download/league_of_legends/85777-league-legends-of-green-emote-warcraft-world.png"}
                    ></CardDev>

                    
                    

                    
                </div>


            </div>
        </Layout>
    )
}

export default About