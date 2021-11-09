import './styles/profile_page_activity_tile.css';

const ActivityTile = (props) => {
    const { thumbnail, title, onClick } = props;

    return (
        <div className="activity-tile" onClick={onClick}>
            <img src={thumbnail} alt={title} />
            <p>{title}</p>
        </div>
    );
}
export default ActivityTile;