import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./EditProfile.css";

const names = [
    'Designer',
    'Gamer',
    'Streamer',
    'Influencer',
    'Politician',
    'Professional',
    'Creator'
];

// function getStyles(name, personName, theme) {
//     return {
//         fontWeight:
//             personName.indexOf(name) === -1
//                 ? theme.typography.fontWeightRegular
//                 : theme.typography.fontWeightMedium,
//     };
// }

function Selector({ value, onChange }) {
    const [category, setCategory] = React.useState(value);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setCategory(value)
        onChange(value);
    }

    console.log(category);

    return (
        <div className="form__field">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={handleChange}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default Selector
