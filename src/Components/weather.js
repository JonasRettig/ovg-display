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

export default function Weather({currentWeather, forecast}) {

    const [forecastRender, setForecastRender] = useState([]);

    useEffect(() => {
        buildForecast()
    }, [forecast])

    function buildIconURL(iconID) {
        return "http://openweathermap.org/img/w/" + iconID + ".png";
    }

    function buildForecast() {
        var forecastBuilder = [];
        const forecastTimes = Object.values(forecast.list).map((item) => {return item.dt}).sort().slice(1, 6);
        Object.values(forecast.list).map((item) => {
            if (forecastTimes.includes(item.dt)) {
                forecastBuilder.push(
                <Stack direction={"column"}>
                    <Typography> {item.dt_txt} </Typography>
                    <Stack direction={"row"}>
                        <Typography> {item.weather[0].description} </Typography>
                        <img id="weatherIcon" src={buildIconURL(item.weather[0].icon)} alt="Weather icon"/>  
                        <Typography> {item.main.temp}°C </Typography>
                    </Stack>    
                </Stack>
                )
            }
        setForecastRender(forecastBuilder);    
        })
    }

    return (
        <Stack direction={"column"}>
            <Typography> Wetter </Typography>
            <Stack direction={"column"}>
                <Typography> Aktuelles Wetter </Typography>
                <Stack direction={"row"}>
                    <Typography> {currentWeather.weather[0].description} </Typography>
                    <img id="weatherIcon" src={buildIconURL(currentWeather.weather[0].icon)} alt="Weather icon"/>  
                    <Typography> {currentWeather.main.temp}°C </Typography>
                </Stack>    
            </Stack>
            <Stack direction={"column"}>
                <Typography> Vorschau </Typography>
                <Stack direction={"row"}>
                {forecastRender.map((item) => {
                    return item;
                })}
                </Stack>
            </Stack>
        </Stack>
    )
}