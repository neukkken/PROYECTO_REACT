import { useContext } from "react"; //import to use the context
import { TeamContext } from "../../Context"; //import the team context to use inside the Detail
import './TeamDetail.css' //import styles

const TeamDetail = () => {
    const context = useContext(TeamContext) //fetch the TeamContext

    return (

            <aside className={`${context.isTeamDetailOpen ? 'flex' : 'hidden'} w-1/4 h-auto z-50 team-detail flex-col left-0 top-1/4 border border-black rounded-lg fixed bg-negro-lol text-white p-5`}>
                <div className="flex items-end justify-end mb-5 mx-5">
                    <div className="close-button" onClick={() => context.closeTeamDetail()}>X</div>
                </div>
                <div className="flex flex-col items-center">
                    <figure className="w-full h-auto flex justify-center">
                        <img className="w-11/12 h-auto rounded-3xl mx-2 p-10" src={context.teamToShow.logo}/>
                    </figure>
                    <div className="flex flex-col px-6 my-5 justify-end">
                    <span className="text-3xl">{context.teamToShow.name}</span>
                    <span className="text-xl">{context.teamToShow.league}</span>
                        
                    </div>
                </div>

            </aside>
    )



}


export default TeamDetail;