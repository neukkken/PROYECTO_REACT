import Home from "../Home"
import About from "../About"
import "./App.css"
import NavBar from "../../Components/NavBar"
import { useRoutes,BrowserRouter } from 'react-router-dom'

const AppRoutes = () => {

    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/about', element: <About/>},
    ])
    return routes
}


function App(){

    return(
        <BrowserRouter>
            <NavBar/>
            <AppRoutes/>
        </BrowserRouter>
    )

}


export default App

