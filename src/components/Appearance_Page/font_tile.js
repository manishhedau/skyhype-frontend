import './styles/font_tile.css';

const FontTile = (props) => {

    const {font, handleFont} = props;

    if(font)
    {
        return (
            <div onClick={handleFont} className="font-tile" style={{fontFamily: font}}><p onClick={handleFont} style={{fontFamily: font}}>SkyHype</p></div>
        );
    }

    return <div onClick={handleFont} className="font-tile" style={{fontFamily: font}}><p onClick={handleFont} style={{fontFamily: font}}>SkyHype</p></div>;
}

export default FontTile;