import { Link } from 'react-router-dom';
import './styles/landing_navbar.css';

const HamburgerMenu = (props) => {
    const { isOpen, handleToggle } = props;

    // <i className="fas fa-times"></i>

    if (isOpen) {
        return (
            <div className="hamburger-menu">

                <div className="nav-links">

                    <i className="fas fa-times" id="close-menu" onClick={handleToggle}></i>

                    <a href="https://skyhype.in/wordpress/index.php/blog/" target="_blank" rel="noreferrer"><div>Blog</div></a>
                    <Link to="/login"><div>Login</div></Link>
                    <Link to="/signup"><div>Signup</div></Link>

                </div>

            </div>
        );
    }

    else {
        return (
            <div onClick={handleToggle} className="hamburger-menu" id="open-menu">
                <i className="fas fa-bars"></i>
            </div>
        );
    }
}

export default HamburgerMenu;