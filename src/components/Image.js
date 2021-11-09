import React from 'react'
import "./Image.css"
import Avatar from '@mui/material/Avatar';

export default function Image({ src, alt, ...otherProps }) {
    return (
        <Avatar src={src} alt={alt} {...otherProps} />
    );
}

