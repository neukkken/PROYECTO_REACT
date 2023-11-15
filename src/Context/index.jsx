import { createContext, useState, } from "react";


export const TeamContext = createContext();
export const PlayerContext = createContext();

export const TeamContextProvider = ({ children }) => {
    
    const [isTeamDetailOpen, setIsTeamDetailOpen] = useState(false);

    const openTeamDetail = () => setIsTeamDetailOpen(true)
    const closeTeamDetail = () => setIsTeamDetailOpen(false)


    const [teamToShow, setTeamToShow] = useState({})

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