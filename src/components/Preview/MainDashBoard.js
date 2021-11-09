import React from 'react'
import EditProfile from '../sections/EditProfile'
import Groups from '../sections/Groups';

import "./styles/mainDashboard.css";

function MainDashBoard() {
    return (
        <div className="main-dashboard">
            <EditProfile />
            <Groups />
        </div>
    )
}

export default MainDashBoard
