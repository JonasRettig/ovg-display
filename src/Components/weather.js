import React from "react";
import { useState, useEffect } from "react";
import {
    Typography,
    Stack,
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
        if (forecast.cod !== undefined) {
            var forecastBuilder = [];
            const forecastTimes = Object.values(forecast.list).map((item) => {return item.dt}).sort().slice(1, 6);
            Object.values(forecast.list).map((item) => {
                if (forecastTimes.includes(item.dt)) {
                    forecastBuilder.push(
                    <Stack direction={"column"} key={item.dt}>
                        <Typography> {item.dt_txt} </Typography>
                            <Typography> {item.weather[0].description} </Typography>
                            <img id="weatherIcon" src={buildIconURL(item.weather[0].icon)} alt="Weather icon"  width="50" height="50"/>  
                            <Typography> {item.main.temp}°C </Typography>
                    </Stack>
                    )
                }
            setForecastRender(forecastBuilder);    
            })
        }
    }

    return (
        <>
        <Typography> Wetter </Typography>
        {currentWeather.weather ?
        <Stack direction={"row"}>
            <Stack direction={"column"}>
                <Typography> Aktuelles Wetter </Typography>
                <Typography> {currentWeather.weather[0].description} </Typography>
                <img id="weatherIcon" src={buildIconURL(currentWeather.weather[0].icon)} alt="Weather icon" width="50" height="50"/>  
                <Typography> {currentWeather.main.temp}°C </Typography>
            </Stack>
            <Stack direction={"column"}>
                <Stack direction={"row"}>
                {forecastRender.map((item) => {
                    return item;
                })}
                </Stack>
            </Stack>
        </Stack>
        :
        <Typography> Das Wetter konnte nicht abgerufen werden. Sollte dieses Problem bestehen bleiben wenden Sie sich bitte an den Administrator. </Typography>
        }
        </>
    )
}