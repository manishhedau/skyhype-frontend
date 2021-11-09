import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburger-menu';
import './styles/landing_navbar.css';

const LandingNavbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="landing-navbar" id="landing-navbar">
            <h1>SkyHype</h1>

            <div className="links">
                <div id="blog-link"><a href="https://skyhype.in/wordpress/index.php/blog/" target="_blank">Blog</a></div>
                <Link to="/login"><div>Login</div></Link>
                <Link to="/signup"><div id="signup-button">Signup</div></Link>
            </div>

            <HamburgerMenu isOpen={isOpen} handleToggle={toggleMenu} />
        </div>
    );
}

export default LandingNavbar;