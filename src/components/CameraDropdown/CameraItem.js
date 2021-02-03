import React from 'react'
import { MenuItem } from "@material-ui/core";


export default function CameraItem({ name, fullname }) {
    return (
        <MenuItem value={name}>{fullname}</MenuItem>
    )
}
