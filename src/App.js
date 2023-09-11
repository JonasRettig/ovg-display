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
import CssBaseline from '@mui/material/CssBaseline';
import Weather from "./Components/weather";
import Settings from "./Components/settings";
import NRWDivider from "./Components/nrwDivider";

<html>
<p>print env secret to HTML</p>
<pre>{process.env.REACT_APP_SECRET_NAME}</pre>
</html>

export default function Home() {
  // all relevant fetch URLs
  const tagesschauAPI = "https://www.tagesschau.de/api2/homepage/"
  const rssURL = "https://www.ovg.nrw.de/behoerde/sitzungstermine/sitzungstermine_rss.php"
  const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=51.959775&lon=7.624631&exclude=daily,minutely,alerts&lang=de&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
  const warningsURL = "https://s3.eu-central-1.amazonaws.com/app-prod-static.warnwetter.de/v16/warnings_nowcast.json"
  // the cors proxy url that is needed to fetch the rss feed
  // the proxy is deployed on cloudflare with this script https://github.com/Zibri/cloudflare-cors-anywhere
  const proxyUrl = 'https://cors.jonas-1.workers.dev/?';

  // these states hold the site content
  const [news, setNews] = useState({})
  const [newsCards, setNewsCards] = useState([])
  const [breakingNews, setBreakingNews] = useState({})
  const [weather, setWeather] = useState({})
  const [warnings, setWarnings] = useState({})
  const [dates, setDates] = useState({})
  // these states are necessary for the site to work properly
  const [index, setIndex] = useState(0)
  const [rssEnabled, setRssEnabled] = useState(false)
  const [newsEnabled, setNewsEnabled] = useState(false)
  const [weatherEnabled, setWeatherEnabled] = useState(false)
  const [weatherWarningsExist, setWeatherWarningsExist] = useState(false)
  const [refetch, setRefetch] = useState(false)
  const [demoMode, setDemoMode] = useState("off")
  // and these allow the site to have a dark and light mode switch
  const [currentTheme, setCurrentTheme] = useState(createThemeWithMode("dark"))
  const [currentThemeName, setCurrentThemeName] = useState("dark")
  // these states provide the size of the components. They are provided in [width, height]
  const [datesSize, setDatesSize] = useState(1)
  const [newsSize, setNewsSize] = useState([1,1])
  const [newsImageSize, setNewsImageSize] = useState([1,1])
  const [imageInCardDirection, setImageInCardDirection] = useState("column")
  const [pageSplit, setPageSplit] = useState([63, 33])
  const [newsDirection, setNewsDirection] = useState("column")

  // Reload the page every 30 minutes
  // all relevant states are reset and the refetch is triggered by inverting the refresh variable
  setInterval(function() {
    setBreakingNews({})
    setNews({})
    setWeather({})
    setWarnings({})
    setDates({})
    setRefetch(!refetch)
  }, 30 * 60 * 1000);

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
  // the news cards are always built as they create a needed fallback display if no news can be fetched
  useEffect(() => {
    buildNewsCards()
    if(rssEnabled) {
      rssFetcher()
    }
    if(newsEnabled) {
      fetchNews();
    }
    if(weatherEnabled) {
      fetchWeather();
      fetchWarnings();
    }
    //fills the states with mock data if the demo mode is on
    if(demoMode !== "off") {
      const breakingNews = {
        title: "Dies ist eine Demo Eilmeldung",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      }
      const time = Date.now() / 1000
      const warnings = {
        "time": time,
        "warnings": [
          {
            "level": 3,
            "start": time,
            "end": time + 3600,
            "regions": [
              {
                "polygon": [
                  52,
                  8,
                  52,
                  6,
                  51,
                  8,
                  51,
                  6,
                  51.9607, 
                  7.6261
                ]
              }
            ],
            "description": "Dies ist eine Demo Warnung",
            "event": "Demo Warnung",
          },
          {
            "level": 4,
            "start": time - 3600,
            "end": time + 6000,
            "regions": [
              {
                "polygon": [
                  52,
                  8,
                  52,
                  6,
                  51,
                  8,
                  51,
                  6,
                  51.9607, 
                  7.6261
                ]
              }
            ],
            "description": "Dies ist eine Demo Warnung",
            "event": "Demo Warnung",
          },
        ]
      }
      setDates([{title: "Demo Termin", case: "Demo Fall", type: "Demo Typ", procedure : "Demo Procedure"}, {title: "Demo Termin 2", case: "Demo Fall 2", type: "Demo Typ 2", procedure : "Demo Procedure", info:"abgesagt"}])
      setNewsCards([{
          image: ["https://images.tagesschau.de/image/3f9e6293-0260-4ee2-958f-7f3163bf808b/AAABioLa2pA/AAABibBxrfI/16x9-1920.jpg", "https://images.tagesschau.de/image/3f9e6293-0260-4ee2-958f-7f3163bf808b/AAABioLa2pA/AAABibBx1ms/1x1-840.jpg"],
          title: "Dies ist eine Demo Nachricht",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      }])
      setWeather({
        "current":
          {"dt":time,"temp":22,"weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"01d"}]},
        "hourly":[
          {"dt":time, "temp":23, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"03d"}]},
          {"dt":time +  3600, "temp":23, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"03d"}]},
          {"dt":time + 3600 * 2,"temp":24, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"04d"}]},
          {"dt":time + 3600 * 3,"temp":25, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"09d"}]},
          {"dt":time + 3600 * 4,"temp":26, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"11d"}]},
          {"dt":time + 3600 * 5,"temp":27, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"13d"}]},
        ]})
      if(demoMode === "breakingNews") {
          setBreakingNews(breakingNews)
          setWarnings({})
      } else if(demoMode === "weatherWarnings") {
          setBreakingNews({})
          setWarnings(warnings)
      } else if(demoMode === "chaos") {
          setBreakingNews(breakingNews)
          setWarnings(warnings)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, rssEnabled, newsEnabled, weatherEnabled, demoMode]);

  // if the news are fetched we build new news cards
  useEffect(() => {
    buildNewsCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news]);

  useEffect(() => {
    determineLayout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news, breakingNews, weather, warnings, dates, refetch, weatherWarningsExist]);

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

