import React, { useState } from 'react'
// import {Link} from "react-router-dom"
import Card from "../../Card";
import Image from '../../Image';
import Avtar from "../../assets/avtar.jpg";
import "./Groups.css";

const data = [
    {
        id: 1,
        name: "Username 1",
    },
    {
        id: 2,
        name: "Username 2",
    },
    {
        id: 3,
        name: "Username 2",
    },
    {
        id: 4,
        name: "Username 3",
    },
    {
        id: 5,
        name: "Username 4",
    },
    {
        id: 6,
        name: "Username 5",
    },
    {
        id: 7,
        name: "Username 6",
    },
    {
        id: 8,
        name: "Username 7",
    },
]

function Groups() {
    const [persons] = useState(data);

    return (
        <Card>
            <div className="groups_container">
                <div className="groups__heading">
                    <h3>Group</h3>
                </div>
                <div className="groups__main">
                    {
                        persons.map((person) => (
                            <div className="group__person" key={person.id}>
                                <Image src={Avtar} alt="person" sx={{ width: "3rem", height: "3rem" }} />
                                <a href={`/${person.id}`} >
                                    {person.name}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>

        </Card >
    )
}

export default Groups
