import { useContext } from "react"; //import to use the context
import { TeamContext } from "../../Context"; //import the team context to use inside the Detail
import './TeamDetail.css' //import styles

const TeamDetail = () => {
    const context = useContext(TeamContext) //fetch the TeamContext

    return (

            <aside className={`${context.isTeamDetailOpen ? 'flex' : 'hidden'} w-2/3 h-auto z-50 team-detail flex-col teamdetail_tal top-1/3 border rounded-lg fixed text-white p-5`}>
                <div className="flex items-end justify-end mb-5 mx-5">
                    <div className="close-button" onClick={() => context.closeTeamDetail()}>X</div>
                </div>
                <div className="flex flex-row items-center">
                    <figure className="w-2/4 h-auto flex justify-center">
                        <img className="w-1/3 h-auto rounded-3xl  p-1" src={context.teamToShow.logo}/>
                    </figure>
                    <div className="flex flex-col px-6 my-5 justify-end">
                    <span className="text-3xl font-bold">{context.teamToShow.name}</span>
                    <span className="text-xs">{context.teamToShow.league}</span>
                    </div>
                </div>

            </aside>
    )

}


export default TeamDetail;