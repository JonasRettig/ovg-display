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

<html>
<p>print env secret to HTML</p>
<pre>{process.env.REACT_APP_SECRET_NAME}</pre>
</html>

export default function Home() {

  // Reload the page every 30 minutes
  setInterval(function() {
    window.location.reload();
  }, 30 * 60 * 1000);

  const tagesschauAPI = "https://www.tagesschau.de/api2/homepage/"
  const rssURL = "https://www.justiz.nrw.de/WebPortal_Relaunch/Service/rss/termine/index.php"
  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=51.959775&lon=7.624631&lang=de&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=51.959775&lon=7.624631&lang=de&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
  const proxyUrl = 'https://cors.jonas-1.workers.dev/?';

  const [news, setNews] = useState({})
  const [newsCards, setNewsCards] = useState([])
  const [breakingNews, setBreakingNews] = useState([])
  const [currentWeather, setCurrentWeather] = useState({})
  const [forecast, setForecast] = useState({})
  const [index, setIndex] = useState(0)
  const [dates, setDates] = useState(null)

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


  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % newsCards.length);
    }, 15000);
    return () => clearInterval(intervalId);
  }, [newsCards.length]);

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
  var newsCardsToAdd = []
  if(news.news) {
      news.news.map((report) => {
        if(report.content){
          if (!report.breakingNews) { 
          newsCardsToAdd.push({
            image: report.teaserImage.imageVariants["1x1-640"],
            title: report.title,
            text: Object.values(report.content)[0].value.replace(/<\/?strong>/g, '')
          }
          )} else {
            handleBreakingNews(report)
          }
        }
      })
    setNewsCards(newsCardsToAdd)
  }
  else {
    setNewsCards([{
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
          title: "Laden der Nachrichten fehlgeschlagen",
          text: "Sollte das Problem bestehen bleiben wenden Sie sich bitte an den Administrator."
    }])
  }
}

function handleBreakingNews(report) {
  setBreakingNews(
    <Card style={{ backgroundColor: 'red' }}>
      <CardContent>
        {report.teaserImage &&
        <CardMedia
          component="img"
          image={report.teaserImage.imageVariants["1x1-640"]}
        />
        }
        <Typography gutterBottom variant="h5" component="div">
          EIL +++ {report.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Object.values(report.content)[0].value.replace(/<\/?strong>/g, '')}
        </Typography>
      </CardContent>
    </Card>
  )
}

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
        <Stack
          direction={"column"}
          spacing={2}
        >
          <img src="https://grafana.freifunk-muensterland.de/render/d-solo/000000021/advanced-node-stats?refresh=30s&orgId=1&var-node=000a5e219c4e&theme=light&panelId=1&width=1000&height=500&tz=Europe%2FBerlin"/>
          <img src="https://grafana.freifunk-muensterland.de/render/d-solo/000000021/advanced-node-stats?refresh=30s&orgId=1&var-node=000a5e219c4e&theme=light&panelId=2&width=1000&height=500&tz=Europe%2FBerlin"/>
        </Stack>
        <Stack 
          direction={"column"}
          spacing={2}
        >
          {breakingNews}
          {newsCards[index] &&
          <Card>
              <CardMedia
                component="img"
                image={newsCards[index].image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {newsCards[index].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {newsCards[index].text}
                </Typography>
              </CardContent>
            </Card>
          }
        </Stack>
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