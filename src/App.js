import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Weather from "./Components/weather";

export default function Home() {

  useEffect(() => {
    buildNewsCards()
    rssFetcher()
    //fetchCurrentWeather();
    //fetchForecast();
  }, []);

  // Reload the page every 30 minutes
  setInterval(function() {
    window.location.reload();
  }, 30 * 60 * 1000);

  const tagesschauAPI = "https://www.tagesschau.de/api2/homepage/"
  const rssURL = "https://www.justiz.nrw.de/WebPortal_Relaunch/Service/rss/termine/index.php"
  //! OpenWeatherMap API Key hier, entferen und ändern vor Veröffentlichung
  const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=51.959775&lon=7.624631&lang=de&units=metric&appid=a286d415c1da274ee1d4f134b1db4117"
  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=51.959775&lon=7.624631&lang=de&units=metric&appid=a286d415c1da274ee1d4f134b1db4117"
  const proxyUrl = 'https://cors.jonas-1.workers.dev/?';


  const [news, setNews] = useState({});
  const [newsCards, setNewsCards] = useState([])
  const [currentWeather, setCurrentWeather] = useState({
    "coord": {
      "lon": 7.6246,
      "lat": 51.9598
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 288.26,
      "feels_like": 288.25,
      "temp_min": 286.15,
      "temp_max": 289.34,
      "pressure": 1011,
      "humidity": 93
    },
    "visibility": 10000,
    "wind": {
      "speed": 5.66,
      "deg": 290
    },
    "clouds": {
      "all": 75
    },
    "dt": 1691396272,
    "sys": {
      "type": 2,
      "id": 52688,
      "country": "DE",
      "sunrise": 1691380810,
      "sunset": 1691435431
    },
    "timezone": 7200,
    "id": 2867543,
    "name": "Münster",
    "cod": 200
  })
  const [forecast, setForecast] = useState({
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1691398800,
        "main": {
          "temp": 288.34,
          "feels_like": 288.42,
          "temp_min": 287.35,
          "temp_max": 288.34,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1005,
          "humidity": 96,
          "temp_kf": 0.99
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 40
        },
        "wind": {
          "speed": 6.86,
          "deg": 284,
          "gust": 11.26
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 0.69
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-07 09:00:00"
      },
      {
        "dt": 1691409600,
        "main": {
          "temp": 289.16,
          "feels_like": 288.98,
          "temp_min": 289.16,
          "temp_max": 290.79,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1006,
          "humidity": 83,
          "temp_kf": -1.63
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 9.32,
          "deg": 294,
          "gust": 12.22
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 0.55
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-07 12:00:00"
      },
      {
        "dt": 1691420400,
        "main": {
          "temp": 289.12,
          "feels_like": 288.7,
          "temp_min": 289.12,
          "temp_max": 289.51,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1008,
          "humidity": 74,
          "temp_kf": -0.39
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 77
        },
        "wind": {
          "speed": 7.3,
          "deg": 285,
          "gust": 11.77
        },
        "visibility": 10000,
        "pop": 0.39,
        "rain": {
          "3h": 0.13
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-07 15:00:00"
      },
      {
        "dt": 1691431200,
        "main": {
          "temp": 288.65,
          "feels_like": 288.01,
          "temp_min": 288.65,
          "temp_max": 288.65,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1008,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 60
        },
        "wind": {
          "speed": 6,
          "deg": 288,
          "gust": 10.85
        },
        "visibility": 10000,
        "pop": 0.08,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-07 18:00:00"
      },
      {
        "dt": 1691442000,
        "main": {
          "temp": 285.85,
          "feels_like": 285.29,
          "temp_min": 285.85,
          "temp_max": 285.85,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1008,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 2
        },
        "wind": {
          "speed": 4.28,
          "deg": 250,
          "gust": 10.79
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-07 21:00:00"
      },
      {
        "dt": 1691452800,
        "main": {
          "temp": 285.24,
          "feels_like": 284.83,
          "temp_min": 285.24,
          "temp_max": 285.24,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1007,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 41
        },
        "wind": {
          "speed": 4.79,
          "deg": 242,
          "gust": 11.32
        },
        "visibility": 10000,
        "pop": 0.3,
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-08 00:00:00"
      },
      {
        "dt": 1691463600,
        "main": {
          "temp": 285.69,
          "feels_like": 285.3,
          "temp_min": 285.69,
          "temp_max": 285.69,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1006,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 5.41,
          "deg": 242,
          "gust": 11.81
        },
        "visibility": 10000,
        "pop": 0.42,
        "rain": {
          "3h": 0.37
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-08 03:00:00"
      },
      {
        "dt": 1691474400,
        "main": {
          "temp": 286.12,
          "feels_like": 285.77,
          "temp_min": 286.12,
          "temp_max": 286.12,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1006,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 66
        },
        "wind": {
          "speed": 5.91,
          "deg": 242,
          "gust": 12.82
        },
        "visibility": 10000,
        "pop": 0.3,
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-08 06:00:00"
      },
      {
        "dt": 1691485200,
        "main": {
          "temp": 290.16,
          "feels_like": 289.56,
          "temp_min": 290.16,
          "temp_max": 290.16,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1006,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 16
        },
        "wind": {
          "speed": 8.14,
          "deg": 262,
          "gust": 11.43
        },
        "visibility": 10000,
        "pop": 0.24,
        "rain": {
          "3h": 0.22
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-08 09:00:00"
      },
      {
        "dt": 1691496000,
        "main": {
          "temp": 291.89,
          "feels_like": 291.26,
          "temp_min": 291.89,
          "temp_max": 291.89,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1005,
          "humidity": 55,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 55
        },
        "wind": {
          "speed": 8.13,
          "deg": 266,
          "gust": 10.88
        },
        "visibility": 10000,
        "pop": 0.68,
        "rain": {
          "3h": 0.16
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-08 12:00:00"
      },
      {
        "dt": 1691506800,
        "main": {
          "temp": 291.98,
          "feels_like": 291.38,
          "temp_min": 291.98,
          "temp_max": 291.98,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1005,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 7.52,
          "deg": 272,
          "gust": 10.68
        },
        "visibility": 10000,
        "pop": 0.85,
        "rain": {
          "3h": 0.29
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-08 15:00:00"
      },
      {
        "dt": 1691517600,
        "main": {
          "temp": 289.06,
          "feels_like": 288.56,
          "temp_min": 289.06,
          "temp_max": 289.06,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1005,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 5.95,
          "deg": 282,
          "gust": 10.63
        },
        "visibility": 10000,
        "pop": 0.9,
        "rain": {
          "3h": 0.45
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-08 18:00:00"
      },
      {
        "dt": 1691528400,
        "main": {
          "temp": 287.48,
          "feels_like": 287.01,
          "temp_min": 287.48,
          "temp_max": 287.48,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1006,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.26,
          "deg": 262,
          "gust": 9.31
        },
        "visibility": 10000,
        "pop": 0.46,
        "rain": {
          "3h": 0.45
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-08 21:00:00"
      },
      {
        "dt": 1691539200,
        "main": {
          "temp": 285.85,
          "feels_like": 285.6,
          "temp_min": 285.85,
          "temp_max": 285.85,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1007,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 94
        },
        "wind": {
          "speed": 3.54,
          "deg": 248,
          "gust": 8.29
        },
        "visibility": 10000,
        "pop": 0.74,
        "rain": {
          "3h": 1.77
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-09 00:00:00"
      },
      {
        "dt": 1691550000,
        "main": {
          "temp": 284.67,
          "feels_like": 284.41,
          "temp_min": 284.67,
          "temp_max": 284.67,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1008,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 47
        },
        "wind": {
          "speed": 2.94,
          "deg": 255,
          "gust": 5.85
        },
        "visibility": 10000,
        "pop": 0.17,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-09 03:00:00"
      },
      {
        "dt": 1691560800,
        "main": {
          "temp": 286.08,
          "feels_like": 285.7,
          "temp_min": 286.08,
          "temp_max": 286.08,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1010,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 55
        },
        "wind": {
          "speed": 2.61,
          "deg": 258,
          "gust": 4.8
        },
        "visibility": 10000,
        "pop": 0.07,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-09 06:00:00"
      },
      {
        "dt": 1691571600,
        "main": {
          "temp": 290.28,
          "feels_like": 289.59,
          "temp_min": 290.28,
          "temp_max": 290.28,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1011,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 90
        },
        "wind": {
          "speed": 3.79,
          "deg": 257,
          "gust": 5.1
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-09 09:00:00"
      },
      {
        "dt": 1691582400,
        "main": {
          "temp": 292.99,
          "feels_like": 292.23,
          "temp_min": 292.99,
          "temp_max": 292.99,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1012,
          "humidity": 46,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 95
        },
        "wind": {
          "speed": 4.19,
          "deg": 268,
          "gust": 5.63
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-09 12:00:00"
      },
      {
        "dt": 1691593200,
        "main": {
          "temp": 294.43,
          "feels_like": 293.79,
          "temp_min": 294.43,
          "temp_max": 294.43,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1012,
          "humidity": 45,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 85
        },
        "wind": {
          "speed": 4.3,
          "deg": 275,
          "gust": 6.06
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-09 15:00:00"
      },
      {
        "dt": 1691604000,
        "main": {
          "temp": 292.27,
          "feels_like": 291.88,
          "temp_min": 292.27,
          "temp_max": 292.27,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1013,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 75
        },
        "wind": {
          "speed": 3.35,
          "deg": 286,
          "gust": 6.22
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-09 18:00:00"
      },
      {
        "dt": 1691614800,
        "main": {
          "temp": 287.66,
          "feels_like": 287.2,
          "temp_min": 287.66,
          "temp_max": 287.66,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1014,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 27
        },
        "wind": {
          "speed": 2.89,
          "deg": 322,
          "gust": 4.97
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-09 21:00:00"
      },
      {
        "dt": 1691625600,
        "main": {
          "temp": 286.45,
          "feels_like": 285.85,
          "temp_min": 286.45,
          "temp_max": 286.45,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1014,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 29
        },
        "wind": {
          "speed": 1.33,
          "deg": 315,
          "gust": 1.78
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-10 00:00:00"
      },
      {
        "dt": 1691636400,
        "main": {
          "temp": 285.41,
          "feels_like": 284.81,
          "temp_min": 285.41,
          "temp_max": 285.41,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1014,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 49
        },
        "wind": {
          "speed": 1.41,
          "deg": 273,
          "gust": 1.45
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-10 03:00:00"
      },
      {
        "dt": 1691647200,
        "main": {
          "temp": 287.52,
          "feels_like": 286.92,
          "temp_min": 287.52,
          "temp_max": 287.52,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1016,
          "humidity": 73,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 28
        },
        "wind": {
          "speed": 1.41,
          "deg": 288,
          "gust": 1.99
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-10 06:00:00"
      },
      {
        "dt": 1691658000,
        "main": {
          "temp": 292.42,
          "feels_like": 291.84,
          "temp_min": 292.42,
          "temp_max": 292.42,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1016,
          "humidity": 55,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 15
        },
        "wind": {
          "speed": 0.65,
          "deg": 319,
          "gust": 1.22
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-10 09:00:00"
      },
      {
        "dt": 1691668800,
        "main": {
          "temp": 295.97,
          "feels_like": 295.67,
          "temp_min": 295.97,
          "temp_max": 295.97,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1015,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 10
        },
        "wind": {
          "speed": 0.81,
          "deg": 309,
          "gust": 1.25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-10 12:00:00"
      },
      {
        "dt": 1691679600,
        "main": {
          "temp": 297.03,
          "feels_like": 296.81,
          "temp_min": 297.03,
          "temp_max": 297.03,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1014,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.34,
          "deg": 339,
          "gust": 1.32
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-10 15:00:00"
      },
      {
        "dt": 1691690400,
        "main": {
          "temp": 295.02,
          "feels_like": 294.96,
          "temp_min": 295.02,
          "temp_max": 295.02,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1014,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 5
        },
        "wind": {
          "speed": 2.02,
          "deg": 10,
          "gust": 2.46
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-10 18:00:00"
      },
      {
        "dt": 1691701200,
        "main": {
          "temp": 291.5,
          "feels_like": 291.35,
          "temp_min": 291.5,
          "temp_max": 291.5,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1014,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 5
        },
        "wind": {
          "speed": 1.73,
          "deg": 66,
          "gust": 1.78
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-10 21:00:00"
      },
      {
        "dt": 1691712000,
        "main": {
          "temp": 289.8,
          "feels_like": 289.66,
          "temp_min": 289.8,
          "temp_max": 289.8,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1013,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 5
        },
        "wind": {
          "speed": 2.29,
          "deg": 120,
          "gust": 2.84
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-11 00:00:00"
      },
      {
        "dt": 1691722800,
        "main": {
          "temp": 288.66,
          "feels_like": 288.49,
          "temp_min": 288.66,
          "temp_max": 288.66,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1012,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 10
        },
        "wind": {
          "speed": 2.15,
          "deg": 109,
          "gust": 2.3
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-11 03:00:00"
      },
      {
        "dt": 1691733600,
        "main": {
          "temp": 290.34,
          "feels_like": 290.2,
          "temp_min": 290.34,
          "temp_max": 290.34,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1011,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 54
        },
        "wind": {
          "speed": 2.63,
          "deg": 115,
          "gust": 4.46
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-11 06:00:00"
      },
      {
        "dt": 1691744400,
        "main": {
          "temp": 296.21,
          "feels_like": 296.09,
          "temp_min": 296.21,
          "temp_max": 296.21,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1011,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 54
        },
        "wind": {
          "speed": 2.42,
          "deg": 145,
          "gust": 2.84
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-11 09:00:00"
      },
      {
        "dt": 1691755200,
        "main": {
          "temp": 300.3,
          "feels_like": 300.34,
          "temp_min": 300.3,
          "temp_max": 300.3,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1010,
          "humidity": 44,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 31
        },
        "wind": {
          "speed": 2.37,
          "deg": 162,
          "gust": 3.07
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-11 12:00:00"
      },
      {
        "dt": 1691766000,
        "main": {
          "temp": 302.28,
          "feels_like": 301.71,
          "temp_min": 302.28,
          "temp_max": 302.28,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1008,
          "humidity": 38,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 40
        },
        "wind": {
          "speed": 2.21,
          "deg": 222,
          "gust": 4.32
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-11 15:00:00"
      },
      {
        "dt": 1691776800,
        "main": {
          "temp": 298.62,
          "feels_like": 298.68,
          "temp_min": 298.62,
          "temp_max": 298.62,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1008,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 27
        },
        "wind": {
          "speed": 2.16,
          "deg": 310,
          "gust": 2.91
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-11 18:00:00"
      },
      {
        "dt": 1691787600,
        "main": {
          "temp": 295.54,
          "feels_like": 295.58,
          "temp_min": 295.54,
          "temp_max": 295.54,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1009,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 3.43,
          "deg": 286,
          "gust": 5.83
        },
        "visibility": 10000,
        "pop": 0.33,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-11 21:00:00"
      },
      {
        "dt": 1691798400,
        "main": {
          "temp": 291.81,
          "feels_like": 292.16,
          "temp_min": 291.81,
          "temp_max": 291.81,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1009,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 3.04,
          "deg": 250,
          "gust": 7.67
        },
        "visibility": 10000,
        "pop": 0.7,
        "rain": {
          "3h": 1.05
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-12 00:00:00"
      },
      {
        "dt": 1691809200,
        "main": {
          "temp": 291.58,
          "feels_like": 291.83,
          "temp_min": 291.58,
          "temp_max": 291.58,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1009,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 3.35,
          "deg": 252,
          "gust": 7.76
        },
        "visibility": 10000,
        "pop": 0.26,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-08-12 03:00:00"
      },
      {
        "dt": 1691820000,
        "main": {
          "temp": 290.51,
          "feels_like": 290.34,
          "temp_min": 290.51,
          "temp_max": 290.51,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1009,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.36,
          "deg": 252,
          "gust": 8.81
        },
        "visibility": 10000,
        "pop": 0.35,
        "rain": {
          "3h": 0.18
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-08-12 06:00:00"
      }
    ],
    "city": {
      "id": 2867543,
      "name": "Münster",
      "coord": {
        "lat": 51.9598,
        "lon": 7.6246
      },
      "country": "DE",
      "population": 270184,
      "timezone": 7200,
      "sunrise": 1691380810,
      "sunset": 1691435431
    }
  })
  const [index, setIndex] = useState(0)
  const [dates, setDates] = useState(null)
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  async function fetchNews () {
    fetch(tagesschauAPI, { method: "GET" })
    .then((res) => res.json())
    .then(
      (result) => {
        setNews(result)
      },
      (error) => {
        console.log(error);
      }
    );
};

async function fetchWeather() {
  fetch(currentWeatherURL, { method: "GET" })
    .then((res) => res.json())
    .then(  
      (result) => {
        setCurrentWeather(result)
      },
      (error) => {
        console.log(error);
      }
    );
}

async function fetchForecast() {
  fetch(forecastURL, { method: "GET" })
    .then((res) => res.json())
    .then(  
      (result) => {
        setForecast(result)
      },
      (error) => {
        console.log(error);
      }
    );
}

async function buildNewsCards() {
  //await fetchNews()
  if(news.news) {
    setNewsCards(
      news.news.map((report) => {
        if(report.content){
          return (
            <Card>
              <CardMedia
                component="img"
                image={report.teaserImage.imageVariants["1x1-640"]}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {report.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {Object.values(report.content)[0].value.replace(/<\/?strong>/g, '')}
                </Typography>
              </CardContent>
            </Card>
          )
        }
      })
    )
  }
  else {
    setNewsCards([
      <Card>
        <CardMedia
          component="img"
          image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Laden der Nachrichten fehlgeschlagen
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sollte das Problem bestehen bleiben wenden Sie sich bitte an den Administrator.
          </Typography>
        </CardContent>
      </Card>
    ])
  }
}

const intervalId = setInterval(() => {
  var newIndex = index + 1;
  setIndex(newIndex);
  if (newIndex >= newsCards.length) {
    clearInterval(intervalId);
    setIndex(0);
  }
}, 15000);

function rssFetcher() {
  var request = new XMLHttpRequest();
  var parseString = require('xml2js').parseString;
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      var myObj = request.responseText;
      parseString(myObj, function (err, result) {
        setDates(result)
    });
    }
  }
  request.open("GET", proxyUrl + rssURL, true);
  request.send();
}

function createRows() {
  var rows = []
  var id = 0
  dates.rss.channel[0].item.map((row) => {
    row["id"] = id
    id++
  })
  rows = dates.rss.channel[0].item
  return rows
}

return (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    alignContent="center"
  >
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "80%", width : "80%"}}
    >
      <Stack
        direction="column"
        spacing={2}
        justifyContent={"center"}
        alignItems="center"
      >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {newsCards[index]}
        <Stack
          direction="column"
          spacing={2}
        >
          {(dates !== null && dates !== undefined) &&
          <>
            <Typography> Termine </Typography>
            <DataGrid
              rows={createRows()}
              columns={[{ field: 'title', headerName: "Titel", width: 300 }, { field: 'pubDate', headerName: 'Datum', width: 300 }]}
            />
          </>
          }
        </Stack>
      </Stack>
      <Weather currentWeather={currentWeather} forecast={forecast}/>
      </Stack>
    </Box>
  </Box>
)
}