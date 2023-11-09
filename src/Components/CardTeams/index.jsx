
import "./CardTeams.css"

const CardTeams = (data) =>{
    return(
            <div className="Card">
                <img src={data.data.logo} alt="" />
                <div className="Desc">
                    <h1>{data.data.name}</h1>
                    <p>{data.data.league}</p>
                </div>
            </div>
            
    )
}

export default CardTeams