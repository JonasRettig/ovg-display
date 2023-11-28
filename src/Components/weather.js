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
    WiNightAltRain,
    WiNightClear,
    WiNightAltCloudy
} from "weather-icons-react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Weather({weather, warnings, setWeatherWarningsExist, buildTimestamp, theme}) {
    // the state that contains the forecast if it exists
    // chose a really bad name for this I guess
    const [forecastRender, setForecastRender] = useState([]);
    // the state that contains the relevant warnings if they exist
    const [relevantWarnings, setRelevantWarnings] = useState([]);

    //Size of all weather Icons
    const iconSize = 320;

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

    // const that maps the correct icons for the weather
    const iconMap = {
        "01d": <WiDaySunny size={iconSize} />,
        "01n": <WiNightClear size={iconSize} />,
        "02d": <WiDayCloudy size={iconSize} />,
        "02n": <WiNightAltCloudy size={iconSize} />,
        "03d": <WiCloud size={iconSize} />,
        "03n": <WiCloud size={iconSize} />,
        "04d": <WiCloudy size={iconSize} />,
        "04n": <WiCloudy size={iconSize} />,
        "09d": <WiRain size={iconSize} />,
        "09n": <WiRain size={iconSize} />,
        "10d": <WiDayRain size={iconSize} />,
        "10n": <WiNightAltRain size={iconSize} />,
        "11d": <WiThunderstorm size={iconSize} />,
        "11n": <WiThunderstorm size={iconSize} />,
        "13d": <WiSnow size={iconSize} />,
        "13n": <WiSnow size={iconSize} />,
        "50d": <WiDayFog size={iconSize} />,
        "50n": <WiNightFog size={iconSize} />,
    };

    // function that returns the correct icon for the weather
    // returns error icons if no icon is mapped
    function returnIcon(iconID) {
        return iconMap[iconID] || <ErrorOutlineIcon sx={{ fontSize: iconSize, color: "red" }} />;
    }

    // function that matches the warning level to a color
    // the color is take from the dwd website
    function matchWarningColor(level) {
        switch(level) {
            case 1:
                return "#ffeb3b"
            case 2:
                return "#fb8c00"
            case 3:
                return "#e53935"
            case 4:
                return "#880e4f"
            default:
                return "#e53935"
        }
    }


    // function that build the forecast for the next 5h from the data given
    function buildForecast(forecast) {
        if (forecast !== undefined) {
            var forecastBuilder = [];
            // gets the next 5h by slicing an array sorted by the time stamp
            var forecastTimes = forecast.map((item) => {return item.dt}).sort().slice(1, 6)
            // if the next forecast is less than 15 minutes away we skip it
            if(forecastTimes[0] - Date.now() / 1000 <= 900){
                forecastTimes = forecast.map((item) => {return item.dt}).sort().slice(2, 7);
            }
            forecast.forEach((item) => {
                if (forecastTimes.includes(item.dt)) {
                    forecastBuilder.push(
                    <Stack key={item.dt} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"} spacing={1} width={"16vw"}>
                        <Typography variant="h2"> um {buildTimestamp(item.dt * 1000, false)} </Typography>
                            {returnIcon(item.weather[0].icon)}  
                            <Typography variant="h2"> {item.weather[0].description} bei {Math.round(item.temp)}°C </Typography>
                    </Stack>
                    )
                }
            setForecastRender(forecastBuilder);    
            })
        }
    }

    // function that parses the warnings and checks if they are relevant
    // the check is done with polygon coordinates
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
        // all warnings are sorted by level, then start date and end date
        // if there are 4 or more warnings we cap them at 3
        warningsToAdd.sort(warningsToAdd.end)
        warningsToAdd.sort(warningsToAdd.start)
        warningsToAdd.sort(warningsToAdd.level)
        if(warningsToAdd.length > 3) {
            warningsToAdd.slice(1,3)
        }
        setRelevantWarnings(warningsToAdd)
    }

    // helper function that converts the list of polygon coordinates to an array of arrays
    function convertPolygons(polygons){
        const newArray = [];
        for (let i = 0; i < polygons.length; i += 2) {
            newArray.push([polygons[i], polygons[i + 1]]);
        }
        return newArray
    }

    return (
        <ThemeProvider theme={theme}>
        <Stack direction="column" margin={3} paddingTop={5}>
        {weather.current ?
        <Stack direction="column" spacing={5}>
        <Stack direction={"row"} justifyContent={"space-evenly"} spacing={2}>
            <Stack key={weather.current.dt} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"} spacing={1} width={"16vw"}>
                <Typography variant="h2"> Aktuell  </Typography>
                {returnIcon(weather.current.weather[0].icon)}  
                <Typography variant="h2"> {weather.current.weather[0].description} bei {Math.round(weather.current.temp)}°C</Typography>
            </Stack>
            {forecastRender.map((item) => {
                return item;
            })}
        </Stack>
        {relevantWarnings &&
        <Stack key="warningsStack" direction={"row"} spacing={2} justifyContent={"center"}>
            {relevantWarnings.map((item) => {
                return (
                    <Card key={item.warnId}  elevation={0} sx={{textAlign: "center"}}>
                        <CardContent key={item.warnId} style={{ backgroundColor: matchWarningColor(item.level)}}>
                            <Stack justifyContent={"center"} alignContent={"center"} alignItems={"center"} spacing={1}>
                                <Typography variant="h2"> {item.event} von {buildTimestamp(item.start, true)} bis {buildTimestamp(item.end, true)} </Typography>
                                <Typography variant="h3"> {item.description} </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                )
            })}
        </Stack>}
        </Stack>
        :
        <Typography variant="h1"> Das Wetter konnte nicht abgerufen werden. Sollte dieses Problem bestehen, wenden Sie sich bitte an den Administrator. </Typography>
        }
        </Stack>
        </ThemeProvider>
    )
}