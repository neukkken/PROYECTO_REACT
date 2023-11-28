import "./NavBar.css" //import styles
import { NavLink } from "react-router-dom" //import the navlink, this is use for when you click on one NavBar item this will direct you to that part of the website

const NavBar = () => {

    return(
                <nav className="main_nav">
                    <div className="nav_img">
                        <div>
                            <NavLink className="NavLink" to='/'>
                                <img src="https://assets.website-files.com/64c8ba1e1ec040c990d68596/65048ace6192a38a6214b6a9_002_RG_2021_FULL_LOCKUP_OFFWHITE.png" alt="" className="w-32 bg-transparent"/>
                            </NavLink>
                        </div>

                        <div className="tags-container">
                            <a href="">
                                    <NavLink className="NavLink" to='/teams'>
                                        <p>TEAMS</p>
                                    </NavLink>

                            </a>

                            <a href="">
                                <NavLink className="NavLink" to='/players'>
                                        <p>
                                        PLAYERS
                                        </p>
                                </NavLink>
                                
                            </a>

                            <a href="">
                                <NavLink className="NavLink" to='/*'>
                                    <p>STANDINGS</p>    
                                </NavLink>
                            </a>

                            <a href="">
                                <NavLink className="NavLink" to='/info'>
                                    <p>INFO</p>    
                                </NavLink>
                                
                            </a>

                            <a href="">
                                    <NavLink className="NavLink" to='/*'>
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
            
                
    )
}


export default NavBar