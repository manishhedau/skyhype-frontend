import './styles/landing_page.css';
import Slideshow from '../Slideshow/slideshow';
import LandingNavbar from './landing_navbar';
import { Link } from 'react-router-dom';
// import {useState, useEffect} from 'react';
import AppleStore from '../assets/landing_page/apple_store.png';
import PlayStore from '../assets/landing_page/play_store.png';

const LandingPage = () => {

    return (
        <div className="landing-page">
            <LandingNavbar />

            <div id="section-1">

                <div className="description">
                    <h1>All You Need Is One Link</h1>
                    <p>The one link that captures all. Your one link to infinite possibilities. A free and safe way to market your content for all to see. </p>
                    <Link to="signup"><button className="btn btn-dark">Join the Waitlist</button></Link>
                </div>

                <div className="media-section">
                </div>

            </div>

            <div id="section-2">

                <div className="description">
                    <h1>YOUR PERSONAL BILLBOARD SPOTLIGHT</h1>
                    <p>Let people see your work that goes viral, your top posts in the spotlight section. Publish your brand, in an easy way to reach your audience.</p>
                </div>

                <div className="media-section">
                </div>

            </div>

            <div id="section-3">

                <div className="description">
                    <h1>CUSTOMIZE YOUR BACKGROUND</h1>
                    <p> You are in control of your profile. Add background images of your choice so it looks more like you. Personalize your profile and choose what you want to be </p>
                </div>

                <div className="media-section">
                </div>

            </div>

            {/* <div className="cool-section" style={{ height: "100vh", width: "100vw", overflowY: "scroll", marginBottom: "200vh"}}>
                <ParallaxSection />
            </div><br/> */}

            <div className="slideshow-section">
                <Slideshow />
            </div>


            <section id="section-4" >

                <div className="description">
                    <h1>THUMBNAILS THAT MAKE YOU LOOK GRAND</h1>
                    <p>Forget one bar that just has a title. Create impactful updates, with your content on the forefront. Showcase content from all your social media platforms </p>
                </div>

                <div className="media-section">
                </div>

            </section>

            <section id="section-5">

                <div className="description">
                    <h1>SHOW OFF YOUR SQUAD</h1>
                    <p>Join and connect with creators you like. Share the space, collaborate, amplify and diversify your content. Invite your friends and grow together.</p>
                </div>

                <div className="media-section">
                </div>

            </section>

            <section id="section-6">

                <div className="description" style={{ zIndex: "5" }}>
                    <h1>And Much More....</h1>
                    <Link to="signup"><button className="btn btn-dark">Get Started</button></Link>
                </div>

                <div className="media-section">
                </div>

            </section>

            <footer>
                <div id="main-footer">
                    <h1 style={{ fontWeight: "700", cursor: "pointer" }}>SkyHype</h1>
                    <h3>Contact Us</h3>

                    <div id="legal-section">
                        <h5 style={{ width: "100%", textAlign: "center", }}>LEGAL</h5>
                        <div>Privacy</div>
                        <div>Terms</div>
                        <div>Cookie Policy</div>
                    </div>

                    <div id="company-info">
                        <div>About Us</div>
                        <div>Blog</div>
                        <div>Price</div>
                    </div>

                    <div id="social-section">
                        <h3>Social</h3>

                        <div className="landing-social-media-links">
                            <div><a href="https://twitter.com/Skyhypesocial_?s=09"><i className="fa-brands fa-twitter"></i></a></div>
                            <div><a href="https://www.facebook.com/thetracesocial/?ti=as"><i className="fa-brands fa-facebook-f"></i></a></div>
                            <div><a href="https://skyhype.in/skyhype/home.php#"><i className="fa-brands fa-youtube"></i></a></div>
                            <div><a href="https://instagram.com/skyhypesocial?utm_medium=copy_link"><i className="fa-brands fa-instagram"></i></a></div>
                            <div><a href="https://www.linkedin.com/company/skyhype/"><i className="fa-brands fa-linkedin-in"></i></a></div>
                        </div>

                    </div >
                </div >

                <hr></hr>

                <div id="download-section">
                    <h1>Launching soon on</h1>
                    <a href="#"><img src={PlayStore} alt="Play Store" /></a>
                    <a href="#"><img src={AppleStore} alt="Apple Store" /></a>
                </div>
            </footer >


        </div >
    );
}

export default LandingPage;