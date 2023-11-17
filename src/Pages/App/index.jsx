import Home from "../Home"
import About from "../About"
import Players from "../Players"
import Teams from "../Teams"
import "./App.css"
import NotFound from "../NotFound"
import NavBar from "../../Components/NavBar"
import { TeamContextProvider } from "../../Context"
import { useRoutes,BrowserRouter } from 'react-router-dom'
import Footer from "../../Components/Footer"

const AppRoutes = () => {

    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/info', element: <About/>},
        {path: '/teams', element: <Teams/>},
        {path: '/players', element: <Players/>},
        {path: '/*', element: <NotFound/>}

    ])
    return routes
}


function App(){

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

