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

  const [news, setNews] = useState([])
  const [newsCards, setNewsCards] = useState([])
  const [currentWeather, setCurrentWeather] = useState({})
  const [forecast, setForecast] = useState({})
  const [index, setIndex] = useState(0)
  const [dates, setDates] = useState(null)
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    buildNewsCards()
    rssFetcher()
    //fetchNews();
    //fetchCurrentWeather();
    //fetchForecast();
  }, []);

  useEffect(() => {
    buildNewsCards()
  }, [news]);

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

async function fetchCurrentWeather() {
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