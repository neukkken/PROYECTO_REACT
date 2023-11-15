import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
        
    const activeStyle = 'underline underline-offset-4'

    return(
            <header className="main_header">
                <nav className="main_nav">
                    
                    <div className="nav_img">
                        <div>
                            <NavLink to='/'>
                                <img src="https://assets.website-files.com/64c8ba1e1ec040c990d68596/65048ace6192a38a6214b6a9_002_RG_2021_FULL_LOCKUP_OFFWHITE.png" alt="" className="w-32 bg-transparent"/>
                            </NavLink>
                        </div>

                        <div className="tags-container">
                            <a href="">
                                    <NavLink to='/teams'>
                                        <p>TEAMS</p>
                                    </NavLink>

                            </a>

                            <a href="">
                                <NavLink to='/players'>
                                        <p>
                                        PLAYERS
                                        </p>
                                </NavLink>
                                
                                <ul></ul>
                            </a>

                            <a href="">
                                <NavLink to='/*'>
                                    <p>STANDINGS</p>    
                                </NavLink>
                                <ul></ul>
                            </a>

                            <a href="">
                                <NavLink to='/info'>
                                    <p>INFO</p>    
                                </NavLink>
                                
                                <ul></ul>
                            </a>

                            <a href="">
                                    <NavLink to='/*'>
                                        <p>PICK'EM</p>
                                    </NavLink>
                                <ul></ul>
                            </a>
                        </div>
                    </div>

                    <div>
                    <NavLink to='/*'>
                        <button className="text-black font-semibold bg-azul-lol-opaco px-4 py-1 rounded-xl">LOGIN</button>
                    
                    </NavLink>
                    </div>

                </nav>
        </header>
    )
}


export default NavBar