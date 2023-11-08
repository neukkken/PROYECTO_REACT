import "./index.css"
import CardTeams from "../../Components/CardTeams"
import Layout from "../../Components/Layout"

const Teams = () => {
    return(
        
        
        <Layout>
                <CardTeams
                    name = 'T1'
                    league= 'LCK - Corea'
                    logo= 'https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1698742459630_T1_Color_v2.png'
                >
                </CardTeams>

                <CardTeams
                    name = 'Estral'
                    league= 'Liga Latinoamérica'
                    logo= 'https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FEST.png'
                >
                </CardTeams>

                <CardTeams
                    name = 'GEN.G'
                    league= 'LCK - Corea'
                    logo= 'https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1655210113163_GenG_logo_200407-05.png'
                >
                </CardTeams>

                <CardTeams
                    name = 'G2 Esports'
                    league= 'LEC - Europe'
                    logo= 'https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FG2-FullonDark.png'
                >
                </CardTeams>

                <CardTeams
                    name = 'JDG'
                    league= 'LPL - China'
                    logo= 'https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1627457924722_29.png'
                >
                </CardTeams>

                <CardTeams
                    name = 'Dplus Kia'
                    league= 'LCK - Corea'
                    logo= 'https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1673260049703_DPlusKIALOGO11.png'
                >
                </CardTeams>

                <CardTeams
                    name = 'MAD Lions'
                    league= 'LEC - Europe'
                    logo= 'https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819614211_mad-2021-worlds.png'
                >
                </CardTeams>

                <CardTeams
                    name = 'Fnatic'
                    league= 'LEC - Europe'
                    logo= 'https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819669150_fnc-2021-worlds.png'
                >
                </CardTeams>
        </Layout>
        )
}

export default Teams