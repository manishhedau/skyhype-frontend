import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const Textfield = ({
    name,
    mt,
    isClick,
    ...otherProps
}) => {
    const [field, mata] = useField(name);
    // const res = useFormikContext();
    // console.log(`res ${name}`, res);

    // console.log("field : ", field);
    // console.log("mata : ", mata);

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
        <TextField
            {...configTextfield}
            style={{
                marginBottom: (mata && mata.touched && mata.error && mata.value) || (isClick && !mata.value) ? "0px" : "1rem",
                marginTop: { mt }
            }}
            name={name}
        />
    );
};

export default Textfield;
