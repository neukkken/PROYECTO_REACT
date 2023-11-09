import CardPlayers from "../../Components/CardPlayers"
import Layout from "../../Components/Layout"
import { useState, useEffect } from "react"

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
                ))
                
            }

        </Layout>

        )
}

export default Players