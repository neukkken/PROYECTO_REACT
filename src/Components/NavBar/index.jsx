import "./index.css"

const NavBar = () => {
    return(

        <header className="bg-negro-lol">
            <nav className="mx-5 h-20 flex justify-between items-center">
                
                <div className="flex items-center gap-5">
                    <div>
                        <img src="https://assets.website-files.com/64c8ba1e1ec040c990d68596/65048ace6192a38a6214b6a9_002_RG_2021_FULL_LOCKUP_OFFWHITE.png" alt="" className="w-40"/>
                    </div>

                    <div className="text-white text-lg font-semibold h-20 items-center tags-container">
                        <a href="">
                            <p>SCHEDULE</p>
                            <ul></ul>
                        </a>

                        <a href="">
                            <p>VODS</p>
                            <ul></ul>
                        </a>

                        <a href="">
                            <p>STANDINGS</p>
                            <ul></ul>
                        </a>

                        <a href="">
                            <p>INFO</p>
                            <ul></ul>
                        </a>

                        <a href="">
                            <p>PICK'EM</p>
                            <ul></ul>
                        </a>
                    </div>
                </div>

                <div>
                    <button className="text-black font-semibold bg-azul-lol-opaco px-4 py-1 rounded-xl">LOGIN</button>
                </div>

            </nav>
        </header>
    )
}


export default NavBar