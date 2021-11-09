import './navbar.css';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (

        <div className="navbar">

            <Tooltip title={<h5 className="nav-tooltip" style={{ padding: "1em" }}>Dashboard</h5>} placement="left-start">

                <Link to="/dashboard/user/:userId">
                    <i className="nav-link fas fa-desktop"></i>
                </Link>

            </Tooltip>

            <Tooltip title={<h5 className="nav-tooltip" style={{ padding: "1em" }}>Add Social Media Links</h5>} placement="left-start">

                <Link to="/dashboard/user/update-social-links/:userId">
                    <i className="nav-link fas fa-link"></i>
                </Link>

            </Tooltip>

            <Tooltip title={<h5 className="nav-tooltip" style={{ padding: "1em" }}>Add Activity Links</h5>} placement="left-start">

                <Link to="/dashboard/user/update-activity-links/:userId">
                    <i className="nav-link fas fa-photo-video"></i>
                </Link>

            </Tooltip>

            <Tooltip title={<h5 className="nav-tooltip" style={{ padding: "1em" }}>Analytics</h5>} placement="left-start">

                <Link to="/dashboard/user/analytics/:userId">
                    <i className="nav-link fas fa-chart-pie"></i>
                </Link>

            </Tooltip>

            <Tooltip title={<h5 className="nav-tooltip" style={{ padding: "1em" }}>Appearance</h5>} placement="left-start">

                <Link to="/dashboard/user/styles/:userId">
                    <i className="nav-link fas fa-sliders-h"></i>
                </Link>

            </Tooltip>

            <Tooltip title={<h5 className="nav-tooltip" style={{ padding: "1em" }}>Settings</h5>} placement="left-start">

                <Link to="/dashboard/user/settings/:userId">
                    <i className="nav-link fas fa-cog"></i>
                </Link>

            </Tooltip>

            <Tooltip title={<h5 className="nav-tooltip" style={{ padding: "1em" }}>Support</h5>} placement="left-start">

                <Link to="/dashboard/user/support/:userId">
                    <i className="nav-link fas fa-question"></i>
                </Link>

            </Tooltip>

        </div>
    );
}

export default Navbar;