// import { useDispatch} from "react-redux";
// import { addAcitivityLink } from "../../stores/activityLinksReducer";

const AddLinkButton = (props) => {
    const { addLink } = props;

    return <button onClick={addLink} className="btn btn-primary btn-block"><h5>Add New Link</h5></button>
}

export default AddLinkButton;