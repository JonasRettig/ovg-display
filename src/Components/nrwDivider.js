// a component that introduces a divider to be used to seperate different parts of the site
import React from "react";
import {
  Divider,
  Stack
} from "@mui/material";

export default function NRWDivider({direction}) {

    // the colors of the logo of the state of nrw
    const nrwGreen = "#04aa4c"
    const nrwGrey = "#b0b3b7"
    const nrwRed = "#ec1b24"

    return (
        <Stack
            margin="30px"
            direction={direction}
            spacing={0.5}
        >
            <Divider sx={{ border: `2px solid ${nrwGreen}`, backgroundColor: nrwGreen }} />            
            <Divider sx={{ border: `2px solid ${nrwGrey}`, backgroundColor: nrwGrey }} />            
            <Divider sx={{ border: `2px solid ${nrwRed}`, backgroundColor: nrwRed }} />            
        </Stack>
    )
}