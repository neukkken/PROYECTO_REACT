import { createContext, useState, } from "react"; //import context to create and use it


export const TeamContext = createContext(); //create context to CardTeams
export const PlayerContext = createContext(); //create context to CardPlayers

export const TeamContextProvider = ({ children }) => { //create of all the necesarry features to use
    
    const [isTeamDetailOpen, setIsTeamDetailOpen] = useState(false) //create of context to know if TeamDetail is open or not

    const openTeamDetail = () => setIsTeamDetailOpen(true) 
    const closeTeamDetail = () => setIsTeamDetailOpen(false) //giving a default value


    const [teamToShow, setTeamToShow] = useState({}) //create the state to know which team have to be show

    return (
        <TeamContext.Provider value={{
            openTeamDetail,
            closeTeamDetail,
            isTeamDetailOpen,
            teamToShow,
            setTeamToShow

        }}>
            {children}
        </TeamContext.Provider>
    )
}