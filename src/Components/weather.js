import React from "react";
import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Stack,
    Image
  } from "@mui/material";

export default function Weather({currentWeather, forcast}) {

    var weatherIconID = "http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png";

    return (
        <Stack direction={"column"}>
            <Typography> Wetter </Typography>
            <Stack direction={"column"}>
                <Typography> Aktuelles Wetter </Typography>
                <Stack direction={"row"}>
                    <Typography> {currentWeather.weather[0].description} </Typography>
                    <img id="weatherIcon" src={weatherIconID} alt="Weather icon"/>  
                    <Typography> {currentWeather.main.temp}°C </Typography>
                </Stack>    
            </Stack>
            <Stack direction={"row"}>
                <Typography> Vorschau </Typography>
            </Stack>
        </Stack>
    )
}