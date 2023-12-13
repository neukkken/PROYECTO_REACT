import './index.css' //import styles

const News = (data) => {
    return (
        <div className="card-news">
            <img src={data.data.img} alt="" />
            <div className='title'>
                <h3>
                    {data.data.title}
                </h3>
            </div>
        </div>
    )
}


export default News