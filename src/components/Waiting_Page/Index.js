import React from 'react'
import "./waiting_page.css";

import check from "../assets/check.png"

function WaitingPage() {
    return (
        <div className="waiting">
            <div className="logo">
                <h1>Skyhype</h1>
            </div>
            <div className="waiting__page">
                <div className="waiting__list">
                    <div className="waiting__list__text">
                        <img src={check} alt="right tick pic" />
                        <h4>Application Submitted</h4>
                        <h5>follow us on Instagram <a href="https://instagram.com/skyhypesocial?utm_medium=copy_link">@skyhype</a> to verify your account</h5>
                    </div>
                </div>
                <div className="waiting__image">
                    <div className="waiting__list__image">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingPage
