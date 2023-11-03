import "./index.css"

const Schedule = ({date, time,team1, team2, team1icon, team2icon}) =>{
    return(
        <div className="main">
            <div>
                <p>TOMORROW</p>
                <div className="team-info-1">
                    <img src="" alt="" />
                    <p>JDG</p>
                </div>
                <div className="team-info-2">
                    <img src="https://files.tips.gg/static/image/teams/kt-rolster-lol.png z" alt="" />
                    <p>KT</p>
                </div>
                <p>3 AM</p>
            </div>
        </div>
    )
}

export default Schedule