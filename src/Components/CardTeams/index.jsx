import { useContext } from "react";
import { TeamContext } from "../../Context";


import "./CardTeams.css"

const CardTeams = (data) => {
    
    const context = useContext(TeamContext)

    const showTeam = (TeamDetail) => {
        context.openTeamDetail()
        context.setTeamToShow(TeamDetail)
    }

    return(
        <div className="Card" onClick={() => showTeam(data.data)}>
                <img src={data.data.logo} alt="" />
                <div className="Desc">
                    <h1>{data.data.name}</h1>
                    <p>{data.data.league}</p>
                </div>
            </div>
    )
}

export default CardTeams