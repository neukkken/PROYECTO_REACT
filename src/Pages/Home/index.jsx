import Layout from "../../Components/Layout";
import News from "../../Components/News";
//import all the components that will be use in the website :)

import { useState, useEffect } from "react" //import use effect and and usestate


const Home = () => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('http://localhost:6900/api/news')
            .then(response => response.json())
            .then(data => setItems(data.foundNews))
    })

    return (
        <Layout>
            {

                items?.map(item => (
                    <News key={item._id} data={item} />
                ))//this will map all the Cards on the home using the api

            }

        </Layout>
    )
}

export default Home