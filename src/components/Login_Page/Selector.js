import React, { ReactNode } from "react";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useField } from 'formik';

import "./FormikSelect.css";

// const configTextfield = {
//     ...field,
//     ...otherProps,
//     fullWidth: true,
//     variant: 'outlined'
// };



const MaterialUISelectField = ({
    errorString,
    label,
    children,
    value,
    name,
    onChange,
    onBlur,
    isClick,
    ...otherProps
}) => {

    const [field, mata] = useField(name);
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    };

    if ((mata && mata.touched && mata.error && mata.value) || (isClick && !mata.value)) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }
    return (
        <FormControl fullWidth variant="outlined"
            // style={{ width: 500 }}
            name={name}
            {...configTextfield}
        >
            <InputLabel>{label}</InputLabel>
            <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
                {children}
            </Select>
            {/* <FormHelperText>{errorString}</FormHelperText> */}
            <p style={{ color: "#f44336", fontSize: "15px", textAlign: "start", marginLeft: "10px" }}> {(isClick && !mata.value) && <ErrorMessage name={name} />}</p>
        </FormControl>
    );
};

const FormikSelect = ({ name, items, label, isClick, required = true, ...otherProps }) => {


    return (
        <div className="FormikSelect">
            <Field
                name={name}
                as={MaterialUISelectField}
                label={label}
                isClick={isClick}
                // errorString={<ErrorMessage name={name} style={{ color: "red" }} />}
                {...otherProps}
            >
                {items.map(item => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Field>
        </div >
    );
};

export default FormikSelect;