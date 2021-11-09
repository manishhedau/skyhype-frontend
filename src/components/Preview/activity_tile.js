import './styles/activity_tile.css';

const ActivityTile = (props) => 
{
    const {thumbnail, title} = props;

    return (
        <div className="activity-tile">
            <img src={thumbnail} alt={title}/>
            <p>{title}</p>
        </div>
    );
}
export default ActivityTile;