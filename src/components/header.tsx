import logo from '../assets/logotrybe.png';
import ppp from '../assets/logo-ppp.png';
import './header.css';


function Header() {
    return (
        <header>
            <div className='container'>
                <img src={logo} alt="logo" />
                <div className="header__brand">
                    <div className="ppp-logo">
                        <img src={ppp} alt="ppp logo" />
                    </div>
                    <span />
                    <div className="header__desc">
                        <h1>Calculadora Freelancer</h1>
                        <p>Aprenda como precificar o seu trabalho como freelancer!</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;