import "./signup_page.css";

import { Formik, Form } from 'formik';
// import { makeStyles } from '@material-ui/core/styles';
import * as yup from "yup";

import { sendSignup } from "../../services/apiEndpoint";
import Textfield from "./TextField";
import Phoneinput from "./PhoneInput";
import FormikSelect from "./Selector";
// import { InputAdornment } from "@mui/material";

import { useHistory } from "react-router-dom";

import { useState } from "react";

// import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { Link } from "react-router-dom";

const validationSchema = yup.object().shape({
    fullname: yup.string().required().min(1).max(50).label("Full Name"),
    email: yup.string().required().min(10).max(50).email().label("Email"),
    phone: yup.string().required().label("Phone Number"),
    instagram: yup.string().required().nullable().label("Instagram"),
    user_type: yup.string().min(1, "Please select at least one value.").required().label("User Type")
});


// const useStyles = makeStyles((theme) => ({
//     formWrapper: {
//         marginTop: theme.spacing(5),
//         marginBottom: theme.spacing(8),
//     },
// }));


const UserType = [
    {
        label: "Creator",
        value: "creator"
    },
    {
        label: "Brand",
        value: "brand"
    },
    {
        label: "Agency Manager",
        value: "agency_manager"
    },
];

const Signup = () => {
    const [error, setError] = useState("");
    // const [res, setRes] = useState("");
    const [isClick, setIsClick] = useState(false);
    const history = useHistory();

    const handleSignupApi = async (sigupData) => {
        try {
            // console.log("inside the try block");
            await sendSignup(sigupData);
            history.push("/waiting-page")
            // setRes(data.data);
        }
        catch (error) {
            // console.log("inside the catch block");
            // console.log("error: ", error)
            if (error.response && error.response.status === 400) {
                setError(error.response.data)
            }
        }
    }

    const handleSubmit = (data) => {
        setError("")
        // console.log(data);
        handleSignupApi(data);
    }

    // useEffect(() => {
    //     setInterval(() => {
    //         // setError("");
    //         // window.location = "/signup";
    //         setRes("");
    //     }, 10000);
    // }, [res])

    return (
        <>
            {/* {error && <p>{error}</p>} */}
            <div className="logo">
                <h1>Skyhype</h1>
            </div>
            <div className="sign-page">
                <div className="sign-form">

                    <div className="sign-form-content">
                        <div className="header__text">
                            <h1>The new
                                begining to
                                share, Starts
                                Here
                            </h1>
                            {/* <h4>lets share with friends</h4> */}
                        </div>

                        {error &&
                            <div className="error">
                                <p>{error}</p>
                            </div>
                        }
                        <Formik
                            initialValues={{
                                fullname: "",
                                email: "",
                                phone: "",
                                instagram: "",
                                user_type: ""
                            }}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}
                        >
                            {() => (
                                <>
                                    <Form className="signup__form">
                                        <Textfield
                                            name="fullname"
                                            variant="outlined"
                                            label="First Name"
                                            className="form__field"
                                            inputProps={{ maxLength: 50 }}
                                            isClick={isClick}
                                        />
                                        <Textfield
                                            name="email"
                                            variant="outlined"
                                            label="Email"
                                            type="email"
                                            className="form__field"
                                            inputProps={{ maxLength: 50 }}
                                            isClick={isClick}
                                        />
                                        <Phoneinput name="phone" isClick={isClick} />

                                        <Textfield
                                            name="instagram"
                                            variant="outlined"
                                            label="Instagram Username"
                                            className="form__field"
                                            placeholder="@Username"
                                            inputProps={{ maxLength: 50 }}
                                            mt="1rem"
                                            isClick={isClick}
                                        />

                                        <FormikSelect
                                            name="user_type"
                                            items={UserType}
                                            label="User Type"
                                            required
                                            isClick={isClick}
                                        />
                                        <button className="btn btn-block btn-dark" style={{ width: "50%" }} type="submit" onClick={() => setIsClick(true)}>Submit</button>
                                    </Form>
                                </>
                            )}
                        </Formik>
                        <div className="bottom__text">
                            <h5>Already Have an Account?</h5>
                            <Link to="/login">
                                <h5>Login</h5>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="signup-image">
                    <div className="wallpaper-image1">
                        {/* <img src="../assets/login_page/wallpaper.png" /> */}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Signup;