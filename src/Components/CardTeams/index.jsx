
import "./CardTeams.css"

const CardTeams = ({name, league, logo}) =>{
    return(
            <div className="Card">
                <img src={logo} alt="" />
                <div className="Desc">
                    <h1>{name}</h1>
                    <p>{league}</p>
                </div>
            </div>
            
    )
}

export default CardTeams