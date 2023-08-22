// This file contains most of the components for the site
// Included here are the news feed, the rss feed, general styling and all fetch requests
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
import { ThemeProvider } from '@mui/material/styles';
import { createThemeWithMode } from './styles';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DataGrid } from '@mui/x-data-grid';
import Weather from "./Components/weather";
import Settings from "./Components/settings";
import NRWDivider from "./Components/nrwDivider";

<html>
<p>print env secret to HTML</p>
<pre>{process.env.REACT_APP_SECRET_NAME}</pre>
</html>

export default function Home() {

  // Reload the page every 30 minutes
  // all relevant states are reset and the refetch is triggered by inverting the refresh variable
  setInterval(function() {
    setBreakingNews([])
    setNews([])
    setWeather({})
    setRefetch(!refetch)
  }, 30 * 60 * 1000);

  // all relevant fetch URLs
  const tagesschauAPI = "https://www.tagesschau.de/api2/homepage/"
  const rssURL = "https://www.ovg.nrw.de/behoerde/sitzungstermine/sitzungstermine_rss.php"
  const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=51.959775&lon=7.624631&exclude=daily,minutely&lang=de&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
  // the cors proxy url that is needed to fetch the rss feed
  // the proxy is deployed on cloudflare with this script https://github.com/Zibri/cloudflare-cors-anywhere
  const proxyUrl = 'https://cors.jonas-1.workers.dev/?';

  // these states hold the site content
  const [news, setNews] = useState({})
  const [newsCards, setNewsCards] = useState([])
  const [breakingNews, setBreakingNews] = useState([])
  const [weather, setWeather] = useState({})
  const [dates, setDates] = useState({})
  // these states are necessary for the site to work properly
  const [index, setIndex] = useState(0)
  const [fetchesEnabled, setFetchesEnabled] = useState(false)
  const [refetch, setRefetch] = useState(false)
  // and these allow the site to have a dark and light mode switch
  const [currentTheme, setCurrentTheme] = useState(createThemeWithMode("dark"))
  const [currentThemeName, setCurrentThemeName] = useState("dark")

  // a custom styling that changes a cells text to be red
  // used to paint cancelled court dates red
  const StyledCell = styled('div')({
    color: 'red',
  });  
  
  // function that changes the theme name from light to dark and also changes the theme itself
  function handleCurrentThemeChange() {
    if(currentThemeName === "dark") {
      setCurrentThemeName("light")
      setCurrentTheme(createThemeWithMode("light"))
    } else {
      setCurrentThemeName("dark")
      setCurrentTheme(createThemeWithMode("dark"))
    }
  }

  // this useEffect is the main useEffect of the site
  // it pulls all the data from the APIs if the fetches are enabled
  // ! the rss feed is not affected by this and is always fetched as it has no call limits
  // the news cards are always built as they create a needed fallback display if no news can be fetched
  useEffect(() => {
    buildNewsCards()
    rssFetcher()
    if(fetchesEnabled) {
      fetchNews();
      fetchWeather();
    }
  }, [fetchesEnabled, refetch]);

  // if the news are fetched we build new news cards
  useEffect(() => {
    buildNewsCards()
  }, [news]);

  // the use effect that automatically switches the news card every 15 seconds
  // it is dependent on the news cards length so that it does not switch to a card that doesnt exist
  // due to this it is recalled every time the news card length changes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % newsCards.length);
    }, 15000);
    return () => clearInterval(intervalId);
  }, [newsCards.length]);

  // the function that fetches news from the tagesschau
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

// the function that fetches the weather from openweathermap
async function fetchWeather() {
  fetch(weatherURL, { method: "GET" })
    .then((res) => res.json())
    .then(  
      (result) => {
        setWeather(result)
      },
      (error) => {
        console.log(error);
      }
    );
}

// the function that builds the news cards
async function buildNewsCards() {
  var newsCardsToAdd = []
  // only build the cards if there are news
  if(news.news) {
      news.news.map((report) => {
        // we map through all news, if they arent a video story or breaking news the image, title and a short text are added to the cards array 
        if(report.content){
          if (!report.breakingNews) { 
          newsCardsToAdd.push({
            // this is the highest 16x9 resolution that tagesschau offers, another possibility would be ["1x1-840"]
            image: report.teaserImage.imageVariants["16x9-1920"],
            title: report.title,
            text: Object.values(report.content)[0].value.replace(/<\/?strong>/g, '')
          }
          )} else {
            // breaking news are handled in another function
            handleBreakingNews(report)
          }
        }
      })
    setNewsCards(newsCardsToAdd)
  }
  // if there are no news we build a single card that informs useres that the fetch failed
  else {
    setNewsCards([{
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
          title: "Laden der Nachrichten fehlgeschlagen",
          text: "Sollte das Problem bestehen bleiben wenden Sie sich bitte an den Administrator."
    }])
  }
}

