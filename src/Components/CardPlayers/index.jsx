import './index.css' //import styles

const CardPlayers = (data) => {
    
    return(

        <div className='card-player'>
            <div className='rol-nick_name bg'>
                <div className='nick_name-name'>
                    <div className='nick_name'>
                        {data.data.nick_name}
                    </div>
                    <div className='name'>
                            {data.data.name}
                    </div>
                    <div className='name'>
                        {data.data.age} YEARS OLD
                    </div>
                </div>
                    <img className='rol-img' src={data.data.rol_img} alt="" />
            </div>
            <img className='player-photo' src={data.data.photo} alt="" />
            {/* <img className='team-logo' src={team} alt="" /> */}
        </div>

    )
}

export default CardPlayers