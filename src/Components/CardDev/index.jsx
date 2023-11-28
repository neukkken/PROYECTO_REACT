import './index.css' //import styles

const CardDev = ({name, rol, photo}) => {
    return (

        <div className="dev_card">
            <div className="info_dev">
                <p className="name">{name}</p>
                <p className="rol">{rol}</p>
            </div>
            <img src={photo} alt="" />
        </div>
        
    )
}

export default CardDev