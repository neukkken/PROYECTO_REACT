import Schedule from "../../Components/Schedule";
import Layout from "../../Components/Layout";
import News from "../../Components/News";
import { useState, useEffect } from "react"


const Home = () => {
    
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/News/?format=json')
            .then(response => response.json())
            .then(data => setItems(data))
    })

    return(
        <Layout>
            {

                items?.map(item => (
                    <News key={item.id} data={item} />
                ))

            }
        
        </Layout>
    )
}

export default Home