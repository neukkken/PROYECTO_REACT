import { useContext } from "react"; //import to use the context
import { TeamContext } from "../../Context"; //import the team context to use inside the Detail
import './TeamDetail.css' //import styles

const TeamDetail = () => {
    const context = useContext(TeamContext) //fetch the TeamContext

    return (

            <aside className={`${context.isTeamDetailOpen ? 'flex' : 'hidden'} w-10/12 h-11/12 bottom-20 justify-center ite team-detail flex-col teamdetail_tal  border rounded-lg fixed text-white p-5`}>
                <div className="flex items-end justify-end mb-5 mx-5">
                    <div className="close-button" onClick={() => context.closeTeamDetail()}>X</div>
                </div>
                <div className="flex flex-row items-center">
                    <figure className="w-7/12 h-auto flex justify-center">
                        <img className="h-auto rounded-3xl  p-1" src={context.teamToShow.logo}/>
                    </figure>
                    <div className="w-2/3 flex flex-col px-6 my-5 justify-end">
                    <span className="text-3xl font-bold">{context.teamToShow.name}</span>
                    <span className="text-xs mb-4">{context.teamToShow.league}</span>
                    <span className="text-xs">Description: {context.teamToShow.description}</span>
                    </div>
                </div>
                <a href="https://en.wikipedia.org/" className="text-2xl opacity-10 text-end" target="_blank">information from wikipedia</a> 

            </aside>
    )
}


export default TeamDetail;