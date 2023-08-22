// component that build the main weather widget for the site
import React from "react";
import { useState, useEffect } from "react";
import {
    Typography,
    Stack,
  } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import {
    WiDaySunny,
    WiDayCloudy,
    WiCloud,
    WiCloudy,
    WiRain,
    WiDayRain,
    WiThunderstorm,
    WiSnow,
    WiDayFog,
    WiNightFog,
    WiNightAltRain
} from "weather-icons-react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Weather({weather, theme, currentThemeName}) {

    useEffect(() => {
        if(currentThemeName === "light") {
            setIconColor("#000")
        } else {
            setIconColor("#fff")
        }
    }, [theme])

    // the state that contains the forecast if it exists
    // chose a really bad name for this I guess
    const [forecastRender, setForecastRender] = useState([]);
    const [iconColor, setIconColor] = useState("#000")

    //Size of all weather Icons
    const iconSize = 266;

    // use effect that builds the forecast if the weather state changes
    useEffect(() => {
        buildForecast(weather.hourly)
    }, [weather])

    // function that returns the correct icon for the weather
    // ! I feel like this is a really bad way to do this but I dont really know how I could do it better
    function returnIcon(iconID) {
        if(iconID === "01d") {
            return <WiDaySunny size={iconSize}/>
        } else if(iconID === "02d") {
            return <WiDayCloudy size={iconSize}/>
        } else if(iconID === "03d" || iconID === "03n") {
            return <WiCloud size={iconSize}/>
        } else if(iconID === "04d" || iconID === "04n") {
            return <WiCloudy size={iconSize}/>
        } else if (iconID === "09d" || iconID === "09n") {
            return <WiRain size={iconSize}/>
        } else if (iconID === "10d") {
            return <WiDayRain size={iconSize}/>
        } else if (iconID === "10n") {
            return <WiNightAltRain size={iconSize}/>
        } else if (iconID === "11d" || iconID === "11n") {
            return <WiThunderstorm size={iconSize}/>
        } else if (iconID === "13d" || iconID === "13n") {
            return <WiSnow size={iconSize}/>
        } else if (iconID === "50d") {
            return <WiDayFog size={iconSize}/>
        } else if (iconID === "50n") {
            return <WiNightFog size={iconSize}/>
        } else {
            return <ErrorOutlineIcon sx={{fontSize: "266px"}} />
        }
    }

    // function that build the forecast for the next 5h from the data given
    function buildForecast(forecast) {
        if (forecast !== undefined) {
            var forecastBuilder = [];
            // gets the next 5h by slicing an array sorted by the time stamp
            const forecastTimes = forecast.map((item) => {return item.dt}).sort().slice(1, 6);
            forecast.map((item) => {
                if (forecastTimes.includes(item.dt)) {
                    forecastBuilder.push(
                    <Stack key={item.dt} justifyContent={"center"} alignContent={"center"} alignItems={"center"} spacing={1}>
                        <Typography variant="h2"> in {Math.round((item.dt - Date.now()/1000)/60/60)} Stunden </Typography>
                            {returnIcon(item.weather[0].icon)}  
                            <Typography variant="h2"> {item.weather[0].description} bei {Math.round(item.temp)}°C </Typography>
                    </Stack>
                    )
                }
            setForecastRender(forecastBuilder);    
            })
        }
    }

    const buildTimestamp = (timestamp) => {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime
    }


    return (
        <ThemeProvider theme={theme}>
        <Stack direction="column" margin={2}>
        <Typography variant="h1" sx={{alignSelf: "center"}}> Wetter </Typography>
        {weather.current ?
        <Stack direction="column" spacing={2}>
        <Stack direction={"row"} spacing={2}>
            <Stack key={weather.current.dt} justifyContent={"center"} alignContent={"center"} alignItems={"center"} spacing={1}>
                <Typography variant="h2"> Aktuell  </Typography>
                {returnIcon(weather.current.weather[0].icon)}  
                <Typography variant="h2"> {weather.current.weather[0].description} bei {Math.round(weather.current.temp)}°C</Typography>
            </Stack>
            {forecastRender.map((item) => {
                return item;
            })}
        </Stack>
        {weather.alerts &&
        <Stack>
            <Typography variant="h1"> Warnungen </Typography>
            {weather.alerts.map((item) => {
                return (
                    <Stack key={item.start} justifyContent={"center"} alignContent={"center"} alignItems={"center"} spacing={1}>
                        <Typography variant="h2"> {item.event} </Typography>
                        <Typography variant="h2"> {item.description} </Typography>
                        <Typography variant="h2"> {buildTimestamp(item.start)} bis {buildTimestamp(item.end)} </Typography>
                    </Stack>
                )
            })}
        </Stack>}
        </Stack>
        :
        <Typography variant="h1"> Das Wetter konnte nicht abgerufen werden. Sollte dieses Problem bestehen bleiben wenden Sie sich bitte an den Administrator. </Typography>
        }
        </Stack>
        </ThemeProvider>
    )
}