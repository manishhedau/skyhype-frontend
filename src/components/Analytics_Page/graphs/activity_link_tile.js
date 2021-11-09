import {useState} from 'react';

const ActivityLinkTile = (props) => {

    const {presentLineColor,key,elem} = props;

    const [selected, setSelected] = useState(false);

    const toggleSelection = () => {
        setSelected(!selected);
    }

    return (
        <div key={key} className="activity-stats-tile" onClick={toggleSelection} style={{backgroundColor: selected ? "lightblue" : "white"}}>

            <div id="activity-description">
                <div id="activity-line-color" style={{backgroundColor: presentLineColor}}></div>
                <img id="activity-image" src={elem.image}/>
                <p style={{fontWeight:500, fontSize: "1.2rem"}} id="activity-title">{elem.title}</p>
            </div>

            <div style={{fontWeight:700}} id="activity-views">{elem.views}</div>
        </div>
    );
}

export default ActivityLinkTile;