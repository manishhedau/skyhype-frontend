import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useField, useFormikContext } from 'formik';
// import { borderColor } from '@mui/system';

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

function Phoneinput({ name, isClick }) {

    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    // console.log()

    const handleChange = (evt, country, e, formatetedValue) => {

        // console.log("evt :", evt)
        // console.log("e :", e)
        // console.log("country :", country)
        // console.log("formatted :", formatetedValue)
        const str = evt.replace(country.dialCode, "");
        // console.log("str :", str);
        setFieldValue(name, str);
    };

    // const configTextfield = {
    //     ...field,
    //     // ...otherProps,
    //     fullWidth: true,
    //     variant: 'outlined'
    // };

    // if (meta && meta.touched && meta.error) {
    //     configTextfield.error = true;
    //     configTextfield.helperText = meta.error;
    // }


    return (
        <div className={`phone__input ${meta.touched && meta.error && isClick ? "focus" : ""}`}>
            <PhoneInput
                country={'in'}
                name="phone"
                value=""
                // onBlur={() => setFieldValue(name)}
                // onChange={phone => console.log(phone)}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                // {...configTextfield}
                inputProps={{
                    name: name,
                    required: true,
                    minLength: 13,
                    autoFocus: false
                }}
            />

            {/* <IntlTelInput
                preferredCountries={['in']}
                placeholder="Mobile Number"
                className="form-control"
                onPhoneNumberChange={handleChange()}
            /> */}
            {/* <br /> */}
            {/* <input type="text" name={name} onChange={handleChange} /> */}
            {meta.touched && meta.error ? (
                <p className="error">
                    {meta.error}
                </p>
            ) : null}
        </div>
    )
}

export default Phoneinput
