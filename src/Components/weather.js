import React from "react";
import { useState, useEffect } from "react";
import {
    Typography,
    Stack,
    Card
  } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { WeatherFogIcon, WeatherRainIcon, WeatherDayPartialyCloudyIcon, WeatherNightPartialyCloudyIcon, WeatherClearNightIcon  } from "../styles";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Weather({currentWeather, forecast, theme}) {

    const [forecastRender, setForecastRender] = useState([]);

    const weatherIcoToMUI = [
        ["01d", <WbSunnyIcon/>]
        ["02d", <WeatherDayPartialyCloudyIcon/>]
        ["03d", <WbCloudyIcon/>]
        ["04d", <WbCloudyIcon/>]
        ["09d", <WeatherRainIcon/>]
        ["10d", <WeatherRainIcon/>]
        ["11d", <ThunderstormIcon/>]
        ["13d", <AcUnitIcon/>]
        ["50d", <WeatherFogIcon/>]
        ["01n", <WeatherClearNightIcon/>]
        ["02n", <WeatherNightPartialyCloudyIcon/>]
        ["03n", <WbCloudyIcon/>]
        ["04n", <WbCloudyIcon/>]
        ["09n", <WeatherRainIcon/>]
        ["10n", <WeatherRainIcon/>]
        ["11n", <ThunderstormIcon/>]
        ["13n", <AcUnitIcon/>]
        ["50n", <WeatherFogIcon/>]
    ]

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
                    <Card key={item.dt}>
                        <Typography> {item.dt_txt} </Typography>
                            <Typography> {item.weather[0].description} </Typography>
                            <img id="weatherIcon" src={buildIconURL(item.weather[0].icon)} alt="Weather icon"  width="50" height="50"/>  
                            <Typography> {item.main.temp}°C </Typography>
                    </Card>
                    )
                }
            setForecastRender(forecastBuilder);    
            })
        }
    }

    return (
        <ThemeProvider theme={theme}>
        <Typography> Wetter </Typography>
        {currentWeather.weather ?
        <Stack direction={"row"} spacing={2}>
            <Card key={currentWeather.dt}>
                <Typography> Aktuelles Wetter </Typography>
                <Typography> {currentWeather.weather[0].description} </Typography>
                <img id="weatherIcon" src={buildIconURL(currentWeather.weather[0].icon)} alt="Weather icon" width="50" height="50"/>  
                <Typography> {currentWeather.main.temp}°C </Typography>
            </Card>
            {forecastRender.map((item) => {
                return item;
            })}
        </Stack>
        :
        <Typography> Das Wetter konnte nicht abgerufen werden. Sollte dieses Problem bestehen bleiben wenden Sie sich bitte an den Administrator. </Typography>
        }
        </ThemeProvider>
    )
}