// breaking news are built as their own card
function handleBreakingNews(report) {
  setBreakingNews(
    // this card has a red background, is not forced to have an image and has EIL +++ added to the title
    // this card is always displayed as long as it exists and doesn't cycle
    <Card style={{ backgroundColor: 'red' }}>
      <CardContent>
        {report.teaserImage &&
        <CardMedia
          component="img"
          image={report.teaserImage.imageVariants["16x9-1920"]}
        />
        }
        <Typography gutterBottom variant="h1" component="div">
          EIL +++ {report.title}
        </Typography>
        <Typography variant="h2" color="text.secondary">
          {Object.values(report.content)[0].value.replace(/<\/?strong>/g, '')}
        </Typography>
      </CardContent>
    </Card>
  )
}

// the ress fetched from the OVG display
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

// function that creates the rows for the data grid
// for the data from the rss feed
function createRows() {
  var rows = []
  var id = 0
  // every row gets a unique id
  dates.rss.channel[0].item.map((row) => {
    row["id"] = id
    id++
  })
  rows = dates.rss.channel[0].item
  var finalRows = []
  // the rows are built from split rows from the rss call
  rows.map((row) => { 
    var newRow = {}
    const titleParts = row.title[0].split(":");
    const descriptionParts = row.description[0].split("<br />");
    newRow.id = row.id
    newRow.title = titleParts[0] + ":" + titleParts[1];
    newRow.case = titleParts[2]; 
    newRow.type = descriptionParts[0].replace("Termin:", "").trim(); // remove "Termin:" and trim whitespace
    newRow.procedure = descriptionParts[1].replace("Verfahren:", "").trim(); // remove "Verfahren:" and trim whitespace
    newRow.info = descriptionParts[3];
    finalRows.push(newRow)   
  })
  return finalRows
}

// ! Styling could eventually be done with pixel numbers as its only going to be deployed on 4k screens
return (
  <ThemeProvider theme={currentTheme}>
  <CssBaseline />
  <Settings currentThemeName={currentThemeName} handleCurrentThemeChange={handleCurrentThemeChange} fetchesEnabled={fetchesEnabled} setFetchesEnabled={setFetchesEnabled}/>
  <Box
    height = "66vh"
    sx={{overflow: "hidden"}}
  >
    <Stack
      direction="row"
      justifyContent="space-evenly"
    >
        <Stack
          direction="column"
          spacing={2}
        >
          {(dates !== null && dates !== undefined) &&
          <>
          <Typography variant="h1"> Termine </Typography>
          {dates.rss &&
            <Typography variant="h1"> Letzte Aktualisierung: {dates.rss.channel[0].lastBuildDate[0]} </Typography>
          }
            {(dates.rss && dates.rss.channel[0].item) ?
            <DataGrid
              sx={{fontSize: "30px"}}
              rows={createRows()}
              columns={[{ field: 'title', headerName: "Zeit", width: "320" }, { field: 'case', headerName: 'Aktenzeichen', width: "320" }, { field: 'type', headerName: 'Typ', width: "320" }, { field: 'procedure', headerName: 'Verfahren', width: "320" }, { field: 'info', headerName: 'Info', width: "320", renderCell: (params) => {return <StyledCell>{params.value}</StyledCell>;}}]}
            /> :
            <Typography> Heute finden keine Termine statt. </Typography>
            }
          </>
          }
        </Stack>
        <NRWDivider direction={"row"}/>
        <Stack 
          direction={"column"}
          spacing={2}
        >
          {breakingNews}
          {newsCards[index] &&
          <Card
            sx={{width:"2100px"}}
          >
              <CardMedia
                component="img"
                image={newsCards[index].image}
                height="1080px"
                width="1920px"
                style={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h1" component="div">
                  {newsCards[index].title}
                </Typography>
                <Typography variant="h2" color="text.secondary">
                  {newsCards[index].text}
                </Typography>
              </CardContent>
            </Card>
          }
        </Stack>
        </Stack>
        </Box>
        <NRWDivider direction={"column"}/>
        <Box
          height="33vh"
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Weather weather={weather} theme={currentTheme} currentThemeName={currentThemeName}/>
        </Box>
  </ThemeProvider>
)
}