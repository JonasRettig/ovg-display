import React from "react";
import { useState, useEffect } from "react";
import {
    Typography,
    Stack,
    Divider
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
        <>
        <Typography> Wetter </Typography>
        <Stack direction={"row"}>
            <Stack direction={"column"}>
                <Typography> Aktuelles Wetter </Typography>
                <Stack direction={"row"}>
                    <Typography> {currentWeather.weather[0].description} </Typography>
                    <img id="weatherIcon" src={buildIconURL(currentWeather.weather[0].icon)} alt="Weather icon"/>  
                    <Typography> {currentWeather.main.temp}°C </Typography>
                </Stack>    
            </Stack>
            <Stack direction={"column"}>
                <Stack direction={"row"}>
                {forecastRender.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <Divider />
                            {item}
                        </React.Fragment>
                    );
                })}
                </Stack>
            </Stack>
        </Stack>
        </>
    )
}