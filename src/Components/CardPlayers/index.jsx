import './index.css'

const CardPlayers = ({name, nick_name, rol_icon, photo, team}) =>{
    return(

        <div className='card-player'>
            <div className='rol-nick_name bg'>
                <img className='rol-img' src={rol_icon} alt="" />
                <div className='nick_name-name'>
                    <div className='nick_name'>
                        {nick_name}
                    </div>
                    <div className='name'>
                            {name}
                    </div>
                </div>
            </div>
            <img className='player-photo' src={photo} alt="" />
        </div>

    )
}

export default CardPlayers