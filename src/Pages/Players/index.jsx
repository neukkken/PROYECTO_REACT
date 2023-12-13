import { data } from "autoprefixer"
import CardPlayers from "../../Components/CardPlayers"
import Layout from "../../Components/Layout"
//import all the component that will be use in the website :)

import { useState, useEffect } from "react" //import use effect and and usestate



const Players = () => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('http://localhost:6900/api/players/')
            .then(response => response.json())
            .then(data => setItems(data.foundPlayers))
    })

    return (
        
        <Layout>

            {
                items?.map(item => (
                    <CardPlayers key={item._id} data={item} />
                ))//this will map all the Cards on the home using the api
            }

        </Layout>

        )
}

export default Players