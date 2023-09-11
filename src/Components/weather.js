// component that build the main weather widget for the site
import React from "react";
import { useState, useEffect } from "react";
import {
    Typography,
    Stack,
    Card,
    CardContent
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

export default function Weather({weather, warnings, setWeatherWarningsExist, theme}) {
    // the state that contains the forecast if it exists
    // chose a really bad name for this I guess
    const [forecastRender, setForecastRender] = useState([]);
    // the state that contains the relevant warnings if they exist
    const [relevantWarnings, setRelevantWarnings] = useState([]);

    //Size of all weather Icons
    const iconSize = 266;

    // use effect that builds the forecast if the weather state changes
    useEffect(() => {
        buildForecast(weather.hourly)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weather])

    useEffect(() => {
        parseWarnings(warnings)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [warnings])

    useEffect(() => {
      if (relevantWarnings.length > 0) {
        setWeatherWarningsExist(true);
      } else {
        setWeatherWarningsExist(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [relevantWarnings]);

    // function that returns the correct icon for the weather
    // ! I feel like this is a really bad way to do this but I dont really know how I could do it better
    // ! NOT ALL CASES ARE COVERED
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

    function matchWarningColor(level) {
        if(level === 1) {
            return "#ffeb3b"
        } else if(level === 2) {
            return "#fb8c00"
        } else if(level === 3) {
            return "#e53935"
        } else if(level === 4) {
            return "#880e4f"
        } else {
            return "#red"
        }
    }


    // function that build the forecast for the next 5h from the data given
    function buildForecast(forecast) {
        if (forecast !== undefined) {
            var forecastBuilder = [];
            // gets the next 5h by slicing an array sorted by the time stamp
            const forecastTimes = forecast.map((item) => {return item.dt}).sort().slice(1, 6);
            forecast.forEach((item) => {
                if (forecastTimes.includes(item.dt)) {
                    forecastBuilder.push(
                    <Stack key={item.dt} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"} spacing={1} width="600px">
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
        const date = new Date(timestamp);
      
        // Get the date and time components from the date object
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
      
        // Format the date and time components as a string
        const formattedTime = `${day}.${month} ${hours}:${minutes} Uhr`;
      
        return formattedTime;
      };

    function parseWarnings(warnings){
        var pointInPolygon = require('point-in-polygon')
        const msCoords = [51.9607, 7.6261]
        const warningsToAdd = []
        if(warnings !== undefined && Object.keys(warnings).length !== 0){
            warnings.warnings.forEach((warning) => {
                const area = convertPolygons(warning.regions[0].polygon)
                if(pointInPolygon(msCoords, area)) {
                    warningsToAdd.push(warning)
                }
        }
        )}
        setRelevantWarnings(warningsToAdd)
    }

    function convertPolygons(polygons){
        const newArray = [];
        for (let i = 0; i < polygons.length; i += 2) {
            newArray.push([polygons[i], polygons[i + 1]]);
        }
        return newArray
    }

    return (
        <ThemeProvider theme={theme}>
        <Stack direction="column" margin={3}>
        {weather.current ?
        <Stack direction="column" spacing={2}>
        <Stack direction={"row"} justifyContent={"space-evenly"} spacing={5}>
            <Stack key={weather.current.dt} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"} spacing={1} width="600px">
                <Typography variant="h2"> Aktuell  </Typography>
                {returnIcon(weather.current.weather[0].icon)}  
                <Typography variant="h2"> {weather.current.weather[0].description} bei {Math.round(weather.current.temp)}°C</Typography>
            </Stack>
            {forecastRender.map((item) => {
                return item;
            })}
        </Stack>
        {relevantWarnings &&
        <Stack direction={"row"} spacing={1} justifyContent={"center"}>
            {relevantWarnings.map((item) => {
                return (
                    <Card>
                    <CardContent style={{ backgroundColor: matchWarningColor(item.level) }}>
                    <Stack key={item.warnID} justifyContent={"center"} alignContent={"center"} alignItems={"center"} spacing={1}>
                        <Typography variant="h1"> {item.event} von {buildTimestamp(item.start)} bis {buildTimestamp(item.end)} </Typography>
                        <Typography variant="h2"> {item.description} </Typography>
                    </Stack>
                    </CardContent>
                    </Card>
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