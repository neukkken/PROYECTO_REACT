import "./index.css"

const Schedule = ({date, time,team1, team2, team1icon, team2icon}) =>{
    return(
        <div className="main">
            <div className="container">
                <p className="date">TOMORROW</p>
                <div className="team-info">
                    <img src="https://ggscore.com/media/logo/t11070.png?47" alt="" />
                    <p>JDG</p>
                </div>
                <div className="team-info">
                    <img src="https://ggscore.com/media/logo/t3946.png?97" alt="" />
                    <p>KT</p>
                </div>
                <p>3 AM</p>
            </div>

            <div className="container">
                <p className="date">TOMORROW</p>
                <div className="team-info">
                    <img src="https://ggscore.com/media/logo/t11070.png?47" alt="" />
                    <p>JDG</p>
                </div>
                <div className="team-info">
                    <img src="https://ggscore.com/media/logo/t3946.png?97" alt="" />
                    <p>KT</p>
                </div>
                <p>3 AM</p>
            </div>

            <div className="container">
                <p className="date">TOMORROW</p>
                <div className="team-info">
                    <img src="https://ggscore.com/media/logo/t11070.png?47" alt="" />
                    <p>JDG</p>
                </div>
                <div className="team-info">
                    <img src="https://ggscore.com/media/logo/t3946.png?97" alt="" />
                    <p>KT</p>
                </div>
                <p>3 AM</p>
            </div>

            

        </div>
    )
}

export default Schedule