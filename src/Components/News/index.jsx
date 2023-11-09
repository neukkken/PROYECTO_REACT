import './index.css'

const News = (data) => {
    return(
        <div className="card-news">
            <img src={data.data.photo} alt="" />
            <div className='title'>
                <h3>
                    {data.data.name}
                </h3>
            </div>
        </div>
    )
}


export default News