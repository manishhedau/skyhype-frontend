import './styles/background_tile.css';

const BackgroundTile = (props) => {

    const {text,bg_color, bg_image, inputType,handleBackground} = props;


    if(bg_color && bg_image)
    {
        return (
            <div onClick={handleBackground} className="background-tile" style={{background: `url("${bg_image}")`}}></div>
        );
    }

    else if(bg_color && !bg_image)
    {
        return (
            <div onClick={handleBackground} className="background-tile" style={{backgroundColor: bg_color}}>
                <p>{text}</p> 
            </div>
        );
    }

    else if(!bg_color && bg_image)
    {
        return (
            <div onClick={handleBackground} className="background-tile" style={{background: `url("${bg_image}")`}}></div>
        );
    }

    else if(inputType)
    {
        return (
            <div onClick={handleBackground} className="background-tile" style={{background: "linear-gradient(to bottom right, red, blue)", color: "snow"}}></div>
        );
    }

    else
    {
        return (
            <div onClick={handleBackground} className="background-tile" style={{background: "linear-gradient(to bottom right, red, blue)", color: "snow"}}></div>
        );
    }
}

export default BackgroundTile;