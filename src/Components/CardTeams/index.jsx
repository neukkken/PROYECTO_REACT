import { useContext } from "react"; //import context to use
import { TeamContext } from "../../Context"; //context called for CardTeams component


import "./CardTeams.css" //import styles

const CardTeams = (data) => {
    
    const context = useContext(TeamContext) //create context

    const showTeam = (TeamDetail) => {
        context.openTeamDetail()
        context.setTeamToShow(TeamDetail)
    } //create context to use in the TeamDetail Card

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