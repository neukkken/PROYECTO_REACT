import "./index.css" //import styles

import CardTeams from "../../Components/CardTeams"
import TeamDetail from "../../Components/TeamDetail"
import Layout from "../../Components/Layout"
//import all the components that will be use in the website :)

import { useState, useEffect } from "react" //import use effect and and usestate

const Teams = () => {

    const [items, setItems] = useState(null)
    // const [players, setPlayers] = useState(null)

    useEffect(() => {
        fetch('http://localhost:6900/api/teams/')
            .then(response => response.json())
            .then(data => setItems(data.foundTeams))
    })

    // useEffect(() => {
    //     fetch('http://localhost:6900/api/players/')
    //         .then(response => response.json())
    //         .then(dataPlayers => setPlayers(dataPlayers.foundPlayers))
    // })


    return (


        <Layout>{/* {console.log("TEAMS", items)} */}

            <div className="relative bottom-0 flex flex-wrap justify-center items-center max-w-screen-2xl">
                {
                    items?.map(item => (
                        <CardTeams key={item._id} data={item} />
                    ))//this will map all the Cards on the home using the api
                }
            </div>

            <TeamDetail />

        </Layout>
    )
}

export default Teams