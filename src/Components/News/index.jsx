import './index.css'

const News = ({title, img}) => {
    return(
        <div className="card-news">
            <img src={img} alt="" />
            <div className='title'>
                <h3>
                    {title}
                </h3>
            </div>
        </div>
    )
}


export default News