// the function that fetches current weather warnings from the dwd
async function fetchWarnings() {
  fetch(warningsURL, { method: "GET" })
    .then((res) => res.json())
    .then(  
      (result) => {
        setWarnings(result)
      },
      (error) => {
        console.log(error);
      }
    );
}

// this function determines the layout of the site
// it is called every time the content of the site changes
function determineLayout() {
  //4k resolution is 3840 × 2160 
  //if there are both weather warnings and breaking news
  if(weatherWarningsExist && breakingNews.description) {
    setDatesSize(1)
    setNewsSize([1600, 1100])
    setNewsImageSize([1, 450])
    setPageSplit([53, 43])
    setNewsDirection("row")
    setImageInCardDirection("column")
  } 
  //if there are only weather warnings
  else if(weatherWarningsExist) {
    setDatesSize(1000)
    setNewsSize([2500, 1])
    setNewsImageSize([1, 600])
    setPageSplit([53, 43])    
    setImageInCardDirection("column")
  }
  //if there are only breaking news
  else if(breakingNews.description) {
    setDatesSize(1)
    setNewsSize([2600, 2600])
    setNewsImageSize([500, 1000])
    setPageSplit([63, 33])
    setNewsDirection("column")
    setImageInCardDirection("row")
  }
  //if nothing special happens
  else {
    setDatesSize(1000)
    setNewsSize([2500, 1])
    setNewsImageSize([1, 800])
    setPageSplit([63, 33])
    setImageInCardDirection("column")
  }
}

// the function that builds the news cards
async function buildNewsCards() {
  var newsCardsToAdd = []
  // only build the cards if there are news
  if(news.news) {
      news.news.forEach((report) => {
        // we map through all news, if they arent a video story or breaking news the image, title and a short text are added to the cards array 
        if(report.content){
          if (!report.breakingNews && report.sophoraId !== "wettervorhersage-deutschland-100") { 
          newsCardsToAdd.push({
            // this is the highest 16x9 resolution that tagesschau offers, another possibility would be ["1x1-840"]
            image: [report.teaserImage.imageVariants["16x9-1920"], report.teaserImage.imageVariants["1x1-840"]],
            title: report.title.replace(/^(\s*\+\+)/, '').replace(/(\+\+\s*)$/, ''),
            text: Object.values(report.content)[0].value.replace(/<\/?strong>/g, '')
          }
          )} else if (report.breakingNews) {
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
          image: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"],
          title: "Laden der Nachrichten fehlgeschlagen",
          text: "Sollte das Problem bestehen bleiben wenden Sie sich bitte an den Administrator."
    }])
  }
}

// breaking news are built as their own card
function handleBreakingNews(report) {
  setBreakingNews({
    title: report.title,
    description: Object.values(report.content)[0].value.replace(/<\/?strong>/g, '')
  })
}

// the ress fetched from the OVG display
function rssFetcher() {
  var request = new XMLHttpRequest();
  var parseString = require('xml2js').parseString;
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      var myObj = request.responseText;
      parseString(myObj, function (err, result) {
        createRows(result)
    });
    }
  }
  request.open("GET", proxyUrl + rssURL, true);
  request.send();
}

