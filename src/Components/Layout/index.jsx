import './Layout.css' //import styles

const Layout = ({children})=>{
    return(
        <div className="container_layout justify-center items-center flex flex-wrap w-full h-full mb-28">
            {children}
        </div>
    )
}

export default Layout