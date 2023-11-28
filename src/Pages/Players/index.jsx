import CardPlayers from "../../Components/CardPlayers"
import Layout from "../../Components/Layout"
//import all the component that will be use in the website :)

import { useState, useEffect } from "react" //import use effect and and usestate



const Players = () => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Player/?format=json')
            .then(response => response.json())
            .then(data => setItems(data))
    })

    return (
        
        <Layout>


            {
                
                items?.map(item => (
                    <CardPlayers key={item.id} data={item} />
                ))//this will map all the Cards on the home using the api
                
            }

        </Layout>

        )
}

export default Players