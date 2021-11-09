import React, { useState } from 'react'
import { Button, MenuItem, Select } from '@mui/material'
import { useDispatch, useSelector, } from "react-redux";
import { TextField } from '@material-ui/core';

import { changeFullName, changeDescription, changeDesignation, changeProfileImage, changeCategory } from "../../../stores/editprofileReducer";
import { sendEditProfile } from "../../../services/apiEndpoint";
import Avtar from "../../assets/avtar.jpg";
import Card from '../../Card';
import Image from '../../Image';

import "./EditProfile.css";
import Selector from './Selector';

export default function EditProfile() {
    const [isChanged, setIsChanged] = useState(false);

    const editprofile = useSelector(state => state.entities.editProfile.editprofile);
    const dispatch = useDispatch();

    const handleFullNameChange = (event) => {
        setIsChanged(true);
        dispatch(changeFullName({ fullname: event.target.value }))
    }

    const handleDesignationChange = (event) => {
        setIsChanged(true);
        console.log(event.target.value);
        dispatch(changeDesignation({ designation: event.target.value }))

    }

    const handleDesciptionChange = (event) => {
        setIsChanged(true);
        console.log(event.target.value);
        dispatch(changeDescription({ description: event.target.value }))
    }

    const handleCategoryChange = (value) => {
        setIsChanged(true);
        dispatch(changeCategory({ category: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsChanged(false);

        const data = {
            fullname: editprofile.fullname,
            username: editprofile.username,
            category: editprofile.category,
            description: editprofile.description,
            designation: editprofile.designation,
        }
        sendEditProfile(data, "61815b950cda90d1d126f33b");
    }



    /* <div className="buttonContainer">
                    <Button variant="contained" color="primary" style={{ marginRight: "1rem" }}>Pick an Image</Button>
                    <Button variant="outlined" color="primary">Remove</Button>
                </div> */




    return (
        <Card>

            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="form__row">
                    <div className="form__first__row">
                        <div className="imageContainer">
                            <div className="plus_icon"><i class="fas fa-plus"></i></div>
                            <Image src={Avtar} alt="person" sx={{ width: "5rem", height: "5rem" }} />
                        </div>
                        <div className="first__line">
                            <div className="input_field_container">
                                <TextField
                                    name="username"
                                    variant="outlined"
                                    label="First Name"
                                    fullWidth
                                    className="form__field"
                                    style={{ marginRight: "1rem" }}
                                    onChange={handleFullNameChange}
                                    value={editprofile.fullname}
                                    inputProps={{ maxLength: 50 }}
                                />
                                <TextField
                                    name="username"
                                    variant="outlined"
                                    label="Username"
                                    fullWidth
                                    className="form__field"
                                    disabled
                                    value={editprofile.username}
                                    inputProps={{ maxLength: 50 }}
                                />
                            </div>
                            <div className="input_field_container">
                                <Selector value={editprofile.category} onChange={handleCategoryChange} />
                                <TextField
                                    name="designation"
                                    variant="outlined"
                                    label="Designation"
                                    fullWidth
                                    className="form__field"
                                    onChange={handleDesignationChange}
                                    value={editprofile.designation}
                                    inputProps={{ maxLength: 50 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form__row">
                    <TextField
                        name="description"
                        variant="outlined"
                        label="Desciption"
                        fullWidth
                        multiline
                        rows={4}
                        onChange={handleDesciptionChange}
                        value={editprofile.description}
                        inputProps={{ maxLength: 250 }}
                    />
                    {/* <TextField name="description" variant="outlined" label="Desciption" fullWidth multiline /> */}
                </div>

                <Button variant="contained" color="primary" style={{ marginRight: "1rem" }} type="submit" disabled={!isChanged}>Save</Button>
            </form>
        </Card >
    )
}
