import './footer.css'

const Footer = () =>{
    return(
        <footer>
            <div className="footer_left_side">
                <img src="https://am-a.akamaihd.net/image?resize=114:32&f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Ffooter%2Friot-logo.png" alt=""/>
                <img src="https://am-a.akamaihd.net/image?resize=83:32&f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Ffooter%2Flol.png" alt=""/>
            </div>

            <div className='footer_right_side'>
                <p className='footer_text_rights'>
                    &copy; 2023 Walter White. Todos los derechos reservados.
                </p>
                <p className='footer_links'>
                    <a href="" target='_blank'>
                        Terminos de uso
                    </a>
                    <a href="" target='_blank'>
                        Aviso de privacidad
                    </a>
                    <a href="https://github.com/neukkken/PROYECTO_REACT.git" target='_blank'>
                        Github Repository
                    </a>
                    <a href="" target='_blank'>
                        Preferencias de Cookies
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer