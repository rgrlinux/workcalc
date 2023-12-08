import logo from '../assets/logo-1.png';
import './footer.css';

function Footer() {
    return (
        <footer>
            <h2>Projeto desenvolvido na 10ª edição do Primeiros Passos  na Programação da Trybe.</h2>
            <img src={logo} alt="logo" />
        </footer>
    )
}

export default Footer;