import Home from "../Home" 
import About from "../About" 
import Players from "../Players"
import Teams from "../Teams"
import NotFound from "../NotFound"
//import all the pages that will be use in the website :)

import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"
//import all the components that will be use in the website :)


import { TeamContextProvider } from "../../Context"
import { useRoutes,BrowserRouter } from 'react-router-dom'
//these are the "dependences" that i use, in these we can found the team context provider and the router dom


import "./App.css" //import styles

const AppRoutes = () => { //all the paths that the page has

    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/info', element: <About/>},
        {path: '/teams', element: <Teams/>},
        {path: '/players', element: <Players/>},
        {path: '/*', element: <NotFound/>}

    ])
    return routes
}


function App(){ //structure of website

    return(
        <TeamContextProvider>
            <BrowserRouter>
                <NavBar />
                <AppRoutes />
                <Footer/>
            </BrowserRouter>
        </TeamContextProvider>
    )

}


export default App

