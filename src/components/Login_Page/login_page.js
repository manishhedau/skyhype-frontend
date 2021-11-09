import './login_page.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import validator from 'validator';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';
import { useState, useEffect } from 'react';

const LoginPage = () => {

    const [error, setError] = useState("");
    const history = useHistory();
    // const [number, setNumber] = useState("");

    // const handleChange = () => {
    //     const inputDOM = document.getElementById("number-input");
    //     console.log(inputDOM.innerText);
    //     setNumber(inputDOM.innerText);
    //     // setNumber(inputDOM.innerHTML);
    // }

    const validateNumber = async () => {
        const validation = await axios.post("http://localhost:8080/login/");
        console.log(validation);

        return validation ? true : false;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const inputDOM = document.getElementById("number-input");
        let currentNumber = inputDOM.value

        currentNumber = currentNumber.split('').filter(num => num !== " ").slice(1, currentNumber.length - 1).join('');
        console.log(currentNumber);

        if (inputDOM.value === "") {
            setError("Please Enter a Valid Number");
            console.log(error);
        }

        else if (!validator.isMobilePhone(currentNumber) || currentNumber.length != 10) {
            setError("Invalid Mobile Number");
            console.log(error);
        }

        else {
            if (validateNumber()) {
                setError("Successful");
                history.push('/dashboard/user/:userId');
            }

            else {
                setError("User Does not Exist");
            }
        }
    }

    return (
        <div className="login-page">

            <div className="login-form">

                <div className="form-content">

                    <h1>Welcome Back</h1>
                    <h4>Login using Mobile Number</h4>

                    <form style={{ height: "60%", width: "70%" }}>

                        <div className="form-group">
                            <IntlTelInput preferredCountries={['in']} format={true} onlyCountries={["in"]} placeholder="Mobile Number" fieldId="number-input" className="form-control" /><br />
                            <small className="form-text text-muted">You will receive and OTP on your number</small>
                        </div>

                        <p>New to SkyHype?<Link to="/signup"> Create an account </Link></p>

                        <div id="error-message">{error}</div>

                        <button className="btn btn-block btn-dark" onClick={handleSubmit} style={{ width: "auto", display: "flex" }}>Get OTP</button>


                    </form>

                </div>

            </div>

            <div className="wallpaper-image">
                <h1>SkyHype</h1>
            </div>

        </div>
    );
}

export default LoginPage;