import Slider from 'react-animated-slider';
import './slideshow.css';
import 'react-animated-slider/build/horizontal.css';

const Slideshow = () => {
    
    return (
        <div className="slideshow-container">
            <Slider autoplay={1000} touchDisabled={true}>
                <div className="slide" id="slide-1"></div>
                <div className="slide" id="slide-2"></div>
                <div className="slide" id="slide-3"></div>
            </Slider>
        </div>
    );

}

export default Slideshow;