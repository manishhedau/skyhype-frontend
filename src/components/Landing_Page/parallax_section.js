import './styles/parallax_section.css';

const ParallaxSection = () => {

    return (
        <div className="parallax-section" id="parallax-section" style={{position: "absolute"}}>
            <div id="parallax-part-1"></div>
            <div id="parallax-part-2"></div>
            <div id="parallax-part-3"></div>
        </div>
    );
}

export default ParallaxSection;