// function that creates the rows for the data grid
// for the data from the rss feed
function createRows(result) {
  var rows = []
  var id = 0
  // every row gets a unique id
  result.rss.channel[0].item.forEach((row) => {
    row["id"] = id
    id++
  })
  rows = result.rss.channel[0].item
  var finalRows = []
  // the rows are built from split rows from the rss call
  rows.forEach((row) => { 
    var newRow = {}
    const titleParts = row.title[0].split(":");
    const descriptionParts = row.description[0].split("<br />");
    newRow.id = row.id
    newRow.title = titleParts[0] + ":" + titleParts[1];
    newRow.case = titleParts[2].split('-')[0];
    newRow.type = descriptionParts[0].replace("Termin:", "").trim(); // remove "Termin:" and trim whitespace
    newRow.procedure = descriptionParts[1].replace("Verfahren:", "").trim(); // remove "Verfahren:" and trim whitespace
    newRow.info = descriptionParts[3];
    finalRows.push(newRow)   
  })
  setDates(finalRows)
}

return (
  <ThemeProvider theme={currentTheme}>
  <CssBaseline />
  <Settings 
    currentThemeName={currentThemeName} 
    handleCurrentThemeChange={handleCurrentThemeChange} 
    rssEnabled={rssEnabled} 
    setRssEnabled={setRssEnabled}
    newsEnabled={newsEnabled}
    setNewsEnabled={setNewsEnabled}
    weatherEnabled={weatherEnabled}
    setWeatherEnabled={setWeatherEnabled}
    setBreakingNews={setBreakingNews}
    setNews={setNews}
    setWeather={setWeather}
    setDates={setDates}
    demoMode={demoMode}
    setDemoMode={setDemoMode}
    setRefetch={setRefetch}
    refetch={refetch}
  />
  <Box
    height = {pageSplit[0] + "vh"}
    sx={{overflow: "hidden"}}
  >
    <Stack
      marginTop="50px"
      direction="row"
      justifyContent="space-evenly"
      alignContent={"center"}
    >
        <Stack
          direction="column"
          spacing={2}
        >
          {(dates !== null && dates !== undefined) &&
          <>
          <Typography paddingLeft={"20px"} variant="h1"> Termine </Typography>
            {(dates.length > 0) ?
            dates.map((row) => {
              return (
                <Card key={row.id} sx={{width:datesSize}}>
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                      {row.title}
                    </Typography>
                    <Typography variant="h3" color="text.secondary">
                      {row.case}
                    </Typography>
                    <Typography variant="h3" color="text.secondary">
                      {row.type}, {row.procedure}
                    </Typography>
                    <Typography variant="h3" color="red">
                      {row.info}
                    </Typography>
                  </CardContent>
                </Card>
              )})   
            :
            <Typography paddingLeft={"20px"} variant="h1"> Heute finden keine Termine statt. </Typography>
            }
          </>
          }
        </Stack>
        <NRWDivider direction={"row"}/>
        <Stack 
          direction={newsDirection}
          spacing={2}
        >
          {breakingNews.title &&
              <Card style={{ backgroundColor: 'red' }} sx={{width:newsSize[1]}}>
              <CardContent>
                <Typography gutterBottom variant="h1" component="div">
                  EIL +++ {breakingNews.title}
                </Typography>
                <Typography variant="h2" color="text.secondary">
                  {breakingNews.description}
                </Typography>
              </CardContent>
            </Card>
          }
          {newsCards[index] &&
          <Card
            sx={{width:newsSize[0], height:newsSize[1]}}
          >
            <Stack direction={imageInCardDirection}>
              <CardMedia
                component="img"
                image={newsCards[index].image[imageInCardDirection === 'column' ? 0 : 1]}
                height={newsImageSize[1]}
                width={newsImageSize[0]}
                style={{
                  ...(imageInCardDirection === 'column' && { objectFit: 'contain' })
                }}             
              />
              <CardContent>
                <Typography gutterBottom variant="h1" component="div">
                  {newsCards[index].title}
                </Typography>
                <Typography variant="h2" color="text.secondary">
                  {newsCards[index].text}
                </Typography>
              </CardContent>
              </Stack>
            </Card>
          }
        </Stack>
        </Stack>
        </Box>
        <NRWDivider direction={"column"}/>
        <Box
          height={pageSplit[1] + "vh"}
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Weather weather={weather} warnings={warnings} setWeatherWarningsExist={setWeatherWarningsExist} theme={currentTheme}/>
        </Box>
  </ThemeProvider>
)
}