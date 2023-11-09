import "./index.css"
import CardTeams from "../../Components/CardTeams"
import Layout from "../../Components/Layout"
import { useState, useEffect } from "react"

const Teams = () => {
    
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Team/?format=json')
            .then(response => response.json())
            .then(data => setItems(data))
    })

    
    return (
        
        
        <Layout>

            <div className="relative bottom-0 flex flex-wrap justify-center items-center max-w-screen-2xl">
                {
                    items?.map(item => (
                        <CardTeams key={item.id} data={item} />
                    ))
                }
            </div>
            
        </Layout>
        )
}

export default Teams