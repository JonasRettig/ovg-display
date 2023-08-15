import React from "react";
import { useState, useEffect } from "react";
import {
    Typography,
    Stack,
    Card
  } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { WeatherFogIcon, WeatherRainIcon, WeatherDayPartialyCloudyIcon, WeatherNightPartialyCloudyIcon, WeatherClearNightIcon  } from "../styles";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

export default function Weather({currentWeather, forecast, theme}) {

    const [forecastRender, setForecastRender] = useState([]);

    useEffect(() => {
        buildForecast()
    }, [forecast])

    function returnIcon(iconID) {
        if(iconID === "01d") {
            return <WbSunnyOutlinedIcon/>
        } else if(iconID === "02d") {
            return <WeatherDayPartialyCloudyIcon/>
        } else if(iconID === "03d" || iconID === "03n" || iconID === "04d" || iconID === "04n") {
            return <WbCloudyOutlinedIcon/>
        } else if(iconID === "09d" || iconID === "09n" || iconID === "10d" || iconID === "10n") {
            return <WeatherRainIcon/>
        } else if(iconID === "11d" || iconID === "11n") {
            return <ThunderstormOutlinedIcon/>
        } else if(iconID === "13d" || iconID === "13n") {
            return <AcUnitOutlinedIcon/>
        } else if(iconID === "50d" || iconID === "50n") {
            return <WeatherFogIcon/>
        } else if(iconID === "01n") {
            return <WeatherClearNightIcon/>
        } else if(iconID === "02n") {
            return <WeatherNightPartialyCloudyIcon/>
        }
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
                            {returnIcon(item.weather[0].icon)}  
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
                {returnIcon(currentWeather.weather[0].icon)}  
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