import React from 'react'
import EditProfile from './sections/EditProfile'
import Groups from './sections/Groups'
import Card from "../Card";


import ProfileLinkSection from '../Profile_Link_Section/profile_link_section';


function Profile() {
    return (
        // <section className="Profile-section">
        <Card>
            <ProfileLinkSection />
            <EditProfile />
            <Groups />
        </Card>
        // </section>
    )
}

export default Profile
