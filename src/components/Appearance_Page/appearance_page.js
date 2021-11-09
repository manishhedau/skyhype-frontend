import {useEffect, useState} from 'react'; 
import BackgroundTile from './background_tile';
import FontTile from './font_tile';
import { useSelector, useDispatch } from 'react-redux';
import { updateStyles } from '../../stores/appearanceReducer';
import './styles/appearance_page.css';
import axios from 'axios';

const background_colors = [

    {
        background_color: "magenta"
    },

    {
        background_color: "crimson"
    },

    {
        background_color: "cyan"
    },

    {
        background_color: "turquoise"
    },

    {
        background_color: "teal"
    },

    {
        background_color: "purple"
    }
];

const fonts = ["'Andada Pro', serif", "'Ephesis', cursive", "'Noto Sans Display', sans-serif", "'Noto Sans Mono', monospace", "'Oswald', sans-serif", "'Playfair Display', serif", "'Raleway', sans-serif", "'Roboto', sans-serif"];

const AppearancePage = () => {

    const [background, setBackground] = useState(useSelector(state => state.entities.appearance.background));
    const dispatch = useDispatch();
    const [font, setFont] = useState(useSelector(state => state.entities.appearance.font));

    const getUserStyles = async () => {
        
        const userStyles = await axios.get('/dashboard/61815b950cda90d1d126f33b');
        dispatch(updateStyles(userStyles.data.styles));
        console.log(userStyles.data.styles);
    }

    useEffect(() => {
        getUserStyles();
        console.log(background, font);
    });

    const handleFont = async (e) => {

        // console.log(e.target.style["font-family"]);
        setFont(e.target.style["font-family"]);
        dispatch(updateStyles({background, font}));

        try
        {
            console.log("Data to be sent");
            const dataToSend = {styles: {background, font}}
            console.log(dataToSend);
            await axios.put('http://localhost:8080/dashboard/styles/61815b950cda90d1d126f33b', {styles: {background: background, font}})
            console.log("Post successful");
        }
        catch(err)
        {
            console.log(err);
        }
        
    }

    const handleBackground = async (e) => {
        

        // setBackground({
        //     color: e.target.style["background-color"] ? e.target.style["background-color"] : "",
        //     image: e.target.style["background-image"] ? e.target.style["background-image"] : "",
        //     gradient: e.target.style["background"] ? e.target.style["background"] : ""
        // });

        setBackground(e.target.style["background-color"]); 
        dispatch(updateStyles({background, font}));

        try
        {
            console.log("Data to be sent");
            const dataToSend = {styles: {background: background, font}}
            console.log(dataToSend);
            let result = await axios.put('http://localhost:8080/dashboard/styles/61815b950cda90d1d126f33b', {styles: {background, font}})
            console.log( result ? `Post successful\n${result.data}` : "Some error occurred");
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const [backgroundDisplay, setBackgroundVisibility] = useState("flex");
    const [fontDisplay, setFontVisibility] = useState("none");

    const showFonts = () => {
        setBackgroundVisibility("none");
        setFontVisibility("flex");

        const bgSwitchDOM = document.querySelector("#bg-switch");
        bgSwitchDOM.style.borderBottom = "none";

        const fontSwitchDOM = document.querySelector("#font-switch");
        fontSwitchDOM.style.borderBottom = "5px solid  black";
    }

    const showBackgrounds = () => {
        setBackgroundVisibility("flex");
        setFontVisibility("none");

        const bgSwitchDOM = document.querySelector("#bg-switch");
        bgSwitchDOM.style.borderBottom = "5px solid black";

        const fontSwitchDOM = document.querySelector("#font-switch");
        fontSwitchDOM.style.borderBottom = "none";
    }

    return (

        <div className="appearance-page">
            <h1 style={{fontSize:"1.5rem"}}>Appearance</h1>

            <div className="choose-section">
                    <h5 id="bg-switch" onClick={showBackgrounds}>Backgrounds</h5>
                    <h5 id="font-switch" onClick={showFonts}>Fonts</h5>
            </div>

            <div className="background-section" style={{display: backgroundDisplay}}>

                <div className="backgrounds-container">
                    <BackgroundTile handleBackground={handleBackground} text="Choose Image" inputType="color"/>
                    <BackgroundTile handleBackground={handleBackground} text="Choose Color"/>

                    {background_colors.map(bg => {
                        return <BackgroundTile handleBackground={handleBackground} key={background_colors.indexOf(bg)} bg_color={bg.background_color}/>
                    })}
                </div>

            </div>

            <div className="font-section" style={{display: fontDisplay}}>
                
                <div className="fonts-container">
                    {fonts.map(font => {
                        return <FontTile handleFont={handleFont} key={fonts.indexOf(font)} font={font}/>
                    })}
                </div>

            </div>

        </div>
    );
}

export default AppearancePage;