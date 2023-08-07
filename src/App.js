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

  const tagesschauAPI = "https://www.tagesschau.de/api2/homepage/"
  const rssURL = "https://www.justiz.nrw.de/WebPortal_Relaunch/Service/rss/termine/index.php"
  //! OpenWeatherMap API Key hier, entferen und ändern vor Veröffentlichung
  const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=51.959775&lon=7.624631&lang=de&units=metric&appid=a286d415c1da274ee1d4f134b1db4117"
  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=51.959775&lon=7.624631&lang=de&appid=a286d415c1da274ee1d4f134b1db4117"
  const proxyUrl = 'https://cors.jonas-1.workers.dev/?';


  const [news, setNews] = useState({
    "news": [
      {
        "sophoraId": "merz-kritik-102",
        "externalId": "51ba5d46-8240-4bb8-9f44-51d23c6b0b58",
        "title": "Merz relativiert Aussagen zu AfD-Zusammenarbeit",
        "date": "2023-07-24T10:31:20.342+02:00",
        "teaserImage": {
          "alttext": "Friedrich Merz",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/15e1126e-f913-4d61-86fa-3ffa0ef2cb30/AAABiYcGOvw/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Merz"
          },
          {
            "tag": "CDU"
          },
          {
            "tag": "AfD"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/merz-kritik-102~_view-hasChanged_lastKnown-123304EC53AC1206A5E8518ECCF26907.json",
        "content": [
          {
            "value": "<strong>CDU-Chef Merz hat parteiintern heftige Kritik geerntet, nachdem er gestern seine Vorstellungen zum Umgang mit der AfD auf kommunaler Ebene erläuterte. Jetzt veröffentlichte er eine Klarstellung, in der er seine Aussagen relativierte.</strong>",
            "type": "text"
          },
          {
            "value": "Nach massiver Kritik auch aus der eigenen Partei hat CDU-Chef Friedrich Merz seine Äußerungen zur Zusammenarbeit mit der AfD relativiert. \"Um es noch einmal klarzustellen, und ich habe es nie anders gesagt: Die Beschlusslage der CDU gilt\", schrieb Merz am Morgen auf Twitter. \"Es wird auch auf kommunaler Ebene keine Zusammenarbeit der CDU mit der AfD geben.\"",
            "type": "text"
          },
          {
            "social": {
              "account": "_FriedrichMerz",
              "htmlEmbed": "<blockquote class=\"twitter-tweet\"><p lang=\"de\" dir=\"ltr\">Um es noch einmal klarzustellen, und ich habe es nie anders gesagt: Die Beschlusslage der <a href=\"https://twitter.com/CDU?ref_src=twsrc%5Etfw\">@CDU</a> gilt. Es wird auch auf kommunaler Ebene keine Zusammenarbeit der <a href=\"https://twitter.com/hashtag/CDU?src=hash&amp;ref_src=twsrc%5Etfw\">#CDU</a> mit der AfD geben. (FM)</p>&mdash; Friedrich Merz (@_FriedrichMerz) <a href=\"https://twitter.com/_FriedrichMerz/status/1683372734754050048?ref_src=twsrc%5Etfw\">July 24, 2023</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n",
              "shorttext": "Social-Media-Beitrag auf Twitter von Friedrich Merz: \"Um es noch einmal klarzustellen, und ich habe es nie anders gesagt: Die Beschlusslage der <a href=\"https://twitter.com/CDU\" type=\"extern\">@CDU</a> gilt. Es wird auch auf kommunaler Ebene keine Zusammenarbeit der <a href=\"https://twitter.com/hashtag/CDU?src=hash\" type=\"extern\">#CDU</a> mit der AfD geben. (FM)\" ",
              "title": "Friedrich Merz (@_FriedrichMerz) via Twitter",
              "url": "https://twitter.com/_FriedrichMerz/status/1683372734754050048",
              "username": "Friedrich Merz",
              "type": "twitter"
            },
            "type": "socialmedia"
          },
          {
            "value": "Merz hatte im ZDF-Sommerinterview zwar bekräftigt, dass die Union nicht mit der AfD kooperieren werde. Er beschränkte dies aber auf \"gesetzgebende Körperschaften\" - etwa auf europäischer, Bundes- oder Landesebene. ",
            "type": "text"
          },
          {
            "value": "Wenn in Thüringen ein Landrat und in Sachsen-Anhalt ein Bürgermeister von der AfD gewählt worden sei, dann seien das demokratische Wahlen, so Merz. \"Das haben wir doch zu akzeptieren. Und natürlich muss in den Kommunalparlamenten dann auch nach Wegen gesucht werden, wie man gemeinsam die Stadt, das Land, den Landkreis gestaltet\", hatte <a href=\"https://www.tagesschau.de/api2u/inland/innenpolitik/merz-afd-kommunen-100.json\" type=\"intern\">er im ZDF-Sommerinterview erklärt</a>.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Friedrich Merz beim ZDF-Sommerinterview",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/b1dd2aa1-9b46-48d8-90af-05bb604ae050/AAABiYOs6s4/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/inland/innenpolitik/merz-afd-kommunen-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "CDU-Chef",
              "text": "Anders als auf Bundes- oder Landesebene hält CDU-Chef Merz in den Kommunen einen pragmatischen Umgang mit der AfD für geboten.",
              "title": "Merz für pragmatischen Umgang mit AfD in Kommunen"
            },
            "type": "box"
          },
          {
            "value": "Mit seinen Äußerungen löste der CDU-Chef viel Kritik in der eigenen Partei aus. Berlins Regierender Bürgermeister Kai Wegner schrieb auf Twitter: \"Die AfD kennt nur Dagegen und Spaltung. Wo soll es da Zusammenarbeit geben? Die CDU kann, will und wird nicht mit einer Partei zusammenarbeiten, deren Geschäftsmodell Hass, Spaltung und Ausgrenzung ist.\"",
            "type": "text"
          },
          {
            "social": {
              "account": "kaiwegner",
              "htmlEmbed": "<blockquote class=\"twitter-tweet\"><p lang=\"de\" dir=\"ltr\">Die AfD kennt nur Dagegen und Spaltung. Wo soll es da ZUSAMMENarbeit geben? Die CDU kann, will und wird nicht mit einer Partei zusammenarbeiten, deren Geschäftsmodell Hass, Spaltung und Ausgrenzung ist.</p>&mdash; Kai Wegner (@kaiwegner) <a href=\"https://twitter.com/kaiwegner/status/1683167477734203393?ref_src=twsrc%5Etfw\">July 23, 2023</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n",
              "shorttext": "Social-Media-Beitrag auf Twitter von Kai Wegner: \"Die AfD kennt nur Dagegen und Spaltung. Wo soll es da ZUSAMMENarbeit geben? Die CDU kann, will und wird nicht mit einer Partei zusammenarbeiten, deren Geschäftsmodell Hass, Spaltung und Ausgrenzung ist.\" ",
              "title": "Kai Wegner (@kaiwegner) via Twitter",
              "url": "https://twitter.com/kaiwegner/status/1683167477734203393",
              "username": "Kai Wegner",
              "type": "twitter"
            },
            "type": "socialmedia"
          },
          {
            "value": "<h2>\"Rechtsradikal bleibt rechtsradikal\"</h2>",
            "type": "headline"
          },
          {
            "value": "Die Vizepräsidentin des Bundestages, Yvonne Magwas, die auch dem CDU-Präsidium angehört, schrieb auf Twitter: \"Ob Ortschaftsrat oder Bundestag, rechtsradikal bleibt rechtsradikal. Für Christdemokraten sind Rechtsradikale immer Feind!\" ",
            "type": "text"
          },
          {
            "social": {
              "account": "yvonnemagwas",
              "htmlEmbed": "<blockquote class=\"twitter-tweet\"><p lang=\"de\" dir=\"ltr\">Ob Ortschaftsrat oder Bundestag, rechtsradikal bleibt rechtsradikal. Für Christdemokraten sind Rechtsradikale IMMER Feind!</p>&mdash; Yvonne Magwas (@YvonneMagwas) <a href=\"https://twitter.com/YvonneMagwas/status/1683196169587945472?ref_src=twsrc%5Etfw\">July 23, 2023</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n",
              "shorttext": "Social-Media-Beitrag auf Twitter von Yvonne Magwas: \"Ob Ortschaftsrat oder Bundestag, rechtsradikal bleibt rechtsradikal. Für Christdemokraten sind Rechtsradikale IMMER Feind!\" ",
              "title": "Yvonne Magwas (@yvonnemagwas) via Twitter",
              "url": "https://twitter.com/yvonnemagwas/status/1683196169587945472",
              "username": "Yvonne Magwas",
              "type": "twitter"
            },
            "type": "socialmedia"
          },
          {
            "value": "Auch Hessens Ministerpräsident Boris Rhein (CDU) schloss jegliche Kooperation mit den Rechtspopulisten für seinen Landesverband aus. \"Für die CDU Hessen gilt die Brandmauer, wir arbeiten mit denen nicht zusammen\", sagte Rhein, der zugleich Landesvorsitzender der hessischen CDU und deren Spitzenkandidat für die Landtagswahl in seinem Bundesland Anfang Oktober ist, im gemeinsamen <em>Morgenmagazin von ARD und ZDF</em>.",
            "type": "text"
          },
          {
            "value": "\"Das sind keine Partner von uns.\" Die AfD sei ein \"rechtsextremistischer Prüffall\" für den Verfassungsschutz und deren Jugendorganisation \"gesichert rechtsextrem\", ergänzte Rhein. Für die hessische CDU könne er daher \"sehr klar sagen\", dass die Brandmauer \"klar steht\".",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Ein Mann mit einem T-Shirt mit AfD-Logo sitzt während des Landesparteitags der Alternative für Deutschland Hessen im Haus der Begegnung im Publikum. ",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/8d009a06-263a-48f5-bf31-6143c1917252/AAABiQsaQQE/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/inland/innenpolitik/afd-erfolge-deutschlandtrend-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "Nach DeutschlandTrend",
              "text": "In Umfragen ist die AfD weiter im Höhenflug - anderen Parteien fehlen Strategien zum Umgang mit der AfD.",
              "title": "Wie umgehen mit den AfD-Erfolgen?"
            },
            "type": "box"
          },
          {
            "value": "<h2>Verweis auf  beschlossenes Kooperationsverbot</h2>",
            "type": "headline"
          },
          {
            "value": "Die Bundesvorsitzende der Frauen Union, Annette Widmann-Mauz (CDU), erklärte mit Blick auf die AfD: \"Die Partei u. ihre menschenverachtenden & demokratiefeindlichen Inhalte bleiben die gleichen, egal auf welcher Ebene.\" ",
            "type": "text"
          },
          {
            "value": "Der CDU-Außenpolitiker Norbert Röttgen betonte, seine Partei habe ein Kooperationsverbot mit der AfD beschlossen. \"Jeder, der das ändern will, muss dafür auf einem Bundesparteitag der CDU eine Mehrheit finden.\" ",
            "type": "text"
          },
          {
            "value": "In dem sogenannten Unvereinbarkeitsbeschluss der CDU, auf denen mehrere Parteimitglieder verwiesen, heißt es unter anderem: \"Jeder, der in der CDU für eine Annäherung oder gar Zusammenarbeit mit der AfD plädiert, muss wissen, dass er sich einer Partei annähert, die rechtsextremes Gedankengut, Antisemitismus und Rassismus in ihren Reihen bewusst duldet. (...). Die CDU lehnt jegliche Koalitionen oder ähnliche Formen der Zusammenarbeit mit der AfD ab.\" ",
            "type": "text"
          },
          {
            "value": "<h2>Auch CSU auf Distanz zu Merz</h2>",
            "type": "headline"
          },
          {
            "value": "CSU-Chef Markus Söder ging klar auf Distanz zum CDU-Vorsitzenden. \"Die CSU lehnt jede Zusammenarbeit mit der AfD ab - egal auf welcher politischen Ebene\", schrieb der bayerische Ministerpräsident. \"Denn die AfD ist demokratiefeindlich, rechtsextrem und spaltet unsere Gesellschaft. Das ist mit unseren Werten nicht vereinbar.\" ",
            "type": "text"
          },
          {
            "social": {
              "account": "Markus_Soeder",
              "htmlEmbed": "<blockquote class=\"twitter-tweet\"><p lang=\"de\" dir=\"ltr\">Die CSU lehnt jede Zusammenarbeit mit der AfD ab - egal auf welcher politischen Ebene. Denn die AfD ist demokratiefeindlich, rechtsextrem und spaltet unsere Gesellschaft. Das ist mit unseren Werten nicht vereinbar. Die AfD fordert den Austritt aus EU und Nato und schwächt damit…</p>&mdash; Markus Söder (@Markus_Soeder) <a href=\"https://twitter.com/Markus_Soeder/status/1683364001923694593?ref_src=twsrc%5Etfw\">July 24, 2023</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n",
              "shorttext": "Social-Media-Beitrag auf Twitter von Markus Söder: \"Die CSU lehnt jede Zusammenarbeit mit der AfD ab - egal auf welcher politischen Ebene. Denn die AfD ist demokratiefeindlich, rechtsextrem und spaltet unsere Gesellschaft. Das ist mit unseren Werten nicht vereinbar. Die AfD fordert den Austritt aus EU und Nato und schwächt damit…\" ",
              "title": "Markus Söder (@Markus_Soeder) via Twitter",
              "url": "https://twitter.com/Markus_Soeder/status/1683364001923694593",
              "username": "Markus Söder",
              "type": "twitter"
            },
            "type": "socialmedia"
          },
          {
            "box": {
              "image": {
                "alttext": "Friedrich Merz (links) im Gespräch mit Ralf Fücks",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/4ad026cb-cccf-42f0-8b00-00656e24b3b8/AAABiMn-ttY/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/inland/innenpolitik/cdu-grundsatzkonvent-zusammenfassung-102.json\" type=\"intern\">mehr</a>",
              "subtitle": "Konvent zu Grundsatzprogramm",
              "text": "Die CDU hat beim Parteikonvent in Berlin auch über die Abgrenzung zur AfD beraten.",
              "title": "CDU auf Selbstfindungskurs"
            },
            "type": "box"
          },
          {
            "value": "<h2>Linnemann verteidigt Merz</h2>",
            "type": "headline"
          },
          {
            "value": "Der neue CDU-Generalsekretär Carsten Linnemann verteidigte Merz hingegen: Für die CDU sei klar, dass es \"keine Zusammenarbeit mit der AfD\" gebe, \"egal auf welcher Ebene\", sagte er der \"Bild\". \"Das sieht auch Friedrich Merz so, wenngleich er zu Recht auf die schwierige Umsetzung vor Ort hinweist. Denn wenn es im Kommunalparlament etwa um eine neue Kita geht, können wir nicht nur deshalb dagegen stimmen, weil die AfD mitstimmt. Wir machen uns von Rechtsradikalen nicht abhängig.\"",
            "type": "text"
          },
          {
            "value": "Der AfD-Vorsitzende Tino Chrupalla schrieb zu der Debatte auf Twitter: \"Nun fallen erste Steine aus der schwarz-grünen Brandmauer. In Ländern und Bund werden wir die Mauer gemeinsam niederreißen. Gewinner werden die Bürger sein, die Wohlstand, Freiheit und Sicherheit durch interessengeleitete Politik wiedergewinnen.\" ",
            "type": "text"
          },
          {
            "social": {
              "account": "Tino_Chrupalla",
              "htmlEmbed": "<blockquote class=\"twitter-tweet\"><p lang=\"de\" dir=\"ltr\">Nun fallen erste Steine aus der schwarz-grünen Brandmauer. In Ländern und Bund werden wir die Mauer gemeinsam niederreißen. Gewinner werden die Bürger sein, die Wohlstand, Freiheit und Sicherheit durch interessengeleitete Politik wiedergewinnen.<a href=\"https://t.co/yC3Sarenoy\">https://t.co/yC3Sarenoy</a></p>&mdash; Tino Chrupalla (@Tino_Chrupalla) <a href=\"https://twitter.com/Tino_Chrupalla/status/1683205275455483906?ref_src=twsrc%5Etfw\">July 23, 2023</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n",
              "shorttext": "Social-Media-Beitrag auf Twitter von Tino Chrupalla: \"Nun fallen erste Steine aus der schwarz-grünen Brandmauer. In Ländern und Bund werden wir die Mauer gemeinsam niederreißen. Gewinner werden die Bürger sein, die Wohlstand, Freiheit und Sicherheit durch interessengeleitete Politik wiedergewinnen.https://t.co/yC3Sarenoy\" ",
              "title": "Tino Chrupalla (@Tino_Chrupalla) via Twitter",
              "url": "https://twitter.com/Tino_Chrupalla/status/1683205275455483906",
              "username": "Tino Chrupalla",
              "type": "twitter"
            },
            "type": "socialmedia"
          },
          {
            "value": "<h2>Kritik aus der Ampel</h2>",
            "type": "headline"
          },
          {
            "value": "SPD-Generalsekretär Kevin Kühnert sprach von einem \"Tabubruch\". Es sei jetzt Zeit für einen \"Richtungsstreit in der CDU\", sagte Kühnert im gemeinsamen <em>Morgenmagazin von ARD und ZDF</em>. Er sprach von einem Kurswechsel, den Merz offensichtlich für seine CDU anstrebe - und den er auf eine \"total brüchige Argumentation\" aufbaue. ",
            "type": "text"
          },
          {
            "value": "Kritik an Merz äußerte auch die Grünen-Vorsitzende Ricarda Lang in der <em>ARD</em>: \"Erst reduziert er diese Partei auf eine bessere Alternative für Deutschland und jetzt baut er die Brandmauer - die ja selbst von der Union immer wieder beschworen wurde - ein kleines Stück ab.\" ",
            "type": "text"
          },
          {
            "value": "Die FDP-Politikerin Marie-Agnes Strack-Zimmermann schrieb: \"Die Kommunalpolitik ist die Wiege unserer Demokratie. Gerade hier darf Brandmauer zur antidemokratischen AfD nicht fallen. Denn sonst fällt sie in den 'gesetzgebenden Ebenen' erst recht.\" ",
            "type": "text"
          },
          {
            "value": "Laut dem Linken-Fraktionsvorsitzenden Dietmar Bartsch bekommt eine Aufweichung der auch von Merz selbst immer wieder formulierten \"Brandmauer\" zwischen AfD und CDU nach dessen jüngsten Äußerungen \"riesige Löcher. \"Es ist eine Frage der Zeit, wann sie einstürzt\", sagte Bartsch dem \"Tagesspiegel\". ",
            "type": "text"
          },
          {
            "title": "Heftige Kritik an Merz-Äußerungen",
            "date": "2023-07-24T06:42:00.951+02:00",
            "teaserImage": {
              "copyright": "ARD-aktuell",
              "alttext": "Hintergrundbild für den Audioplayer",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMNQQ/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMOLk/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMPOY/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMQDM/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMQ7w/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMG0w/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMHqw/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMIg0/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMJbE/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMLgk/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tME_8/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMF58/16x9-1920.jpg"
              },
              "type": "image"
            },
            "tracking": [
              {
                "sid": "app.multimedia.audio.audio-166930",
                "src": "ard-aktuell",
                "ctp": "nicht-definiert",
                "pdt": "20230724T0642",
                "otp": "audio",
                "cid": "audio-166930",
                "pti": "Heftige_Kritik_an_Merz-Aeusserungen",
                "bcr": "ja",
                "type": "generic"
              }
            ],
            "text": "Torben Ostermann, RB, ARD Berlin, 24.07.2023, 06:42 Uhr",
            "stream": "https://media.tagesschau.de/audio/2023/0724/AU-20230724-0640-5100.mp3",
            "type": "audio"
          },
          {
            "value": "<strong>Über dieses Thema berichtete tagesschau24 am 24. Juli 2023 um 10:00 Uhr.</strong>",
            "type": "text"
          },
          {
            "related": [
              {
                "teaserImage": {
                  "title": "",
                  "copyright": "Wulf Rohwedder",
                  "alttext": "Smartphone mit Tagesschau-Messenger-Angebot",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2021-06-15T16:35:56.006+02:00",
                "sophoraId": "messenger-116",
                "externalId": "0d7f257f-9c58-4d87-88c1-6de1a3fdf2c3",
                "topline": "Jetzt abonnieren",
                "title": "tagesschau direkt auf Ihrem Messenger",
                "details": "https://www.tagesschau.de/api2u/inland/messenger-116.json",
                "detailsweb": "https://www.tagesschau.de/inland/messenger-116.html",
                "type": "story"
              }
            ],
            "type": "related"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.innenpolitik.merz-kritik-102",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1031",
            "otp": "meldung",
            "cid": "merz-kritik-102",
            "pti": "Merz_relativiert_nach_Kritik_Aussagen_zur_Zusammenarbeit_mit_AfD",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Nach Kritik an CDU-Chef",
        "firstSentence": "Im ZDF hatte CDU-Chef Merz ein gemeinsames Vorgehen mit der AfD auf kommunaler Ebene nicht klar ausgeschlossen.",
        "video": {
          "sophoraId": "video-1225536",
          "externalId": "2131a984-2914-45c5-8b28-51df9e0c8d99",
          "title": "APP0945 NIF- Klarstellung Merz_vapp.mxf",
          "date": "2023-07-24T10:31:20.145+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225536~_view-hasChanged_lastKnown-3D0C99FC606EA5C2CA310748B6929F21.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225536",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T1031",
              "otp": "video",
              "cid": "video-1225536",
              "pti": "APP0945_NIF-_Klarstellung_Merz_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225536",
              "program": "Tagesschau",
              "title": "APP0945_NIF-_Klarstellung_Merz_vapp.mxf",
              "length": "18",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225536.html",
              "c7": "p7,video-1225536",
              "c8": "p8,18",
              "c9": "p9,Tagesschau_APP0945_NIF-_Klarstellung_Merz_vapp.mxf_24.07.2023_1031",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0946-1400.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0946-1400.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0946-1400.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0946-1400.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/c0b453cc-d9d7-41a1-a1c6-b8fdef0b9bb5/AAABiYbdRmI/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/innenpolitik/merz-kritik-102.json",
        "detailsweb": "https://www.tagesschau.de/inland/innenpolitik/merz-kritik-102.html",
        "shareURL": "https://www.tagesschau.de/inland/innenpolitik/merz-kritik-102.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "ressort": "inland",
        "crop": {
          "id": "TV-20230724-0946-1400",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Umgang mit der AfD",
          "mainTexts": [
            "Merz veröffentlicht Klarstellung",
            "\"Keine Zusammen&shy;\narbeit mit der AfD\"",
            "Zuvor massive Kritik auch aus der CDU",
            "Merz hatte kommunal Kooperation erwähnt"
          ],
          "sceneSrcTexts": [
            "Quelle: ZDF",
            "Quelle: ZDF",
            "Quelle: ZDF",
            "Quelle: ZDF",
            "Quelle: ZDF"
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              214
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              214
            ],
            [
              40,
              11,
              0
            ],
            [
              3400,
              1,
              0
            ],
            [
              3400,
              2,
              0
            ],
            [
              4080,
              9,
              218
            ],
            [
              4080,
              2,
              1
            ],
            [
              4080,
              3,
              1
            ],
            [
              4080,
              0,
              218
            ],
            [
              7280,
              2,
              0
            ],
            [
              7960,
              9,
              148
            ],
            [
              7960,
              2,
              1
            ],
            [
              7960,
              3,
              2
            ],
            [
              7960,
              0,
              148
            ],
            [
              10000,
              9,
              232
            ],
            [
              10000,
              0,
              232
            ],
            [
              11480,
              2,
              0
            ],
            [
              12200,
              2,
              1
            ],
            [
              12200,
              3,
              3
            ],
            [
              14440,
              9,
              158
            ],
            [
              14440,
              0,
              158
            ],
            [
              16760,
              2,
              0
            ],
            [
              17840,
              12,
              4
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "griechenland-braende-evakuierungen-100",
        "externalId": "6da1f59a-83a7-4b6a-9e8a-5007b41e7f67",
        "title": "Was Griechenland-Reisende wissen müssen",
        "date": "2023-07-24T11:39:18.891+02:00",
        "teaserImage": {
          "alttext": "Ein Löschhubschrauber wirft Wasser ab, um einen Flächenbrand in Diakopto, Egio, Griechenland, zu löschen,",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/17ba1bf1-029d-4d4d-a28c-b0d13e6a7844/AAABiYbc1pM/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "FAQ"
          },
          {
            "tag": "Griechenland"
          },
          {
            "tag": "Waldbrände"
          },
          {
            "tag": "Tourismus"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/griechenland-braende-evakuierungen-100~_view-hasChanged_lastKnown-9E75D8CA2A2B38DED7F6FA2B10EB1757.json",
        "content": [
          {
            "value": "<strong>In vielen Regionen Griechenlands brennt es. Die Situation ist für Tausende Touristen unübersichtlich. Wie reagieren die Behörden? Ist es möglich, eine gebuchte Reise noch zu stornieren? Und welche Rechte haben Fluggäste? </strong>",
            "type": "text"
          },
          {
            "value": "<h2>Wo brennt es in Griechenland?  </h2>",
            "type": "headline"
          },
          {
            "value": "Am heftigsten brennt es auf der Insel <strong>Rhodos</strong> - inzwischen seit gut einer Woche. Am Wochenende gerieten die Feuer außer Kontrolle. Zehntausende Touristen mussten evakuiert werden. In der Nacht kämpften Hunderte Feuerwehrleute dagegen, dass die Flammen auf weitere Dörfer und Ortschaften übergriffen. Mit dem ersten Tageslicht sollten abermals Löschflugzeuge und Hubschrauber rund um die Ortschaft Laerma eingesetzt werden, wie die Feuerwehr mitteilte. ",
            "type": "text"
          },
          {
            "value": "Auch auf <strong>Korfu</strong> sind nach langer Trockenheit Großbrände ausgebrochen. Inzwischen konnte der Waldbrand unter Kontrolle gebracht werden. ",
            "type": "text"
          },
          {
            "value": "Große Brände wurden ebenfalls auf den Inseln <strong>Euböa</strong> und <strong>Evia</strong>, bei <strong>Karystos</strong>, und auf der Halbinsel <strong>Peloponnes</strong> nahe der kleinen Hafenstadt Egio gemeldet. Auch dort wurden zahlreiche Dörfer evakuiert. Niemand sei bislang verletzt worden, teilte der Rettungsdienst mit. ",
            "type": "text"
          },
          {
            "value": "In den meisten Regionen Mittel- und Südgriechenlands sowie auf zahlreichen Inseln ist die Waldbrandgefahr extrem hoch. Dies wird auch in den kommenden Tagen so bleiben, warnte der griechische Zivilschutz. ",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Ein Löschflugzeug lässt Wasser ab, um einen Brand auf Rhodos zu bekämpfen",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/a1911d74-f39b-434b-99a3-fd0767ea4fd9/AAABiYWtUyM/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/ausland/europa/griechenland-feuer-124.json\" type=\"intern\">mehr</a>",
              "subtitle": "Waldbrände in Griechenland",
              "text": "Die Brände auf der griechischen Insel Rhodos sind weiter nicht unter Kontrolle - und die Waldbrandgefahr bleibe hoch, warnt die Feuerwehr.",
              "title": "Keine Entwarnung für Rhodos"
            },
            "type": "box"
          },
          {
            "value": "<h2>Warum brennt es so extrem? </h2>",
            "type": "headline"
          },
          {
            "value": "Seit Tagen hat eine starke Hitzewelle mit vielerorts Temperaturen von über 40 Grad das Land im Griff. Auch zuvor war es bereits länger heiß und trocken. Die Auslöser der Brände sind noch unklar. Wegen starker Winde wüteten zuletzt bereits riesige Waldbrände im Westen Attikas - dem Großraum Athen - sowie in Loutraki nahe Korinth und auf Rhodos.",
            "type": "text"
          },
          {
            "value": "\"Die Situation auf Rhodos ist schwierig, weil das Feuer nicht unter Kontrolle ist\", erklärte der Sprecher der griechischen Feuerwehr, Vassilis Vathrakogiannis. Es herrsche ein \"explosives Gemisch mit geringer Luftfeuchtigkeit, hohen Boden- und Lufttemperaturen und starkem Wind\". ",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "",
                "copyright": "picture alliance/dpa/Bundespoliz",
                "alttext": "Lichterloh brennt der Wald in einem gesperrten Teil um einen Gipfel im Nationalpark Harz.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/8f113e99-828e-49f9-9ec0-290a91b3f295/AAABhwPkOdk/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/wissen/klima/waldbrand-wald-praevention-forschung-101.json\" type=\"intern\">mehr</a>",
              "subtitle": "Neue Konzepte in Deutschland",
              "text": "Der Klimawandel hinterlässt auch in Deutschland Spuren: Dürre, Hitze und lange Trockenperioden.",
              "title": "Wie Waldbrände verhindert werden können"
            },
            "type": "box"
          },
          {
            "value": "<h2>Wie viele Menschen sind von den Evakuierungen betroffen? </h2>",
            "type": "headline"
          },
          {
            "value": "Auf <strong>Rhodos</strong> waren am Samstag bei einer der größten Evakuierungsaktion in der Geschichte Griechenlands etwa 20.000 Menschen aus dem Südosten der Insel in Sicherheit gebracht worden. Tausende Touristen verbrachten die zweite Nacht in Sporthallen und Schulen. Viele warteten im Flughafen auf die nächste Möglichkeit, um abzufliegen. Fast 8.000 Urlauber sind allein als Kunden des Reisekonzerns TUI betroffen.  Insgesamt hat TUI derzeit etwa 39.000 Gäste aus vielen Ländern auf Rhodos.",
            "type": "text"
          },
          {
            "value": "Auf <strong>Korfu</strong> wurden in der Nacht mehr als 2.400 Menschen in Sicherheit gebracht. Feuer im Norden der Insel hätten zur \"vorsorglichen Evakuierung von 2.466 Personen\" geführt, sagte ein Feuerwehrsprecher der Nachrichtenagentur AFP. Inzwischen ist der Waldbrand unter Kontrolle. Die Touristen könnten nach und nach zurück in ihre Hotels zurückkehren, berichtete der örtliche staatliche Radiosender. ",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Touristen auf Rhodos wurden am Sonntag in einem Stadion in Sicherheit gebracht.",
                "alttext": "Evakuierte Touristen sitzen auf und stehen neben Matratzen. Sie wurden wegen der Waldbrände in einem Stadion untergebracht.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/01f63780-6152-4fd4-8f9d-a2f89eb403dd/AAABiYcL1Ug/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>Wie reagieren die Reiseveranstalter? </h2>",
            "type": "headline"
          },
          {
            "value": "Angesichts der starken Waldbrände auf Rhodos streichen Reisekonzerne Flüge und bieten Stornierungen für die kommenden Tage an. So gab <strong>TUI</strong> am Sonntag bekannt, vorerst keine Touristen mehr auf die Insel zu bringen. Die Flugverbindungen blieben aber bestehen, um Gäste zurück nach Deutschland zu fliegen. Zudem könnten viele Reisende von ihrem Flug zurücktreten. ",
            "type": "text"
          },
          {
            "value": "Für alle Anreisen vom 26. bis einschließlich zum 28. Juli 2023 sei eine gebührenfreie Änderung möglich. TUI-Kunden sollten sich dafür an ihr Reisebüro oder Buchungsportal wenden. ",
            "type": "text"
          },
          {
            "value": "Auch der Konzern<strong> DER Touristik</strong> schränkt sein Reiseangebot stark ein: \"Alle Reisen in den Süden von Rhodos werden aktiv bis einschließlich Mittwoch, 26.7.2023 abgesagt\", teilte eine Pressesprecherin mit. Für alle anderen Rhodos-Regionen biete der Konzern kostenlose Stornierungen und Umbuchungen bis zum Reisebeginn 26. Juli an. ",
            "type": "text"
          },
          {
            "value": "Die Reiseveranstalter stehen in engem Kontakt mit den Behörden vor Ort und arbeiten mit Hochdruck an Lösungen für die von den Evakuierungen betroffenen Gäste, wie eine Sprecherin des Deutschen Reiseverbands (DRV) versicherte. \"Sollten in den kommenden Tagen geplante Reisen aufgrund der aktuellen Situation nicht möglich sein, werden die Veranstalter diese absagen. ",
            "type": "text"
          },
          {
            "value": "<h2>Können Touristen aus Rhodos auch ohne Ausweispapiere ausreisen? </h2>",
            "type": "headline"
          },
          {
            "value": "Das griechische Außenministerium richtete am Flughafen von Rhodos einen Hotspot ein, wo Touristen unbürokratisch eine Ausreisegenehmigung erhalten, wenn sie keine Ausweispapiere mehr haben. Das berichtete der griechische Staatssender ERT. Viele Menschen hätten vor dem Feuer fliehen müssen und unter Umständen keine Zeit mehr gehabt, ihr Hab und Gut mitzunehmen. Zudem hat der Krisenstab des Zivilschutzes zwei Telefonnummern für ausländische Besucher eingerichtet, wenn sie Angehörige vermissen.",
            "type": "text"
          },
          {
            "value": "<h2>Kann die gebuchte Reise storniert werden? </h2>",
            "type": "headline"
          },
          {
            "value": "Nach Angaben des <a href=\"https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte/erdbeben-feuer-und-andere-krisenereignisse-ihre-rechte-am-urlaubsort-10380\" type=\"extern\">Bundesverbands der Verbraucherzentrale</a> können Urlauberinnen und Urlauber bei besonderen Belastungen durch \"außergewöhnliche Umstände\" wie Waldbrände stornieren oder die Reise vorzeitig abbrechen. <strong>Das gilt jedoch nur für Pauschalreisen</strong>. Ob die Situation im Urlaubsgebiet als gefährlich eingeschätzt wird, <a href=\"https://www.auswaertiges-amt.de/de/ReiseUndSicherheit/griechenlandsicherheit/211534\" type=\"extern\">kann man beim Auswärtigen Amt erfahren</a>.",
            "type": "text"
          },
          {
            "value": "Grundsätzlich können Naturkatastrophen wie Waldbrände in unmittelbarer Nähe des Reiseziels zur kostenfreien Stornierung berechtigen. Allerdings muss absehbar sein, dass der Urlaub zum Zeitpunkt der Reise durch die Brände oder die Dürre erheblich beeinträchtigt ist.",
            "type": "text"
          },
          {
            "value": "Zudem muss es eine zeitliche Verbindung zwischen der Rücktrittserklärung und dem Reisebeginn geben. Wer also erst in vier oder fünf Wochen verreist, der könne aktuell nichts tun, erklärte der Rechtsexperte Rossbeh Karimi im gemeinsamen <em>Morgenmagazin</em> von <em>ARD</em> und <em>ZDF</em>. ",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Einwohner und Touristen wurden am Samstag auch mit Fähren aus der Gefahrenzone auf Rhodos gebracht.",
                "alttext": "Fähre und Evakuierte auf Rhodos",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/9819b547-cf20-4231-bd7d-fba020464328/AAABiYb5phg/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>Was gilt für Individualurlauber? </h2>",
            "type": "headline"
          },
          {
            "value": "Wenn einzelne Reiseleistungen wie Flug, Hotel oder Ferienwohnung gebucht wurden, können diese nicht so einfach kostenfrei storniert werden, wie bei Pauschalreisen.",
            "type": "text"
          },
          {
            "value": "Laut <a href=\"https://www.adac.de/reise-freizeit/ratgeber/reiserecht/naturkatastrophe-terror/\" type=\"extern\">ADAC</a> kann beispielsweise eine einzeln gebuchte Unterkunft nicht kostenfrei storniert werden, wenn die Unterkunft zugänglich und ohne Gesundheitsgefahr bewohnbar ist.",
            "type": "text"
          },
          {
            "value": "<h2>Welche Rechte haben Fluggäste? </h2>",
            "type": "headline"
          },
          {
            "value": "Muss der Flug<strong> </strong>wegen einer Naturkatastrophe wie eines Waldbrandes annulliert werden, wird der Ticketpreis zurückerstattet, oder es ist eine Umbuchung möglich. Es muss sich allerdings um einen EU-Flug innerhalb der EU handeln. Das heißt: Entweder startet der Flug in der EU oder der Zielflughafen liegt innerhalb der EU und Reisende fliegen diesen mit einer europäischen Airline an.",
            "type": "text"
          },
          {
            "value": "Laut <a href=\"https://www.adac.de/reise-freizeit/ratgeber/reiserecht/naturkatastrophe-terror/\" type=\"extern\">ADAC</a> muss die Airline jedoch keine Entschädigung zahlen, \"wenn die Annullierung auf außergewöhnliche Umstände zurückgeht.\" Die Beweislast treffe die Airline. \"Sie muss nachweisen, dass sie alles unternommen hat, um die Beeinträchtigung für den Fluggast so gering wie möglich zu halten. Fällt der Flug wegen außergewöhnlicher Umstände aus oder findet er verspätet statt, können Fluggäste zusätzliche Kosten (zum Beispiel Stornogebühren für Hotel oder Mietwagen) nicht von der Airline ersetzt bekommen\", so der ADAC.",
            "type": "text"
          },
          {
            "value": "<strong>Über dieses Thema berichtete tagesschau24 am 24. Juli 2023 um 10:00 Uhr.</strong>",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.griechenland-braende-evakuierungen-100",
            "src": "ard-aktuell",
            "ctp": "FAQ",
            "pdt": "20230724T1139",
            "otp": "meldung",
            "cid": "griechenland-braende-evakuierungen-100",
            "pti": "Was_Griechenland-Reisende_wissen_muessen",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Waldbrände ",
        "firstSentence": "In vielen Regionen Griechenlands brennt es. Wie reagieren die Behörden? Welche Rechte haben Fluggäste?",
        "video": {
          "sophoraId": "video-1225400",
          "externalId": "a926d206-b96f-49fe-970c-43ecbd47062f",
          "title": "APP0410 Nif- Rhodos neu_vapp.mxf",
          "date": "2023-07-24T05:14:33.159+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225400~_view-hasChanged_lastKnown-2F3849E185D9DEC5DD3149B0D29E670C.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225400",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T0514",
              "otp": "video",
              "cid": "video-1225400",
              "pti": "APP0410_Nif-_Rhodos_neu_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225400",
              "program": "Tagesschau",
              "title": "APP0410_Nif-_Rhodos_neu_vapp.mxf",
              "length": "15",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225400.html",
              "c7": "p7,video-1225400",
              "c8": "p8,15",
              "c9": "p9,Tagesschau_APP0410_Nif-_Rhodos_neu_vapp.mxf_24.07.2023_0514",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0408-5300.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0408-5300.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0408-5300.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0408-5300.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/5aa99a91-8819-49b7-a814-eab54a16137e/AAABiYWob4I/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/griechenland-braende-evakuierungen-100.json",
        "detailsweb": "https://www.tagesschau.de/griechenland-braende-evakuierungen-100.html",
        "shareURL": "https://www.tagesschau.de/griechenland-braende-evakuierungen-100.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "crop": {
          "id": "TV-20230724-0408-5300",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Waldbrände in Griechenland",
          "mainTexts": [
            "Feuer auf Rhodos noch immer außer Kontrolle",
            "19.000 Menschen in Sicherheit gebracht",
            "46 Grad Hitze im Südwesten des Landes"
          ],
          "sceneSrcTexts": [
            "",
            "",
            "",
            "",
            ""
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              84
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              84
            ],
            [
              4520,
              9,
              290
            ],
            [
              4520,
              0,
              290
            ],
            [
              4920,
              1,
              0
            ],
            [
              4920,
              2,
              0
            ],
            [
              5600,
              2,
              1
            ],
            [
              5600,
              3,
              1
            ],
            [
              6040,
              9,
              326
            ],
            [
              6040,
              0,
              326
            ],
            [
              8080,
              9,
              164
            ],
            [
              8080,
              0,
              164
            ],
            [
              9440,
              2,
              0
            ],
            [
              10120,
              2,
              1
            ],
            [
              10120,
              3,
              2
            ],
            [
              11560,
              9,
              164
            ],
            [
              11560,
              0,
              164
            ],
            [
              13400,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "mutmasslicher-drohnenangriff-moskau-100",
        "externalId": "670c8f49-c303-4f70-b900-28c3249dee22",
        "title": "Kreml meldet Abschuss von Drohnen über Moskau",
        "date": "2023-07-24T12:18:03.705+02:00",
        "teaserImage": {
          "alttext": "Dieses Gebäude soll russischen Angaben zufolge bei einem Drohnenangriff beschädigt worden sein",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Ukraine"
          },
          {
            "tag": "Russland"
          },
          {
            "tag": "Moskau"
          },
          {
            "tag": "Drohnen"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/mutmasslicher-drohnenangriff-moskau-100~_view-hasChanged_lastKnown-85FBE61420E21D43AC455A69EE6144CA.json",
        "content": [
          {
            "value": "<strong>Russland hat nach eigener Darstellung einen ukrainischen Drohnenangriff abgewehrt: Zwei auf Moskau zielende Drohnen seien abgeschossen worden. Verletzte habe es nicht gegeben. Aus Kiew gab es keine Bestätigung.</strong>",
            "type": "text"
          },
          {
            "value": "Laut Angaben des russischen Verteidigungsministeriums ist Moskau in der Nacht erneut Ziel eines ukrainischen Drohnenangriffs geworden. Aus Kiew gab es dafür keine Bestätigung. Über die Flugabwehrsysteme der Stadt seien zwei ukrainische Drohnen abgefangen und zerstört worden, teilte das russische Ministerium auf Telegram mit. Es nannte den Vorfall einen \"terroristischen Angriff\". Verletzte habe es nicht gegeben.",
            "type": "text"
          },
          {
            "video": {
              "sophoraId": "video-1225516",
              "externalId": "81fb856d-e6ab-4442-9676-b6ec0b42cd46",
              "title": "Nach russischen Angaben offenbar Drohnenangriffe auf Moskau",
              "date": "2023-07-24T09:29:28.196+02:00",
              "teaserImage": {
                "title": "Sendungsbild",
                "copyright": "ARD-aktuell",
                "alttext": "Sendungsbild",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/b02fe047-714b-46b2-99d6-9b23371c3b06/AAABiYbNU2U/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "tags": [],
              "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225516~_view-hasChanged_lastKnown-3E493CE93C9A731A3FFDF810785E7A0F.json",
              "tracking": [
                {
                  "sid": "app.multimedia.video.video-1225516",
                  "src": "ard-aktuell",
                  "ctp": "SEGMENT",
                  "pdt": "20230724T0955",
                  "otp": "video",
                  "cid": "video-1225516",
                  "pti": "Nach_russischen_Angaben_offenbar_Drohnenangriffe_auf_Moskau",
                  "bcr": "ja",
                  "type": "generic"
                },
                {
                  "assetid": "video-1225516",
                  "program": "tagesschau",
                  "title": "Nach_russischen_Angaben_offenbar_Drohnenangriffe_auf_Moskau",
                  "length": "18",
                  "c2": "p2,N",
                  "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225516.html",
                  "c7": "p7,video-1225516",
                  "c8": "p8,18",
                  "c9": "p9,tagesschau_Nach_russischen_Angaben_offenbar_Drohnenangriffe_auf_Moskau_24.07.2023_0900",
                  "c10": "p10,Das_Erste",
                  "c12": "p12,content",
                  "c15": "p15,X005015399",
                  "c16": "p16,ARD_Information/ARD_Livestream",
                  "c18": "p18,N",
                  "type_nielsen": "content",
                  "type": "nielsen"
                }
              ],
              "streams": {
                "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0916-2200.webs.h264.mp4",
                "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0916-2200.webm.h264.mp4",
                "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0916-2200.webxl.h264.mp4",
                "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0916-2200.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
              },
              "alttext": "Sendungsbild",
              "copyright": "tagesschau",
              "type": "video"
            },
            "type": "video"
          },
          {
            "value": "Dem russischen Militär zufolge brachte Störfunk die Drohnen zum Absturz. Eine Drohne sei über dem Zentrum Moskaus, eine weitere im Süden der Stadt entdeckt worden. Nach Angaben eines Mitarbeiters der Notfalldienste wurde ein Bürohochhaus getroffen, möglicherweise auch durch Trümmer. Bürgermeister Sergej Sobjanin sprach von zwei getroffenen Gebäuden. ",
            "type": "text"
          },
          {
            "value": "Es handelte sich den Angaben zufolge nicht um Wohngebäude. Unklar war, ob die Drohnen die Häuser trafen, als sie abgeschossen wurden oder ob sie selbst das Ziel waren. ",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Stadtansicht Moskau (Aufnahme: Januar 2023)",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/9b64e3de-e626-4875-8ff6-2e68c1b6f21b/AAABiGtWL58/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/ausland/europa/moskau-drohnen-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "Kreml beschuldigt Kiew",
              "text": "Erneut wirft Russland der Ukraine versuchte Drohnenangriffe in der Region Moskau vor.",
              "title": "Offenbar Drohnen über Region Moskau abgeschossen"
            },
            "type": "box"
          },
          {
            "value": "<h2>Auch Angriff auf Krim gemeldet</h2>",
            "type": "headline"
          },
          {
            "value": "Der Fernsehsender des russischen Verteidigungsministeriums veröffentlichte auf Telegram ein kurzes Video, das ein beschädigtes Hochhaus mit fehlenden Fenstern in den oberen Stockwerken zeigt. Andere russische Telegram-Kanäle, die mit russischen Sicherheitskräften in Verbindung gebracht werden, zeigten Aufnahmen von Glas- und Betontrümmern.",
            "type": "text"
          },
          {
            "value": "Russland meldete neben einem Drohnenangriff auf Moskau auch einen Drohnenangriff auf die annektierte Halbinsel Krim. Dabei sei ein Munitionsdepot in der Stadt Dschankoj getroffen worden, teilte der von Russland eingesetzte Gouverneur, Sergej Axjonow, mit. Auch ein Wohngebäude in der Region sei getroffen worden. Die Luftabwehr habe elf Dohnen abgefangen. Es war zunächst unklar, ob das Munitionslager direkt von einer Drohne oder von herabfallenden Drohnentrümmern getroffen worden sein soll. ",
            "type": "text"
          },
          {
            "box": {
              "text": "Angaben zu Kriegsverlauf, Beschuss und Opfern durch offizielle Stellen der russischen und der ukrainischen Konfliktparteien können in der aktuellen Lage nicht unmittelbar von unabhängiger Stelle überprüft werden.",
              "title": "Konfliktparteien als Quelle"
            },
            "type": "box"
          },
          {
            "value": "<h2>Moskau: Keine verschärften Sicherheitsmaßnahmen nötig</h2>",
            "type": "headline"
          },
          {
            "value": "Dennoch sieht der Kreml keinen Grund für eine Verschärfung der Sicherheitsvorkehrungen für die russische Hauptstadt. \"Das ist hier kaum nötig\", sagte Kremlsprecher Dmitri Peskow nach einem Bericht der Nachrichtenagentur Interfax. Die Sicherheitsorgane arbeiteten ohnehin auf Hochtouren. Es werde \"rund um die Uhr sehr angespannte Arbeit geleistet\". ",
            "type": "text"
          },
          {
            "value": "Auch die mehrfach angegriffene Brücke zur Krim werde ständig überwacht, sagte Peskow. Auf diese Weise habe der Geheimdienst einen neuen Anschlag auf das 19 Kilometer lange Bauwerk verhindern können. Damit kommentierte Peskow Meldungen über angebliche Sprengstoffspuren, die der Geheimdienst FSB auf einem türkischen Frachter gefunden haben will, der die Meerenge von Kertsch durchqueren wollte. ",
            "type": "text"
          },
          {
            "value": "<h2>Zuletzt wiederholt Berichte über Drohnenangriffe</h2>",
            "type": "headline"
          },
          {
            "value": "Dschankoj ist ein Landkreis im Nordosten der Krim. Hier sind viele Lager und Depots zur Versorgung der russischen Besatzungstruppen im Süden der Ukraine untergebracht. Über die Krim läuft die wichtigste Versorgungslinie dieser Einheiten. In der Region liegt auch ein russischer Luftwaffenstützpunkt.",
            "type": "text"
          },
          {
            "value": "Die Ukraine führt derzeit eine Gegenoffensive, um besetzte Gebiete zurückzuerobern. Nach russischen Angriffen auf die ukrainische Schwarzmeerregion <a href=\"https://www.tagesschau.de/api2u/ausland/europa/ukraine-russland-angriff-odessa-100.json\" type=\"intern\">hatte der ukrainische Präsident Wolodymyr Selenskyj zudem \"Vergeltung\" angekündigt</a>. Seit Wochen häufen sich Attacken auch auf der von Russland annektierten Krim sowie in Russland selbst - meist in der unmittelbaren Grenzregion zur Ukraine. Vielfach ist dabei von Drohnenangriffen die Rede. Allerdings ist dabei oft nicht klar, wer hinter diesen Angriffen steckt. ",
            "type": "text"
          },
          {
            "value": "Bereits Anfang und Ende Mai sowie <a href=\"https://www.tagesschau.de/api2u/ausland/europa/moskau-drohnen-100.json\" type=\"intern\">Anfang Juli</a> wurden Drohnenangriffe auf Moskau gemeldet, für die Russland die Ukraine verantwortlich machte. Dabei wurden damals nach Angaben der Behörden auch Häuser beschädigt und Menschen verletzt. Kremlchef Wladimir Putin forderte daraufhin eine Verbesserung der russischen Flugabwehr.",
            "type": "text"
          },
          {
            "value": "<strong>Über dieses Thema berichtete Deutschlandfunk am 24. Juli 2023 um 08:00 Uhr in den Nachrichten.</strong>",
            "type": "text"
          },
          {
            "related": [
              {
                "teaserImage": {
                  "alttext": "Eine Frau geht in Odessa zwischen den Trümmern von Wohnhäusern, Ukraine.",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/3ca0f0d2-7aab-4fa7-9e05-5fa00341e2d1/AAABiYGk-oI/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-07-23T15:19:18.404+02:00",
                "sophoraId": "ukraine-russland-angriff-odessa-100",
                "externalId": "deb2545c-ef88-4b5e-8ab3-866e3e0a3a8a",
                "topline": "Angriffe auf Odessa",
                "title": "Selenskyj kündigt \"Vergeltung\" an",
                "details": "https://www.tagesschau.de/api2u/ausland/europa/ukraine-russland-angriff-odessa-100.json",
                "detailsweb": "https://www.tagesschau.de/ausland/europa/ukraine-russland-angriff-odessa-100.html",
                "type": "story"
              },
              {
                "teaserImage": {
                  "alttext": "Ein Spezialist inspiziert die beschädigte Fassade eines mehrstöckigen Wohnhauses nach einem mutmaßlichen Drohnenangriff in Moskau am 30. Mai 2023.",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/c230cf54-e0a2-44df-8ed8-1567b29c20c4/AAABiG1L76o/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-05-30T18:39:30.554+02:00",
                "sophoraId": "russland-drohnen-angriffe-moskau-100",
                "externalId": "48eda3c6-bed4-4986-8d8c-1ef1b61a685d",
                "topline": "Drohnenangriff auf Moskau",
                "title": "Der Schrecken sitzt bei vielen tief",
                "details": "https://www.tagesschau.de/api2u/ausland/europa/russland-drohnen-angriffe-moskau-100.json",
                "detailsweb": "https://www.tagesschau.de/ausland/europa/russland-drohnen-angriffe-moskau-100.html",
                "type": "story"
              },
              {
                "teaserImage": {
                  "alttext": "Schäden an einem Wohngebäude in Moskau nach Drohnenangriffen",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/2e6eb172-49a2-4370-a7d6-9fbdc7b7de94/AAABiGtZzd4/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-05-30T10:45:06.613+02:00",
                "sophoraId": "drohnenangriffe-moskau-100",
                "externalId": "e0dae537-73d4-4707-b96c-5345892dba7a",
                "topline": "Mehrere Gebäude beschädigt",
                "title": "Bürgermeister meldet Drohnenangriffe auf Moskau",
                "details": "https://www.tagesschau.de/api2u/ausland/drohnenangriffe-moskau-100.json",
                "detailsweb": "https://www.tagesschau.de/ausland/drohnenangriffe-moskau-100.html",
                "type": "story"
              },
              {
                "teaserImage": {
                  "alttext": "Screenshot eines Films von einer Explosion über dem Kreml",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/9960e043-bdbc-4a26-b098-f3b009b79675/AAABh-HkXTo/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-05-03T17:05:08.239+02:00",
                "sophoraId": "russland-kreml-drohnenangriff-100",
                "externalId": "43824d85-c3ae-4a0c-867f-3104dc4291d5",
                "topline": "Drohnen über Moskau",
                "title": "Russland wirft Ukraine Anschlag auf Kreml vor",
                "details": "https://www.tagesschau.de/api2u/ausland/europa/russland-kreml-drohnenangriff-100.json",
                "detailsweb": "https://www.tagesschau.de/ausland/europa/russland-kreml-drohnenangriff-100.html",
                "type": "story"
              }
            ],
            "type": "related"
          }
        ],
        "tracking": [
          {
            "sid": "app.ausland.europa.mutmasslicher-drohnenangriff-moskau-100",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T0808",
            "otp": "meldung",
            "cid": "mutmasslicher-drohnenangriff-moskau-100",
            "pti": "Russland_meldet_mutmasslich_ukrainischen_Drohnenangriff_auf_Moskau",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Russland beschuldigt Ukraine",
        "firstSentence": "Zwei auf Moskau zielende Drohnen seien abgeschossen worden, Verletzte habe es nicht gegeben.",
        "video": {
          "sophoraId": "video-1225478",
          "externalId": "689a4e0a-a90b-4514-88f7-8631b949f90e",
          "title": "APP0830 NIF- Drohnen Moskau_vapp.mxf",
          "date": "2023-07-24T08:52:53.468+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225478~_view-hasChanged_lastKnown-F92A9EA0D640804CD3D93927397F561A.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225478",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T0852",
              "otp": "video",
              "cid": "video-1225478",
              "pti": "APP0830_NIF-_Drohnen_Moskau_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225478",
              "program": "Tagesschau",
              "title": "APP0830_NIF-_Drohnen_Moskau_vapp.mxf",
              "length": "15",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225478.html",
              "c7": "p7,video-1225478",
              "c8": "p8,15",
              "c9": "p9,Tagesschau_APP0830_NIF-_Drohnen_Moskau_vapp.mxf_24.07.2023_0852",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0829-1500.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0829-1500.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0829-1500.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0829-1500.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/8a7a0aa9-027d-49ab-8f35-247584244619/AAABiYaW0Zs/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/ausland/europa/mutmasslicher-drohnenangriff-moskau-100.json",
        "detailsweb": "https://www.tagesschau.de/ausland/europa/mutmasslicher-drohnenangriff-moskau-100.html",
        "shareURL": "https://www.tagesschau.de/ausland/europa/mutmasslicher-drohnenangriff-moskau-100.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "ressort": "ausland",
        "crop": {
          "id": "TV-20230724-0829-1500",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Russisches Verteidigungsministerium",
          "mainTexts": [
            "Zwei Drohnen über Moskau abgeschossen",
            "Verletzte habe es nicht gegeben",
            "Aus Kiew gab es \nkeine Bestätigung"
          ],
          "sceneSrcTexts": [
            "",
            "",
            ""
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              84
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              84
            ],
            [
              4440,
              1,
              0
            ],
            [
              4440,
              2,
              0
            ],
            [
              5120,
              9,
              75
            ],
            [
              5120,
              2,
              1
            ],
            [
              5120,
              3,
              1
            ],
            [
              5120,
              0,
              75
            ],
            [
              9400,
              2,
              0
            ],
            [
              10080,
              9,
              164
            ],
            [
              10080,
              2,
              1
            ],
            [
              10080,
              3,
              2
            ],
            [
              10080,
              0,
              164
            ],
            [
              13240,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "liveblog-ukraine-montag-276",
        "externalId": "e39d88ab-49a2-45ea-9302-cb54a563a45a",
        "title": "++ Moskau hebt Altersgrenze für Reservisten an ++",
        "date": "2023-07-24T12:18:50.679+02:00",
        "teaserImage": {
          "alttext": "Wladimir Putin (Mitte) und Soldaten im Ausbildungszentrum des Westlichen Militärbezirks für mobilisierte Reservisten in der russischen Region Rjasan. (Archivbild)",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/279ae30e-850e-4c15-961e-c3916e46a993/AAABiYdjm8Q/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Liveblog"
          },
          {
            "tag": "Ukraine"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/liveblog-ukraine-montag-276~_view-hasChanged_lastKnown-9173F5DE2A795CE723B5604F01B4235C.json",
        "content": [
          {
            "value": "<strong>Russlands Präsident Putin hat ein Gesetz unterzeichnet, wonach die Höchstgrenze für Reservisten um fünf Jahre angehoben wird. Die Ukraine hat nach eigenen Angaben 227 Quadratkilometer Land zurückerobert. Die Entwicklungen im Liveblog.</strong>",
            "type": "text"
          },
          {
            "value": "<ul><li>Putin segnet Erhöhung des Reservistenalters um fünf Jahre ab</li><li>Ukraine erobert offenbar 227 Quadratkilometer zurück</li><li>Ukraine: Neue russische Drohnenangriffe auf Region Odessa</li><li>FSB meldet Sprengstoffspuren auf Getreideschiff</li><li>Russland meldet vereitelten Drohnenangriff auf Moskau</li></ul>",
            "type": "text"
          },
          {
            "value": "<h2>12:01 Uhr - Kreml sieht nach Angriff auf Moskau keinen Grund für besseren Schutz</h2>",
            "type": "headline"
          },
          {
            "value": "Trotz der jüngsten Drohnenattacke auf Moskau sieht der Kreml keinen Grund für eine Verschärfung der Sicherheitsvorkehrungen für die russische Hauptstadt. \"Das ist hier kaum nötig\", sagte Kremlsprecher Dmitri Peskow nach einem Bericht der Nachrichtenagentur Interfax. Die Sicherheitsorgane arbeiteten ohnehin auf Hochtouren. Es werde \"rund um die Uhr sehr angespannte Arbeit geleistet\". ",
            "type": "text"
          },
          {
            "value": "Moskau war in der Nacht zum Montag mit mindestens zwei Drohnen angegriffen worden, für die Russland die Ukraine verantwortlich macht. Verletzte gab es nach offiziellen Angaben nicht. Auch die mehrfach angegriffene Brücke zur seit 2014 von Russland besetzten Schwarzmeer-Insel Krim werde ständig überwacht, sagte Peskow. Auf diese Weise habe der Geheimdienst einen neuen Anschlag auf das 19 Kilometer lange Bauwerk verhindern können. Damit kommentierte Peskow Meldungen über angebliche Sprengstoffspuren, die der Geheimdienst FSB auf einem türkischen Frachter gefunden haben will, der die Meerenge von Kertsch durchqueren wollte. ",
            "type": "text"
          },
          {
            "value": "<h2>11:58 Uhr - Putin segnet Erhöhung des Reservistenalters um fünf Jahre ab</h2>",
            "type": "headline"
          },
          {
            "value": "Russlands Präsident Wladimir Putin hat ein Gesetz zur neuen Altersgrenze für Reservisten abgezeichnet. Demnach wird die Höchstgrenze für alle Dienstgrade und Kategorien um generell fünf Jahre angehoben, wie aus der Mitteilung auf dem offiziellen Portal der russischen Regierung hervorgeht. So können künftig Soldaten, Matrosen und Sergeanten bis zum Alter von maximal 55 Jahren zum Reservedienst eingezogen werden. Die Altersgrenze bei Offizieren bis zum Hauptmannsdienstgrad liegt künftig bei 60 Jahren, höhere Offiziere dienen bis zum Alter von 65 Jahren. Generäle können nun sogar bis zum Alter von 70 Jahren wieder reaktiviert werden. ",
            "type": "text"
          },
          {
            "value": "Die Anhebung des Reservistenalters wurde vor allem im Hinblick auf den Krieg in der Ukraine getroffen. Bei der Teilmobilmachung im Herbst hat Russland offiziell 300.000 Reservisten für die Front eingezogen. Im Zuge der Mobilmachung traten aber große Probleme zutage. Unter anderem haben sich viele Russen der Mobilmachung durch Flucht ins Ausland entzogen. Zwar bestreitet Moskau offiziell Absichten, eine weitere Mobilmachung durchzuführen. Experten sehen aber angesichts anhaltender Probleme an der Front eine neue Einberufungswelle als wahrscheinlich an. ",
            "type": "text"
          },
          {
            "value": "<h2>11:13 Uhr - Kiew: Ukraine erobert 227 Quadratkilometer zurück</h2>",
            "type": "headline"
          },
          {
            "value": "Die ukrainischen Truppen haben in etwa sieben Wochen Gegenoffensive nach eigenen Angaben 227 Quadratkilometer Land von Russland zurückerobert. An den südlichen Abschnitten der Front seien dabei Gebietsgewinne von 192 Quadratkilometer erzielt worden, teilte die stellvertretende Verteidigungsministerin Hanna Maljar mit. Davon seien zwölf Quadratkilometer innerhalb der vergangenen Woche befreit worden. ",
            "type": "text"
          },
          {
            "value": "Zum Vergleich: 227 Quadratkilometer entsprechen annähernd der Fläche der Stadt Duisburg in Nordrhein-Westfalen. Im Abschnitt um die russisch kontrollierte Stadt Bachmut eroberten die Ukraine demnach insgesamt 35 Quadratkilometer zurück. In der vergangenen Woche seien dabei im östlichen Gebiet Donezk vier Quadratkilometer dazu gekommen. Solche Angaben der Kriegsparteien lassen sich nicht unabhängig überprüfen. Der russische Angriffskrieg dauert seit 17 Monaten. Ukrainischen Militärbeobachtern zufolge kontrolliert Russland einschließlich der 2014 annektierten Halbinsel Krim noch mehr als 100 000 Quadratkilometer ukrainischen Gebiets. ",
            "type": "text"
          },
          {
            "box": {
              "text": "Angaben zu Kriegsverlauf, Beschuss und Opfern durch offizielle Stellen der russischen und der ukrainischen Konfliktparteien können in der aktuellen Lage nicht unmittelbar von unabhängiger Stelle überprüft werden.",
              "title": "Konfliktparteien als Quelle"
            },
            "type": "box"
          },
          {
            "value": "<h2>10:38 Uhr - Medien: Papst bietet Kyrill I. Treffen an</h2>",
            "type": "headline"
          },
          {
            "value": "Ein Jahr nach dem geplatzten Treffen Papst Franziskus' mit dem russisch-orthodoxen Patriarchen Kyrill I. in Jerusalem gibt es neue Spekulationen über eine mögliche Begegnung der beiden Kirchenoberhäupter. Franziskus soll laut einem mutmaßlichen Mittelsmann Kyrill I. ein Treffen in etwa sechs Wochen auf einem Flughafen in Moskau vorgeschlagen haben. ",
            "type": "text"
          },
          {
            "value": "Der Vorsitzende der Weltunion der Altgläubigen, Leonid Sewostjanow, sagte den staatlichen russischen Nachrichtenagenturen Tass und RIA Nowosti am Sonntag, der Papst habe ihm in einem Telefonat berichtet, er könne am 31. August auf seinem Flug in die Mongolei oder auf seinem Rückweg am 4. September einen Zwischenstopp in Moskau einlegen und mit dem Oberhaupt der russisch-orthodoxen Kirche am Flughafen zusammenkommen, wenn dieser dazu bereit sei. Eine Bestätigung des Vatikans dafür gibt es bislang nicht. ",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "Wladimir Putin und Patriarch Kyrill, Oberhaupt der russisch-orthodoxen Kirche (Archivbild von 2017).",
                "copyright": "picture alliance / Alexander Nem",
                "alttext": "Wladimir Putin und Patriarch Kyrill.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/0895e41b-a0da-48f3-8e40-0636e5f20952/AAABhnSF2p0/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/ausland/europa/kyrill-moskau-orthodoxie-101.json\" type=\"intern\">mehr</a>",
              "subtitle": "Kyrill I.",
              "text": "Partiarch Kyrill steht hinter dem Ukraine-Krieg und predigt Hass auf den Westen.",
              "title": "Putins Patriarch"
            },
            "type": "box"
          },
          {
            "value": "<h2>09:07 Uhr - Russland: Drohnenangriff auf Krim</h2>",
            "type": "headline"
          },
          {
            "value": "Bei einem Drohnenangriff auf die seit 2014 von Russland annektierte Schwarzmeer-Halbinsel Krim ist nach offiziellen Angaben erneut ein Munitionslager getroffen worden. Über der Krim seien elf Drohnen abgeschossen oder per Störfunk zum Absturz gebracht worden, teilte der von Moskau eingesetzte Statthalter Sergej Aksjonow auf seinem Telegram-Kanal mit. Es gebe jedoch einen \"Einschlag im Munitionsdepot im Landkreis Dschankoj\". In sozialen Netzwerken sind Videos mit einer großen Rauchwolke zu sehen. Zudem sei ein Wohnhaus im Süden der Halbinsel beschädigt worden. ",
            "type": "text"
          },
          {
            "value": "Dschankoj ist ein Landkreis im Nordosten der Krim. Hier sind viele Lager und Depots zur Versorgung der russischen Besatzungstruppen im Süden der Ukraine untergebracht. Über die Krim läuft die wichtigste Versorgungslinie dieser Einheiten. Aksjonow machte keine konkreten Angaben zu den Auswirkungen des Treffers im Munitionsdepot. Der Bahn- und Fahrzeugverkehr auf der Trasse zwischen Dschankoj und der Regionalhauptstadt Simferopol wurde eingestellt. Die anliegenden Ortschaften sollen evakuiert werden. Bereits vergangene Woche wurden auf der Krim zwei Munitionslager bei Angriffen getroffen. ",
            "type": "text"
          },
          {
            "box": {
              "text": "Angaben zu Kriegsverlauf, Beschuss und Opfern durch offizielle Stellen der russischen und der ukrainischen Konfliktparteien können in der aktuellen Lage nicht unmittelbar von unabhängiger Stelle überprüft werden.",
              "title": "Konfliktparteien als Quelle"
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "alttext": "Dieses Gebäude soll russischen Angaben zufolge bei einem Drohnenangriff beschädigt worden sein",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/ausland/europa/mutmasslicher-drohnenangriff-moskau-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "Russland beschuldigt Ukraine",
              "text": "Zwei auf Moskau zielende Drohnen seien abgeschossen worden, Verletzte habe es nicht gegeben.",
              "title": "Kreml meldet Abschuss von Drohnen über Moskau"
            },
            "type": "box"
          },
          {
            "value": "<h2>08:58 Uhr - EU-Abgeordnete zum Schutz russischer Kriegsdienstverweigerer</h2>",
            "type": "headline"
          },
          {
            "value": "Mehrere Europaparlamentarier um den deutschen Abgeordneten Udo Bullmann (SPD) fordern laut einem Medienbericht von der EU-Spitze einen besseren Schutz für russische Kriegsdienstverweigerer. In einem fraktionsübergreifenden offenen Brief, der dem \"Redaktionsnetzwerk Deutschland\" vorliegt, verlangen sie mehr Engagement zum Schutz von Soldaten, die sich dem russischen Angriffskrieg in der Ukraine verweigern.",
            "type": "text"
          },
          {
            "value": " In dem Schreiben, das an EU-Ratspräsident Charles Michel, EU-Kommissionspräsidentin Ursula von der Leyen und den EU-Außenbeauftragten Josep Borrell gerichtet ist, betonen die Unterzeichnenden den Angaben zufolge, \"dass es die Pflicht der Europäischen Union und ihrer Mitgliedstaaten ist, russische Kriegsdienstverweigerer zu schützen und ihnen Asyl zu gewähren\". In 13 illegalen Gefangenenlagern in den besetzen ukrainischen Gebieten Luhansk und Donezk seien mehr als 600 Russen inhaftiert, die sich geweigert hätten, am russischen Angriffskrieg gegen die Ukraine teilzunehmen. ",
            "type": "text"
          },
          {
            "value": "<h2>08:45 Uhr - Verletzte bei neuen russischen Drohnenangriffen auf Region Odessa</h2>",
            "type": "headline"
          },
          {
            "value": "Bei neuen russischen Drohnenangriffen auf die ukrainische Hafenregion Odessa am Schwarzen Meer sind nach offiziellen Angaben drei Menschen verletzt worden. Die Flugabwehr habe einige Drohnen abgewehrt, es gebe aber auch Einschläge in Donauhäfen, teilte die Heeresstelle Süd mit. Drei Hafenarbeiter seien verletzt worden, sagte Sprecherin Natalja Humenjuk. Ein Getreidesilo und mehrere andere Lager im Hafen wurden demnach beschädigt. ",
            "type": "text"
          },
          {
            "value": "Nach dem Auslaufen des Abkommens zur Ausfuhr ukrainischen Getreides attackiert Russland verstärkt mit Drohnen und Raketen die Region Odessa. Auch die Millionenstadt selbst gerät immer wieder unter Feuer. In der Nacht zum Sonntag gab es Treffer in der zum Weltkulturerbe erklärten Altstadt, die russisch-orthodoxe Verklärungskirche wurde schwer beschädigt. Mindestens ein Mensch wurde getötet, mehr als 20 wurden verletzt.",
            "type": "text"
          },
          {
            "box": {
              "text": "Angaben zu Kriegsverlauf, Beschuss und Opfern durch offizielle Stellen der russischen und der ukrainischen Konfliktparteien können in der aktuellen Lage nicht unmittelbar von unabhängiger Stelle überprüft werden.",
              "title": "Konfliktparteien als Quelle"
            },
            "type": "box"
          },
          {
            "gallery": [
              {
                "title": "Schraffiert: von Russland besetzte Gebiete",
                "copyright": "ISW, Critical Threats Project | Stand: 22.07.2023 ",
                "alttext": "Karte Ukraine, schraffiert: von Russland besetzte Gebiete",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/683b30a2-dc90-4056-8ecc-bf9d434eade1/AAABiYahDd8/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>08:22 Uhr - Großbritannien: Russland plant Kampfdrohnen-Unterricht an Schulen</h2>",
            "type": "headline"
          },
          {
            "value": "Wie das britische Verteidigungsministerium in seinem täglichen Update unter Bezug auf Geheimdienstquellen mitteilt, sollen russischen Schülerinnen und Schülern die Grundlagen im Umgang mit Kampfdrohnen vermittelt werden. Der russische Senator Artem Sheikin kündigte demnach an, die Lektionen umfassten Geländeaufklärung und Möglichkeiten zur Bekämpfung feindlicher unbemannter Luftfahrzeuge.",
            "type": "text"
          },
          {
            "value": "Die Lektionen beträfen zehnte und elfte Klassen ab September. Großbritannien sprach von einem \"Versuch, eine Kultur des militarisierten Patriotismus zu kultivieren, anstatt echte Fähigkeiten zu entwickeln.\"",
            "type": "text"
          },
          {
            "social": {
              "account": "DefenceHQ",
              "htmlEmbed": "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Latest Defence Intelligence update on the situation in Ukraine - 24 July 2023.<br><br>Find out more about Defence Intelligence&#39;s use of language: <a href=\"https://t.co/OgjLYIKpaS\">https://t.co/OgjLYIKpaS</a><br><br>🇺🇦 <a href=\"https://twitter.com/hashtag/StandWithUkraine?src=hash&amp;ref_src=twsrc%5Etfw\">#StandWithUkraine</a> 🇺🇦 <a href=\"https://t.co/TycIcQcjhu\">pic.twitter.com/TycIcQcjhu</a></p>&mdash; Ministry of Defence 🇬🇧 (@DefenceHQ) <a href=\"https://twitter.com/DefenceHQ/status/1683350814205661185?ref_src=twsrc%5Etfw\">July 24, 2023</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n",
              "shorttext": "Social-Media-Beitrag auf Twitter von Ministry of Defence 🇬🇧: \"Latest Defence Intelligence update on the situation in Ukraine - 24 July 2023.Find out more about Defence Intelligence&<a href=\"https://twitter.com/hashtag/39?src=hash\" type=\"extern\">#39</a>;s use of language: https://t.co/OgjLYIKpaS🇺🇦 <a href=\"https://twitter.com/hashtag/StandWithUkraine?src=hash\" type=\"extern\">#StandWithUkraine</a> 🇺🇦 pic.twitter.com/TycIcQcjhu\" ",
              "title": "Ministry of Defence 🇬🇧 (@DefenceHQ) via Twitter",
              "url": "https://twitter.com/DefenceHQ/status/1683350814205661185",
              "username": "Ministry of Defence 🇬🇧",
              "type": "twitter"
            },
            "type": "socialmedia"
          },
          {
            "value": "<h2>08:14 Uhr - FSB meldet Sprengstoffspuren auf Getreideschiff</h2>",
            "type": "headline"
          },
          {
            "value": "Die staatliche russische Nachrichtenagentur Tass hat unter Bezug auf den russischen Geheimdienst FSB gemeldet, dieser habe Spuren von Sprengstoff auf einem Schiff gefunden, das von der Türkei zum Hafen von Rostow am Don unterwegs gewesen sei, um Getreide abzuholen. Der FSB wurde mit den Worten zitiert, das Schiff sei im Mai im ukrainischen Hafen Kilija angedockt und möglicherweise zur Lieferung von Sprengstoff in die Ukraine eingesetzt worden. ",
            "type": "text"
          },
          {
            "value": "Vor einer Woche stieg Russland aus dem von den Vereinten Nationen und der Türkei vermittelten Abkommen zum Getreideexport aus der Ukraine aus.",
            "type": "text"
          },
          {
            "box": {
              "text": "Angaben zu Kriegsverlauf, Beschuss und Opfern durch offizielle Stellen der russischen und der ukrainischen Konfliktparteien können in der aktuellen Lage nicht unmittelbar von unabhängiger Stelle überprüft werden.",
              "title": "Konfliktparteien als Quelle"
            },
            "type": "box"
          },
          {
            "value": "<h2>04:56 Uhr - Korruptionsbekämpfer: Schweizer Art der Politik hilft Putin</h2>",
            "type": "headline"
          },
          {
            "value": "Der Schweizer Jurist und Korruptionsbekämpfer Mark Pieth verlangt von seinem Heimatland mehr Einsatz gegen Helfer Russlands. Die Schweiz sei globale Drehscheibe im Rohstoffhandel, die Branche agiere aber vollkommen unkontrolliert, sagte Pieth der Nachrichtenagentur dpa. \"Das zeigt sich jetzt im Rahmen der Sanktionen gegen Russland. Der Rohstoffhandelsplatz Genf spielt eine große Rolle bei der Sanktionsumgehung.\" ",
            "type": "text"
          },
          {
            "value": "Westliche Länder sind mit dem Schweizer Einsatz seit Beginn des russischen Angriffskriegs gegen die Ukraine unzufrieden. Sie kritisieren die Verweigerung der Weitergabe Schweizer Rüstungsgüter an die Ukraine oder die - ihrer Ansicht nach - unzureichende Suche nach Oligarchengeldern, die blockiert werden könnten.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "",
                "copyright": "picture alliance / dpa",
                "alttext": "Schweizer Flagge",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/d7889638-68f5-4007-800d-c82ca0617629/AAABhpjeyx8/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/ausland/europa/schweiz-sanktionen-101.json\" type=\"intern\">mehr</a>",
              "subtitle": "Sanktionen und die Schweiz",
              "text": "Vor einem Jahr beschloss die Schweiz, die EU-Sanktionen gegen Russland zu übernehmen.",
              "title": "\"Neutralität - um Geschäfte zu machen\""
            },
            "type": "box"
          },
          {
            "value": "<h2>04:10 Uhr - Russland meldet vereitelten Drohnenangriff auf Moskau</h2>",
            "type": "headline"
          },
          {
            "value": "Moskau ist nach russischen Angaben in der Nacht von zwei Drohnen angegriffen worden. Verletzt worden sei niemand, es gebe keine größeren Schäden, teilte Moskaus Bürgermeister Sergej Sobjanin laut staatlicher Nachrichtenagentur Tass mit. Auf Telegram sprach er von zwei Gebäuden, die getroffen worden seien. Es handele sich nicht um Wohngebäude.",
            "type": "text"
          },
          {
            "value": "Das russische Verteidigungsministerium erklärte, ein Versuch der Ukraine, einen Terroranschlag in Moskau mit zwei Drohnen zu verüben, sei vereitelt worden. Eine Drohne sei im Zentrum der Hauptstadt entdeckt worden, eine weitere habe im Süden der Stadt ein Bürohochhaus getroffen, sagte ein Mitarbeiter der Notfalldienste. Dabei sei eine Explosion zu hören gewesen.",
            "type": "text"
          },
          {
            "value": "Bereits Anfang Juli waren über dem Gebiet Moskaus nach Angaben des russischen Verteidigungsministeriums Drohnen abgeschossen worden. Das Verteidigungsministerium machte die Ukraine für die Drohnenangriffe verantwortlich. Auch im Mai hatte es Drohnenangriffe auf die Hauptstadt Moskau gegeben. Dabei wurden damals nach Angaben der Behörden auch Häuser beschädigt und bei einem Angriff Ende Mai auch Menschen verletzt.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Dieses Gebäude soll russischen Angaben zufolge bei einem Drohnenangriff beschädigt worden sein",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/54cc6728-36d2-46f3-bc62-9562b1305d53/AAABiYaDb8k/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/ausland/europa/mutmasslicher-drohnenangriff-moskau-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "Russland beschuldigt Ukraine",
              "text": "Zwei auf Moskau zielende Drohnen seien abgeschossen worden, Verletzte habe es nicht gegeben.",
              "title": "Kreml meldet Abschuss von Drohnen über Moskau"
            },
            "type": "box"
          },
          {
            "box": {
              "text": "Angaben zu Kriegsverlauf, Beschuss und Opfern durch offizielle Stellen der russischen und der ukrainischen Konfliktparteien können in der aktuellen Lage nicht unmittelbar von unabhängiger Stelle überprüft werden.",
              "title": "Konfliktparteien als Quelle"
            },
            "type": "box"
          },
          {
            "value": "<h2>04:56 Uhr - Putin: Können ukrainische Getreidelieferungen ersetzen</h2>",
            "type": "headline"
          },
          {
            "value": "Wenige Tage nach dem Stopp des Getreideabkommens durch Moskau hat der russische Präsident Wladimir Putin erklärt, Russland sei bereit, ukrainische Getreidelieferungen zu ersetzen. \"Ich möchte versichern, dass unser Land in der Lage ist, ukrainisches Getreide sowohl auf kommerzieller als auch auf unentgeltlicher Grundlage zu ersetzen, zumal wir in diesem Jahr eine weitere Rekordernte erwarten\", schrieb er in einem auf der Website des Kreml veröffentlichten Artikel für afrikanische Medien anlässlich eines Russland-Afrika-Gipfels im russischen St. Petersburg ab Donnerstag. Trotz der vom Westen verhängten Sanktionen werde Russland weiterhin \"energisch\" an den Lieferungen von Getreide, Nahrung, Düngemittel und anderem an afrikanische Länder arbeiten, hieß es weiter.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Wladimir Putin auf einem öffentlichen Platz, begleitet von Sicherheitspersonal (aufgenommen am 23. Juli 2023)",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/c945616b-18fe-44ec-b7c0-d96b266a6e5d/AAABiYZUg2U/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/ausland/europa/getreidelieferungen-putin-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "Nach Ausstieg aus Abkommen",
              "text": "Sein Land sei in der Lage, für Lieferausfälle aufzukommen - in Kooperation mit afrikanischen Staaten.",
              "title": "Putin bietet Ersatz für Getreidelieferungen an"
            },
            "type": "box"
          },
          {
            "value": "<h2>02:19 Uhr - Der Liveblog vom Sonntag zum Nachlesen</h2>",
            "type": "headline"
          },
          {
            "value": "Der russische Präsident Putin hat die ukrainische Gegenoffensive als \"gescheitert\" bezeichnet. Rheinmetall will in den kommenden Tagen mit der Auslieferung neuer Munition für den \"Gepard\"-Panzer an die Ukraine beginnen. Die Entwicklungen vom Sonntag zum Nachlesen.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Wladimir Putin",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/05004697-abb5-4798-b074-b10b1458b0bd/AAABiYI34PI/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/newsticker/liveblog-ukraine-sonntag-324.json\" type=\"intern\">mehr</a>",
              "subtitle": "Krieg gegen die Ukraine",
              "text": "Die Entwicklungen im Krieg gegen die Ukraine vom Sonntag zum Nachlesen.",
              "title": "++ Putin bezeichnet Gegenoffensive als \"gescheitert\" ++"
            },
            "type": "box"
          }
        ],
        "tracking": [
          {
            "sid": "app.newsticker.liveblog-ukraine-montag-276",
            "src": "ard-aktuell",
            "ctp": "LIVEBLOG",
            "pdt": "20230724T1218",
            "otp": "meldung",
            "cid": "liveblog-ukraine-montag-276",
            "pti": "Liveblog__Moskau_hebt_Altersgrenze_fuer_Reservisten_an_",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Krieg gegen die Ukraine",
        "firstSentence": "Die aktuellen Entwicklungen zum Krieg gegen die Ukraine in unserem Liveblog.",
        "video": {
          "sophoraId": "video-1225418",
          "externalId": "1b0b2ca8-8c2f-495b-bebc-82d0fc6410ce",
          "title": "APP0600 FC- Liveblog Ukraine_vapp.mxf",
          "date": "2023-07-24T10:41:27.856+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225418~_view-hasChanged_lastKnown-082F951B728A8B98B9574D0E8D76D8E8.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225418",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T1041",
              "otp": "video",
              "cid": "video-1225418",
              "pti": "APP0600_FC-_Liveblog_Ukraine_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225418",
              "program": "Tagesschau",
              "title": "APP0600_FC-_Liveblog_Ukraine_vapp.mxf",
              "length": "13",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225418.html",
              "c7": "p7,video-1225418",
              "c8": "p8,13",
              "c9": "p9,Tagesschau_APP0600_FC-_Liveblog_Ukraine_vapp.mxf_24.07.2023_1041",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0517-5400.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0517-5400.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0517-5400.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0517-5400.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/4d0f7940-9767-4e28-b59c-b0ec5ab21fb1/AAABiYXnqPU/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/newsticker/liveblog-ukraine-montag-276.json",
        "detailsweb": "https://www.tagesschau.de/newsticker/liveblog-ukraine-montag-276.html",
        "shareURL": "https://www.tagesschau.de/newsticker/liveblog-ukraine-montag-276.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "crop": {
          "id": "TV-20230724-0517-5400",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": true,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Krieg gegen die Ukraine",
          "mainTexts": [
            "++ Sprengstoff​spuren auf Getreideschiff ++",
            "++ Ukraine meldet An&shy;\ngriffe auf Odessa ++",
            "++ Alle Entwicklungen im Liveblog ++"
          ],
          "sceneSrcTexts": [
            ""
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              164
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              164
            ],
            [
              3320,
              1,
              0
            ],
            [
              3320,
              2,
              0
            ],
            [
              4000,
              2,
              1
            ],
            [
              4000,
              3,
              1
            ],
            [
              7320,
              2,
              0
            ],
            [
              8000,
              2,
              1
            ],
            [
              8000,
              3,
              2
            ],
            [
              10920,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "israel-parlament-justizreform-100",
        "externalId": "e9f0a7fe-52e3-4828-b1a2-f4c5a532d635",
        "title": "Demonstranten blockieren Eingang zur Knesset",
        "date": "2023-07-24T11:20:39.420+02:00",
        "teaserImage": {
          "alttext": "Die Polizei vertreibt Demonstranten, die die Straße zur Knesset, dem israelischen Parlament, blockieren.",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/320b55a9-8a34-4d9b-8ee5-798526399437/AAABiYcXaL8/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Israel"
          },
          {
            "tag": "Justizreform"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/israel-parlament-justizreform-100~_view-hasChanged_lastKnown-5A21E6CC130DC6DBE05DA7FFF53590B2.json",
        "content": [
          {
            "value": "<strong>Wenige Stunden vor der geplanten entscheidenden Parlamentsabstimmung über die Justizreform in Israel haben Hunderte Demonstranten den Zugang zur Knesset blockiert. Es gab mehrere Festnahmen. Die Polizei setzte Wasserwerfer ein.</strong>",
            "type": "text"
          },
          {
            "value": "In Israel haben am Morgen Hunderte Demonstranten die Zugänge zum Parlamentsgebäude in Jerusalem blockiert. In sozialen Netzwerken verbreitete Videos zeigen, wie die Polizei mit Wasserwerfern gegen die Protestierenden vorging. Mitglieder der Protestbewegung \"Waffenbrüder\" ketteten sich laut israelischen Medienberichten aneinander fest, um den Zugang zum Gebiet der Knesset zu verhindern. Die Feuerwehr setzte elektrische Handsägen ein, um die Demonstranten zu entfernen. ",
            "type": "text"
          },
          {
            "value": "Laut der Zeitung \"Haaretz\" wurde unter anderem einer der Anführer der Protestbewegung gegen die geplante Justizreform der Regierung, Mosche Radman, festgenommen. In der Nähe des Parlamentsgebäudes wurden mehrere Demonstranten unter dem Verdacht festgenommen, den Verkehr stören zu wollen. ",
            "type": "text"
          },
          {
            "value": "Auch vor dem Haus von Wirtschafts- und Industrieminister Nir Barkat gab es Demonstrationen, bei denen laut Medienberichten drei Personen festgenommen wurden. Weitere Massenproteste vor der Knesset sind für den Abend angekündigt. ",
            "type": "text"
          },
          {
            "video": {
              "sophoraId": "video-1225588",
              "externalId": "0ce4ec59-c1f9-4124-9424-b8c7bcdd91cc",
              "title": "Sophie von der Tann, ARD Tel Aviv, zzt. Jerusalem, zur Situation vor dem Parlament",
              "date": "2023-07-24T11:53:21.791+02:00",
              "teaserImage": {
                "title": "Sendungsbild",
                "copyright": "ARD-aktuell",
                "alttext": "Sendungsbild",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/8ae15d05-6f4e-4810-9a25-ea18c732cd03/AAABiYdQusI/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "tags": [],
              "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225588~_view-hasChanged_lastKnown-7AF5FD6621DC828677371D48DC096840.json",
              "tracking": [
                {
                  "sid": "app.multimedia.video.video-1225588",
                  "src": "ard-aktuell",
                  "ctp": "SEGMENT",
                  "pdt": "20230724T1153",
                  "otp": "video",
                  "cid": "video-1225588",
                  "pti": "Sophie_von_der_Tann_ARD_Tel_Aviv_zzt._Jerusalem_zur_Situation_vor_dem_Parlament",
                  "bcr": "ja",
                  "type": "generic"
                },
                {
                  "assetid": "video-1225588",
                  "program": "tagesschau24",
                  "title": "Sophie_von_der_Tann_ARD_Tel_Aviv_zzt._Jerusalem_zur_Situation_vor_dem_Parlament",
                  "length": "331",
                  "c2": "p2,N",
                  "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225588.html",
                  "c7": "p7,video-1225588",
                  "c8": "p8,331",
                  "c9": "p9,tagesschau24_Sophie_von_der_Tann_ARD_Tel_Aviv_zzt._Jerusalem_zur_Situation_vor_dem_Parlament_24.07.2023_1100",
                  "c10": "p10,Das_Erste",
                  "c12": "p12,content",
                  "c16": "p16,ARD_Information/ARD_Livestream",
                  "c18": "p18,N",
                  "type_nielsen": "content",
                  "type": "nielsen"
                }
              ],
              "streams": {
                "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1142-1600.webs.h264.mp4",
                "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1142-1600.webm.h264.mp4",
                "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1142-1600.webxl.h264.mp4",
                "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-1142-1600.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
              },
              "alttext": "Sendungsbild",
              "copyright": "tagesschau",
              "type": "video"
            },
            "type": "video"
          },
          {
            "value": "Am Nachmittag soll der Gesetzentwurf zur Abschaffung der Angemessenheitsklausel dem Plenum zur zweiten und dritten Lesung vorgelegt werden. Keiner der bisher präsentierten Kompromissvorschläge, unter anderem von Präsident Isaac Herzog und Hauptgewerkschaftsführer Arnnon-Bar David, fand bislang die Zustimmung aller Beteiligten. ",
            "type": "text"
          },
          {
            "value": "Führende Wirtschaftsvertreter, die rund 150 der größten Unternehmen in Israel vertreten, darunter Banken, Supermarkt- und Einzelhandelsketten, haben laut der Zeitung \"Haaretz\" für heute einen Streik angekündigt. Mehrere große High-Tech-Unternehmen teilten mit, sich dem Ausstand anzuschließen. ",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Menschen protestieren in der Nähe des Knesset in Jerusalem gegen die geplante Justizreform",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/cf8001bb-ba16-4079-b902-f31f27a09c07/AAABiYUcp-Q/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/ausland/asien/israel-vor-abstimmung-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "Justizreform in Israel",
              "text": "Erneut haben in Israel Zehntausende protestiert - heute könnte es zu einer entscheidenden Abstimmung kommen.",
              "title": "Tag der Entscheidung mit möglichen Überraschungen"
            },
            "type": "box"
          },
          {
            "value": "<h2>Rivlin warnt vor Bürgerkrieg</h2>",
            "type": "headline"
          },
          {
            "value": "Auch am Sonntagabend hatten in Tel Aviv und Jerusalem Hunderttausende Menschen gegen die Justizreform demonstriert. Vereinzelt kam es laut Medienberichten zu Zusammenstößen mit der Polizei, es gab mehrere Festnahmen. Bei einer Rede vor Gegnern der Reformpläne in Jerusalem warnte der frühere Staatspräsident Reuven Rivlin vor der Gefahr eines Bürgerkriegs. Gleichzeitig demonstrierten Zehntausende in Tel Aviv und Jerusalem für die Justizreform.",
            "type": "text"
          },
          {
            "value": "Der Entwurf zur Abschaffung der Angemessenheitsklausel ist ein Kernelement der Justizreform. Sie ermöglicht es bisher dem obersten Gericht des Landes, Regierungsentscheidungen als \"unangemessen\" zu bewerten. Zuletzt kam sie zur Anwendung, als das oberste Gericht im Januar die Ernennung des vorbestraften Arieh Deri (Schas-Partei) zum Innen- und Gesundheitsminister untersagte. ",
            "type": "text"
          },
          {
            "value": "<h2>Netanyahu wieder in der Knesset</h2>",
            "type": "headline"
          },
          {
            "value": "Auch Premier Benjamin Netanyahu wird heute wieder in der Knesset erwartet, nachdem ihm kurzfristig ein Herzschrittmacher implantiert wurde. Inzwischen wurde er aus dem Krankenhaus entlassen. Bisher scheint er entschlossen, die Reform durchs Parlament zu bringen.",
            "type": "text"
          },
          {
            "value": "Befürworter der Gesetzesänderung argumentieren, es handele sich bei der Angemessenheitsklausel um ein sehr subjektives Werkzeug, das den Richtern weitreichende politische Einmischung erlaube. Gegner des Reformvorhabens halten die Klausel hingegen für unerlässlich im Kampf gegen Korruption sowie zum Schutz vor willkürlichen Regierungsentscheidungen.",
            "type": "text"
          },
          {
            "value": "<strong>Über dieses Thema berichtete tagesschau24 am 24. Juli 2023 um 11:00 Uhr.</strong>",
            "type": "text"
          },
          {
            "related": [
              {
                "teaserImage": {
                  "alttext": "Der Demonstrationszug mit zahlreichen Flaggen zieht durch eine breite Straße",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/af66d82e-ac0b-4a3e-a1fe-d53dbc21b991/AAABiX6bsvY/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-07-23T07:51:46.887+02:00",
                "sophoraId": "israel-protestmarsch-100",
                "externalId": "7951afca-411a-40c0-acf9-21e53a804aa7",
                "topline": "Justizreform in Israel",
                "title": "Tagelanger Protestmarsch erreicht Jerusalem",
                "details": "https://www.tagesschau.de/api2u/ausland/asien/israel-protestmarsch-100.json",
                "detailsweb": "https://www.tagesschau.de/ausland/asien/israel-protestmarsch-100.html",
                "type": "story"
              },
              {
                "teaserImage": {
                  "title": "Dutzende Reservisten der israelischen Luftwaffe haben einen Brief veröffentlicht, in dem sie erneut androhen, nicht zum Dienst zu erscheinen, sollte die Regierung die umstrittene Justizreform vorantreiben.",
                  "copyright": "AP",
                  "alttext": "Israelische Reservisten protestieren im Februar auf einer Autobahn von Tel Aviv nach Jerusalem gegen die umstrittene Justizreform.",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/de523251-c76c-45e0-857a-db1d9f30286c/AAABiXfuofQ/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-07-21T12:38:10.299+02:00",
                "sophoraId": "israel-justizreform-proteste-reservisten-100",
                "externalId": "92a52570-a87b-4d72-b985-03cbce4042be",
                "topline": "Justizreform in Israel",
                "title": "Welche Rolle spielen die Reservisten?",
                "details": "https://www.tagesschau.de/api2u/ausland/israel-justizreform-proteste-reservisten-100.json",
                "detailsweb": "https://www.tagesschau.de/ausland/israel-justizreform-proteste-reservisten-100.html",
                "type": "story"
              }
            ],
            "type": "related"
          }
        ],
        "tracking": [
          {
            "sid": "app.ausland.asien.israel-parlament-justizreform-100",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1120",
            "otp": "meldung",
            "cid": "israel-parlament-justizreform-100",
            "pti": "Israel_Demonstranten_blockieren_Eingang_zum_Parlament",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Vor Abstimmung über Justizreform ",
        "firstSentence": "Vor der Abstimmung über den Umbau der Justiz haben in Israel erneut Gegner und Befürworter demonstriert.",
        "video": {
          "sophoraId": "video-1225586",
          "externalId": "90ef453c-4398-42ba-85b2-4186f29932cd",
          "title": "APP1145 NIF- Proteste Israel_vapp.mxf",
          "date": "2023-07-24T12:18:03.002+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225586~_view-hasChanged_lastKnown-C5474787022A37CA34F40A1E4F42AC0E.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225586",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T1218",
              "otp": "video",
              "cid": "video-1225586",
              "pti": "APP1145_NIF-_Proteste_Israel_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225586",
              "program": "Tagesschau",
              "title": "APP1145_NIF-_Proteste_Israel_vapp.mxf",
              "length": "16",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225586.html",
              "c7": "p7,video-1225586",
              "c8": "p8,16",
              "c9": "p9,Tagesschau_APP1145_NIF-_Proteste_Israel_vapp.mxf_24.07.2023_1218",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1143-5100.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1143-5100.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1143-5100.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-1143-5100.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/2c16fd4a-d981-4498-aad6-ad357848a4c0/AAABiYdI-AY/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/ausland/asien/israel-parlament-justizreform-100.json",
        "detailsweb": "https://www.tagesschau.de/ausland/asien/israel-parlament-justizreform-100.html",
        "shareURL": "https://www.tagesschau.de/ausland/asien/israel-parlament-justizreform-100.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "ressort": "ausland",
        "crop": {
          "id": "TV-20230724-1143-5100",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Justizreform in Israel",
          "mainTexts": [
            "Demonstranten block&shy;\nieren Knesset-Zugang",
            "Polizei setzt Wasserwerfer ein",
            "Heute Abstimmung über Teil der Reform",
            "Soll Oberstes Gericht einschränken"
          ],
          "sceneSrcTexts": [
            "",
            "",
            ""
          ],
          "cameraMoves": [
            {
              "point1X": 0,
              "point1Y": -0.286,
              "point2X": 1.286,
              "point2Y": 1,
              "startLeft": 72,
              "endLeft": 304,
              "duration": 7920
            }
          ],
          "events": [
            [
              0,
              9,
              164
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              164
            ],
            [
              3600,
              1,
              0
            ],
            [
              3600,
              2,
              0
            ],
            [
              4200,
              9,
              205
            ],
            [
              4200,
              0,
              205
            ],
            [
              4600,
              2,
              1
            ],
            [
              4600,
              3,
              1
            ],
            [
              7400,
              2,
              0
            ],
            [
              7960,
              9,
              72
            ],
            [
              7960,
              10,
              0
            ],
            [
              7960,
              0,
              72
            ],
            [
              8000,
              0,
              73.17
            ],
            [
              8040,
              0,
              74.34
            ],
            [
              8080,
              0,
              75.52
            ],
            [
              8120,
              0,
              76.69
            ],
            [
              8160,
              0,
              77.86
            ],
            [
              8200,
              2,
              1
            ],
            [
              8200,
              3,
              2
            ],
            [
              8200,
              0,
              79.03
            ],
            [
              8240,
              0,
              80.2
            ],
            [
              8280,
              0,
              81.37
            ],
            [
              8320,
              0,
              82.55
            ],
            [
              8360,
              0,
              83.72
            ],
            [
              8400,
              0,
              84.89
            ],
            [
              8440,
              0,
              86.06
            ],
            [
              8480,
              0,
              87.23
            ],
            [
              8520,
              0,
              88.4
            ],
            [
              8560,
              0,
              89.58
            ],
            [
              8600,
              0,
              90.75
            ],
            [
              8640,
              0,
              91.92
            ],
            [
              8680,
              0,
              93.09
            ],
            [
              8720,
              0,
              94.26
            ],
            [
              8760,
              0,
              95.43
            ],
            [
              8800,
              0,
              96.61
            ],
            [
              8840,
              0,
              97.78
            ],
            [
              8880,
              0,
              98.95
            ],
            [
              8920,
              0,
              100.12
            ],
            [
              8960,
              0,
              101.29
            ],
            [
              9000,
              0,
              102.46
            ],
            [
              9040,
              0,
              103.64
            ],
            [
              9080,
              0,
              104.81
            ],
            [
              9120,
              0,
              105.98
            ],
            [
              9160,
              0,
              107.15
            ],
            [
              9200,
              0,
              108.32
            ],
            [
              9240,
              0,
              109.49
            ],
            [
              9280,
              0,
              110.67
            ],
            [
              9320,
              0,
              111.84
            ],
            [
              9360,
              0,
              113.01
            ],
            [
              9400,
              0,
              114.18
            ],
            [
              9440,
              0,
              115.35
            ],
            [
              9480,
              0,
              116.53
            ],
            [
              9520,
              0,
              117.7
            ],
            [
              9560,
              0,
              118.87
            ],
            [
              9600,
              0,
              120.04
            ],
            [
              9640,
              0,
              121.21
            ],
            [
              9680,
              0,
              122.38
            ],
            [
              9720,
              0,
              123.56
            ],
            [
              9760,
              0,
              124.73
            ],
            [
              9800,
              0,
              125.9
            ],
            [
              9840,
              0,
              127.07
            ],
            [
              9880,
              0,
              128.24
            ],
            [
              9920,
              0,
              129.41
            ],
            [
              9960,
              0,
              130.59
            ],
            [
              10000,
              0,
              131.76
            ],
            [
              10040,
              0,
              132.93
            ],
            [
              10080,
              0,
              134.1
            ],
            [
              10120,
              0,
              135.27
            ],
            [
              10160,
              0,
              136.44
            ],
            [
              10200,
              0,
              137.62
            ],
            [
              10240,
              0,
              138.79
            ],
            [
              10280,
              0,
              139.96
            ],
            [
              10320,
              0,
              141.13
            ],
            [
              10360,
              0,
              142.3
            ],
            [
              10400,
              0,
              143.47
            ],
            [
              10440,
              0,
              144.65
            ],
            [
              10480,
              0,
              145.82
            ],
            [
              10520,
              0,
              146.99
            ],
            [
              10560,
              0,
              148.16
            ],
            [
              10600,
              0,
              149.33
            ],
            [
              10640,
              0,
              150.51
            ],
            [
              10680,
              0,
              151.68
            ],
            [
              10720,
              0,
              152.85
            ],
            [
              10760,
              0,
              154.02
            ],
            [
              10800,
              0,
              155.19
            ],
            [
              10840,
              0,
              156.36
            ],
            [
              10880,
              0,
              157.54
            ],
            [
              10920,
              0,
              158.71
            ],
            [
              10960,
              0,
              159.88
            ],
            [
              11000,
              0,
              161.05
            ],
            [
              11040,
              0,
              162.22
            ],
            [
              11080,
              0,
              163.39
            ],
            [
              11120,
              0,
              164.57
            ],
            [
              11160,
              0,
              165.74
            ],
            [
              11200,
              0,
              166.91
            ],
            [
              11240,
              0,
              168.08
            ],
            [
              11280,
              0,
              169.25
            ],
            [
              11320,
              0,
              170.42
            ],
            [
              11360,
              0,
              171.6
            ],
            [
              11400,
              0,
              172.77
            ],
            [
              11440,
              0,
              173.94
            ],
            [
              11480,
              0,
              175.11
            ],
            [
              11520,
              0,
              176.28
            ],
            [
              11560,
              2,
              0
            ],
            [
              11560,
              0,
              177.45
            ],
            [
              11600,
              0,
              178.63
            ],
            [
              11640,
              0,
              179.8
            ],
            [
              11680,
              0,
              180.97
            ],
            [
              11720,
              0,
              182.14
            ],
            [
              11760,
              0,
              183.31
            ],
            [
              11800,
              0,
              184.48
            ],
            [
              11840,
              0,
              185.66
            ],
            [
              11880,
              0,
              186.83
            ],
            [
              11920,
              0,
              188
            ],
            [
              11960,
              0,
              189.17
            ],
            [
              12000,
              0,
              190.34
            ],
            [
              12040,
              0,
              191.52
            ],
            [
              12080,
              0,
              192.69
            ],
            [
              12120,
              0,
              193.86
            ],
            [
              12160,
              0,
              195.03
            ],
            [
              12200,
              0,
              196.2
            ],
            [
              12240,
              2,
              1
            ],
            [
              12240,
              3,
              3
            ],
            [
              12240,
              0,
              197.37
            ],
            [
              12280,
              0,
              198.55
            ],
            [
              12320,
              0,
              199.72
            ],
            [
              12360,
              0,
              200.89
            ],
            [
              12400,
              0,
              202.06
            ],
            [
              12440,
              0,
              203.23
            ],
            [
              12480,
              0,
              204.4
            ],
            [
              12520,
              0,
              205.58
            ],
            [
              12560,
              0,
              206.75
            ],
            [
              12600,
              0,
              207.92
            ],
            [
              12640,
              0,
              209.09
            ],
            [
              12680,
              0,
              210.26
            ],
            [
              12720,
              0,
              211.43
            ],
            [
              12760,
              0,
              212.61
            ],
            [
              12800,
              0,
              213.78
            ],
            [
              12840,
              0,
              214.95
            ],
            [
              12880,
              0,
              216.12
            ],
            [
              12920,
              0,
              217.29
            ],
            [
              12960,
              0,
              218.46
            ],
            [
              13000,
              0,
              219.64
            ],
            [
              13040,
              0,
              220.81
            ],
            [
              13080,
              0,
              221.98
            ],
            [
              13120,
              0,
              223.15
            ],
            [
              13160,
              0,
              224.32
            ],
            [
              13200,
              0,
              225.49
            ],
            [
              13240,
              0,
              226.67
            ],
            [
              13280,
              0,
              227.84
            ],
            [
              13320,
              0,
              229.01
            ],
            [
              13360,
              0,
              230.18
            ],
            [
              13400,
              0,
              231.35
            ],
            [
              13440,
              0,
              232.53
            ],
            [
              13480,
              0,
              233.7
            ],
            [
              13520,
              0,
              234.87
            ],
            [
              13560,
              0,
              236.04
            ],
            [
              13600,
              0,
              237.21
            ],
            [
              13640,
              0,
              238.38
            ],
            [
              13680,
              0,
              239.56
            ],
            [
              13720,
              0,
              240.73
            ],
            [
              13760,
              0,
              241.9
            ],
            [
              13800,
              0,
              243.07
            ],
            [
              13840,
              0,
              244.24
            ],
            [
              13880,
              0,
              245.41
            ],
            [
              13920,
              0,
              246.59
            ],
            [
              13960,
              0,
              247.76
            ],
            [
              14000,
              0,
              248.93
            ],
            [
              14040,
              0,
              250.1
            ],
            [
              14080,
              0,
              251.27
            ],
            [
              14120,
              0,
              252.44
            ],
            [
              14160,
              0,
              253.62
            ],
            [
              14200,
              0,
              254.79
            ],
            [
              14240,
              0,
              255.96
            ],
            [
              14280,
              0,
              257.13
            ],
            [
              14320,
              0,
              258.3
            ],
            [
              14360,
              0,
              259.47
            ],
            [
              14400,
              0,
              260.65
            ],
            [
              14440,
              0,
              261.82
            ],
            [
              14480,
              0,
              262.99
            ],
            [
              14520,
              0,
              264.16
            ],
            [
              14560,
              0,
              265.33
            ],
            [
              14600,
              0,
              266.51
            ],
            [
              14640,
              0,
              267.68
            ],
            [
              14680,
              0,
              268.85
            ],
            [
              14720,
              0,
              270.02
            ],
            [
              14760,
              0,
              271.19
            ],
            [
              14800,
              0,
              272.36
            ],
            [
              14840,
              0,
              273.54
            ],
            [
              14880,
              0,
              274.71
            ],
            [
              14920,
              0,
              275.88
            ],
            [
              14960,
              0,
              277.05
            ],
            [
              15000,
              0,
              278.22
            ],
            [
              15040,
              0,
              279.39
            ],
            [
              15080,
              0,
              280.57
            ],
            [
              15120,
              2,
              0
            ],
            [
              15120,
              0,
              281.74
            ],
            [
              15160,
              0,
              282.91
            ],
            [
              15200,
              0,
              284.08
            ],
            [
              15240,
              0,
              285.25
            ],
            [
              15280,
              0,
              286.42
            ],
            [
              15320,
              0,
              287.6
            ],
            [
              15360,
              0,
              288.77
            ],
            [
              15400,
              0,
              289.94
            ],
            [
              15440,
              0,
              291.11
            ],
            [
              15480,
              0,
              292.28
            ],
            [
              15520,
              0,
              293.45
            ],
            [
              15560,
              0,
              294.63
            ],
            [
              15600,
              0,
              295.8
            ],
            [
              15640,
              0,
              296.97
            ],
            [
              15680,
              0,
              298.14
            ],
            [
              15720,
              0,
              299.31
            ],
            [
              15760,
              0,
              300.48
            ],
            [
              15800,
              0,
              301.66
            ],
            [
              15840,
              0,
              302.83
            ],
            [
              15880,
              0,
              304
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "spanien-wahl-140",
        "externalId": "83f3979e-6221-4153-b0ee-90549bdbfbd0",
        "title": "Hängepartie in Spanien",
        "date": "2023-07-24T09:17:59.163+02:00",
        "teaserImage": {
          "alttext": "Menschen beobachten den Verlauf der Parlamentswahlen am Sitz der konservativen oppositionellen Volkspartei (PP) in der Calle de Genova. in Madrid.",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/ab06484b-83f0-4ec7-a685-ef99d236175c/AAABiYaxf4U/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Spanien"
          },
          {
            "tag": "Wahl PP"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/spanien-wahl-140~_view-hasChanged_lastKnown-2F404D0B316DCD2E878F9893637FED12.json",
        "content": [
          {
            "value": "<strong>Nach der Wahl droht Spanien ein politisches Patt: Die Konservativen werden stärkste Kraft - doch es reicht nicht zur Regierungsbildung. Auch die Sozialisten mit Regierungschef Sánchez haben keine Mehrheit mit bisherigen Partnern. </strong>",
            "type": "text"
          },
          {
            "value": "<em>Von Marc Hoffmann, ARD-Studio Madrid</em>",
            "type": "text"
          },
          {
            "value": "Der Spitzenkandidat der konservativen Volkspartei (PP) lässt sich lange Zeit. Erst kurz nach Mitternacht tritt Alberto Núñez Feijóo auf dem Balkon der Parteizentrale vor seine Anhänger. Er bemüht sich, den strahlenden Gewinner abzugeben. Die Konservativen holen die meisten Stimmen. Aber trotzdem reichen die deutlichen Zugewinne im Vergleich zur Parlamentswahl vor vier Jahren nicht, um die linke Regierung von Pedró Sánchez abzulösen. ",
            "type": "text"
          },
          {
            "video": {
              "sophoraId": "video-1225552",
              "externalId": "f30b33f4-c77f-4ab2-a8bd-f1e2ecf3ac86",
              "title": "Kristina Böker, ARD Madrid, mit Ausblicken nach der Wahl in Spanien",
              "date": "2023-07-24T10:48:19.244+02:00",
              "teaserImage": {
                "title": "Sendungsbild",
                "copyright": "ARD-aktuell",
                "alttext": "Sendungsbild",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/def9a016-39ac-441b-9ab1-1575a0413c17/AAABiYcVvRE/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "tags": [],
              "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225552~_view-hasChanged_lastKnown-124DE5C87B37C65D44BA4D358FB1DBC7.json",
              "tracking": [
                {
                  "sid": "app.multimedia.video.video-1225552",
                  "src": "ard-aktuell",
                  "ctp": "SEGMENT",
                  "pdt": "20230724T1048",
                  "otp": "video",
                  "cid": "video-1225552",
                  "pti": "Kristina_Boeker_ARD_Madrid_mit_Ausblicken_nach_der_Wahl_in_Spanien",
                  "bcr": "ja",
                  "type": "generic"
                },
                {
                  "assetid": "video-1225552",
                  "program": "tagesschau24",
                  "title": "Kristina_Boeker_ARD_Madrid_mit_Ausblicken_nach_der_Wahl_in_Spanien",
                  "length": "322",
                  "c2": "p2,N",
                  "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225552.html",
                  "c7": "p7,video-1225552",
                  "c8": "p8,322",
                  "c9": "p9,tagesschau24_Kristina_Boeker_ARD_Madrid_mit_Ausblicken_nach_der_Wahl_in_Spanien_24.07.2023_1000",
                  "c10": "p10,Das_Erste",
                  "c12": "p12,content",
                  "c16": "p16,ARD_Information/ARD_Livestream",
                  "c18": "p18,N",
                  "type_nielsen": "content",
                  "type": "nielsen"
                }
              ],
              "streams": {
                "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1010-3800.webs.h264.mp4",
                "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1010-3800.webm.h264.mp4",
                "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1010-3800.webxl.h264.mp4",
                "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-1010-3800.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
              },
              "alttext": "Sendungsbild",
              "copyright": "tagesschau",
              "type": "video"
            },
            "type": "video"
          },
          {
            "value": "Feijóo kündigt an, es trotzdem zu versuchen. Es sei seine Pflicht, Gespräche für mögliche Regierungskonstellationen aufzunehmen, damit Spanien im Einklang mit dem Wahlergebnis regiert werden könne. Er meint also offenbar: mit ihm selbst an der Spitze.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Wahlplakat der Partei Vox in Spanien wirft Spaniens Ministerpräsident Sánchez vor, \"hunderte Monster\" - gemeint sind Sexualstraftäter - freigelassen zu haben",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/ab04d310-63e7-4b46-97f0-5436cfee3ab6/AAABiWlW5aU/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/ausland/europa/spanien-wahl-vox-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "Spanien vor der Wahl",
              "text": "Bei der Parlamentswahl könnte in Spanien ein Bündnis von konservativen und ultrarechten Parteien gewinnen.",
              "title": "Rolle rückwärts mit Vox?"
            },
            "type": "box"
          },
          {
            "value": "<h2>Niederlage für Ultra-Rechte </h2>",
            "type": "headline"
          },
          {
            "value": "Aber wie das gelingen kann, bleibt offen. Denn der potenzielle Bündnispartner, die rechtsextreme Partei Vox, verliert deutlich an Sitzen - zusammen mit der PP wird es also nicht für einen Regierungswechsel reichen. Und auch andere Parteien hatten früh klar gemacht, dass sie mit den Ultra-Rechten keine gemeinsame Sache machen wollen. ",
            "type": "text"
          },
          {
            "value": "Nun werde Sánchez wohl doch weitermachen können, stellte Vox-Chef Santiago Abascal am Abend verbittert fest, und zwar unterstützt von Kommunisten, Separatisten und Terroristen, so Abscal.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Pedro Sánchez wird von seinen Anhängern vor der Parteizentrale der Sozialistischen Arbeiterpartei in Madrid gefeiert.",
                "alttext": "Pedro Sánchez wird von seinen Anhängern vor der Parteizentrale der Sozialistischen Arbeiterpartei in Madrid gefeiert.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/6f6c8b37-219a-4969-b89e-e1a78bcf4bb5/AAABiYasaO8/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "Wobei das gar keine ausgemachte Sache ist. Denn auch den Sozialisten und ihren bisherigen Bündnispartnern im spanischen Kongress fehlt es an ausreichenden Stimmen für eine stabile Mehrheit. Sánchez jubelt trotzdem. Der prognostizierte Verlust der Sozialisten blieb aus. Ein Sieg des rechten Lagers wurde abgewendet. Der Block der Rückwärtsgewandten, also diejenigen, die sämtliche Errungenschaften der vergangenen vier Jahre rückgängig machen wollten, seien gescheitert, so Sánchez.",
            "type": "text"
          },
          {
            "value": "<h2>Erfolg für neues Linksbündnis Sumar </h2>",
            "type": "headline"
          },
          {
            "value": "Als starker politischer Partner an der Seite der Sozialisten empfiehlt sich das erst vor wenigen Wochen aus der Taufe gehobene Linksbündnis Sumar von Arbeitsministerin Yolanda Diaz, in dem der bisherige Koalitionspartner Unidas Podemos aufgegangen ist. ",
            "type": "text"
          },
          {
            "value": "Diaz ist gewissermaßen die dritte strahlende Siegerin nach einem langen Wahlabend. Die Demokratie habe gewonnen, ruft sie. Nur: Spaniens Demokratie muss nun auch beweisen, wie es das politische Patt im Parlament auflösen kann. Eine große Koalition bleibt in Spanien sehr unwahrscheinlich. Am Ende könnten sogar Neuwahlen stehen.",
            "type": "text"
          },
          {
            "value": " ",
            "type": "text"
          },
          {
            "title": "Konservative gewinnen - schwierige Regierungsbildung in Spanien",
            "date": "2023-07-24T08:38:30.496+02:00",
            "teaserImage": {
              "copyright": "ARD-aktuell",
              "alttext": "Hintergrundbild für den Audioplayer",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMNQQ/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMOLk/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMPOY/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMQDM/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMQ7w/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMG0w/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMHqw/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMIg0/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMJbE/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMLgk/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tME_8/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMF58/16x9-1920.jpg"
              },
              "type": "image"
            },
            "tracking": [
              {
                "sid": "app.multimedia.audio.audio-166942",
                "src": "ard-aktuell",
                "ctp": "nicht-definiert",
                "pdt": "20230724T0838",
                "otp": "audio",
                "cid": "audio-166942",
                "pti": "Konservative_gewinnen_-_schwierige_Regierungsbildung_in_Spanien",
                "bcr": "ja",
                "type": "generic"
              }
            ],
            "text": "Marc Hoffmann, ARD Madrid",
            "stream": "https://media.tagesschau.de/audio/2023/0724/AU-20230724-0833-1200.mp3",
            "type": "audio"
          },
          {
            "value": "<strong>Über dieses Thema berichtete Deutschlandfunk am 24. Juli 2023 um 08:41 Uhr.</strong>",
            "type": "text"
          },
          {
            "related": [
              {
                "teaserImage": {
                  "alttext": "Alberto Nuñez Feijoo",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/2edc9e91-0568-4046-b0bd-8b6bb96fb057/AAABiYZkQds/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-07-24T07:34:25.055+02:00",
                "sophoraId": "wahl-spanien-130",
                "externalId": "2e203db0-1b73-4361-84a0-8ac0176a4ddb",
                "topline": "Nach Parlamentswahl in Spanien",
                "title": "Ein Pyrrhussieg für die Konservativen?",
                "details": "https://www.tagesschau.de/api2u/ausland/europa/wahl-spanien-130.json",
                "detailsweb": "https://www.tagesschau.de/ausland/europa/wahl-spanien-130.html",
                "type": "story"
              },
              {
                "teaserImage": {
                  "alttext": "Pedro Sanchez auf dem EU-Gipfel in Brüssel (Belgien) im Juni 2023",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/97c334ad-3280-4367-9bbe-08926a66e6cb/AAABiRDEhuY/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-07-01T11:24:22.649+02:00",
                "sophoraId": "spanien-eu-ratspraesidentschaft-100",
                "externalId": "7dfdae2b-2034-4761-a78a-d2423965be9f",
                "topline": "Spaniens Regierungschef Sánchez",
                "title": "Zwischen Ratspräsidentschaft und Wahlkampf ",
                "details": "https://www.tagesschau.de/api2u/ausland/europa/spanien-eu-ratspraesidentschaft-100.json",
                "detailsweb": "https://www.tagesschau.de/ausland/europa/spanien-eu-ratspraesidentschaft-100.html",
                "type": "story"
              }
            ],
            "type": "related"
          }
        ],
        "tracking": [
          {
            "sid": "app.ausland.europa.spanien-wahl-140",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T0917",
            "otp": "meldung",
            "cid": "spanien-wahl-140",
            "pti": "Spanien_droht_nach_Parlamentswahl_politisches_Patt",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Nach der Parlamentswahl",
        "firstSentence": "Bei der Parlamentswahl in Spanien kam weder das rechte noch das linke Lager auf genügend Stimmen.",
        "video": {
          "sophoraId": "video-1225334",
          "externalId": "0eddb526-b370-486f-b585-7cc566a12b95",
          "title": "APP2030 NIF-Wahl in Spanien_vapp.mxf",
          "date": "2023-07-24T01:01:31.958+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225334~_view-hasChanged_lastKnown-687126458FEB02D0BE3CC4538B5281D5.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225334",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T0101",
              "otp": "video",
              "cid": "video-1225334",
              "pti": "APP2030_NIF-Wahl_in_Spanien_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225334",
              "program": "Tagesschau",
              "title": "APP2030_NIF-Wahl_in_Spanien_vapp.mxf",
              "length": "18",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225334.html",
              "c7": "p7,video-1225334",
              "c8": "p8,18",
              "c9": "p9,Tagesschau_APP2030_NIF-Wahl_in_Spanien_vapp.mxf_24.07.2023_0101",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0723/TV-20230723-2036-4100.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0723/TV-20230723-2036-4100.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0723/TV-20230723-2036-4100.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0723/TV-20230723-2036-4100.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/4391ebdc-9989-4c9f-9906-b5b792961712/AAABiYQKjtE/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/ausland/europa/spanien-wahl-140.json",
        "detailsweb": "https://www.tagesschau.de/ausland/europa/spanien-wahl-140.html",
        "shareURL": "https://www.tagesschau.de/ausland/europa/spanien-wahl-140.html",
        "comments": "https://www.tagesschau.de/api2u/spanien-wahl-140~_view-comment.json",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "ressort": "ausland",
        "crop": {
          "id": "TV-20230723-2036-4100",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Parlamentswahl in Spanien",
          "mainTexts": [
            "Konservative siegen, aber ohne Mehrheit",
            "Auch mit rechter Vox nicht genug Sitze",
            "Linkes Lager ebenfalls unter 50 Prozent",
            "Regierungsbildung wird wohl schwierig"
          ],
          "sceneSrcTexts": [
            "",
            "",
            ""
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              139
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              139
            ],
            [
              3560,
              1,
              0
            ],
            [
              3560,
              2,
              0
            ],
            [
              4240,
              2,
              1
            ],
            [
              4240,
              3,
              1
            ],
            [
              7840,
              2,
              0
            ],
            [
              8520,
              9,
              189
            ],
            [
              8520,
              2,
              1
            ],
            [
              8520,
              3,
              2
            ],
            [
              8520,
              0,
              189
            ],
            [
              12280,
              2,
              0
            ],
            [
              12960,
              9,
              169
            ],
            [
              12960,
              2,
              1
            ],
            [
              12960,
              3,
              3
            ],
            [
              12960,
              0,
              169
            ],
            [
              16680,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "evg-streik-august-100",
        "externalId": "7cb7b6ee-392b-43fa-b654-c1af3beb7f2d",
        "title": "EVG schließt Streiks bis Ende August aus",
        "date": "2023-07-24T08:25:49.135+02:00",
        "teaserImage": {
          "alttext": "Eine Fahne der Eisenbahn- und Verkehrsgewerkschaft (EVG).",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/d8696fee-2fce-4702-bebb-5f2a06ada557/AAABiNlMNI4/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "EVG"
          },
          {
            "tag": "Streik"
          },
          {
            "tag": "Deutsche Bahn"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/evg-streik-august-100~_view-hasChanged_lastKnown-584E2E387C1D3B7DB2853CF33F3CEB9F.json",
        "content": [
          {
            "value": "<strong>Im Tarifstreit mit der Deutschen Bahn schließt die Eisenbahngewerkschaft EVG Streiks zur Hauptferiensaison bis Ende August aus - unabhängig vom Schlichterspruch am kommenden Freitag. </strong>",
            "type": "text"
          },
          {
            "value": "Die Eisenbahngewerkschaft EVG kündigt wenige Tage vor dem Schlichterspruch an, bis zum 31. August nicht mehr zu streiken. Das sagte EVG-Chef Martin Burkert der \"Augsburger Allgemeinen\". \"Bis Ende August wird definitiv nicht gestreikt\", so Burkert. Außer in Bayern und Baden-Württemberg sind bis dahin in allen anderen Bundesländern die Schulferien zu Ende.",
            "type": "text"
          },
          {
            "value": "Der Gewerkschaftschef kündigte an, dass bereits vor dem Wochenende das Ergebnis der Schlichtung erwartet wird. \"Am Freitag wollen die Schlichter ihr Ergebnis präsentieren, dann beraten wir im Bundesvorstand über eine Empfehlung für die Mitglieder und beginnen im August die Urabstimmung\", erklärte Burkert. \"Wegen der Ferien dauert das ganze Verfahren bis 31. August\", sagte Burkert. \"Es ist die erste Urabstimmung bei der EVG seit 30 Jahren.\"",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Mecklenburg-Vorpommern, Schwerin: Personenzüge der Deutschen Bahn (DB) stehen auf Abstellgleisen am Hauptbahnhof.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/4fcc977f-aa58-4ab2-875f-925b52db9484/AAABiHF4-mU/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/wirtschaft/verbraucher/schlichtung-bahn-evg-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "Ringen um Lösung im Tarifstreit",
              "text": "Im Tarifstreit zwischen der Bahn und der Verkehrsgewerkschaft EVG hat die Schlichtung begonnen.",
              "title": "Bei der Bahn wird jetzt geschlichtet"
            },
            "type": "box"
          },
          {
            "value": "<h2>Pfarr und de Maizière vermitteln</h2>",
            "type": "headline"
          },
          {
            "value": "Seit Mitte des Monats vermitteln externe Schlichter in dem festgefahrenen Tarifkonflikt. Über alle Details zum Stand der Gespräche wurde Stillschweigen vereinbart. Angesetzt waren rund zwei Wochen bis zum 31. Juli. Als Vermittlerin hat die EVG die Arbeitsrechtlerin Heide Pfarr (SPD) berufen. Für die Bahn schlichtet der frühere Verteidigungs-, Innen- und Kanzleramtsminister Thomas de Maizière (CDU). ",
            "type": "text"
          },
          {
            "value": "Die Tarifverhandlungen begannen Ende Februar und scheiterten Ende Juni. Beide Seiten ließen sich anschließend auf die Schlichtung ein. Die Bahn hat der Gewerkschaft zwölf Prozent mehr Lohn für die unteren Lohngruppen, zehn für die mittleren und acht für die oberen angeboten, allerdings mit einer deutlich längeren Laufzeit als von der EVG gefordert.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "alttext": "Ein ICE steht vor der Abfahrt im Erfurter Hauptbahnhof. ",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/fcd7782b-64d5-4e5a-b3d8-5c6e768579b2/AAABiWGSyKs/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/wirtschaft/tarifkonflikt-bahn-100.json\" type=\"intern\">mehr</a>",
              "subtitle": "Tarifkonflikt zwischen EVG und Bahn",
              "text": "Seit Februar ringen der Bahn-Konzern und die Gewerkschaft EVG um höhere Tarife.",
              "title": "Zeit der Schlichter "
            },
            "type": "box"
          },
          {
            "value": "<h2>Burkert gegen Trennung von Schienennetz und Betrieb</h2>",
            "type": "headline"
          },
          {
            "value": "\"Entscheidend ist, dass die Beschäftigten angesichts der Inflation eine wirklich deutliche Steigerung brauchen\", betonte Burkert. \"Sonst wird auch der Arbeitskräftemangel bei der Bahn zum immer größeren Problem.\"",
            "type": "text"
          },
          {
            "value": "In der Diskussion über eine Bahnreform sprach sich Burkert für mehr Bedenkzeit aus: \"Es ist irre, dies in wenigen Monaten machen zu wollen. Eine zweite Bahnreform - nach der Privatisierung - muss gut durchdacht werden.\" Er sprach sich dabei erneut gegen eine Trennung von Schienennetz und Betrieb aus: \"Eine Zerschlagung würde jahrelangen Stillstand angesichts des Organisationsaufwandes bedeuten. Internationale Beispiele zeigen, dass eine Zerschlagung der falsche Weg ist.\"",
            "type": "text"
          },
          {
            "value": "<strong>Über dieses Thema berichtete die tagesschau am 17. Juli 2023 um 12:00 Uhr.</strong>",
            "type": "text"
          },
          {
            "related": [
              {
                "teaserImage": {
                  "alttext": " Die Uhr neben dem Logo der Deutschen Bahn (DB) zeigt am Eingang zum Münchner Hauptbahnhof zeigt fünf vor zwölf.",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/f7566560-c01e-49b8-963c-524646dd48e8/AAABiQJ4bwQ/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-06-28T16:54:45.806+02:00",
                "sophoraId": "hintergrund-schlichtung-bahn-100",
                "externalId": "3cea606e-f068-4d75-9322-fd3fc3f50d50",
                "topline": "EVG und Deutsche Bahn",
                "title": "Wie eine Schlichtung den Tarifstreit lösen soll",
                "details": "https://www.tagesschau.de/api2u/wirtschaft/unternehmen/hintergrund-schlichtung-bahn-100.json",
                "detailsweb": "https://www.tagesschau.de/wirtschaft/unternehmen/hintergrund-schlichtung-bahn-100.html",
                "type": "story"
              },
              {
                "teaserImage": {
                  "alttext": "Reisende sind im Frankfurter Hauptbahnhof unterwegs.",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/a80c1a05-9068-49f4-8eea-c28f44202710/AAABiG0E3IY/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-06-22T12:27:33.237+02:00",
                "sophoraId": "evg-bahn-tarifkonflikt-100",
                "externalId": "35ebe07c-649c-4382-8299-4c43f189c939",
                "topline": "Tarifkonflikt bei der Bahn",
                "title": "Unbefristete Streiks - oder Schlichtung? ",
                "details": "https://www.tagesschau.de/api2u/wirtschaft/unternehmen/evg-bahn-tarifkonflikt-100.json",
                "detailsweb": "https://www.tagesschau.de/wirtschaft/unternehmen/evg-bahn-tarifkonflikt-100.html",
                "type": "story"
              },
              {
                "teaserImage": {
                  "alttext": "Das DB-Logo ist auf dem Turm am Hauptbahnhof Berlin zu sehen. ",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/d20716ed-8342-45ab-95cd-e83319dbd149/AAABiOL7nM0/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-06-28T15:02:16.637+02:00",
                "sophoraId": "bahn-schlichtung-evg-100",
                "externalId": "543d3dc3-a718-4e58-abf2-34ca44411b9e",
                "topline": "Tarifstreit",
                "title": "Bahn schlägt EVG Schlichtung vor",
                "details": "https://www.tagesschau.de/api2u/wirtschaft/unternehmen/bahn-schlichtung-evg-100.json",
                "detailsweb": "https://www.tagesschau.de/wirtschaft/unternehmen/bahn-schlichtung-evg-100.html",
                "type": "story"
              },
              {
                "teaserImage": {
                  "alttext": "ICE-Züge stehen in München am Hauptbahnhof an den Bahnsteigen. ",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/f78debee-c31c-4a9d-a8af-cff8a8cb3a11/AAABiB4dPng/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2023-07-05T18:02:53.077+02:00",
                "sophoraId": "bahn-schlichtung-zeitplan-100",
                "externalId": "74c0e675-5041-4da7-8539-75d2c64f0ed0",
                "topline": "Vorerst keine Streiks",
                "title": "Bahn-Schlichtung beginnt Mitte Juli",
                "details": "https://www.tagesschau.de/api2u/wirtschaft/bahn-schlichtung-zeitplan-100.json",
                "detailsweb": "https://www.tagesschau.de/wirtschaft/bahn-schlichtung-zeitplan-100.html",
                "type": "story"
              }
            ],
            "type": "related"
          }
        ],
        "tracking": [
          {
            "sid": "app.wirtschaft.unternehmen.evg-streik-august-100",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T0825",
            "otp": "meldung",
            "cid": "evg-streik-august-100",
            "pti": "Bahn-Gewerkschaft_schliesst_Streiks_bis_31._August_aus",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Tarifstreit bei der Bahn",
        "firstSentence": "Im Tarifstreit mit der Deutschen Bahn schließt die EVG Streiks zur Hauptferiensaison bis Ende August aus.",
        "video": {
          "sophoraId": "video-1225450",
          "externalId": "07261ea8-b955-40d4-b97e-44958e94cd93",
          "title": "APP0730 NIF- Keine Bahnstreiks_vapp.mxf",
          "date": "2023-07-24T08:40:35.632+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225450~_view-hasChanged_lastKnown-8484B12E4531EE42E4F84469C8CDE04A.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225450",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T0840",
              "otp": "video",
              "cid": "video-1225450",
              "pti": "APP0730_NIF-_Keine_Bahnstreiks_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225450",
              "program": "Tagesschau",
              "title": "APP0730_NIF-_Keine_Bahnstreiks_vapp.mxf",
              "length": "14",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225450.html",
              "c7": "p7,video-1225450",
              "c8": "p8,14",
              "c9": "p9,Tagesschau_APP0730_NIF-_Keine_Bahnstreiks_vapp.mxf_24.07.2023_0840",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0730-3800.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0730-3800.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0730-3800.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0730-3800.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/f10a4937-23fd-4e74-ad86-3f0918ec7533/AAABiYZhJFs/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/wirtschaft/unternehmen/evg-streik-august-100.json",
        "detailsweb": "https://www.tagesschau.de/wirtschaft/unternehmen/evg-streik-august-100.html",
        "shareURL": "https://www.tagesschau.de/wirtschaft/unternehmen/evg-streik-august-100.html",
        "comments": "https://www.tagesschau.de/api2u/evg-streik-august-100~_view-comment.json",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "ressort": "wirtschaft",
        "crop": {
          "id": "TV-20230724-0730-3800",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Deutsche Bahn",
          "mainTexts": [
            "EVG schließt Streiks in Hauptferienzeit aus",
            "Bis Ende August kein Arbeitsausstand",
            "Diese Woche kommt Schlichtungsergebnis"
          ],
          "sceneSrcTexts": [
            "",
            "",
            ""
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              164
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              164
            ],
            [
              3760,
              1,
              0
            ],
            [
              3760,
              2,
              0
            ],
            [
              4440,
              9,
              192
            ],
            [
              4440,
              2,
              1
            ],
            [
              4440,
              3,
              1
            ],
            [
              4440,
              0,
              192
            ],
            [
              7760,
              2,
              0
            ],
            [
              8440,
              9,
              242
            ],
            [
              8440,
              2,
              1
            ],
            [
              8440,
              3,
              2
            ],
            [
              8440,
              0,
              242
            ],
            [
              12280,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "gedenken-loveparade-100",
        "externalId": "e87e63df-c577-4bd1-9ebb-9eddd341d0ab",
        "title": "\"Duisburg hat alles verändert\"",
        "date": "2023-07-24T04:15:11.525+02:00",
        "teaserImage": {
          "alttext": "Das Datum des Loveparade-Unglücks wird im Tunnel in Duisburg aus Kerzen gebildet",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/a3414c93-123a-49ea-8c33-93284edcbb9d/AAABiYVF6TI/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Loveparade"
          },
          {
            "tag": "Duisburg"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/gedenken-loveparade-100~_view-hasChanged_lastKnown-C399C26A650BDDCED77DF28F0230F306.json",
        "content": [
          {
            "value": "<strong>Zum 13. Mal jährt sich heute die Tragödie bei der Loveparade in Duisburg. Viele Fehler bei Planung und Durchführung haben zum tödlichen Ausgang geführt. Welche Lehren wurden daraus gezogen?</strong>",
            "type": "text"
          },
          {
            "value": "<em>Von Christian Feld, ARD Berlin</em>",
            "type": "text"
          },
          {
            "value": "Die Katastrophe mag 13 Jahre zurückliegen, das Gedenken in Duisburg geht weiter. Jahr für Jahr, auch gestern Abend. Dutzende Grableuchten bilden das Datum der Loveparade-Katastrophe: 24. Juli 2010. Immer am Vorabend des Jahrestages organisiert der Verein \"Bürger für Bürger\" die \"Nacht der 1000 Lichter\". Es ist eine Einladung zum Innehalten an dem Ort, wo 21 Menschen gestorben und mehr als 650 verletzt worden sind.",
            "type": "text"
          },
          {
            "value": "\"Die Loveparade wurde zum Totentanz\", hieß es bei der Trauerfeier nach dem Unglück. Der Druck der Menschenmassen war unerträglich geworden an der Rampe, die gleichzeitig Ein- und Ausgang für das Loveparade-Gelände war. Vieles war schiefgegangen - an diesem 24. Juli, aber auch vorher bei der Planung.",
            "type": "text"
          },
          {
            "value": "<h2>Einschnitt für Organisation von Großveranstaltungen</h2>",
            "type": "headline"
          },
          {
            "value": "Es ist eine Tragödie, aus der Lehren gezogen wurden, gezogen werden mussten. Jürgen Gerlach, Professor an der Bergischen Universität in Wuppertal, hat für den mittlerweile eingestellten Strafprozess am Landgericht Duisburg ein Gutachten von 3800 Seiten erstellt und Schlussfolgerungen veröffentlicht. Aus seiner Sicht, so schreibt er, hätte \"nur eine Absage im Vorfeld der Veranstaltung Todesfälle und/oder Verletzungen verhindern können\".",
            "type": "text"
          },
          {
            "value": "Die Katastrophe vor 13 Jahren markierte einen Einschnitt für alle, die solche Großveranstaltungen genehmigen oder organisieren. \"Duisburg hat alles verändert\", sagt Timm Zeiss im Gespräch mit dem <em>WDR. </em>\"Es gab eine Zeit davor und eine Zeit danach.\" ",
            "type": "text"
          },
          {
            "value": "Zeiss ist Geschäftsführer von \"Rave The Planet\". Die Techno-Parade in Berlin ist eine angemeldete Demonstration, an der in diesem und im vergangenen Jahr jeweils Hunderttausende Menschen teilnahmen. Zu den Machern gehört auch der DJ Dr. Motte, Initiator der ersten Loveparade.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Kreuze erinnern an die Opfer des Loveparade-Unglücks - 21 Menschen im Alter von 17 bis 38 Jahren starben, Hunderte wurden verletzt.",
                "alttext": " Kreuze stehen im Gedenken an die Opfer des Loveparade-Unglücks auf einer Treppe am Unglücksort in Duisburg",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/71939684-6075-423d-947f-deb663efa63e/AAABiYVGFgA/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>\"Über manche Engstelle hätte man früher hinweggesehen\" </h2>",
            "type": "headline"
          },
          {
            "value": "Duisburg habe auf schreckliche Weise gezeigt, wie Probleme bei einer solchen Massenveranstaltung eskalieren können, so Organisator Zeiss. Nach seiner Einschätzung seien vorher \"wesentlich höhere Risiken\" eingegangen worden: \"Über manche Engstelle hätte man früher hinweggesehen.\" ",
            "type": "text"
          },
          {
            "value": "Jetzt nicht mehr. Bei \"Rave The Planet\" 2022 äußerte die Polizei gegen Ende der Veranstaltung Bedenken, dass Personen gegen Bauzäune gedrückt werden könnten. Die Musik wurde erst einmal abgestellt. Schließlich entschieden die Organisatoren, etwas früher als geplant Schluss zu machen.",
            "type": "text"
          },
          {
            "value": "Auch beim Festival Parookaville in Weeze am Niederrhein gingen die Veranstalter im vergangenen Jahr auf Nummer sicher. Bereits nach wenigen Liedern musste die Kölner Band Kasalla ihren Auftritt vorzeitig beenden. Der Andrang vor der Bühne war zum Sicherheitsrisiko geworden. Die Band schrieb später bei Instagram: \"Sorry, Parookaville, dass wir abbrechen mussten, aber Sicherheit geht vor. Ihr wart einfach zu viele.\" Unmittelbar nach den Geschehnissen in Duisburg hatte beispielsweise das Verkehrsministerium von Mecklenburg-Vorpommern einer Technoparty in einem Tunnel die Genehmigung wieder entzogen.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "Bei der Massenpanik bei der Loveparade waren 2010 21 Menschen ums Leben gekommen. ",
                "copyright": "dpa",
                "alttext": "Bei der Massenpanik bei der Loveparade waren 2010 21 Menschen ums Leben gekommen.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/036d5320-8552-40b3-8668-14475955b194/AAABhoVt_lk/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/api2u/inland/love-parade-prozess-abgesagt-105.json\" type=\"intern\">mehr</a>",
              "subtitle": "Gericht lehnt Loveparade-Prozess ab",
              "text": "Kein Strafprozess wegen des Loveparade-Unglücks: Angehörige sind entsetzt.",
              "title": "\"Wir empfinden das als Justizskandal\""
            },
            "type": "box"
          },
          {
            "value": "<h2>Prozess ohne Verurteilungen eingestellt</h2>",
            "type": "headline"
          },
          {
            "value": "Bei der Loveparade in Duisburg war es nicht eine einzelne Ursache, die am 24. Juli 2010 tödliche Folgen hatte. Viele Fehler kamen zusammen. Die juristische Aufarbeitung dauerte Jahre. Am Ende wurde der aufwendigste Prozess der Nachkriegsgeschichte ohne Verurteilungen eingestellt. Dennoch ist sich das Landgericht Duisburg sehr sicher, dass grundsätzlich klar ans Licht kam, was zur Katastrophe geführt hatte.",
            "type": "text"
          },
          {
            "value": "Der Befund: Das Party-Gelände am alten Güterbahnhof war ungeeignet. Zum ersten Mal hatte die Loveparade auf einem abgeschlossenen Areal stattgefunden. \"Die Vereinzelungsanlagen und Schleusen waren nicht auf die erwartete Personenmenge ausgerichtet. Zäune führten zu zusätzlichen Engstellen\", sagte Richter Mario Plein am letzten Verhandlungstag. ",
            "type": "text"
          },
          {
            "value": "Von einem \"kollektiven Versagen\" bei der Durchführung war die Rede. Es gab auf dem Festivalgelände keine funktionierende Lautsprecher-Anlage für Durchsagen. Funk- und Handyverbindungen waren gestört. In Planung und Durchführung sammelte sich eine Kette von Fehlern an.",
            "type": "text"
          },
          {
            "value": "<h2>\"Als wäre es gestern gewesen\"</h2>",
            "type": "headline"
          },
          {
            "value": "Was lässt sich daraus lernen? Die Forschungsgesellschaft für Straßen- und Verkehrswesen hat 2022 ein umfangreiches Regelwerk mit Vorgaben, Standards und Empfehlungen für solche Großveranstaltungen erarbeitet. Auch Loveparade-Gutachter Jürgen Gerlach war daran beteiligt. Und doch - auch wenn es nach Binsenweisheit klingt: 100-prozentige Sicherheit kann es nicht geben, wenn so viele Menschen auf engem Raum zusammenkommen.",
            "type": "text"
          },
          {
            "value": "Die Loveparade-Katastrophe hatte Folgen. Sie ist nicht vergessen. Auch im kommenden Jahr dürften in Duisburg wohl wieder Menschen am Jahrestag zu Gedenkfeiern zusammenkommen. Und in Genehmigungsbehörden und bei Veranstaltern behalten die schrecklichen Bilder ihre mahnende Wirkung. ",
            "type": "text"
          },
          {
            "value": "Timm Zeiss von \"Rave The Planet\" in Berlin sagt, es finde kein Gespräch mit Stadt, Polizei oder Feuerwehr statt, ohne dass das Unglück von Duisburg mehrfach erwähnt werde: \"Es ist völlig präsent - als wäre es gestern gewesen.\"",
            "type": "text"
          },
          {
            "value": "<strong>Über dieses Thema berichtete Deutschlandfunk am 23. Juli 2023 um 21:00 Uhr in den Nachrichten.</strong>",
            "type": "text"
          },
          {
            "related": [
              {
                "teaserImage": {
                  "title": "",
                  "copyright": "dpa",
                  "alttext": "Kränze, Blumen und Kerzen erinnern an der Gedenkstätte der Loveparade-Katastrophe in Duisburg am 10. Jahrestag an die Opfer.",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/a1232555-0120-483c-9b0a-d1bb4004a2cf/AAABhn5l088/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2020-07-24T20:54:40.472+02:00",
                "sophoraId": "loveparade-gedenken-111",
                "externalId": "tagesschau_1f3c7e35-dcd0-4355-a633-601bbeba9f92",
                "topline": "Gedenkfeier in Duisburg",
                "title": "Loveparade-Unglück bleibt \"unbegreiflich\"",
                "details": "https://www.tagesschau.de/api2u/inland/loveparade-gedenken-111.json",
                "detailsweb": "https://www.tagesschau.de/inland/loveparade-gedenken-111.html",
                "type": "story"
              }
            ],
            "type": "related"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.gedenken-loveparade-100",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T0415",
            "otp": "meldung",
            "cid": "gedenken-loveparade-100",
            "pti": "Gedenken_an_Loveparade-Tragoedie_Duisburg_hat_alles_veraendert",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Gedenken an Loveparade-Katastrophe",
        "firstSentence": "Zum 13. Mal jährt sich die Tragödie bei der Loveparade in Duisburg - welche Lehren wurden gezogen?",
        "video": {
          "sophoraId": "video-1225426",
          "externalId": "ca91f628-2a2f-47e7-b593-861ff1c94eb2",
          "title": "APP0700 FC  Loveparade_vapp.mxf",
          "date": "2023-07-24T07:13:27.083+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225426~_view-hasChanged_lastKnown-D6E4A0F675F56467EA7F61BD028AE78C.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225426",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T0713",
              "otp": "video",
              "cid": "video-1225426",
              "pti": "APP0700_FC__Loveparade_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225426",
              "program": "Tagesschau",
              "title": "APP0700_FC__Loveparade_vapp.mxf",
              "length": "17",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225426.html",
              "c7": "p7,video-1225426",
              "c8": "p8,17",
              "c9": "p9,Tagesschau_APP0700_FC__Loveparade_vapp.mxf_24.07.2023_0713",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0655-1200.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0655-1200.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0655-1200.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0655-1200.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/33d3cb99-b2dd-4747-a6f1-b7e826cea175/AAABiYZAuYg/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/gedenken-loveparade-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/gedenken-loveparade-100.html",
        "shareURL": "https://www.tagesschau.de/inland/gedenken-loveparade-100.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "ressort": "inland",
        "crop": {
          "id": "TV-20230724-0655-1200",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": true,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Unglück vor 13 Jahren",
          "mainTexts": [
            "Gedenken an Love&shy;\nparade-Katastrophe",
            "Kerzen in Duisburg erinnern an die Opfer",
            "21 Menschen starben damals in Gedränge",
            "Heutige Festivals ha&shy;\nben Lehren gezogen"
          ],
          "sceneSrcTexts": [
            "",
            "",
            "",
            ""
          ],
          "cameraMoves": [
            {
              "point1X": 0,
              "point1Y": -0.286,
              "point2X": 1.286,
              "point2Y": 1,
              "startLeft": 0,
              "endLeft": 304,
              "duration": 3960
            }
          ],
          "events": [
            [
              0,
              9,
              231
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              231
            ],
            [
              3400,
              1,
              0
            ],
            [
              3400,
              2,
              0
            ],
            [
              4080,
              9,
              0
            ],
            [
              4080,
              10,
              0
            ],
            [
              4080,
              2,
              1
            ],
            [
              4080,
              3,
              1
            ],
            [
              4080,
              0,
              0
            ],
            [
              4120,
              0,
              3.07
            ],
            [
              4160,
              0,
              6.14
            ],
            [
              4200,
              0,
              9.21
            ],
            [
              4240,
              0,
              12.28
            ],
            [
              4280,
              0,
              15.35
            ],
            [
              4320,
              0,
              18.42
            ],
            [
              4360,
              0,
              21.49
            ],
            [
              4400,
              0,
              24.57
            ],
            [
              4440,
              0,
              27.64
            ],
            [
              4480,
              0,
              30.71
            ],
            [
              4520,
              0,
              33.78
            ],
            [
              4560,
              0,
              36.85
            ],
            [
              4600,
              0,
              39.92
            ],
            [
              4640,
              0,
              42.99
            ],
            [
              4680,
              0,
              46.06
            ],
            [
              4720,
              0,
              49.13
            ],
            [
              4760,
              0,
              52.2
            ],
            [
              4800,
              0,
              55.27
            ],
            [
              4840,
              0,
              58.34
            ],
            [
              4880,
              0,
              61.41
            ],
            [
              4920,
              0,
              64.48
            ],
            [
              4960,
              0,
              67.56
            ],
            [
              5000,
              0,
              70.63
            ],
            [
              5040,
              0,
              73.7
            ],
            [
              5080,
              0,
              76.77
            ],
            [
              5120,
              0,
              79.84
            ],
            [
              5160,
              0,
              82.91
            ],
            [
              5200,
              0,
              85.98
            ],
            [
              5240,
              0,
              89.05
            ],
            [
              5280,
              0,
              92.12
            ],
            [
              5320,
              0,
              95.19
            ],
            [
              5360,
              0,
              98.26
            ],
            [
              5400,
              0,
              101.33
            ],
            [
              5440,
              0,
              104.4
            ],
            [
              5480,
              0,
              107.47
            ],
            [
              5520,
              0,
              110.55
            ],
            [
              5560,
              0,
              113.62
            ],
            [
              5600,
              0,
              116.69
            ],
            [
              5640,
              0,
              119.76
            ],
            [
              5680,
              0,
              122.83
            ],
            [
              5720,
              0,
              125.9
            ],
            [
              5760,
              0,
              128.97
            ],
            [
              5800,
              0,
              132.04
            ],
            [
              5840,
              0,
              135.11
            ],
            [
              5880,
              0,
              138.18
            ],
            [
              5920,
              0,
              141.25
            ],
            [
              5960,
              0,
              144.32
            ],
            [
              6000,
              0,
              147.39
            ],
            [
              6040,
              0,
              150.46
            ],
            [
              6080,
              0,
              153.54
            ],
            [
              6120,
              0,
              156.61
            ],
            [
              6160,
              0,
              159.68
            ],
            [
              6200,
              0,
              162.75
            ],
            [
              6240,
              0,
              165.82
            ],
            [
              6280,
              0,
              168.89
            ],
            [
              6320,
              0,
              171.96
            ],
            [
              6360,
              0,
              175.03
            ],
            [
              6400,
              0,
              178.1
            ],
            [
              6440,
              0,
              181.17
            ],
            [
              6480,
              0,
              184.24
            ],
            [
              6520,
              0,
              187.31
            ],
            [
              6560,
              0,
              190.38
            ],
            [
              6600,
              0,
              193.45
            ],
            [
              6640,
              0,
              196.53
            ],
            [
              6680,
              0,
              199.6
            ],
            [
              6720,
              0,
              202.67
            ],
            [
              6760,
              0,
              205.74
            ],
            [
              6800,
              0,
              208.81
            ],
            [
              6840,
              0,
              211.88
            ],
            [
              6880,
              0,
              214.95
            ],
            [
              6920,
              0,
              218.02
            ],
            [
              6960,
              0,
              221.09
            ],
            [
              7000,
              0,
              224.16
            ],
            [
              7040,
              0,
              227.23
            ],
            [
              7080,
              0,
              230.3
            ],
            [
              7120,
              0,
              233.37
            ],
            [
              7160,
              0,
              236.44
            ],
            [
              7200,
              0,
              239.52
            ],
            [
              7240,
              0,
              242.59
            ],
            [
              7280,
              0,
              245.66
            ],
            [
              7320,
              0,
              248.73
            ],
            [
              7360,
              0,
              251.8
            ],
            [
              7400,
              2,
              0
            ],
            [
              7400,
              0,
              254.87
            ],
            [
              7440,
              0,
              257.94
            ],
            [
              7480,
              0,
              261.01
            ],
            [
              7520,
              0,
              264.08
            ],
            [
              7560,
              0,
              267.15
            ],
            [
              7600,
              0,
              270.22
            ],
            [
              7640,
              0,
              273.29
            ],
            [
              7680,
              0,
              276.36
            ],
            [
              7720,
              0,
              279.43
            ],
            [
              7760,
              0,
              282.51
            ],
            [
              7800,
              0,
              285.58
            ],
            [
              7840,
              0,
              288.65
            ],
            [
              7880,
              0,
              291.72
            ],
            [
              7920,
              0,
              294.79
            ],
            [
              7960,
              0,
              297.86
            ],
            [
              8000,
              0,
              300.93
            ],
            [
              8040,
              0,
              304
            ],
            [
              8080,
              9,
              284
            ],
            [
              8080,
              2,
              1
            ],
            [
              8080,
              3,
              2
            ],
            [
              8080,
              0,
              284
            ],
            [
              11400,
              2,
              0
            ],
            [
              12080,
              9,
              59
            ],
            [
              12080,
              2,
              1
            ],
            [
              12080,
              3,
              3
            ],
            [
              12080,
              0,
              59
            ],
            [
              15000,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "china-schule-100",
        "externalId": "14446c14-b71e-4727-af24-16d1bf304b0d",
        "title": "Elf Tote bei Einsturz einer Turnhalle",
        "date": "2023-07-24T08:27:39.580+02:00",
        "teaserImage": {
          "alttext": "Rettungskräfte arbeiten mit Kränen an einer Schulturnhalle in China nach einem dortigen Dacheinsturz",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/66a09796-62f2-4643-9950-b8749d7613d3/AAABiYZIkV4/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "China"
          },
          {
            "tag": "Schule"
          },
          {
            "tag": "Dacheinsturz"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/china-schule-100~_view-hasChanged_lastKnown-A44693EC5A5927BCC1DC743ACC601942.json",
        "content": [
          {
            "value": "<strong>Beim Einsturz einer Schulturnhalle im Nordosten Chinas sind elf Menschen ums Leben gekommen. Die letzte noch verschüttete Person sei tot geborgen worden, melden chinesische Staatsmedien.</strong>",
            "type": "text"
          },
          {
            "value": "<em>Von Eva Lamby-Schmitt, ARD Shanghai</em>",
            "type": "text"
          },
          {
            "value": "Luftaufnahmen chinesischer Staatsmedien zeigen ein vollständig eingestürztes Dach: In der Stadt Qiqihar im nordostchinesischen Landesteil Heilongjiang ist eine Turnhalle eingestürzt. Die Halle gehört zu einer weiterführenden Schule, auf Chinesisch Zhongxue. Das ist eine Mittelschule für Schülerinnen und Schüler im Alter von zwölf bis 15 Jahren. ",
            "type": "text"
          },
          {
            "value": "Nach Angaben chinesischer Staatsmedien sollen zum Zeitpunkt des Unglücks 19 Menschen in der Halle gewesen sein, elf wurden demnach tot geborgen. Vier Menschen konnten aus den Trümmern gerettet werden, weitere vier konnten sich bei dem Einsturz selbst in Sicherheit bringen. ",
            "type": "text"
          },
          {
            "value": "Nach Recherchen von lokalen Medien soll es sich bei den Personen in der Halle um Mädchen eines Volleyballteams gehandelt haben. Sie sollen auch während der derzeitigen Schulferien dort trainiert haben.",
            "type": "text"
          },
          {
            "value": "<h2>Unglücksursache möglicherweise Baumaterial</h2>",
            "type": "headline"
          },
          {
            "value": "Nun untersuchen die Behörden, warum das Dach der Schulturnhalle eingestürzt sein könnte. Erste Ermittlungen haben Medienberichten zufolge ergeben, dass Arbeiter illegal Perlitgestein auf dem Dach der Sporthalle gelagert hätten. Das Material wurde demnach gebraucht, um ein neues Lehrgebäude direkt neben die Sporthalle zu bauen. ",
            "type": "text"
          },
          {
            "value": "Perlitgestein hat eine hohe Wasserspeicherkapazität. Den Untersuchungen zufolge habe sich das Material durch den starken Regen mit Wasser vollgesogen und an Gewicht gewonnen, was zum Einsturz des Daches geführt habe. Die Verantwortlichen der Baufirma wurden den Angaben zufolge in Gewahrsam genommen, es werde weiter ermittelt.",
            "type": "text"
          },
          {
            "title": "Elf Tote bei Einsturz einer Schulturnhalle in China",
            "date": "2023-07-24T07:51:11.889+02:00",
            "teaserImage": {
              "copyright": "ARD-aktuell",
              "alttext": "Hintergrundbild für den Audioplayer",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMNQQ/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMOLk/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMPOY/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMQDM/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMQ7w/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMG0w/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMHqw/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMIg0/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMJbE/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMLgk/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tME_8/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABg8tMF58/16x9-1920.jpg"
              },
              "type": "image"
            },
            "tracking": [
              {
                "sid": "app.multimedia.audio.audio-166938",
                "src": "ard-aktuell",
                "ctp": "nicht-definiert",
                "pdt": "20230724T0751",
                "otp": "audio",
                "cid": "audio-166938",
                "pti": "Elf_Tote_bei_Einsturz_einer_Schulturnhalle_in_China",
                "bcr": "ja",
                "type": "generic"
              }
            ],
            "text": "Eva Lamby-Schmitt, MDR, ARD Shanghai, 24.07.2023, 07:51 Uhr",
            "stream": "https://media.tagesschau.de/audio/2023/0724/AU-20230724-0750-0200.mp3",
            "type": "audio"
          },
          {
            "value": "<strong>Über dieses Thema berichtete Inforadio am 24. Juli 2023 um 07:51 Uhr.</strong>",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.ausland.asien.china-schule-100",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T0827",
            "otp": "meldung",
            "cid": "china-schule-100",
            "pti": "Elf_Tote_bei_Einsturz_einer_Turnhalle_im_Nordosten_Chinas",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Schule im Nordosten Chinas",
        "firstSentence": "Die letzte noch verschüttete Person wurde chinesischen Staatsmedien zufolge tot geborgen.",
        "video": {
          "sophoraId": "video-1225470",
          "externalId": "547953da-fb98-440d-a974-e83339422368",
          "title": "APP0815 NIF- Einsturz China_vapp.mxf",
          "date": "2023-07-24T08:29:31.668+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225470~_view-hasChanged_lastKnown-9463ED5D14FFB24AE15EE5D71AFEDA8C.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225470",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T0829",
              "otp": "video",
              "cid": "video-1225470",
              "pti": "APP0815_NIF-_Einsturz_China_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225470",
              "program": "Tagesschau",
              "title": "APP0815_NIF-_Einsturz_China_vapp.mxf",
              "length": "15",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225470.html",
              "c7": "p7,video-1225470",
              "c8": "p8,15",
              "c9": "p9,Tagesschau_APP0815_NIF-_Einsturz_China_vapp.mxf_24.07.2023_0829",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0808-5000.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0808-5000.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0808-5000.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0808-5000.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/9257ad30-fffc-4582-8f02-47d9b31a23a3/AAABiYaEHkM/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/ausland/asien/china-schule-100.json",
        "detailsweb": "https://www.tagesschau.de/ausland/asien/china-schule-100.html",
        "shareURL": "https://www.tagesschau.de/ausland/asien/china-schule-100.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "ressort": "ausland",
        "crop": {
          "id": "TV-20230724-0808-5000",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Nordosten Chinas",
          "mainTexts": [
            "Dach von Schulturn&shy;\nhalle eingestürzt",
            "Elf Menschen ums Leben gekommen",
            "Offenbar Bau​material auf Dach gelagert"
          ],
          "sceneSrcTexts": [
            "",
            "",
            ""
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              229
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              229
            ],
            [
              4400,
              1,
              0
            ],
            [
              4400,
              2,
              0
            ],
            [
              5080,
              9,
              192
            ],
            [
              5080,
              2,
              1
            ],
            [
              5080,
              3,
              1
            ],
            [
              5080,
              0,
              192
            ],
            [
              8480,
              2,
              0
            ],
            [
              9160,
              9,
              181
            ],
            [
              9160,
              2,
              1
            ],
            [
              9160,
              3,
              2
            ],
            [
              9160,
              0,
              181
            ],
            [
              13000,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "indonesien-faehrunglueck-100",
        "externalId": "7b8fa5e6-5235-40ce-9a27-75e816dc23fb",
        "title": "Viele Tote bei Fährunglück in Indonesien",
        "date": "2023-07-24T06:50:25.743+02:00",
        "teaserImage": {
          "alttext": "Suchmannschaften suchen vor der Küste von Sulawesi nach Überlebenden des Fährunglücks",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/dcf7169d-0d59-4da7-a5fc-5eb7114eb42b/AAABiYYy9NI/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Indonesien"
          },
          {
            "tag": "Fährunglück"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/indonesien-faehrunglueck-100~_view-hasChanged_lastKnown-8A855442CBE85B1C14B2583FEFF7F1CF.json",
        "content": [
          {
            "value": "<strong>Eine Fähre mit 40 Menschen an Bord ist vor der indonesischen Küste gesunken. Dabei kamen mindestens 15 Menschen ums Leben. Die Suche nach 19 Vermissten läuft noch. Bisher konnten lediglich sechs Passagiere gerettet werden.</strong>",
            "type": "text"
          },
          {
            "value": "Vor der Küste der indonesischen Insel Sulawesi ist gegen Mitternacht eine Fähre gesunken. Mindestens 15 Menschen seien dabei ums Leben gekommen, teilten Behörden mit. Die Suche nach weiteren 19 vermissten Personen laufe noch, erklärten Rettungskräfte. Drei Schlauchboote, zwei Fischerboote und sechs Taucher seien im Einsatz, um die Vermissten zu finden, sagte der Leiter der Such- und Rettungsagentur von Buton, Muhammed Arafah. Bislang seien sechs Passagiere aus der rauen See gerettet worden. Sie wurden zur Behandlung ins Krankenhaus gebracht.",
            "type": "text"
          },
          {
            "video": {
              "sophoraId": "video-1225558",
              "externalId": "d389f52a-3c57-4067-84ed-e3b4fb69b3c7",
              "title": "Mindestens 15 Tote nach Fährunglück in Indonesien",
              "date": "2023-07-24T10:45:32.746+02:00",
              "teaserImage": {
                "title": "Sendungsbild",
                "copyright": "ARD-aktuell",
                "alttext": "Sendungsbild",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/6c932275-417b-4514-8ea9-0500c5d23675/AAABiYcS3kY/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "tags": [],
              "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225558~_view-hasChanged_lastKnown-21F999E2A8C1C298058E47308F6FE605.json",
              "tracking": [
                {
                  "sid": "app.multimedia.video.video-1225558",
                  "src": "ard-aktuell",
                  "ctp": "SEGMENT",
                  "pdt": "20230724T1045",
                  "otp": "video",
                  "cid": "video-1225558",
                  "pti": "Mindestens_15_Tote_nach_Faehrunglueck_in_Indonesien",
                  "bcr": "ja",
                  "type": "generic"
                },
                {
                  "assetid": "video-1225558",
                  "program": "tagesschau24",
                  "title": "Mindestens_15_Tote_nach_Faehrunglueck_in_Indonesien",
                  "length": "19",
                  "c2": "p2,N",
                  "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225558.html",
                  "c7": "p7,video-1225558",
                  "c8": "p8,19",
                  "c9": "p9,tagesschau24_Mindestens_15_Tote_nach_Faehrunglueck_in_Indonesien_24.07.2023_1000",
                  "c10": "p10,Das_Erste",
                  "c12": "p12,content",
                  "c16": "p16,ARD_Information/ARD_Livestream",
                  "c18": "p18,N",
                  "type_nielsen": "content",
                  "type": "nielsen"
                }
              ],
              "streams": {
                "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1014-3800.webs.h264.mp4",
                "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1014-3800.webm.h264.mp4",
                "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1014-3800.webxl.h264.mp4",
                "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-1014-3800.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
              },
              "alttext": "Sendungsbild",
              "copyright": "tagesschau",
              "type": "video"
            },
            "type": "video"
          },
          {
            "value": "Auf dem Holzboot befanden sich den Angaben zufolge 40 Personen, obwohl es nur für 20 Menschen ausgelegt war. Die Ursache für das Unglück ist noch unklar. Den Behörden zufolge war das Wetter gut und der Wellengang moderat.",
            "type": "text"
          },
          {
            "value": "Indonesien ist ein Archipel mit mehr als 17.000 Inseln. Fähren sind ein gängiges Transportmittel. Aufgrund laxer Sicherheitsstandards kommt es häufig zu Unfällen. Zudem sind die Fährschiffe oft überfüllt. ",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "",
                "copyright": "Wulf Rohwedder",
                "alttext": "Smartphone mit Tagesschau-Messenger-Angebot",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.tagesschau.de/inland/messenger-116.html\" type=\"extern\">mehr</a>",
              "subtitle": "Jetzt abonnieren",
              "text": "Seien Sie immer auf dem Laufenden - mit dem Messenger-Angebot der tagesschau.",
              "title": "tagesschau direkt auf Ihrem Messenger"
            },
            "type": "box"
          },
          {
            "value": "<strong>Über dieses Thema berichtete Deutschlandfunk am 24. Juli 2023 um 08:16 Uhr.</strong>",
            "type": "text"
          },
          {
            "related": [
              {
                "teaserImage": {
                  "title": "Indonesische Rettungskräfte mit Überlebenden eines Brandes auf einem Schiff, bei dem mindestens 13 Menschen starben.",
                  "copyright": "AFP",
                  "alttext": "Indonesische Rettungskräfte mit Überlebenden eines Brandes auf einem Schiff, bei dem mindestens 13 Menschen starben.",
                  "imageVariants": {
                    "1x1-144": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMNQQ/1x1-144.jpg",
                    "1x1-256": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMOLk/1x1-256.jpg",
                    "1x1-432": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMPOY/1x1-432.jpg",
                    "1x1-640": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMQDM/1x1-640.jpg",
                    "1x1-840": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMQ7w/1x1-840.jpg",
                    "16x9-256": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMG0w/16x9-256.jpg",
                    "16x9-384": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMHqw/16x9-384.jpg",
                    "16x9-512": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMIg0/16x9-512.jpg",
                    "16x9-640": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMJbE/16x9-640.jpg",
                    "16x9-960": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMLgk/16x9-960.jpg",
                    "16x9-1280": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tME_8/16x9-1280.jpg",
                    "16x9-1920": "https://images.tagesschau.de/image/fc1b58d5-2917-43a3-bf1c-1286f7c7f1bd/AAABhnRAk1U/AAABg8tMF58/16x9-1920.jpg"
                  },
                  "type": "image"
                },
                "date": "2022-10-25T02:42:53.314+02:00",
                "sophoraId": "brand-schiff-indonesien-101",
                "externalId": "tagesschau_4adee6a7-13d6-4e01-b552-fbfc719da5ff",
                "topline": "Indonesien",
                "title": "Mindestens 13 Tote bei Brand auf Schiff",
                "details": "https://www.tagesschau.de/api2u/ausland/asien/brand-schiff-indonesien-101.json",
                "detailsweb": "https://www.tagesschau.de/ausland/asien/brand-schiff-indonesien-101.html",
                "type": "story"
              }
            ],
            "type": "related"
          }
        ],
        "tracking": [
          {
            "sid": "app.ausland.asien.indonesien-faehrunglueck-100",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T0650",
            "otp": "meldung",
            "cid": "indonesien-faehrunglueck-100",
            "pti": "Viele_Tote_bei_Faehrunglueck_in_Indonesien",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Suche nach Vermissten läuft",
        "firstSentence": "Eine Fähre mit 40 Menschen an Bord ist vor der indonesischen Küste gesunken.",
        "video": {
          "sophoraId": "video-1225490",
          "externalId": "b6779734-3d34-48ab-9be5-5cf5c95bf3ae",
          "title": "APP0830 NIF- Fährunglück Indonesien_vapp.mxf",
          "date": "2023-07-24T09:09:28.618+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225490~_view-hasChanged_lastKnown-BCC195A73908930779FE0DAA22AE49EF.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225490",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T0909",
              "otp": "video",
              "cid": "video-1225490",
              "pti": "APP0830_NIF-_Faehrunglueck_Indonesien_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225490",
              "program": "Tagesschau",
              "title": "APP0830_NIF-_Faehrunglueck_Indonesien_vapp.mxf",
              "length": "17",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225490.html",
              "c7": "p7,video-1225490",
              "c8": "p8,17",
              "c9": "p9,Tagesschau_APP0830_NIF-_Faehrunglueck_Indonesien_vapp.mxf_24.07.2023_0909",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0845-4200.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0845-4200.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0845-4200.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0845-4200.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/0d504d3e-0402-428d-9936-4b8ed00f46fc/AAABiYal2SI/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/ausland/asien/indonesien-faehrunglueck-100.json",
        "detailsweb": "https://www.tagesschau.de/ausland/asien/indonesien-faehrunglueck-100.html",
        "shareURL": "https://www.tagesschau.de/ausland/asien/indonesien-faehrunglueck-100.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "ressort": "ausland",
        "crop": {
          "id": "TV-20230724-0845-4200",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Insel Sulawesi",
          "mainTexts": [
            "Tote bei Fährunglück in Indonesien",
            "15 Menschen kamen ums Leben",
            "Viele weitere werden noch vermisst",
            "Offenbar zu viele Menschen an Bord"
          ],
          "sceneSrcTexts": [
            "",
            "",
            "",
            ""
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              168
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              168
            ],
            [
              3400,
              1,
              0
            ],
            [
              3400,
              2,
              0
            ],
            [
              4080,
              9,
              164
            ],
            [
              4080,
              2,
              1
            ],
            [
              4080,
              3,
              1
            ],
            [
              4080,
              0,
              164
            ],
            [
              7400,
              2,
              0
            ],
            [
              8080,
              9,
              134
            ],
            [
              8080,
              2,
              1
            ],
            [
              8080,
              3,
              2
            ],
            [
              8080,
              0,
              134
            ],
            [
              11360,
              2,
              0
            ],
            [
              12040,
              9,
              104
            ],
            [
              12040,
              2,
              1
            ],
            [
              12040,
              3,
              3
            ],
            [
              12040,
              0,
              104
            ],
            [
              15000,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "liveticker-fussball-wm-frauen-100",
        "externalId": "039493fe-6fb4-47e2-b662-b63b4f0d962c",
        "title": "Jetzt live: Deutschland gegen Marokko",
        "date": "2023-07-20T11:31:25.270+02:00",
        "teaserImage": {
          "alttext": "Der WM-Ball \"Oceaunz\"",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/aba32a24-88b9-4c54-bb05-90ec44b31de0/AAABiTn8IHQ/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Fußball-WM 2023"
          },
          {
            "tag": "Liveticker"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/liveticker-fussball-wm-frauen-100~_view-hasChanged_lastKnown-66C0256A54F50DD0A4308B31DD259DFC.json",
        "tracking": [
          {
            "sid": "app.sport.liveticker-fussball-wm-frauen-100",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1059",
            "otp": "meldung",
            "cid": "liveticker-fussball-wm-frauen-100",
            "pti": "Frauen-WM_Jetzt_live_Deutschland_gegen_Marokko",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "FIFA Frauen WM 2023",
        "firstSentence": "In ihrer WM-Auftaktpartie treffen die DFB-Spielerinnen in Melbourne auf Marokko.",
        "video": {
          "sophoraId": "video-1218602",
          "externalId": "d1a63435-20b6-4236-8fd7-08f25ccca678",
          "title": "APP Liveticker FC- Oceaunz 2_vapp.mxf",
          "date": "2023-07-20T08:54:05.098+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1218602~_view-hasChanged_lastKnown-3011019F523872C524C2909AEF8A1039.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1218602",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230720T0854",
              "otp": "video",
              "cid": "video-1218602",
              "pti": "APP_Liveticker_FC-_Oceaunz_2_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1218602",
              "program": "Tagesschau",
              "title": "APP_Liveticker_FC-_Oceaunz_2_vapp.mxf",
              "length": "7",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1218602.html",
              "c7": "p7,video-1218602",
              "c8": "p8,7",
              "c9": "p9,Tagesschau_APP_Liveticker_FC-_Oceaunz_2_vapp.mxf_20.07.2023_0854",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0709/TV-20230709-1055-1000.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0709/TV-20230709-1055-1000.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0709/TV-20230709-1055-1000.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0709/TV-20230709-1055-1000.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/01fd69bd-9b63-4bc8-83be-288291212636/AAABiTnc9kA/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/sport/liveticker-fussball-wm-frauen-100.json",
        "detailsweb": "https://www.sportschau.de/fussball/fifa-frauen-wm/weltmeisterschaft-liveblog-deutschland-marokko-100.html",
        "shareURL": "https://www.tagesschau.de/sport/liveticker-fussball-wm-frauen-100.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "ressort": "sport",
        "crop": {
          "id": "TV-20230709-1055-1000",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "Frauen-WM",
          "mainTexts": [
            "Die Spiele jetzt im Liveticker"
          ],
          "sceneSrcTexts": [
            ""
          ],
          "cameraMoves": [
            {
              "point1X": 0,
              "point1Y": -0.286,
              "point2X": 1.286,
              "point2Y": 1,
              "startLeft": 175,
              "endLeft": 185,
              "duration": 6040
            }
          ],
          "events": [
            [
              0,
              9,
              175
            ],
            [
              0,
              10,
              0
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              175
            ],
            [
              40,
              0,
              175.07
            ],
            [
              80,
              0,
              175.13
            ],
            [
              120,
              0,
              175.2
            ],
            [
              160,
              0,
              175.26
            ],
            [
              200,
              0,
              175.33
            ],
            [
              240,
              0,
              175.4
            ],
            [
              280,
              0,
              175.46
            ],
            [
              320,
              0,
              175.53
            ],
            [
              360,
              0,
              175.6
            ],
            [
              400,
              0,
              175.66
            ],
            [
              440,
              0,
              175.73
            ],
            [
              480,
              0,
              175.79
            ],
            [
              520,
              0,
              175.86
            ],
            [
              560,
              0,
              175.93
            ],
            [
              600,
              0,
              175.99
            ],
            [
              640,
              0,
              176.06
            ],
            [
              680,
              0,
              176.13
            ],
            [
              720,
              0,
              176.19
            ],
            [
              760,
              0,
              176.26
            ],
            [
              800,
              0,
              176.32
            ],
            [
              840,
              0,
              176.39
            ],
            [
              880,
              0,
              176.46
            ],
            [
              920,
              0,
              176.52
            ],
            [
              960,
              0,
              176.59
            ],
            [
              1000,
              0,
              176.66
            ],
            [
              1040,
              0,
              176.72
            ],
            [
              1080,
              0,
              176.79
            ],
            [
              1120,
              0,
              176.85
            ],
            [
              1160,
              0,
              176.92
            ],
            [
              1200,
              0,
              176.99
            ],
            [
              1240,
              0,
              177.05
            ],
            [
              1280,
              0,
              177.12
            ],
            [
              1320,
              0,
              177.19
            ],
            [
              1360,
              0,
              177.25
            ],
            [
              1400,
              0,
              177.32
            ],
            [
              1440,
              0,
              177.38
            ],
            [
              1480,
              0,
              177.45
            ],
            [
              1520,
              0,
              177.52
            ],
            [
              1560,
              0,
              177.58
            ],
            [
              1600,
              0,
              177.65
            ],
            [
              1640,
              0,
              177.72
            ],
            [
              1680,
              0,
              177.78
            ],
            [
              1720,
              0,
              177.85
            ],
            [
              1760,
              0,
              177.91
            ],
            [
              1800,
              0,
              177.98
            ],
            [
              1840,
              0,
              178.05
            ],
            [
              1880,
              0,
              178.11
            ],
            [
              1920,
              0,
              178.18
            ],
            [
              1960,
              0,
              178.25
            ],
            [
              2000,
              0,
              178.31
            ],
            [
              2040,
              0,
              178.38
            ],
            [
              2080,
              0,
              178.44
            ],
            [
              2120,
              0,
              178.51
            ],
            [
              2160,
              0,
              178.58
            ],
            [
              2200,
              0,
              178.64
            ],
            [
              2240,
              0,
              178.71
            ],
            [
              2280,
              0,
              178.77
            ],
            [
              2320,
              0,
              178.84
            ],
            [
              2360,
              0,
              178.91
            ],
            [
              2400,
              0,
              178.97
            ],
            [
              2440,
              0,
              179.04
            ],
            [
              2480,
              0,
              179.11
            ],
            [
              2520,
              0,
              179.17
            ],
            [
              2560,
              0,
              179.24
            ],
            [
              2600,
              0,
              179.3
            ],
            [
              2640,
              0,
              179.37
            ],
            [
              2680,
              0,
              179.44
            ],
            [
              2720,
              0,
              179.5
            ],
            [
              2760,
              0,
              179.57
            ],
            [
              2800,
              0,
              179.64
            ],
            [
              2840,
              0,
              179.7
            ],
            [
              2880,
              0,
              179.77
            ],
            [
              2920,
              0,
              179.83
            ],
            [
              2960,
              0,
              179.9
            ],
            [
              3000,
              0,
              179.97
            ],
            [
              3040,
              0,
              180.03
            ],
            [
              3080,
              0,
              180.1
            ],
            [
              3120,
              0,
              180.17
            ],
            [
              3160,
              0,
              180.23
            ],
            [
              3200,
              0,
              180.3
            ],
            [
              3240,
              0,
              180.36
            ],
            [
              3280,
              0,
              180.43
            ],
            [
              3320,
              0,
              180.5
            ],
            [
              3360,
              0,
              180.56
            ],
            [
              3400,
              0,
              180.63
            ],
            [
              3440,
              0,
              180.7
            ],
            [
              3480,
              0,
              180.76
            ],
            [
              3520,
              0,
              180.83
            ],
            [
              3560,
              0,
              180.89
            ],
            [
              3600,
              0,
              180.96
            ],
            [
              3640,
              0,
              181.03
            ],
            [
              3680,
              0,
              181.09
            ],
            [
              3720,
              0,
              181.16
            ],
            [
              3760,
              0,
              181.23
            ],
            [
              3800,
              0,
              181.29
            ],
            [
              3840,
              0,
              181.36
            ],
            [
              3880,
              0,
              181.42
            ],
            [
              3920,
              0,
              181.49
            ],
            [
              3960,
              0,
              181.56
            ],
            [
              4000,
              0,
              181.62
            ],
            [
              4040,
              0,
              181.69
            ],
            [
              4080,
              0,
              181.75
            ],
            [
              4120,
              0,
              181.82
            ],
            [
              4160,
              0,
              181.89
            ],
            [
              4200,
              0,
              181.95
            ],
            [
              4240,
              0,
              182.02
            ],
            [
              4280,
              0,
              182.09
            ],
            [
              4320,
              0,
              182.15
            ],
            [
              4360,
              0,
              182.22
            ],
            [
              4400,
              0,
              182.28
            ],
            [
              4440,
              0,
              182.35
            ],
            [
              4480,
              0,
              182.42
            ],
            [
              4520,
              0,
              182.48
            ],
            [
              4560,
              0,
              182.55
            ],
            [
              4600,
              0,
              182.62
            ],
            [
              4640,
              0,
              182.68
            ],
            [
              4680,
              0,
              182.75
            ],
            [
              4720,
              0,
              182.81
            ],
            [
              4760,
              0,
              182.88
            ],
            [
              4800,
              0,
              182.95
            ],
            [
              4840,
              0,
              183.01
            ],
            [
              4880,
              0,
              183.08
            ],
            [
              4920,
              0,
              183.15
            ],
            [
              4960,
              0,
              183.21
            ],
            [
              5000,
              0,
              183.28
            ],
            [
              5040,
              0,
              183.34
            ],
            [
              5080,
              0,
              183.41
            ],
            [
              5120,
              0,
              183.48
            ],
            [
              5160,
              0,
              183.54
            ],
            [
              5200,
              0,
              183.61
            ],
            [
              5240,
              0,
              183.68
            ],
            [
              5280,
              0,
              183.74
            ],
            [
              5320,
              0,
              183.81
            ],
            [
              5360,
              0,
              183.87
            ],
            [
              5400,
              0,
              183.94
            ],
            [
              5440,
              0,
              184.01
            ],
            [
              5480,
              0,
              184.07
            ],
            [
              5520,
              0,
              184.14
            ],
            [
              5560,
              0,
              184.21
            ],
            [
              5600,
              0,
              184.27
            ],
            [
              5640,
              0,
              184.34
            ],
            [
              5680,
              0,
              184.4
            ],
            [
              5720,
              0,
              184.47
            ],
            [
              5760,
              0,
              184.54
            ],
            [
              5800,
              0,
              184.6
            ],
            [
              5840,
              0,
              184.67
            ],
            [
              5880,
              0,
              184.74
            ],
            [
              5920,
              1,
              0
            ],
            [
              5920,
              2,
              0
            ],
            [
              5920,
              0,
              184.8
            ],
            [
              5960,
              0,
              184.87
            ],
            [
              6000,
              0,
              184.93
            ],
            [
              6040,
              0,
              185
            ]
          ]
        },
        "type": "webview",
        "breakingNews": false
      },
      {
        "sophoraId": "spielbericht-italien-argentinien-frauen-wm-100",
        "externalId": "679fe0c2-4af7-447a-b393-987bdddca055",
        "title": "Italien gelingt der Lucky Punch gegen Argentinien",
        "date": "2023-07-24T10:46:48.755+02:00",
        "teaserImage": {
          "copyright": "IMAGO / Sports Press Photo",
          "alttext": "Italiens Cristiana Girelli bejubelt einen Treffer.",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/65a7584d-cfd9-484f-be40-0a22936c0a40/AAABiYbo_OE/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Fußball-WM 2023"
          },
          {
            "tag": "Italien"
          },
          {
            "tag": "Argentinien"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/spielbericht-italien-argentinien-frauen-wm-100~_view-hasChanged_lastKnown-BCC5F299B120B63800553D3E729AF891.json",
        "content": [
          {
            "value": "<strong>Was vielversprechend mit Offensivfußball auf beiden Seiten begann, endete in Gestochere: Italien half gegen Argentinien am Ende ein ganz später Treffer zum Sieg. Cristiana Girelli traf drei Minuten vor Spielende zum 1:0 (0:0)-Sieg.</strong>",
            "type": "text"
          },
          {
            "value": "Stehen sich Italien und Argentinien in einem WM-Spiel gegenüber, hat man es gemeinhin mit einem Klassiker zu tun - im Männerfußball. Man erwartet dann auch nicht viele Torszenen oder gar torreiche Spiele, beide Teams sind traditionell für ihre Defensivkünste bekannt.",
            "type": "text"
          },
          {
            "value": "Ganz anders präsentierten sich die beiden Frauenteams dieser Länder am frühen Montagmorgen im kühlen und regnerischen Auckland: Von Beginn an wurde aufs Tempo gedrückt. Beide Teams suchten den direkten Weg nach vorn. ",
            "type": "text"
          },
          {
            "value": "<h2>Offensivspektakel von beiden Seiten</h2>",
            "type": "headline"
          },
          {
            "value": "Argentiniens Mariana Larroquette lag schon quer zum Seitfallzieher in der Luft, als noch nicht einmal eine Minute ganz absolviert war. Die Volleyabnahme der Angreiferin rauschte allerdings aus 13 Metern Torentfernung knapp über den rechten Winkel. Italien schien überrascht, wie sollten die ganz in Blau gedressten Frauen vom Stiefel so etwas auch erwarten können? ",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "FIFA-Frauen-WM Turnierbaum",
                "copyright": "Sportschau",
                "alttext": "FIFA-Frauen-WM Turnierbaum",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/2302f019-b988-44ca-85c9-48d6c5f6430e/AAABiUo9syI/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.sportschau.de/live-und-ergebnisse/fussball/fifa-wm-frauen/spiele-und-ergebnisse/\" type=\"extern\">mehr</a>",
              "subtitle": "Fußball-WM",
              "title": "Spielplan, Ergebnisse und Tabellen der FIFA Frauen WM 2023"
            },
            "type": "box"
          },
          {
            "value": "Argentinien ist im Frauenfußball in der internationalen Spitze eher noch ein kleines Licht. Das Team war vor der aktuellen Auflage zwar schon bei drei Weltmeisterschafts-Endturnieren dabei, hatte aber noch nie den Sprung aus der Vorrunde heraus geschafft. Mit 0:11 gegen Deutschland  kassierte das Team einst (2007) bei der WM eine historische Niederlage, die noch heute die höchste in der Geschichte der \"Albiceleste\" ist.",
            "type": "text"
          },
          {
            "value": "<h2>Italien trifft zweimal - jeweils aus Abseitsposition</h2>",
            "type": "headline"
          },
          {
            "value": "Doch das Team hat sich enorm entwickelt, das bekam nun Italien zu spüren. Erst so nach und nach konnten die Südeuropäerinnen das Kommando übernehmen und sich selbst Chancen herausarbeiten. In der 10. Minute zog Valentina Giacinti schön von rechts nach innen in den Strafraum  - ihren Schuss konnte Argentiniens Keeperin Vanina Correa aber problemlos festhalten. ",
            "type": "text"
          },
          {
            "value": "Fünf Minuten später war die Torsteherin geschlagen: Arianna Caruso hatte mit einem feinen Schlenzer aus 16 Metern in die Maschen getroffen. Allein: Der Treffer fand wegen einer Abseitsstellung keine Anerkennung.",
            "type": "text"
          },
          {
            "value": "Beide Teams spielten weiter mutig, offenbarten aber auch Schwächen: schienen technisch nicht ganz ausgereift, vor allem im Spielaufbau waren Defizite zu sehen. Beide gehören ja auch nicht zu den heißen Titelanwärterinnen bei dieser WM. Unterhaltsam anzuschauen blieb ihr Match dennoch. In der 42. Minute zappelte der Ball wieder im Netz der Argentinierinnen - doch auch diesmal hatte Torschützin Valentina Giacinti knapp im Abseits gestanden.",
            "type": "text"
          },
          {
            "value": "<h2>Spielfluss kommt abhanden</h2>",
            "type": "headline"
          },
          {
            "value": "Argentinien ist bei Weltmeisterschafts-Endrunden noch sieglos - diese unschöne Serie sollte auch an diesem Montag Bestand halten. Mit anwachsender Spieldauer und schwächer werdenden Kräften wurden aus aussichstreichen Offensivaktionen zunehmend zerfasernde Einzelaktionen und vor allem: eine Art Abnutzungskampf im Mittelfeld. ",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Viel Kampf und Krampf in Auckland",
                "copyright": "IMAGO / ZUMA Wire",
                "alttext": "Argentiniens Florencia Bonsegundo und Italiens Lucia Di Guglielmo kämpfen um den Ball.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/709a1770-8472-4b12-ac39-ed5734f58af5/AAABiYbCfqc/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "Man beharkte sich und stocherte, kämpfte und verbiss sich ineinander. Auch Italien konnte kaum noch Akzente setzen. Klare Aktionen gab es nach rund einer Stunde Spielzeit kaum noch. Dafür Krämpfe. Gleich mehrere argentinische Spielerinnen mussten im Laufe der letzten 20 Minuten mit derlei Problemen zu Boden.",
            "type": "text"
          },
          {
            "value": "<h2>Girelli trifft spät zum Sieg</h2>",
            "type": "headline"
          },
          {
            "value": "Torchancen wären schöner anzusehen gewesen. Es gab aber kaum mehr welche. Alles schien auf ein 0:0 hinauszulaufen. Bis Cristiana Girelli kam. Die eingewechselte Spielgestalterin Italiens stieg in der 87. Minute schön hoch und wuchtete eine Flanke von Lisa Boattin sehenswert aus elf Metern per Kopf ins Tor. Dabei blieb es. Italiens Keeperin Francesca Durante entschärfte in der Nachspielzeit noch einen Freistoß von Florencia Bonsegundo - ihr Team hatte seinen erhofften Dreier zum Turnierauftakt.",
            "type": "text"
          },
          {
            "value": "Für Argentinien geht es am Freitag (28.07.2023, 2.00 Uhr MESZ) mit der Partie gegen Südafrika weiter. Italien trifft am Samstag ab 9.30 Uhr auf Schweden.",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.sportschau.fussball.fifa-frauen-wm.spielbericht-italien-argentinien-frauen-wm-100",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230724T0958",
            "otp": "meldung",
            "cid": "spielbericht-italien-argentinien-frauen-wm-100",
            "pti": "Italien_besiegt_Argentinien_bei_der_WM_der_Frauen_in_Auckland_mit_10",
            "bcr": "ja",
            "type": "generic"
          }
        ],
        "topline": "Kampf und Krampf in Auckland",
        "video": {
          "sophoraId": "video-1225568",
          "externalId": "1c3a77f7-4d93-4b5a-a4eb-e7466bff8164",
          "title": "APP1015 FC- WM Italien Argentinien_vapp.mxf",
          "date": "2023-07-24T10:46:49.831+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225568~_view-hasChanged_lastKnown-8EF628852827BA823754C720811071BE.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225568",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230724T1046",
              "otp": "video",
              "cid": "video-1225568",
              "pti": "APP1015_FC-_WM_Italien_Argentinien_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225568",
              "program": "Tagesschau",
              "title": "APP1015_FC-_WM_Italien_Argentinien_vapp.mxf",
              "length": "17",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225568.html",
              "c7": "p7,video-1225568",
              "c8": "p8,17",
              "c9": "p9,Tagesschau_APP1015_FC-_WM_Italien_Argentinien_vapp.mxf_24.07.2023_1046",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1028-1400.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1028-1400.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-1028-1400.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-1028-1400.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/b9932426-3d13-4556-be46-f202cf9aa0dc/AAABiYcDxl4/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/fussball/fifa-frauen-wm/spielbericht-italien-argentinien-frauen-wm-100.json",
        "detailsweb": "https://www.tagesschau.de/fussball/fifa-frauen-wm/spielbericht-italien-argentinien-frauen-wm-100.html",
        "shareURL": "https://www.tagesschau.de/fussball/fifa-frauen-wm/spielbericht-italien-argentinien-frauen-wm-100.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "crop": {
          "id": "TV-20230724-1028-1400",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": true,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "FIFA Frauen WM 2023",
          "mainTexts": [
            "Italien besiegt Argentinien mit 1:0",
            "Siegtreffer in der \n87. Spielminute",
            "Argentinien noch oh&shy;\nne Sieg bei einer WM"
          ],
          "sceneSrcTexts": [
            "",
            "",
            ""
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              151
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              151
            ],
            [
              4400,
              1,
              0
            ],
            [
              4400,
              2,
              0
            ],
            [
              5080,
              9,
              158
            ],
            [
              5080,
              2,
              1
            ],
            [
              5080,
              3,
              1
            ],
            [
              5080,
              0,
              158
            ],
            [
              9400,
              2,
              0
            ],
            [
              10080,
              9,
              145
            ],
            [
              10080,
              2,
              1
            ],
            [
              10080,
              3,
              2
            ],
            [
              10080,
              0,
              145
            ],
            [
              15000,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "wettervorhersage-deutschland-100",
        "externalId": "48b3998c-6036-46af-937d-9cf4ea1829cf",
        "title": "Wolken, Temperaturen, Wind und Aussichten",
        "date": "2023-07-24T11:08:22.324+02:00",
        "teaserImage": {
          "copyright": "ARD",
          "alttext": "Deutschland Wolkenfilm Teaserbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/14ff870b-2fef-4eeb-a07a-5cbb1b293fe6/AAABiYcjB9Y/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Wetter"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/wettervorhersage-deutschland-100~_view-hasChanged_lastKnown-6A10E5C0D8BD53B025530E88497B31AA.json",
        "content": [
          {
            "value": "<strong>Am Montag ist es mal aufgelockert, mal stark bewölkt und gebietsweise fällt schauerartiger Regen und es gibt einzelne Gewitter. Lokale Unwetter sind nicht ausgeschlossen. Es ist windig bei 19 bis 30 Grad.</strong>",
            "type": "text"
          },
          {
            "value": "<h2>Vorhersage Wolken</h2>",
            "type": "headline"
          },
          {
            "value": "In der Nacht zum Dienstag ist es wechselnd bewölkt und die Schauer und Gewitter ziehen allmählich nach Osten ab. Am Alpenrand regnet es die Nacht hindurch auch länger anhaltend Ansonsten lockern zeitweise die Wolken auch vermehrt auf und es bleibt bis auf örtliche Schauer oft trocken. In der zweiten Nachthälfte verdichten sich von Westen her die Wolken und neuer schauerartiger Regen zieht von Frankreich her auf. Lokal kann es auch kurze Gewitter geben.",
            "type": "text"
          },
          {
            "value": "Am Dienstag ist es nach wie vor meist wechselnd bewölkt. Vor allem in der Mitte und im Süden gibt es häufiger auch dichte Wolken mit Regen, Schauern und einzelnen Gewitter. Im Norden ist es freundlicher und die Sonne kommt immer mal wieder zum Vorschein. Dort gibt es nur einzelne Schauer.",
            "type": "text"
          },
          {
            "video": {
              "sophoraId": "video-1225548",
              "externalId": "e77327de-6c10-429c-b7de-b660b690dfd7",
              "title": "Aktueller Wolkenfilm",
              "date": "2023-07-24T10:00:09.988+02:00",
              "teaserImage": {
                "title": "Sendungsbild",
                "copyright": "ARD-aktuell",
                "alttext": "Sendungsbild",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/22b58a45-ce48-4dd1-87b8-e5d94f560075/AAABiYbpqqs/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "tags": [],
              "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225548~_view-hasChanged_lastKnown-1A94D5542012A266A4DE9D7825D77AB2.json",
              "tracking": [
                {
                  "sid": "app.multimedia.video.video-1225548",
                  "src": "ard-aktuell",
                  "ctp": "SEGMENT",
                  "pdt": "20230724T1000",
                  "otp": "video",
                  "cid": "video-1225548",
                  "pti": "Aktueller_Wolkenfilm",
                  "bcr": "ja",
                  "type": "generic"
                },
                {
                  "assetid": "video-1225548",
                  "program": "Tagesschau",
                  "title": "Aktueller_Wolkenfilm",
                  "length": "21",
                  "c2": "p2,N",
                  "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225548.html",
                  "c7": "p7,video-1225548",
                  "c8": "p8,21",
                  "c9": "p9,Tagesschau_Aktueller_Wolkenfilm_24.07.2023_1000",
                  "c10": "p10,Das_Erste",
                  "c12": "p12,content",
                  "c16": "p16,ARD_Information/ARD_Livestream",
                  "c18": "p18,N",
                  "type_nielsen": "content",
                  "type": "nielsen"
                }
              ],
              "streams": {
                "h264s": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0959-4200.webs.h264.mp4",
                "h264m": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0959-4200.webm.h264.mp4",
                "h264xl": "https://media.tagesschau.de/video/2023/0724/TV-20230724-0959-4200.webxl.h264.mp4",
                "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0724/TV-20230724-0959-4200.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
              },
              "alttext": "Sendungsbild",
              "copyright": "tagesschau",
              "type": "video"
            },
            "type": "video"
          },
          {
            "value": "<h2>Temperaturen Nacht</h2>",
            "type": "headline"
          },
          {
            "value": "In der Nacht auf Dienstag sinkt die Temperatur auf 17 Grad in der Lausitz und bis auf 10 Grad in der Eifel.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "copyright": "ARD",
                "alttext": "Deutschland Höchstwerte Tag",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/9da838e0-1114-4140-983e-8bb786b55512/AAABiYcoGDA/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>Temperaturen Tag</h2>",
            "type": "headline"
          },
          {
            "value": "Am Dienstag steigt die Temperatur auf 17 Grad in der Eifel sowie auf der Schwäbischen Alb und bis auf 24 Grad in der Lausitz.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "copyright": "ARD",
                "alttext": "Deutschland Tiefstwerte Nacht",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/1409305b-7763-4f7a-801d-7aeb0c48ed06/AAABiYckuyA/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>Wind </h2>",
            "type": "headline"
          },
          {
            "value": "Der Wind weht am Dienstag meist schwach bis mäßig, in der Südhälfte aus Westen, in der Nordhälfte aus Nordwesten. Starke Böen gibt es im ganzen Land und im Süden kann es bei Schauern und Gewittern auch örtlich stürmische Böen geben.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "copyright": "ARD",
                "alttext": "Deutschland Wind",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/03535eeb-e207-4e3e-b53a-d0f2bf922a7a/AAABiYcmRe4/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>Weitere Aussichten</h2>",
            "type": "headline"
          },
          {
            "value": "Am Mittwoch gibt es Sonne und Wolken im Wechsel. Dazu treten vor allem am Nachmittag verbreitet Schauer oder Gewitter auf. 16 bis 22 Grad.",
            "type": "text"
          },
          {
            "value": "Am Donnerstag gibt es in der Nordhälfte viele Wolken und zeitweise fällt Regen, der auch kräftig sein kann. In Richtung Süden scheint zeitweise die Sonne und meist ist es trocken. 19 bis 26 Grad.",
            "type": "text"
          },
          {
            "value": "Am Freitag regnet es vor allem in der Nordhälfte bei dichter Bewölkung gebietsweise. In der Südhälfte zeigt sich häufiger die Sonne und es ist meist trocken. 21 bis 28 Grad.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "  ",
                "copyright": "ARD",
                "alttext": "Deutschland 3 Tage-Wetter",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/a88e4a50-af4f-49dc-bb3c-0259416ef519/AAABiYcm5Jc/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          }
        ],
        "tracking": [
          {
            "sid": "app.wetter.deutschland.wettervorhersage-deutschland-100",
            "src": "ard-aktuell",
            "ctp": "nicht-definiert",
            "pdt": "20230709T1750",
            "otp": "meldung",
            "cid": "wettervorhersage-deutschland-100",
            "pti": "Wetter_Deutschland_Wolken_Temperaturen_Wind_und_Aussichten",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Wettervorhersage Deutschland",
        "firstSentence": "Am Montag ist es mal aufgelockert, mal stark bewölkt und gebietsweise fällt schauerartiger Regen und es gibt einzelne Gewitter.",
        "video": {
          "sophoraId": "video-1225196",
          "externalId": "978caeae-b5fc-44a5-9bf2-d3533546f2b5",
          "title": "APP1330 Nif- Wetter stumm_vapp.mxf",
          "date": "2023-07-23T14:42:35.309+02:00",
          "teaserImage": {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tags": [],
          "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1225196~_view-hasChanged_lastKnown-9D8A0905DB498B98CE862C5D63D1873A.json",
          "tracking": [
            {
              "sid": "app.multimedia.video.video-1225196",
              "src": "ard-aktuell",
              "ctp": "VERTICALAPPVIDEO",
              "pdt": "20230723T1442",
              "otp": "video",
              "cid": "video-1225196",
              "pti": "APP1330_Nif-_Wetter_stumm_vapp.mxf",
              "bcr": "ja",
              "type": "generic"
            },
            {
              "assetid": "video-1225196",
              "program": "Tagesschau",
              "title": "APP1330_Nif-_Wetter_stumm_vapp.mxf",
              "length": "13",
              "c2": "p2,N",
              "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1225196.html",
              "c7": "p7,video-1225196",
              "c8": "p8,13",
              "c9": "p9,Tagesschau_APP1330_Nif-_Wetter_stumm_vapp.mxf_23.07.2023_1442",
              "c10": "p10,Das_Erste",
              "c12": "p12,content",
              "c16": "p16,ARD_Information/ARD_Livestream",
              "c18": "p18,N",
              "type_nielsen": "content",
              "type": "nielsen"
            }
          ],
          "streams": {
            "h264s": "https://media.tagesschau.de/video/2023/0723/TV-20230723-1326-2600.webs.h264.mp4",
            "h264m": "https://media.tagesschau.de/video/2023/0723/TV-20230723-1326-2600.webm.h264.mp4",
            "h264xl": "https://media.tagesschau.de/video/2023/0723/TV-20230723-1326-2600.webxl.h264.mp4",
            "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0723/TV-20230723-1326-2600.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
          },
          "alttext": "Sendungsbild",
          "copyright": "tagesschau",
          "type": "video"
        },
        "images": [
          {
            "title": "Sendungsbild",
            "copyright": "ARD-aktuell",
            "alttext": "Sendungsbild",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "firstFrame": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/8164b891-1e63-4612-94b9-6ac660519a30/AAABiYKAp48/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/wetter/deutschland/wettervorhersage-deutschland-100.json",
        "detailsweb": "https://www.tagesschau.de/wetter/deutschland/wettervorhersage-deutschland-100.html",
        "shareURL": "https://www.tagesschau.de/wetter/deutschland/wettervorhersage-deutschland-100.html",
        "geotags": [],
        "regionId": 0,
        "regionIds": [],
        "crop": {
          "id": "TV-20230723-1326-2600",
          "type": "video",
          "croppingApiVersion": "1.1",
          "croppingUIVersion": "20220503.2",
          "croppingServiceVersion": "1.1",
          "noSound": false,
          "videoSrc": "",
          "imageSrc": [],
          "imageNames": [],
          "headerText": "",
          "mainTexts": [
            "Das Wetter\nam Montag",
            "Mal aufgelockert, \nmal stark bewölkt",
            "Gebietsweise Regen und Gewitter"
          ],
          "sceneSrcTexts": [
            ""
          ],
          "cameraMoves": [],
          "events": [
            [
              0,
              9,
              160
            ],
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              0
            ],
            [
              0,
              0,
              160
            ],
            [
              3280,
              1,
              0
            ],
            [
              3280,
              2,
              0
            ],
            [
              3960,
              2,
              1
            ],
            [
              3960,
              3,
              1
            ],
            [
              7240,
              2,
              0
            ],
            [
              7920,
              2,
              1
            ],
            [
              7920,
              3,
              2
            ],
            [
              10840,
              2,
              0
            ]
          ]
        },
        "type": "story",
        "breakingNews": false
      }
    ],
    "regional": [
      {
        "sophoraId": "swr-schwoerrede-im-muenster-hat-begonnen-100",
        "externalId": "tagesschau_fm-story-liveblog-schwoermontag-2023-100",
        "title": "Schwörrede im Münster hat begonnen",
        "date": "2023-07-24T11:10:00.000+02:00",
        "teaserImage": {
          "title": "Die Schwörrede im Ulmer Münster ist ein Novum, sagt Ulms OB Czisch zu Beginn der Schwörrede.",
          "copyright": "SWR, Markus Baya",
          "alttext": "Die Schwörrede im Ulmer Münster ist ein Novum, sagt Ulms OB Czisch zu Beginn der Schwörrede.",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Baden-Württemberg"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/swr-schwoerrede-im-muenster-hat-begonnen-100~_view-hasChanged_lastKnown-7DF2E5FBEFA3C88E5D0DA688E804F910.json",
        "content": [
          {
            "value": "<strong>In Ulm ist Schwörmontag - mit der Schwörrede des Oberbürgermeisters, dem Nabada auf der Donau und der Feierei zum Ausklang. Wie der Tag läuft, lest ihr hier - von Maren Haring und Volker Wüst.</strong>",
            "type": "text"
          },
          {
            "value": "24.7.2023, 11:10 Uhr",
            "type": "text"
          },
          {
            "value": "<h2>Beginn der Schwörrede im Ulmer Münster</h2>",
            "type": "headline"
          },
          {
            "value": "Die Sonne lugt kurz zwischen schweren Wolken hervor, als die Schwörrede im Ulmer Münster beginnt. Viele Menschen sind gekommen, um die Jahresbilanz der Stadt von Oberbürgermeister Gunter Czisch zu hören. Es ist wohl 50 Jahre her, dass der Ort der Schwörrede verlegt werden musste, erinnern sich Mitarbeiter der Stadt. Die Rede im Münster sei ein Novum, sagt OB Czisch zu Beginn seiner Rede. Etwa eine Stunde lang wird er nun zusammenfassen, was für die Stadt Ulm seit der letzten Schwörrede gut gelaufen ist, und wo die Herausforderungen lagen und liegen.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Viele Gäste sind ins Ulmer Münster gekommen, um der Schwörrede des OB zu lauschen.",
                "copyright": "SWR, Markus Bayha",
                "alttext": "Viele Gäste sind ins Ulmer Münster gekommen, um der Schwörrede des OB zu lauschen.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/05d9e74c-6935-401d-95fe-fe76ea95290d/AAABiYc3DU8/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "24.7.2023, 10:37 Uhr",
            "type": "text"
          },
          {
            "value": "<h2>Erste Gäste zur Schwörrede treffen ein</h2>",
            "type": "headline"
          },
          {
            "value": "Bis zu 700 Menschen können die Schwörrede im Ulmer Münster verfolgen. Die ersten Gäste treffen jetzt ein. Erwartet werden unter anderem Baden-Württembergs Justizministerin Marion Gentges (CDU), der Landesvorsitzende der SPD aus Heidenheim, Andreas Stoch, und die grüne Bundestagsabgeordnete Ekin Deligöz. Für geladene Gäste sind Plätze reserviert. Für alle anderen gibt es Sitz- oder Stehplätze.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Die ersten Gäste treffen im Ulmer Münster ein. Um 11 Uhr beginnt die traditionelle Schwörrede des Oberbürgermeisters.",
                "copyright": "SWR, Markus Bayha",
                "alttext": "Die ersten Gäste treffen im Ulmer Münster ein. Um 11 Uhr beginnt die traditionelle Schwörrede des Oberbürgermeisters.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/7fe41be7-c972-4d71-ab54-46bbd59da830/AAABiYc3DwE/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "24.7.2023, 9:38 Uhr",
            "type": "text"
          },
          {
            "value": "<h2>Schwörrede vom Weinhof ins Münster verlegt</h2>",
            "type": "headline"
          },
          {
            "value": "Auf dem Weinhof in Ulm stehen schon die Stühle - doch wegen des Regens hat die Stadt jetzt reagiert und die Rede von OB Czisch ins Münster verlegt.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Gerade war alles für die Schwörrede aufgebaut, die traditionell vom Balkon des Schwörhauses aus gehalten wird. Dann kam die Anweisung zum Abbau: Wegen des drohenden Regens hält Ulms Oberbürgermeister Czisch die Rede im Münster. ",
                "copyright": "SWR, Michael Binder",
                "alttext": "Gerade war alles für die Schwörrede aufgebaut, die traditionell vom Balkon des Schwörhauses aus gehalten wird. Dann kam die Anweisung zum Abbau: Wegen des drohenden Regens hält Ulms Oberbürgermeister Czisch die Rede im Münster. ",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/3b4c08e6-f96c-42ef-88aa-df7a3c9144bb/AAABiYc3EYU/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "24.7.2023, 9:01 Uhr",
            "type": "text"
          },
          {
            "value": "<h2>Aufbau der Themenboote</h2>",
            "type": "headline"
          },
          {
            "value": "Am Donauufer läuft seit dem frühen Morgen der Aufbau der Themenboote. 14 sind's insgesamt, die schwergewichtig die Donau herunterschippern wollen. Per Tieflader wurden die einzelnen Elemente der Boote gebracht und direkt auf der Donau zusammengebastelt. Sie bilden den Mittelpunkt des Nabada, drumrum sorgen tausende \"wilder Nabader\" dafür, dass das Spektakel rund wird.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Die einzelnen Elemente der Themenboote wurden zum Teil per Tieflader ans Neu-Ulmer Donauufer gebracht, die Boote werden auf dem Wasser zusammengesetzt.",
                "copyright": "SWR, Frank Wiesner",
                "alttext": "Nabada Ulm: Die einzelnen Elemente der Themenboote wurden zum Teil per Tieflader ans Neu-Ulmer Donauufer gebracht, die Boote werden auf dem Wasser zusammengesetzt.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/41e02c3c-9aa3-4fb3-9822-22ce68367dc2/AAABiYc3E04/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "24.7.2023, 8:46 Uhr",
            "type": "text"
          },
          {
            "value": "<h2>Nabada ab 16 Uhr im Livestream</h2>",
            "type": "headline"
          },
          {
            "value": "Heute Nachmittag wird es bunt auf der Donau, auch wenn der Himmel grau sein sollte. Nur, wenn um Punkt 16 Uhr ein Gewitter runter kommt, könnte der Wasserumzug womöglich abgesagt werden, hieß es heute von der Stadt. Wenn ihr nicht ans Donauufer kommen könnt, um die Nabader anzufeuern, könnt ihr den Umzug auch Online verfolgen. Der SWR überträgt das Nabada ab 16 Uhr live.",
            "type": "text"
          },
          {
            "value": "24.7.2023, 8:31 Uhr",
            "type": "text"
          },
          {
            "value": "<h2>Einen schönen Schwörmontag!</h2>",
            "type": "headline"
          },
          {
            "value": "Den Anfang jedes Schwörmontags macht die traditionelle Schwörfeier auf dem Weinhof. Mit den Worten \"Armen und Reichen ein gemeiner Mann zu sein\" erneuert Oberbürgermeister Gunter Czisch (CDU) um 12 Uhr den Schwur der Ulmer Stadtoberhäupter. Um 16 Uhr ertönt dann der Startschuss für das bekannte Nabada. Neben tausenden Menschen, die mit ihren Flößen und Schlauchbooten die 19 Grad frische Donau herunterfahren, sind auch vierzehn Themenboote auf dem Wasser. Nass könnte es auch von oben werden - durch Regen und Gewitter. Abgesagt wird das Nabada aber nur bei einem drohenden Unwetter mit Hagel und Sturm, hieß es vorab. <a href=\"https://www.swr.de/swraktuell/baden-wuerttemberg/ulm/nabada-ulm-2023-100.html\" type=\"extern\">Der SWR überträgt das Nabada auf SWR.de. </a>",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.badenwuerttemberg.swr-schwoerrede-im-muenster-hat-begonnen-100",
            "src": "swr",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1124",
            "otp": "meldung",
            "cid": "swr-schwoerrede-im-muenster-hat-begonnen-100",
            "pti": "Schwoerrede_im_Muenster_hat_begonnen",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Baden-Württemberg",
        "firstSentence": "In Ulm ist Schwörmontag - mit der Schwörrede des Oberbürgermeisters, dem Nabada auf der Donau und der Feierei zum Ausklang.",
        "images": [
          {
            "title": "Die Schwörrede im Ulmer Münster ist ein Novum, sagt Ulms OB Czisch zu Beginn der Schwörrede.",
            "copyright": "SWR, Markus Baya",
            "alttext": "Die Schwörrede im Ulmer Münster ist ein Novum, sagt Ulms OB Czisch zu Beginn der Schwörrede.",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/b71b3560-0968-4a13-ac31-894165c28e18/AAABiYc3C4M/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo SWR",
          "copyright": "tagesschau, ARD, SWR",
          "alttext": "Logo SWR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/25ddb5d7-0642-43c2-b5bd-208e8d783190/AAABh5NOkHo/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/badenwuerttemberg/swr-schwoerrede-im-muenster-hat-begonnen-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/badenwuerttemberg/swr-schwoerrede-im-muenster-hat-begonnen-100.html",
        "shareURL": "https://www.swr.de/swraktuell/baden-wuerttemberg/ulm/liveblog-schwoermontag-2023-100.html",
        "geotags": [],
        "regionId": 1,
        "regionIds": [
          1
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "br-waldbraende-auf-urlaubsinsel-rhodos-auch-ostbayern-evakuiert-104",
        "externalId": "tagesschau_fm-story-br24-Tkoxe7P",
        "title": "\"Wollen nur noch heim\": Urlauber berichten von Panik auf Rhodos",
        "date": "2023-07-23T14:42:36.823+02:00",
        "teaserImage": {
          "title": "Eindruck von der Lage auf Rhodos",
          "copyright": "Matthias Kerscher",
          "alttext": "Eindruck von der Lage auf Rhodos",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tME_8/16x9-1280.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Bayern"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/br-waldbraende-auf-urlaubsinsel-rhodos-auch-ostbayern-evakuiert-104~_view-hasChanged_lastKnown-6A2B0342F5A9FB7662CD998F9E8875DE.json",
        "content": [
          {
            "value": "<strong>Sie flüchteten aus dem Hotel und warteten am Strand stundenlang auf Rettung: Zwei Oberpfälzer, die sich während der Brände auf Rhodos befinden, schildern die dramatische Evakuierung. \"Jeder wollte einfach nur auf so ein Boot.\"</strong>",
            "type": "text"
          },
          {
            "value": "<em>Von Rudolf Heinz</em>",
            "type": "text"
          },
          {
            "value": "Verheerende Waldbrände wüten derzeit auf der beliebten Urlaubsinsel Rhodos. In der Nacht mussten mindestens 10.000 Touristen und Einwohner in Sicherheit gebracht werden. Darunter waren auch Matthias Kerscher, 25 Jahre, und Sara Baumer, 20 Jahre, aus der Nähe von Roding im Landkreis Cham in der Oberpfalz.",
            "type": "text"
          },
          {
            "title": "Eindruck von der Lage auf Rhodos",
            "date": "2023-07-23T14:20:49.650+02:00",
            "teaserImage": {
              "title": "Eindruck von der Lage auf Rhodos",
              "copyright": "Matthias Kerscher",
              "alttext": "Eindruck von der Lage auf Rhodos",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMNQQ/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMOLk/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMPOY/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMQDM/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMQ7w/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMG0w/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMHqw/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMIg0/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMJbE/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMLgk/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tME_8/16x9-1280.jpg"
              },
              "type": "image"
            },
            "tracking": [
              {
                "sid": "app.inland.regional.bayern.br-wollen-nur-noch-heim-urlauber-berichten-von-panik-auf-rhodos-100",
                "src": "br",
                "ctp": "nicht-definiert",
                "pdt": "20230723T1420",
                "otp": "audio",
                "cid": "br-wollen-nur-noch-heim-urlauber-berichten-von-panik-auf-rhodos-100",
                "pti": "Eindruck_von_der_Lage_auf_Rhodos",
                "bcr": "nein",
                "type": "generic"
              }
            ],
            "stream": "https://cdn-storage.br.de/MUJIuUOVBwQIbtChb6OHu7ODifWH_-46/_-0S/_2FH5-4p_K1S/a705805f-7e9b-4263-bf1f-de2d7b9afa84_1.mp4",
            "type": "audio"
          },
          {
            "value": "<h2>Flammen kamen ziemlich schnell immer näher</h2>",
            "type": "headline"
          },
          {
            "value": "Das Paar machte Urlaub am Badeort Kiotari. Die beiden lagen gerade am Strand, als sie bemerkten, dass immer mehr Rauchschwaden aufkamen. \"Die Luft wurde immer dreckiger, zum Atmen war es nicht mehr schön\", erklärt Kerscher. Zurück im Hotel heulten plötzlich die Sirenen. Im BR-Interview erzählt er, dass er nachsehen wollte, wo der Rauch genau herkam. Als er sich nur wenige Meter vom Hotel entfernte, sah er das Feuer, das plötzlich seiner Einschätzung nach nur 200 bis 300 Meter entfernt von ihm war.",
            "type": "text"
          },
          {
            "value": "\"Ich bin zurück zu meiner Freundin und habe gesagt: Pack deine Sachen, wir hauen ab!\", so Kerscher, der selbst Feuerwehrmann bei der Freiwilligen Feuerwehr Wiesing ist. Die Oberpfälzer sind anschließend <a href=\"https://www.br.de/nachrichten/deutschland-welt/waldbraende-auf-rhodos-touristen-fliehen-vor-den-flammen,Tkkt5Jg\" type=\"extern\">mit anderen Touristen im Ort </a>in Sicherheit gebracht worden. Ihre Koffer und Sachen, die sie im Zimmer hatten, mussten sie zurücklassen.",
            "type": "text"
          },
          {
            "value": "Das Paar wurde zu einem Strandabschnitt eines nahegelegenen Ortes gelotst. Dort mussten sie stundenlang auf Boote warten. \"Es war eine Katastrophe, es war Panik, Kinder haben geschrien, haben Angst gehabt, jeder wollte einfach nur auf so ein Boot.\"",
            "type": "text"
          },
          {
            "value": "<h2>\"Wollen nur noch heim!\"</h2>",
            "type": "headline"
          },
          {
            "value": "Mitten in der Nacht bekamen auch sie einen Platz auf einem Ausflugsschiff und wurden in die zwei Stunden entfernte Stadt Rhodos gebracht. Dort sind sie jetzt in einer Schule untergebracht. Die Nacht über mussten sie auf dem Fußboden schlafen. Duschen gibt es keine, und die Toiletten würden nicht funktionieren, sagten sie. Inzwischen ist auch der Strom weg. Die beiden Oberpfälzer versuchen jetzt, irgendwie nach Hause zu kommen. Der Reiseveranstalter ist laut Kerscher vollkommen überfordert. \"Niemand geht ran, wir bekommen keine Informationen, wir wollen nur noch heim!\"",
            "type": "text"
          },
          {
            "value": "<h2>Telefonnummern des Krisenstabs</h2>",
            "type": "headline"
          },
          {
            "value": "Der Krisenstab des griechischen Zivilschutzes hat zwei Telefonnummern für ausländische Besucher eingerichtet, wenn sie Angehörige vermissen. Sie lauten +30 210 3681259 und +30 210 3681350, wie die Behörde auf Twitter mitteilte.",
            "type": "text"
          },
          {
            "value": "<h2>Im Video: Ein junger Mann aus Ostbayern und seine Freundin wurden mit Booten übers Wasser gerettet</h2>",
            "type": "headline"
          },
          {
            "video": {
              "sophoraId": "br-wollen-nur-noch-heim-urlauber-berichten-von-panik-auf-rhodos-102",
              "externalId": "tagesschau_fm-videoobject-https_percent_3A_percent_2F_percent_2Fcdn-storage_dot_br_dot_de_percent_2FMUJIuUOVBwQIbtC2uKJDM6OhuLnC_2rH_H1S_percent_2F_-0S_percent_2F_2FH5-4c_K1S_percent_2F69072171-6946-4b91-a348-3ee3b944536c_C_dot_mp4",
              "title": "Wegen der Waldbrände auf Rhodos wurden tausende Touristen aus ihren Hotels in Sicherheit gebracht.",
              "date": "2023-07-24T06:26:48.547+02:00",
              "teaserImage": {
                "title": "Wegen der Waldbrände auf Rhodos wurden tausende Touristen aus ihren Hotels in Sicherheit gebracht.",
                "copyright": "BR",
                "alttext": "Wegen der Waldbrände auf Rhodos wurden tausende Touristen aus ihren Hotels in Sicherheit gebracht.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tMQDM/1x1-640.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/fbdeea92-05a5-4f74-8bf0-73d9f7623725/AAABiYYmXzk/AAABg8tME_8/16x9-1280.jpg"
                },
                "type": "image"
              },
              "tags": [],
              "updateCheckUrl": "https://www.tagesschau.de/api2u/br-wollen-nur-noch-heim-urlauber-berichten-von-panik-auf-rhodos-102~_view-hasChanged_lastKnown-A23EA34E11007CD02B6490D493B27CDE.json",
              "tracking": [
                {
                  "sid": "app.inland.regional.bayern.br-wollen-nur-noch-heim-urlauber-berichten-von-panik-auf-rhodos-102",
                  "src": "br",
                  "ctp": "SEGMENT",
                  "pdt": "20230724T0626",
                  "otp": "video",
                  "cid": "br-wollen-nur-noch-heim-urlauber-berichten-von-panik-auf-rhodos-102",
                  "pti": "Wegen_der_Waldbraende_auf_Rhodos_wurden_tausende_Touristen_aus_ihren_Hotels_in_Sicherheit_gebracht.",
                  "bcr": "nein",
                  "type": "generic"
                },
                {
                  "assetid": "br-wollen-nur-noch-heim-urlauber-berichten-von-panik-auf-rhodos-102",
                  "program": "Tagesschau",
                  "title": "Wegen_der_Waldbraende_auf_Rhodos_wurden_tausende_Touristen_aus_ihren_Hotels_in_Sicherheit_gebracht.",
                  "c2": "p2,N",
                  "c5": "p5,https://www.tagesschau.de/inland/regional/bayern/br-wollen-nur-noch-heim-urlauber-berichten-von-panik-auf-rhodos-102.html",
                  "c7": "p7,br-wollen-nur-noch-heim-urlauber-berichten-von-panik-auf-rhodos-102",
                  "c9": "p9,Tagesschau_Wegen_der_Waldbraende_auf_Rhodos_wurden_tausende_Touristen_aus_ihren_Hotels_in_Sicherheit_gebracht._24.07.2023_0626",
                  "c10": "p10,Das_Erste",
                  "c12": "p12,content",
                  "c16": "p16,ARD_Information/ARD_Livestream",
                  "c18": "p18,N",
                  "type_nielsen": "content",
                  "type": "nielsen"
                }
              ],
              "streams": {
                "h264s": "https://cdn-storage.br.de/MUJIuUOVBwQIbtC2uKJDM6OhuLnC_2rH_H1S/_-0S/_2FH5-4c_K1S/69072171-6946-4b91-a348-3ee3b944536c_C.mp4",
                "h264m": "https://cdn-storage.br.de/MUJIuUOVBwQIbtC2uKJDM6OhuLnC_2rH_H1S/_-0S/_2FH5-4c_K1S/69072171-6946-4b91-a348-3ee3b944536c_C.mp4",
                "h264xl": "https://cdn-storage.br.de/MUJIuUOVBwQIbtC2uKJDM6OhuLnC_2rH_H1S/_-0S/_2FH5-4c_K1S/69072171-6946-4b91-a348-3ee3b944536c_C.mp4"
              },
              "alttext": "Wegen der Waldbrände auf Rhodos wurden tausende Touristen aus ihren Hotels in Sicherheit gebracht.",
              "copyright": "tagesschau",
              "type": "video"
            },
            "type": "video"
          },
          {
            "value": "Das ist die <a href=\"https://www.br.de/nachrichten/deutschland-welt/was-beschaeftigt-unsere-nachbarn-br24-blickt-nach-europa,TFbdoO8\" type=\"extern\">Europäische Perspektive</a> bei BR24.",
            "type": "text"
          },
          {
            "value": "<em>\"Hier ist Bayern\": Der BR24 Newsletter informiert Sie immer montags bis freitags zum Feierabend über das Wichtigste vom Tag auf einen Blick – kompakt und direkt in Ihrem privaten Postfach. </em><a href=\"https://www.br.de/nachrichten/bayern/br24-newsletter-anmeldung,RkXzr4k\" type=\"extern\"><em>Hier geht's zur Anmeldung!</em></a>",
            "type": "text"
          },
          {
            "value": "Quelle: BR24 im Radio\n 23.07.2023 - 11:00 Uhr",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.bayern.br-waldbraende-auf-urlaubsinsel-rhodos-auch-ostbayern-evakuiert-104",
            "src": "br",
            "ctp": "nicht-definiert",
            "pdt": "20230724T0626",
            "otp": "meldung",
            "cid": "br-waldbraende-auf-urlaubsinsel-rhodos-auch-ostbayern-evakuiert-104",
            "pti": "Wollen_nur_noch_heim_Urlauber_berichten_von_Panik_auf_Rhodos",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Bayern",
        "firstSentence": "Sie flüchteten aus dem Hotel und warteten am Strand stundenlang auf Rettung: Zwei Oberpfälzer, die sich während der Brände auf Rhodos befinden, schildern die dramatische Evakuierung.",
        "images": [
          {
            "title": "Eindruck von der Lage auf Rhodos",
            "copyright": "Matthias Kerscher",
            "alttext": "Eindruck von der Lage auf Rhodos",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/8fd3bc6e-c693-4754-977a-76a38dead762/AAABiYKx-nw/AAABg8tME_8/16x9-1280.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo BR",
          "copyright": "tagesschau, ARD, BR",
          "alttext": "Logo BR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/77b4c5c6-6b21-4cbf-92a1-43d75ff0e1e5/AAABh5NOxOY/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/bayern/br-waldbraende-auf-urlaubsinsel-rhodos-auch-ostbayern-evakuiert-104.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/bayern/br-waldbraende-auf-urlaubsinsel-rhodos-auch-ostbayern-evakuiert-104.html",
        "shareURL": "https://www.br.de/nachrichten/deutschland-welt/waldbraende-auf-urlaubsinsel-rhodos-auch-ostbayern-evakuiert,Tkoxe7P",
        "geotags": [],
        "regionId": 2,
        "regionIds": [
          2
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "rbb-berliner-pyrotechnik-verkaeufer-wegen-fahrlaessiger-toetung-angeklagt-100",
        "externalId": "tagesschau_fm-story-rbb_berlin-pyrotechnik-verkaeufer-angeklagt-fahrlaessige-toetung",
        "title": "Berliner Pyrotechnik-Verkäufer wegen fahrlässiger Tötung angeklagt",
        "date": "2023-07-24T11:28:43.000+02:00",
        "teaserImage": {
          "title": "Illegales Silvesterfeuerwerk",
          "copyright": "imago images/snapshot",
          "alttext": "Illegales Silvesterfeuerwerk © imago images/snapshot",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMPOY/1x1-432.jpg",
            "16x9-256": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMLgk/16x9-960.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Berlin"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/rbb-berliner-pyrotechnik-verkaeufer-wegen-fahrlaessiger-toetung-angeklagt-100~_view-hasChanged_lastKnown-899DC303D824FE0F85C4343ED81BAFCB.json",
        "content": [
          {
            "value": "Die Berliner Staatsanwaltschaft hat einen Verkäufer illegaler Pyrotechnik wegen fahrlässiger Tötung angeklagt. Der 21-Jährige soll Ende vergangenen Jahres im Internet damit gehandelt haben - insgesamt soll es 158 Bestellungen gegeben haben.<br />",
            "type": "text"
          },
          {
            "box": {
              "text": "In einem Wohnhaus im Brandenburgischen Teupitz hat es am Silvestertag eine Explosion gegeben - zwei Menschen wurden verletzt in Kliniken gebracht. Die Polizei geht von Feuerwerk als Ursache aus. Im Keller wurden zudem Waffen gefunden.<a href=\"\" externalId=\"tagesschau_fm-link-generated-href-hash-4c9e12ddc3aa782d4e9959afaae8d5c4\">mehr</a>",
              "title": "Zwei Verletzte bei Explosion in Teupitz - Feuerwehr nennt Pyrotechnik als Ursache "
            },
            "type": "box"
          },
          {
            "gallery": [
              {
                "title": "Video: rbb|24 | 31.12.2022 | Material: rbb24 Brandenburg aktuell",
                "copyright": "rbb",
                "alttext": "Nach der Explosion in Teupitz wurde ein 24-Jähriger mit einem Rettungshubschrauber in ein Krankenhaus gebracht (Quelle: rbb)",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/a5bf32a5-4fe0-4d37-b275-ea1513fcb9fc/AAABiYdPm3I/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/a5bf32a5-4fe0-4d37-b275-ea1513fcb9fc/AAABiYdPm3I/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/a5bf32a5-4fe0-4d37-b275-ea1513fcb9fc/AAABiYdPm3I/AAABg8tMPOY/1x1-432.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/a5bf32a5-4fe0-4d37-b275-ea1513fcb9fc/AAABiYdPm3I/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/a5bf32a5-4fe0-4d37-b275-ea1513fcb9fc/AAABiYdPm3I/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/a5bf32a5-4fe0-4d37-b275-ea1513fcb9fc/AAABiYdPm3I/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/a5bf32a5-4fe0-4d37-b275-ea1513fcb9fc/AAABiYdPm3I/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/a5bf32a5-4fe0-4d37-b275-ea1513fcb9fc/AAABiYdPm3I/AAABg8tMLgk/16x9-960.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>Messer, Schlagringe, Harpune und Armbrust gefunden</h2>",
            "type": "headline"
          },
          {
            "value": "Ein Mann aus Hennef (NRW) bestellte sich eine sogenannte Kugelbombe. Als er sie am Neujahrsmorgen zündete, erlitt er schwerste Gesichtsverletzungen, an denen er starb, so die Staatsanwaltschaft; ein weiterer Mann wurde schwer verletzt. Dass so etwas beim Zünden der illegalen Feuerwerkskörper passieren konnte, sei für den Angeschuldigten vorhersehbar gewesen, so der Vorwurf.<br /> <br />Bei der Durchsuchung seiner Wohnung wurden weitere 23 Kilo illegaler Pyrotechnik gefunden, ein Pfund Marihuana, mehrere Messer, Schlagringe, eine Harpune und eine Armbrust.<br />\n<br />Dem 21-Jährigen wird außerdem vorgeworfen, einen Zigarettenautomaten in Reinickendorf aufgesprengt zu haben.",
            "type": "text"
          },
          {
            "value": "Sendung: rbb24 Inforadio, 24.07.2023, 12:00 Uhr",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.berlin.rbb-berliner-pyrotechnik-verkaeufer-wegen-fahrlaessiger-toetung-angeklagt-100",
            "src": "rbb",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1151",
            "otp": "meldung",
            "cid": "rbb-berliner-pyrotechnik-verkaeufer-wegen-fahrlaessiger-toetung-angeklagt-100",
            "pti": "Berliner_Pyrotechnik-Verkaeufer_wegen_fahrlaessiger_Toetung_angeklagt",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Berlin",
        "firstSentence": "",
        "images": [
          {
            "title": "Illegales Silvesterfeuerwerk",
            "copyright": "imago images/snapshot",
            "alttext": "Illegales Silvesterfeuerwerk © imago images/snapshot",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMPOY/1x1-432.jpg",
              "16x9-256": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/80b53fde-f0fb-43b9-bf34-b7f76c526ee8/AAABiYdPmSM/AAABg8tMLgk/16x9-960.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo rbb",
          "copyright": "tagesschau, ARD, rbb",
          "alttext": "Logo rbb",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/e03b1ea1-c03d-4d50-bfb2-41c40808e93a/AAABh5NOiQw/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/berlin/rbb-berliner-pyrotechnik-verkaeufer-wegen-fahrlaessiger-toetung-angeklagt-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/berlin/rbb-berliner-pyrotechnik-verkaeufer-wegen-fahrlaessiger-toetung-angeklagt-100.html",
        "shareURL": "https://www.rbb24.de/panorama/beitrag/2023/07/berlin-pyrotechnik-verkaeufer-angeklagt-fahrlaessige-toetung.html",
        "geotags": [],
        "regionId": 3,
        "regionIds": [
          3
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "rbb-s-bahn-kollidiert-mit-transporter-an-bahnuebergang-in-schoenefeld-100",
        "externalId": "tagesschau_fm-story-rbb_bahnuebergang-unfall-bohndorfer-chaussee-schoenefeld",
        "title": "S-Bahn kollidiert mit Transporter an Bahnübergang in Schönefeld",
        "date": "2023-07-24T12:06:55.000+02:00",
        "teaserImage": {
          "title": "sbahn",
          "copyright": "imago images",
          "alttext": "Eine herannahende S-Bahn. (Quelle: imago images)",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMPOY/1x1-432.jpg",
            "16x9-256": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMLgk/16x9-960.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Brandenburg"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/rbb-s-bahn-kollidiert-mit-transporter-an-bahnuebergang-in-schoenefeld-100~_view-hasChanged_lastKnown-EDA41FA8160B586C7A0307336C0701D3.json",
        "content": [
          {
            "value": "Wegen eines Unfalls am Bahnübergang Bohnsdorfer Chaussee in Schönefeld (Dahme-Spreewald) ist der Zugverkehr der Linien S45 und S9 zwischen Altglienicke in Berlin und Flughafen BER T5 (alter Flughafen Schönefeld) seit Montag Vormittag unterbrochen.",
            "type": "text"
          },
          {
            "box": {
              "text": "<a href=\"\" externalId=\"tagesschau_fm-link-generated-href-hash-aa8e13e0313ac98290242c6a6309f714\">mehr</a>",
              "title": "Unbekannte sprühen nach Streit Pfefferspray in S-Bahn"
            },
            "type": "box"
          },
          {
            "gallery": [
              {
                "title": "Audio: Antenne Brandenburg | 10.07.2023 | Torsten Glauche ",
                "copyright": "dpa/M. Gambarini",
                "alttext": "Archivbild: Ein Zug der Berliner S-Bahnstrecke S3 nach Erkner. (Quelle: dpa/M. Gambarini)",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/4e551e2e-6d4f-4f3d-bd7c-587ec47bb4a9/AAABiYdfWE8/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/4e551e2e-6d4f-4f3d-bd7c-587ec47bb4a9/AAABiYdfWE8/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/4e551e2e-6d4f-4f3d-bd7c-587ec47bb4a9/AAABiYdfWE8/AAABg8tMPOY/1x1-432.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/4e551e2e-6d4f-4f3d-bd7c-587ec47bb4a9/AAABiYdfWE8/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/4e551e2e-6d4f-4f3d-bd7c-587ec47bb4a9/AAABiYdfWE8/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/4e551e2e-6d4f-4f3d-bd7c-587ec47bb4a9/AAABiYdfWE8/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/4e551e2e-6d4f-4f3d-bd7c-587ec47bb4a9/AAABiYdfWE8/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/4e551e2e-6d4f-4f3d-bd7c-587ec47bb4a9/AAABiYdfWE8/AAABg8tMLgk/16x9-960.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>Transporter soll Bahnschranke umfahren haben</h2>",
            "type": "headline"
          },
          {
            "value": "Dort sind ein Transporter und eine S-Bahn kollidiert. Wie eine Sprecherin der Bundespolizei dem rbb sagte, hatte der Transporterfahrer die Schranke des Übergangs umfahren. Als er die anfahrende S-Bahn bemerkte, rettete er sich mit einem Sprung aus seinem Fahrzeug.<br /> <br />Trotz einer Bremsung des S-Bahnfahrers kam es zum Zusammenstoß.<br /> <br />Derzeit gibt es einen Ersatzverkehr mit Bussen. Verletzt wurde bei dem Unfall niemand. In der S-Bahn saßen 112 Fahrgäste.",
            "type": "text"
          },
          {
            "value": "Sendung: rbb24 Inforadio, 24.07.2023, 12:00 Uhr",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.brandenburg.rbb-s-bahn-kollidiert-mit-transporter-an-bahnuebergang-in-schoenefeld-100",
            "src": "rbb",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1208",
            "otp": "meldung",
            "cid": "rbb-s-bahn-kollidiert-mit-transporter-an-bahnuebergang-in-schoenefeld-100",
            "pti": "S-Bahn_kollidiert_mit_Transporter_an_Bahnuebergang_in_Schoenefeld",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Brandenburg",
        "firstSentence": "",
        "images": [
          {
            "title": "sbahn",
            "copyright": "imago images",
            "alttext": "Eine herannahende S-Bahn. (Quelle: imago images)",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMPOY/1x1-432.jpg",
              "16x9-256": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/55e09cee-0a4b-4255-8ba5-18350710e1c2/AAABiYdfVj0/AAABg8tMLgk/16x9-960.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo rbb",
          "copyright": "tagesschau, ARD, rbb",
          "alttext": "Logo rbb",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/e03b1ea1-c03d-4d50-bfb2-41c40808e93a/AAABh5NOiQw/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/brandenburg/rbb-s-bahn-kollidiert-mit-transporter-an-bahnuebergang-in-schoenefeld-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/brandenburg/rbb-s-bahn-kollidiert-mit-transporter-an-bahnuebergang-in-schoenefeld-100.html",
        "shareURL": "https://www.rbb24.de/panorama/beitrag/2023/07/bahnuebergang-unfall-bohndorfer-chaussee-schoenefeld.html",
        "geotags": [],
        "regionId": 4,
        "regionIds": [
          4
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "rb-merz-interview-bremer-cdu-stellt-sich-gegen-zusammenarbeit-mit-afd-102",
        "externalId": "tagesschau_fm-story-id-060326ef-9139-46e5-b9a3-3a3eec6e310e-nimex",
        "title": "Merz rudert zurück: Bremer CDU stellt sich zuvor gegen Arbeit mit AfD",
        "date": "2023-07-24T09:36:00.000+02:00",
        "teaserImage": {
          "title": "Friedrich Merz mit Sonnenbrille",
          "copyright": "DPA | Frank Hoermann / Sven Simon",
          "alttext": "Friedrich Merz mit Sonnenbrille",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Bremen"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/rb-merz-interview-bremer-cdu-stellt-sich-gegen-zusammenarbeit-mit-afd-102~_view-hasChanged_lastKnown-5A3D2B237EA2CE685A4C0104325621DF.json",
        "content": [
          {
            "value": "<strong>Im Interview hatte sich CDU-Chef positiv zu einer Zusammenarbeit mit der AfD auf kommunaler Ebene geäußert – mittlerweile ist er zurückgerudert. Bremer Parteimitglieder hatten ihn zuvor kritisiert.</strong>",
            "type": "text"
          },
          {
            "value": "Nach heftiger Kritik für die Aussage des CDU-Chefs, dass ein gemeinsames Vorgehen zwischen AfD und CDU auf kommunaler Ebene möglich sei, ruft Friedrich Merz seine Aussage auf Twitter nun zurück. Er stellt klar: \"Die Beschlusslage der CDU gilt. Es wird auch auf kommunaler Ebene keine Zusammenarbeit der CDU mit der AfD geben.\"",
            "type": "text"
          },
          {
            "title": "Merz-Interview: Bremer CDU stellt sich gegen Zusammenarbeit mit AfD",
            "date": "2023-07-24T08:33:54.111+02:00",
            "teaserImage": {
              "title": "Friedrich Merz mit Sonnenbrille",
              "copyright": "DPA | Frank Hoermann / Sven Simon",
              "alttext": "Friedrich Merz mit Sonnenbrille",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMNQQ/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMOLk/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMPOY/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMQDM/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMQ7w/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMG0w/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMHqw/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMIg0/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMJbE/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMLgk/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tME_8/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMF58/16x9-1920.jpg"
              },
              "type": "image"
            },
            "tracking": [
              {
                "sid": "app.inland.regional.bremen.rb-merz-interview-bremer-cdu-stellt-sich-gegen-zusammenarbeit-mit-afd-100",
                "src": "rb",
                "ctp": "nicht-definiert",
                "pdt": "20230724T0940",
                "otp": "audio",
                "cid": "rb-merz-interview-bremer-cdu-stellt-sich-gegen-zusammenarbeit-mit-afd-100",
                "pti": "Merz-Interview_Bremer_CDU_stellt_sich_gegen_Zusammenarbeit_mit_AfD",
                "bcr": "nein",
                "type": "generic"
              }
            ],
            "stream": "https://rbprogressivedl-a.akamaihd.net/clips/124/124317/124317_00498932_audio_stereo.mp3",
            "type": "audio"
          },
          {
            "value": "<h2>Externe Inhalte von Twitter</h2>",
            "type": "headline"
          },
          {
            "value": "<a href=\"https://twitter.com/_FriedrichMerz/status/1683372734754050048\" type=\"extern\">Twitter öffnen</a>",
            "type": "text"
          },
          {
            "value": "Zuvor kam CDU-Chef Merz mit seinen Äußerungen über einen pragmatischeren Umgang mit der AfD gerade innerparteilich nicht gut an. Im ZDF-Sommerinterview hatte Merz eine Zusammenarbeit auf Bundes- oder Landesebene zwar weiter ausgeschlossen, aber auf kommunaler Ebene sehe das laut ihm anders aus. Da könne ein gemeinsames Vorgehen durchaus möglich sein.",
            "type": "text"
          },
          {
            "quotation": {
              "text": "Wir sind doch selbstverständlich verpflichtet, demokratische Wahlen zu akzeptieren und wenn noch mal ein Landrat oder ein Bürgermeister gewählt wird, der der AfD angehört, ist es selbstverständlich, dass man nach Wegen sucht, wie man in dieser Stadt weiter arbeiten kann.\n\n(Friedrich Merz, CDU-Bundesvorsitzender)"
            },
            "type": "quotation"
          },
          {
            "value": "<h2>Massive innerparteiliche Kritik für Aussage</h2>",
            "type": "headline"
          },
          {
            "value": "Für diese Aussage bekam Merz allerdings massive Kritk von zahlreichen CDU-Landesverbänden. Der Bremer CDU-Fraktionsvorsitzende Frank Imhoff lehnte eine Zusammenarbeit – egal auf welcher Ebene – auch nach der missverständlichen Aussage ab.",
            "type": "text"
          },
          {
            "quotation": {
              "text": "Für eine Partei, die rechtsextreme Züge hat, für eine Partei, die einen anderen Staat will, für eine Partei, die Hass und Hetze säht, haben wir nichts über. Da gibt es keine Zusammenarbeit.\n\n(Frank Imhoff, CDU-Fraktionsvorsitzender)"
            },
            "type": "quotation"
          },
          {
            "value": "Mit einer Partei, die außerhalb der demokratischen Ordnung liege, ist eine Kooperation keine Option und darf es niemals sein, so der Bremer Politiker. Auch CDU-Bürgerschaftsabgeordneter Jens Eckhoff äußerte sich zum ZDF-Sommerinterview. Bei Twitter kommentierte er den Tweet des Berliner regierenden Bürgermeisters Kai Wegner (CDU).",
            "type": "text"
          },
          {
            "value": "<h2>Externe Inhalte von Twitter</h2>",
            "type": "headline"
          },
          {
            "value": "<a href=\"https://twitter.com/kaiwegner/status/1683167477734203393\" type=\"extern\">Twitter öffnen</a>",
            "type": "text"
          },
          {
            "value": "Eckhoff machte deutlich, dass dies auch auf kommunale Ebene gelte und verwies auf den Beschluss des Bundesparteitages im Juni, wo Merz eine Zusammenarbeit mit der AfD abgelehnt hatte.",
            "type": "text"
          },
          {
            "value": "<h2>Röwekamp sieht AfD-Zusammenarbeit unvereinbar</h2>",
            "type": "headline"
          },
          {
            "value": "CDU-Bundestagsabgeordneter Thomas Röwekamp bezog ebenfalls Position beim Kurznachrichtendienst Twitter und bezeichnete die Zusammenarbeit mit der AfD als \"Unvereinbarkeit\", da diese die Demokratie \"von der Gemeinde bis zur EU infrage\" stelle.",
            "type": "text"
          },
          {
            "value": "<h2>Externe Inhalte von Twitter</h2>",
            "type": "headline"
          },
          {
            "value": "<a href=\"https://twitter.com/TR_Bremen/status/1683221031194853379\" type=\"extern\">Twitter öffnen</a>",
            "type": "text"
          },
          {
            "value": "<h2>Mehr zur Bremer CDU:</h2>",
            "type": "headline"
          },
          {
            "box": {
              "image": {
                "title": "Carsten Meyer-Heder, Landesvorsitzender der CDU Bremen, spricht beim Neujahrsempfang der Partei",
                "copyright": "DPA | Sina Schuldt",
                "alttext": "Carsten Meyer-Heder, Landesvorsitzender der CDU Bremen, spricht beim Neujahrsempfang der Partei",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/176b4af6-c1bd-4c25-8a6c-ebe4c959c2f6/AAABiYbX5Ec/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.butenunbinnen.de/nachrichten/bremen-cdu-meyer-heder-linnemann-generalsekretaer-100.html\" type=\"extern\">mehr</a>",
              "title": "Bremer CDU-Chef Meyer-Heder unterstützt neuen CDU-Generalsekretär"
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "title": "Die neu gestartete Bremer Schuldenuhr an der buten Fassade vom FDP-Haus in Bremen.",
                "copyright": "Radio Bremen",
                "alttext": "Die neu gestartete Bremer Schuldenuhr an der buten Fassade vom FDP-Haus in Bremen.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/96f8863c-9dea-4285-ac8b-c933726f522e/AAABiYbX5To/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.butenunbinnen.de/nachrichten/bremen-cdu-klage-gegen-nachtragshaushalt-100.html\" type=\"extern\">mehr</a>",
              "title": "CDU zieht wegen Bremer Nachtragshaushalt vor Staatsgerichtshof"
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "title": "Eine Deutschland-Fahne, die an einem Schiff hängt.",
                "copyright": "Radio Bremen",
                "alttext": "Eine Deutschland-Fahne, die an einem Schiff hängt.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/41ff91e3-4a16-402f-8c57-66b3e9cc1f80/AAABiYbX5kg/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.butenunbinnen.de/nachrichten/bremerhaven-koalitionsvertrag-unterzeichnet-100.html\" type=\"extern\">mehr</a>",
              "title": "SPD, CDU und FDP unterzeichnen Koalitionsvertrag in Bremerhaven"
            },
            "type": "box"
          },
          {
            "value": "<strong>Dieses Thema im Programm:</strong><br />Bremen Eins, Nachrichten, 24. Juli 2023, 8 Uhr",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.bremen.rb-merz-interview-bremer-cdu-stellt-sich-gegen-zusammenarbeit-mit-afd-102",
            "src": "rb",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1220",
            "otp": "meldung",
            "cid": "rb-merz-interview-bremer-cdu-stellt-sich-gegen-zusammenarbeit-mit-afd-102",
            "pti": "Merz_rudert_zurueck_Bremer_CDU_stellt_sich_zuvor_gegen_Arbeit_mit_AfD",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Bremen",
        "firstSentence": "Im Interview hatte sich CDU-Chef positiv zu einer Zusammenarbeit mit der AfD auf kommunaler Ebene geäußert – mittlerweile ist er zurückgerudert.",
        "images": [
          {
            "title": "Friedrich Merz mit Sonnenbrille",
            "copyright": "DPA | Frank Hoermann / Sven Simon",
            "alttext": "Friedrich Merz mit Sonnenbrille",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/988c05d3-c987-4a0f-9e81-337bb6af2832/AAABiYbX4QI/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo RB",
          "copyright": "tagesschau, ARD, RB",
          "alttext": "Logo RB",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/85481f96-f50f-4436-ab07-b1c85b8425be/AAABh5NOhYg/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/bremen/rb-merz-interview-bremer-cdu-stellt-sich-gegen-zusammenarbeit-mit-afd-102.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/bremen/rb-merz-interview-bremer-cdu-stellt-sich-gegen-zusammenarbeit-mit-afd-102.html",
        "shareURL": "https://www.butenunbinnen.de/nachrichten/afd-merz-bremen-cdu-100.html",
        "geotags": [],
        "regionId": 5,
        "regionIds": [
          5
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "ndr-studie-hamburgs-studierende-zufrieden-mit-mensa-angeboten-100",
        "externalId": "tagesschau_fm-story-id-45da472e-70f7-4e14-b140-88eacb79f84c",
        "title": "Studie: Hamburgs Studierende zufrieden mit Mensa-Angeboten",
        "date": "2023-07-24T12:04:00.000+02:00",
        "teaserImage": {
          "title": "Eine Kantinen-Mitarbeiterin steht an einem Salatbufett.",
          "copyright": "picture alliance/dpa | Christian Charisius",
          "alttext": "Eine Kantinen-Mitarbeiterin steht an einem Salatbufett.",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Hamburg"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/ndr-studie-hamburgs-studierende-zufrieden-mit-mensa-angeboten-100~_view-hasChanged_lastKnown-DF5A88E3CDC3B58D2B3D661F1C8A1D74.json",
        "content": [
          {
            "value": "<strong><strong>Am Essen gibt es nicht viel zu mäkeln, der Service ist gut und das Angebot auch - so könnte man das Ergebnis der Zufriedenheitsstudie des Hamburger Studierendenwerks zusammenfassen. </strong></strong>",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Eine Kantinen-Mitarbeiterin steht an einem Salatbufett.",
                "copyright": "picture alliance/dpa | Christian Charisius",
                "alttext": "Eine Kantinen-Mitarbeiterin steht an einem Salatbufett.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "Knapp 9.000 Studentinnen und Studenten aus Hamburg wurden im Frühjahr für die Zufriedenheitsstudie befragt. Der Großteil studiert an der Universität Hamburg, gefolgt von der HAW Hamburg, der Technischen Universität, der Hafencity-Universität und der Buccerius Law School.",
            "type": "text"
          },
          {
            "value": "<h2>Mensa-Essen in Hamburg bekommt Note 2,4</h2>",
            "type": "headline"
          },
          {
            "value": "Abgefragt wurden die Qualität in den Bereichen Angebot, Service, Information und Räumlichkeiten. Ein Ergebnis der Studie: nur drei Prozent der befragten Studierenden gehen nie in die Mensa oder ins Café, 40 Prozent kommen ein- bis zweimal die Woche und fast 60 Prozent sind Stammgäste. Insgesamt gab es für den Geschmack und die Zusammenstellung der Speisen, für die Frische und das vegetarische Angebot die Note 2,4.",
            "type": "text"
          },
          {
            "value": "<h2>Angebot bei veganen Angeboten ausbaufähig</h2>",
            "type": "headline"
          },
          {
            "value": "Luft nach oben ist der Umfrage zufolge noch bei den veganen Angeboten. Alle Ergebnisse der Befragung hat das Sudierendenwerk online veröffentlicht. Wissenschaftssenatorin Katharina Fegebank (Grüne) freut das Ergebnis. Es zeige, welch gute Arbeit die Mitarbeiterinnen und Mitarbeiter des Studierendenwerks leisten. \"Sie sind die Köpfe hinter den Rezepten, dem Zubereiten der Speisen und dem so hervorragend bewerteten Service vor Ort\", sagt auch Sven Lorenz, Geschäftsführer des Studierendenwerks.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "Ein Baukran schwenkt auf dem Uni-Campus über dem Philosophenturm.",
                "copyright": "dpa",
                "alttext": "Ein Baukran schwenkt auf dem Uni-Campus über dem Philosophenturm.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/be3ccbae-a1a6-4795-b8f2-b33d2c64bcda/AAABiYdfk60/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/hamburg/Philosophenturm-wird-zum-Wintersemester-fertig,philosophenturm114.html\" type=\"extern\">mehr</a>",
              "title": "Philosophenturm wird zum Wintersemester fertig"
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "title": "Studenten sitzen in einem Hörsaal der Universität Hamburg.",
                "copyright": "picture alliance / dpa",
                "alttext": "Studenten sitzen in einem Hörsaal der Universität Hamburg.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/5cfdf257-64e2-4539-9933-f36815bd8f73/AAABiYdflZU/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/hamburg/Fuer-mehr-Lehrer-Hamburg-startet-kleine-Revolution-an-der-Uni,schule3312.html\" type=\"extern\">mehr</a>",
              "title": "Für mehr Lehrer: Hamburg startet \"kleine Revolution\" an der Uni"
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "title": "Schattenriss einer Person mit Computercodes",
                "copyright": "Fotolia.com",
                "alttext": "Schattenriss einer Person mit Computercodes",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/08556866-a2ef-4179-8241-6252d1133768/AAABiYdfmVg/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/hamburg/Hamburg-Studierende-kritisieren-HAW-wegen-Cyberangriff,hacker446.html\" type=\"extern\">mehr</a>",
              "title": "Hamburg: Studierende kritisieren HAW wegen Cyberangriff"
            },
            "type": "box"
          },
          {
            "value": "<strong>Dieses Thema im Programm:</strong><br />NDR 90,3 | NDR 90,3 Aktuell | 24.07.2023 | 12:00 Uhr",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.hamburg.ndr-studie-hamburgs-studierende-zufrieden-mit-mensa-angeboten-100",
            "src": "ndr",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1208",
            "otp": "meldung",
            "cid": "ndr-studie-hamburgs-studierende-zufrieden-mit-mensa-angeboten-100",
            "pti": "Studie_Hamburgs_Studierende_zufrieden_mit_Mensa-Angeboten",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Hamburg",
        "firstSentence": "Nur drei Prozent nutzen keine Essensangebote der Hochschulen.",
        "images": [
          {
            "title": "Eine Kantinen-Mitarbeiterin steht an einem Salatbufett.",
            "copyright": "picture alliance/dpa | Christian Charisius",
            "alttext": "Eine Kantinen-Mitarbeiterin steht an einem Salatbufett.",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/c8eb9fc7-6f16-458d-bba2-69b8b38cd53a/AAABiYdfjf4/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo NDR",
          "copyright": "tagesschau, ARD, NDR",
          "alttext": "Logo NDR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/e33737ad-2315-4104-91e5-c515497253df/AAABh5NOgjc/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/hamburg/ndr-studie-hamburgs-studierende-zufrieden-mit-mensa-angeboten-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/hamburg/ndr-studie-hamburgs-studierende-zufrieden-mit-mensa-angeboten-100.html",
        "shareURL": "https://www.ndr.de/nachrichten/hamburg/Studie-Hamburgs-Studierende-zufrieden-mit-Mensa-Angeboten,mensa174.html",
        "geotags": [],
        "regionId": 6,
        "regionIds": [
          6
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "hr-eintracht-blog-aus-dem-trainingslager-1-wie-aus-einem-sommerflirt-eine-feste-beziehung-wurde-102",
        "externalId": "tagesschau_fm-story-id-e5cca7ce-5426-4f30-8139-86e1bbbbea00",
        "title": "Eintracht-Blog aus dem Trainingslager (1): Wie aus einem Sommerflirt eine feste Beziehung wurde",
        "date": "2023-07-24T11:59:51.734+02:00",
        "teaserImage": {
          "title": "Die Eintracht ist in Österreich angekommen",
          "copyright": "hr",
          "alttext": "Eintracht-Bus vor Hotel",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Hessen"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/hr-eintracht-blog-aus-dem-trainingslager-1-wie-aus-einem-sommerflirt-eine-feste-beziehung-wurde-102~_view-hasChanged_lastKnown-AB6182F4A698F253B9247D821B7E623D.json",
        "content": [
          {
            "value": "<strong>Eintracht Frankfurt ist mittlerweile ein Dauergast in Windischgarsten: Hier herrscht ein ganz besonderes, fast schon heimatliches Gefühl. Die Profis schwitzen – und zeigen sich nahbar. Unser Blog aus dem Trainingslager.</strong>",
            "type": "text"
          },
          {
            "value": "<em>Von Philipp Hofmeister</em>",
            "type": "text"
          },
          {
            "value": "Griaß eich! Da samma wieda! Windischgarsten und die Eintracht. Zum insgesamt fünften Mal schon. Malerisch eingerahmt vom imposanten Nationalpark Kalkalpen, ist aus einem flüchtigen Sommerflirt eine gewachsene Beziehung entstanden. Hierher zu kommen, ist für Reporter wie Fans inzwischen gleichermaßen eine gefühlte Rückkehr in ein zweites Zuhause.",
            "type": "text"
          },
          {
            "video": {
              "sophoraId": "hr-frankfurter-trainingslager-start-in-oesterreich-102",
              "externalId": "tagesschau_fm-videoobject-id-920a2854-4f09-40da-a0dd-179c07999fa3",
              "title": "Frankfurter Trainingslager-Start in Österreich",
              "date": "2023-07-24T11:12:25.373+02:00",
              "teaserImage": {
                "copyright": "hr",
                "alttext": "hr-Redakteur Philipp Hofmeister",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/d18d00e9-592b-4e39-98b6-baa3eadf57bd/AAABiYdaD9s/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "tags": [],
              "updateCheckUrl": "https://www.tagesschau.de/api2u/hr-frankfurter-trainingslager-start-in-oesterreich-102~_view-hasChanged_lastKnown-FC35527E3E41727F5FFA8EBD2243909B.json",
              "tracking": [
                {
                  "sid": "app.inland.regional.hessen.hr-frankfurter-trainingslager-start-in-oesterreich-102",
                  "src": "hr",
                  "ctp": "SEGMENT",
                  "pdt": "20230724T1202",
                  "otp": "video",
                  "cid": "hr-frankfurter-trainingslager-start-in-oesterreich-102",
                  "pti": "Frankfurter_Trainingslager-Start_in_Oesterreich",
                  "bcr": "nein",
                  "type": "generic"
                },
                {
                  "assetid": "hr-frankfurter-trainingslager-start-in-oesterreich-102",
                  "program": "Tagesschau",
                  "title": "Frankfurter_Trainingslager-Start_in_Oesterreich",
                  "length": "49",
                  "c2": "p2,N",
                  "c5": "p5,https://www.tagesschau.de/inland/regional/hessen/hr-frankfurter-trainingslager-start-in-oesterreich-102.html",
                  "c7": "p7,hr-frankfurter-trainingslager-start-in-oesterreich-102",
                  "c8": "p8,49",
                  "c9": "p9,Tagesschau_Frankfurter_Trainingslager-Start_in_Oesterreich_24.07.2023_1202",
                  "c10": "p10,Das_Erste",
                  "c12": "p12,content",
                  "c16": "p16,ARD_Information/ARD_Livestream",
                  "c18": "p18,N",
                  "type_nielsen": "content",
                  "type": "nielsen"
                }
              ],
              "streams": {
                "adaptivestreaming": "https://hr-vh.akamaihd.net/i/video/as/heimspiel/2023_07/Logo_hs_16zu9_post_hessenschauDE_16zu9_Abbinder_klassisch_Web_ohne_Endcards_230724110125_sf23xhsspeintrachtclip_transfer_44904377_,480x270-50p-700kbit,512x288-25p-500kbit,640x360-50p-1200kbit,960x540-50p-1600kbit,1280x720-50p-3200kbit,1920x1080-50p-5000kbit,.mp4.csmil/index-f1-v1-a1.m3u8"
              },
              "alttext": "hr-Redakteur Philipp Hofmeister",
              "copyright": "tagesschau",
              "type": "video"
            },
            "type": "video"
          },
          {
            "value": "Als die Eintracht hier erstmals zu Gast war, war der letzte Bundesliga-Aufstieg gerade erst wenige Wochen her. Olivier Occean und Stefano Celozzi waren die Königstransfers des Sommers, Prince William heiratete Kate Middleton – und der Eintracht-Tross wohnte im Sporthotel Dilly.",
            "type": "text"
          },
          {
            "value": "<h2>Das Hotel und die Eintracht: Nicht wiederzuerkennen</h2>",
            "type": "headline"
          },
          {
            "value": "Heute hat sich dieses Sporthotel in ein imposantes Nationalpark-Resort verwandelt, und die Analogie zur Entwicklung des Frankfurter Fußballklubs vom Fahrstuhlklub zum Europapokaldauerabonnenten liegt auf der Hand: beide sind im Vergleich zum Sommer 2012 nicht mehr wiederzuerkennen.",
            "type": "text"
          },
          {
            "value": "Wie wohltuend, dass es dennoch ein paar Konstanten gibt, die einen durch all die Jahre begleiten. Die endlosen Dauerbaustellen auf der A3 zum Beispiel, die panischen Menschenschlangen kurz vor der letzten Vignetten-Verkaufsstelle am Grenzübergang, aber vor allem: die unzähligen bekannten Gesichter der angereisten Eintracht-Fans.",
            "type": "text"
          },
          {
            "value": "<h2>Immer dabei, auch in Österreich: Die Fans</h2>",
            "type": "headline"
          },
          {
            "value": "Viele von ihnen planen ihren Sommerurlaub um ihren Klub des Herzens herum, viele von ihnen wurden mittelschwer aufgeschreckt von der Nachricht, dass in diesem Jahr die Mehrzahl der Trainingseinheiten hinter verschlossenen Türen stattfinden sollte.",
            "type": "text"
          },
          {
            "value": "Inzwischen gibt’s Entwarnung von der Eintracht: mindestens eine Einheit täglich hier in Windischgarsten ist offen für alle. Wichtig und richtig.",
            "type": "text"
          },
          {
            "value": "<h2>Selfies mit  Trapp  Skhiri und Co.</h2>",
            "type": "headline"
          },
          {
            "value": "Genau wie die Nahbarkeit, die viele Eintracht-Stars gestern nach der ersten Einheit bei schweißtreibenden Temperaturen zeigten: Selfies und ein paar nette Worte mit Kevin Trapp, Ellyes Skhiri, Jessic Ngankam und Capitano Seppl Rode – kein Problem.",
            "type": "text"
          },
          {
            "value": "Vielleicht liegt's ja an diesem ganz besonderen, fast schon heimatlichen Gefühl. \"Do bin i Herr, do kea i hin, i bin dei Apfel, du mei Stamm\", singt der große Reinhard Fendrich in seiner wunderbaren Liebeserklärung \"I am from Austria\".",
            "type": "text"
          },
          {
            "value": "Windischgarsten ist zwar nur ein kleiner Teil von Österreich – aber die Eintracht ist mittlerweile ein ziemlich großer Teil von Windischgarsten geworden.",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.hessen.hr-eintracht-blog-aus-dem-trainingslager-1-wie-aus-einem-sommerflirt-eine-feste-beziehung-wurde-102",
            "src": "hr",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1202",
            "otp": "meldung",
            "cid": "hr-eintracht-blog-aus-dem-trainingslager-1-wie-aus-einem-sommerflirt-eine-feste-beziehung-wurde-102",
            "pti": "Eintracht-Blog_aus_dem_Trainingslager_1_Wie_aus_einem_Sommerflirt_eine_feste_Beziehung_wurde",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Hessen",
        "firstSentence": "Eintracht Frankfurt ist mittlerweile ein Dauergast in Windischgarsten: Hier herrscht ein ganz besonderes, fast schon heimatliches Gefühl.",
        "images": [
          {
            "title": "Die Eintracht ist in Österreich angekommen",
            "copyright": "hr",
            "alttext": "Eintracht-Bus vor Hotel",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/bf203fb3-fe4a-49c9-b6f8-3ebd778bac5e/AAABiYdaDVI/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo HR",
          "copyright": "tagesschau, ARD, HR",
          "alttext": "Logo HR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/10b182d2-ee50-42e2-9d87-309731667be5/AAABh5NOemw/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/hessen/hr-eintracht-blog-aus-dem-trainingslager-1-wie-aus-einem-sommerflirt-eine-feste-beziehung-wurde-102.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/hessen/hr-eintracht-blog-aus-dem-trainingslager-1-wie-aus-einem-sommerflirt-eine-feste-beziehung-wurde-102.html",
        "shareURL": "https://www.hessenschau.de/sport/fussball/eintracht-frankfurt/eintracht-blog-aus-dem-trainingslager-1-wie-aus-einem-sommerflirt-eine-feste-beziehung-wurde-v1,eintracht-blog-eins-102.html",
        "geotags": [],
        "regionId": 7,
        "regionIds": [
          7
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "ndr-zu-wenig-wasser-niedrige-pegelstaende-im-land-100",
        "externalId": "tagesschau_fm-story-id-93517260-709b-44ce-88a4-4a9e5703c28e",
        "title": "Zu wenig Wasser: Niedrige Pegelstände im Land",
        "date": "2023-07-24T10:57:00.000+02:00",
        "teaserImage": {
          "title": "Niedrigwasser im Schweriner See",
          "copyright": "NDR",
          "alttext": "Niedrigwasser im Schweriner See",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Mecklenburg-Vorpommern"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/ndr-zu-wenig-wasser-niedrige-pegelstaende-im-land-100~_view-hasChanged_lastKnown-501A924B2136E23DAFE04DD7C99E8BF7.json",
        "content": [
          {
            "value": "<strong><strong>Die Trockenheit der vergangenen Wochen und Monate macht sich in Mecklenburg-Vorpommern zunehmend bemerkbar. Die Pegelstände sinken. Besserung ist erst mal nicht in Sicht. </strong></strong>",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Niedrigwasser im Schweriner See",
                "copyright": "NDR",
                "alttext": "Niedrigwasser im Schweriner See",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "Zahlreiche Flüsse und Gewässer im Land haben zu wenig Wasser. Laut Landesamt für Umwelt, Naturschutz und Geologie (LUNG) war es von April bis Juni deutlich trockener als üblich. Aktuell würden fast 90 Prozent der vom Land betriebenen Pegelmessstellen mittleres Niedrigwasser bzw. Niedrigwasser anzeigen - so zum Beispiel bei der Barthe in Redebas, am Oberlauf der Trebel oder am Oberlauf der Peene.",
            "type": "text"
          },
          {
            "value": "<h2>Experten: Meteorologische Dürre</h2>",
            "type": "headline"
          },
          {
            "value": "Die Warnow - als einer der größten Flüsse in Mecklenburg-Vorpommern - ist aktuell am stärksten von Niedrigwasser betroffen. Hier fließen an der Messstelle in Bützow pro Sekunde knapp 2.000 Liter Wasser durch. Das ist ein Viertel der üblichen Menge. Nach Angaben des LUNG wurden außerdem die Speicherziele in den Mecklenbuger Oberseen und dem Schweriner See für Juli nicht erreicht. Insgesamt könne die Phase von Ende April als meteorologische Dürre eingeordnet werden, so das LUNG.",
            "type": "text"
          },
          {
            "value": "<h2>Elbe: Fluss wird verstärkt untersucht</h2>",
            "type": "headline"
          },
          {
            "value": "Auch die Elbe ist betroffen. Wegen teils extrem niedriger Wasserstände aufgrund der anhaltenden Trockenheit beginnen Experten in dieser Woche mit einer zusätzlichen Gewässerüberwachung. Mit einem sogenannten Sondermessprogramm neben den laufenden Routineuntersuchungen sollen die Auswirkungen des Niedrigwassers auf die Gewässergüte der Elbe untersucht werden.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "xxx",
                "copyright": "picture alliance / CHROMORANGE | Viennaslide",
                "alttext": "Blick von schräg oben auf einen opulent bepflanzten Dachgarten.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/227051c1-4735-4fbb-9a84-64dea8aee12e/AAABiYdiqZ8/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/ndrfragt/Umfrage-Wie-sollen-wir-uns-dem-Klimawandel-anpassen,umfrage1368.html\" type=\"extern\">mehr</a>",
              "title": "Umfrage: Klimawandel - wie anpassen?"
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "title": "Risse durchziehen den Boden auf einem Getreidefeld in der Region Hannover. ",
                "copyright": "picture alliance/dpa/Mia Bucher",
                "alttext": "Risse durchziehen den Boden auf einem Getreidefeld in der Region Hannover. ",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/b32e0361-4d4c-43bf-9df8-f322019fee23/AAABiYcmbYg/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/mecklenburg-vorpommern/Trockenheit-in-MV-Feldern-Waeldern-und-Gewaessern-fehlt-Wasser-,trockenheit546.html\" type=\"extern\">mehr</a>",
              "title": "Trockenheit in MV: Feldern, Wäldern und Gewässern fehlt Wasser "
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "title": "Ein Feuerwehrmann löscht von Rauchschwaden umgebene Glutnester eines Waldbrandes mit dem Wasserschlauch.",
                "copyright": "NDR",
                "alttext": "Ein Feuerwehrmann löscht von Rauchschwaden umgebene Glutnester eines Waldbrandes mit dem Wasserschlauch.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/c94b5727-6a8d-4c3d-9268-22645c60870b/AAABiYcme8U/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/mecklenburg-vorpommern/Waldbrandgefahr-MV-Bereits-32-Braende-registriert,waldbrandgefahr296.html\" type=\"extern\">mehr</a>",
              "title": "Trockenheit in MV: Bereits 32 Waldbrände registriert"
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "title": "Ein Storch in Harsefeld mit fünf Jungvögeln. ",
                "copyright": "Landkreis Stade/Kathrin Warnat",
                "alttext": "Ein Storch in Harsefeld mit fünf Jungvögeln. ",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/f64b068d-cd01-4893-b7f2-7ab9eebfb33c/AAABiYcmfbU/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/mecklenburg-vorpommern/Trockenheit-Sorge-um-Storchennachwuchs-in-MV,storch1588.html\" type=\"extern\">mehr</a>",
              "title": "Trockenheit: Sorge um Storchennachwuchs in MV"
            },
            "type": "box"
          },
          {
            "value": "<strong>Dieses Thema im Programm:</strong><br />NDR 1 Radio MV | Nachrichten aus Mecklenburg-Vorpommern | 24.07.2023 | 08:00 Uhr",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.mecklenburgvorpommern.ndr-zu-wenig-wasser-niedrige-pegelstaende-im-land-100",
            "src": "ndr",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1212",
            "otp": "meldung",
            "cid": "ndr-zu-wenig-wasser-niedrige-pegelstaende-im-land-100",
            "pti": "Zu_wenig_Wasser_Niedrige_Pegelstaende_im_Land",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Mecklenburg-Vorpommern",
        "firstSentence": "Es ist zu trocken in Mecklenburg-Vorpommern.",
        "images": [
          {
            "title": "Niedrigwasser im Schweriner See",
            "copyright": "NDR",
            "alttext": "Niedrigwasser im Schweriner See",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/13dbf5d7-bc78-4896-821d-f525710e1b17/AAABiYcmalQ/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo NDR",
          "copyright": "tagesschau, ARD, NDR",
          "alttext": "Logo NDR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/e33737ad-2315-4104-91e5-c515497253df/AAABh5NOgjc/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/mecklenburgvorpommern/ndr-zu-wenig-wasser-niedrige-pegelstaende-im-land-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/mecklenburgvorpommern/ndr-zu-wenig-wasser-niedrige-pegelstaende-im-land-100.html",
        "shareURL": "https://www.ndr.de/nachrichten/mecklenburg-vorpommern/Zu-wenig-Wasser-Niedrige-Pegelstaende-im-Land,niedrigwasser246.html",
        "geotags": [],
        "regionId": 8,
        "regionIds": [
          8
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "ndr-waldbraende-in-griechenland-tui-fliegt-vorerst-nicht-nach-rhodos-100",
        "externalId": "tagesschau_fm-story-id-bed55d09-24de-4770-b3c1-b66a1a2b3a6a",
        "title": "Brände in Griechenland: TUI fliegt Gäste vorerst nicht nach Rhodos",
        "date": "2023-07-24T12:13:00.000+02:00",
        "teaserImage": {
          "title": "Brand in Aghios Isidoros auf Rhodos.",
          "copyright": "picture-alliance/ dpa | epa Str",
          "alttext": "Brand in Aghios Isidoros auf Rhodos.",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Niedersachsen"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/ndr-waldbraende-in-griechenland-tui-fliegt-vorerst-nicht-nach-rhodos-100~_view-hasChanged_lastKnown-F65BF4762CBF387917A917E630F06563.json",
        "content": [
          {
            "value": "<strong><strong>Wegen der massiven Waldbrände will TUI zunächst keine Touristen mehr auf die griechische Ferieninsel Rhodos bringen. Betroffenen bietet der Reisekonzern aus Hannover kostenlose Stornierungen an.</strong></strong>",
            "type": "text"
          },
          {
            "video": {
              "sophoraId": "ndr-ausgeflogene-rhodos-urlauber-in-hannover-angekommen-100",
              "externalId": "tagesschau_fm-videoobject-id-b36d8a27-dce7-4ff3-86fd-f17d6b3d390d",
              "title": "Ausgeflogene Rhodos-Urlauber in Hannover angekommen",
              "date": "2023-07-24T12:14:59.637+02:00",
              "teaserImage": {
                "title": "Ein TUI-Flugzeug auf dem Flughafen Hannover-Langenhagen",
                "copyright": "NEWS5",
                "alttext": "Ein TUI-Flugzeug auf dem Flughafen Hannover-Langenhagen",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/7d58f21a-0dc3-4d92-a749-12395e9f21ca/AAABiYdlxDk/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "tags": [],
              "updateCheckUrl": "https://www.tagesschau.de/api2u/ndr-ausgeflogene-rhodos-urlauber-in-hannover-angekommen-100~_view-hasChanged_lastKnown-72F58C0AD6675568B7E549BC10C77398.json",
              "tracking": [
                {
                  "sid": "app.inland.regional.niedersachsen.ndr-ausgeflogene-rhodos-urlauber-in-hannover-angekommen-100",
                  "src": "ndr",
                  "ctp": "SEGMENT",
                  "pdt": "20230724T1215",
                  "otp": "video",
                  "cid": "ndr-ausgeflogene-rhodos-urlauber-in-hannover-angekommen-100",
                  "pti": "Ausgeflogene_Rhodos-Urlauber_in_Hannover_angekommen",
                  "bcr": "nein",
                  "type": "generic"
                },
                {
                  "assetid": "ndr-ausgeflogene-rhodos-urlauber-in-hannover-angekommen-100",
                  "program": "Tagesschau",
                  "title": "Ausgeflogene_Rhodos-Urlauber_in_Hannover_angekommen",
                  "c2": "p2,N",
                  "c5": "p5,https://www.tagesschau.de/inland/regional/niedersachsen/ndr-ausgeflogene-rhodos-urlauber-in-hannover-angekommen-100.html",
                  "c7": "p7,ndr-ausgeflogene-rhodos-urlauber-in-hannover-angekommen-100",
                  "c9": "p9,Tagesschau_Ausgeflogene_Rhodos-Urlauber_in_Hannover_angekommen_24.07.2023_1215",
                  "c10": "p10,Das_Erste",
                  "c12": "p12,content",
                  "c16": "p16,ARD_Information/ARD_Livestream",
                  "c18": "p18,N",
                  "type_nielsen": "content",
                  "type": "nielsen"
                }
              ],
              "streams": {
                "h264xl": "https://mediandr-a.akamaihd.net/progressive/2023/0724/TV-20230724-1149-2700.hd.mp4",
                "h264m": "https://mediandr-a.akamaihd.net/progressive/2023/0724/TV-20230724-1149-2700.ln.mp4",
                "h264s": "https://mediandr-a.akamaihd.net/progressive/2023/0724/TV-20230724-1149-2700.mn.mp4",
                "adaptivestreaming": "https://adaptive.ndr.de/i/ndr/2023/0724/TV-20230724-1149-2700.,hq,hd,ln,mn,ao,.mp4.csmil/master.m3u8"
              },
              "alttext": "Ein TUI-Flugzeug auf dem Flughafen Hannover-Langenhagen",
              "copyright": "tagesschau",
              "type": "video"
            },
            "type": "video"
          },
          {
            "value": "Die Flugverbindungen blieben jedoch bestehen, um Gäste von Griechenland zurück nach Deutschland zu fliegen, sagte TUI-Group-Sprecher Aage Dünhaupt am Sonntag. \"Wir bieten allen Gästen an, die bis kommenden Freitag nach Rhodos gebucht sind, kostenfrei auf ein anderes Urlaubsziel umzubuchen oder zu stornieren.\"",
            "type": "text"
          },
          {
            "value": "<h2>Inselbewohner helfen Touristen</h2>",
            "type": "headline"
          },
          {
            "value": "Seit Samstag werden auf Rhodos wegen unkontrollierter Waldbrände Dörfer und Hotels evakuiert. Der TUI-Konzern habe insgesamt derzeit etwa 39.000 Gäste aus verschiedenen Ländern auf Rhodos, sagte Dünhaupt. Rund 7.800 von ihnen seien aus den betroffenen Gebieten geholt worden. Insgesamt halten sich rund 20.000 deutsche Urlauber von Reiseveranstaltern auf der Insel auf, wie eine Sprecherin des Deutschen Reiseverbands (DRV) sagte. Viele Inselbewohner hätten Touristen in ihren privaten Unterkünften aufgenommen, wie die griechischen Behörden bestätigten.",
            "type": "text"
          },
          {
            "value": "Die Brände toben unterdessen weiter. Auch für Montag ist den örtlichen Behörden zufolge keine Entspannung in Sicht - zumal es weiterhin sehr windig sei.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "Aage Dünhaupt (TUI) im Interview zu der Lage in Rhodos. Hier sind Einheimische und Urlauber von Waldbränden betroffen.",
                "copyright": "ARD",
                "alttext": "Aage Dünhaupt (TUI) im Interview zu der Lage in Rhodos. Hier sind Einheimische und Urlauber von Waldbränden betroffen.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/65616481-cb3d-4a3c-b714-05bb9e0379a1/AAABiYPV7R8/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/niedersachsen/hannover_weser-leinegebiet/TUI-zu-Rhodos-Wollen-Urlaubern-auch-Weiterfluege-anbieten,rhodos122.html\" type=\"extern\">mehr</a>",
              "title": "TUI zu Rhodos: \"Wollen Urlaubern auch Weiterflüge anbieten\""
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "title": "Ein Mann trägt ein Kind, als sie ein Waldbrandgebiet auf Rhodos (Griechenland) verlassen.",
                "copyright": "InTime News/AP/dpa",
                "alttext": "Ein Mann trägt ein Kind, als sie ein Waldbrandgebiet auf Rhodos (Griechenland) verlassen.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/6577747c-ffb6-4fe4-81b4-0b1f00c0ec48/AAABiYSHW3E/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/info/Waldbraende-in-Rhodos-ausser-Kontrolle-Tausende-Touristen-evakuiert,audio1429328.html\" type=\"extern\">mehr</a>",
              "title": "Waldbrände in Rhodos außer Kontrolle: Tausende Touristen evakuiert"
            },
            "type": "box"
          },
          {
            "value": "<strong>Dieses Thema im Programm:</strong><br />NDR 1 Niedersachsen | Regional Hannover | 23.07.2023 | 18:00 Uhr",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.niedersachsen.ndr-waldbraende-in-griechenland-tui-fliegt-vorerst-nicht-nach-rhodos-100",
            "src": "ndr",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1215",
            "otp": "meldung",
            "cid": "ndr-waldbraende-in-griechenland-tui-fliegt-vorerst-nicht-nach-rhodos-100",
            "pti": "Braende_in_Griechenland_TUI_fliegt_Gaeste_vorerst_nicht_nach_Rhodos",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Niedersachsen",
        "firstSentence": "Die Verbindungen blieben aber bestehen, um Gäste zurück nach Deutschland zu bringen.",
        "images": [
          {
            "title": "Brand in Aghios Isidoros auf Rhodos.",
            "copyright": "picture-alliance/ dpa | epa Str",
            "alttext": "Brand in Aghios Isidoros auf Rhodos.",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/295ad260-e948-4c11-a75b-11b2482080bd/AAABiYPV6hs/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo NDR",
          "copyright": "tagesschau, ARD, NDR",
          "alttext": "Logo NDR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/e33737ad-2315-4104-91e5-c515497253df/AAABh5NOgjc/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/niedersachsen/ndr-waldbraende-in-griechenland-tui-fliegt-vorerst-nicht-nach-rhodos-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/niedersachsen/ndr-waldbraende-in-griechenland-tui-fliegt-vorerst-nicht-nach-rhodos-100.html",
        "shareURL": "https://www.ndr.de/nachrichten/niedersachsen/hannover_weser-leinegebiet/Braende-in-Griechenland-TUI-fliegt-Gaeste-vorerst-nicht-nach-Rhodos,tui676.html",
        "geotags": [],
        "regionId": 9,
        "regionIds": [
          9
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "wdr-kritik-aus-nrw-cdu-chef-merz-irritiert-mit-aeusserungen-ueber-afd-100",
        "externalId": "tagesschau_fm-story-WDR-c7eddfec-0819-4b2f-8429-8189154480b2",
        "title": "Kritik aus NRW: CDU-Chef Merz irritiert mit Äußerungen über AfD",
        "date": "2023-07-24T11:03:00.000+02:00",
        "teaserImage": {
          "title": "Friedrich Merz",
          "copyright": "Getty Images/Johannes Simon",
          "alttext": "Friedrich Merz, Vorsitzender der CDU, auf dem Ludwig-Erhard-Gipfel in Gmund.",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Nordrhein-Westfalen"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/wdr-kritik-aus-nrw-cdu-chef-merz-irritiert-mit-aeusserungen-ueber-afd-100~_view-hasChanged_lastKnown-45A68EA1C19B139E30B50CBAAD94F8B8.json",
        "content": [
          {
            "value": "<strong>Nachdem CDU-Chef Friedrich Merz im ZDF-Sommerinterview eine Zusammenarbeit mit der AfD auf kommunaler Ebene nicht kategorisch ausschloss, hagelt es Kritik, auch aus NRW. Nun rudert Merz zurück.</strong>",
            "type": "text"
          },
          {
            "value": "Die Empörungswelle war groß - zu groß? Kurz nachdem sich CDU-Chef Friedrich Merz Sonntagabend im ZDF-Sommerinterview zu einer möglichen Zusammenarbeit mit der AfD auf kommunaler Ebene äußerte, hagelte es Kritik, auch und besonders aus den eigenen Reihen.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Friedrich Merz",
                "copyright": "Getty Images/Johannes Simon",
                "alttext": "Friedrich Merz, Vorsitzender der CDU, auf dem Ludwig-Erhard-Gipfel in Gmund.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "So stellte die Kölner CDU-Bundestagsabgeordnete Serap Güler noch am Abend klar: \"Keine Zusammenarbeit mit der AfD heißt: keine Zusammenarbeit mit der AfD. Auf keiner Ebene. Ganz einfach. Jetzt nicht und auch in Zukunft nicht. Das ist Beschlusslage der CDU Deutschlands.\"",
            "type": "text"
          },
          {
            "value": "<h2>Innenminister Reul für \"klaren Strich\"</h2>",
            "type": "headline"
          },
          {
            "value": "Auch NRW-Innenminister Herbert Reul (CDU) erklärte: \"Ich halte die Grundsatzaussage der CDU, dass wir mit der AfD nicht zusammenarbeiten, für richtig, zwingend und notwendig\", betonte Reul im Deutschlandfunk. \"Es muss da ein klarer Strich gezogen werden.\"",
            "type": "text"
          },
          {
            "value": "Und auch aus der NRW-Kommunalpolitik bekam Merz Gegenwind: \"Ich bin Kommunalpolitikerin der CDU\", schrieb Martina Bergmann auf Twitter. \"Und ich distanziere mich mit jeder Silbe, mit jedem Buchstaben dieses Tweets von dem Vorsitzenden, der nicht mehr nur ein bisschen braun hinter den Ohren ist. Sein Problem von oben an die Basis durchzureichen, ist menschlich klein.\"",
            "type": "text"
          },
          {
            "value": "Die SPD-Opposition im Düsseldorfer Landtag sprach von einem \"Tabubruch\", den Merz begangen habe. \"Mir macht die Entwicklung der CDU große Sorgen. Das wirkt sehr desorientiert\", erklärte Sarah Philipp, Parlamentarische Geschäftsführerin der SPD-Landtagsfraktion, gegenüber dem WDR.",
            "type": "text"
          },
          {
            "box": {
              "link": "<a href=\"//www.tagesschau.de/inland/merz-kritik-100.html\" type=\"extern\">mehr</a>",
              "title": "Heftige Kritik an Merz-Äußerungen zur AfD aus eigener Partei"
            },
            "type": "box"
          },
          {
            "value": "<h2>Erst Andeutung, dann Klarstellung</h2>",
            "type": "headline"
          },
          {
            "value": "Merz hatte im Sommerinterview gesagt: \"Das Thema Zusammenarbeit mit der AfD betrifft die gesetzgebenden Körperschaften, also im Europaparlament, im Bundestag und in den Landtagen.\" Kommunalpolitik sei etwas anderes als Landes- und Bundespolitik. \"Natürlich muss in den Kommunalparlamenten dann auch nach Wegen gesucht werden, wie man gemeinsam die Stadt, das Land, den Landkreis gestaltet\", so Merz.",
            "type": "text"
          },
          {
            "box": {
              "link": "<a href=\"https://www1.wdr.de/nachrichten/landespolitik/afd-gewinnt-zum-ersten-mal-landratswahl-100.html\" type=\"extern\">mehr</a>",
              "title": "AfD gewinnt zum ersten Mal eine Landratswahl"
            },
            "type": "box"
          },
          {
            "value": "Am Montagmorgen, wenige Stunden nach seinem Interview, ruderte Merz dann zurück. Auf Twitter teilte er mit: \"Um es noch einmal klarzustellen, und ich habe es nie anders gesagt: Die Beschlusslage der CDU gilt. Es wird auch auf kommunaler Ebene keine Zusammenarbeit der CDU mit der AfD geben.\"",
            "type": "text"
          },
          {
            "value": "<h2>Laut CDU-Beschluss keine Koalitionen oder Zusammenarbeit</h2>",
            "type": "headline"
          },
          {
            "value": "In einem Beschluss des Parteivorstands von 2019 heißt es: \"Jeder, der in der CDU für eine Annäherung oder gar Zusammenarbeit mit der AfD plädiert, muss wissen, dass er sich einer Partei annähert, die rechtsextremes Gedankengut, Antisemitismus und Rassismus in ihren Reihen bewusst duldet. (...) Die CDU lehnt jegliche Koalitionen oder ähnliche Formen der Zusammenarbeit mit der AfD ab.\"",
            "type": "text"
          },
          {
            "value": "<h2>CSU geht auf Distanz - AfD begrüßt Annährung</h2>",
            "type": "headline"
          },
          {
            "value": "Nach den Äußerungen Merz' waren nicht nur Parteifreunde auf Distanz gegangen. Auch CSU-Chef Markus Söder teilte auf Twitter mit. \"Die CSU lehnt jede Zusammenarbeit mit der AfD ab - egal auf welcher politischen Ebene. Denn die AfD ist demokratiefeindlich, rechtsextrem und spaltet unsere Gesellschaft. Das ist mit unseren Werten nicht vereinbar.\"",
            "type": "text"
          },
          {
            "value": "Der AfD-Vorsitzende Tino Chrupalla schrieb zu der Debatte auf Twitter: \"Nun fallen erste Steine aus der schwarz-grünen Brandmauer. In Ländern und Bund werden wir die Mauer gemeinsam niederreißen. Gewinner werden die Bürger sein, die Wohlstand, Freiheit und Sicherheit durch interessengeleitete Politik wiedergewinnen.\"",
            "type": "text"
          },
          {
            "title": "Politologe über CDU: \"Etwas verzweifelt\"",
            "date": "2023-07-24T07:55:57.000+02:00",
            "teaserImage": {
              "title": "Friedrich Merz",
              "copyright": "dpa",
              "alttext": "Friedrich Merz (09.09.2022)",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMNQQ/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMOLk/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMPOY/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMQDM/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMQ7w/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMG0w/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMHqw/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMIg0/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMJbE/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMLgk/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tME_8/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/0fe720f0-f5d2-4ee3-a4a3-ed252f6d0600/AAABiYcsDVU/AAABg8tMF58/16x9-1920.jpg"
              },
              "type": "image"
            },
            "tracking": [
              {
                "sid": "app.inland.regional.nordrheinwestfalen.wdr-politologe-ueber-cdu-etwas-verzweifelt-100",
                "src": "wdr",
                "ctp": "nicht-definiert",
                "pdt": "20230724T1112",
                "otp": "audio",
                "cid": "wdr-politologe-ueber-cdu-etwas-verzweifelt-100",
                "pti": "Politologe_ueber_CDU_Etwas_verzweifelt",
                "bcr": "nein",
                "type": "generic"
              }
            ],
            "stream": "https://wdrmedien-a.akamaihd.net/medp/ondemand/weltweit/fsk0/296/2960442/2960442_53339466.mp3",
            "type": "audio"
          },
          {
            "box": {
              "link": "<a href=\"https://www1.wdr.de/nachrichten/landespolitik/nrw-afd-rekordhoch-analyse-100.html\" type=\"extern\">mehr</a>",
              "title": "Nach Erfolg in Thüringen: Wo steht die AfD in NRW?"
            },
            "type": "box"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.nordrheinwestfalen.wdr-kritik-aus-nrw-cdu-chef-merz-irritiert-mit-aeusserungen-ueber-afd-100",
            "src": "wdr",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1112",
            "otp": "meldung",
            "cid": "wdr-kritik-aus-nrw-cdu-chef-merz-irritiert-mit-aeusserungen-ueber-afd-100",
            "pti": "Kritik_aus_NRW_CDU-Chef_Merz_irritiert_mit_Aeusserungen_ueber_AfD",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Nordrhein-Westfalen",
        "firstSentence": "Nachdem CDU-Chef Friedrich Merz im ZDF-Sommerinterview eine Zusammenarbeit mit der AfD auf kommunaler Ebene nicht kategorisch ausschloss, hagelt es Kritik, auch aus NRW.",
        "images": [
          {
            "title": "Friedrich Merz",
            "copyright": "Getty Images/Johannes Simon",
            "alttext": "Friedrich Merz, Vorsitzender der CDU, auf dem Ludwig-Erhard-Gipfel in Gmund.",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/2b4027f6-201a-4cfd-945d-5dedc31f071c/AAABiYcsBgA/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo WDR",
          "copyright": "tagesschau, ARD, WDR",
          "alttext": "Logo WDR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/34b7843e-4196-44f3-b3a8-54cbd172e832/AAABh5NOk8o/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/nordrheinwestfalen/wdr-kritik-aus-nrw-cdu-chef-merz-irritiert-mit-aeusserungen-ueber-afd-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/nordrheinwestfalen/wdr-kritik-aus-nrw-cdu-chef-merz-irritiert-mit-aeusserungen-ueber-afd-100.html",
        "shareURL": "https://www1.wdr.de/nachrichten/landespolitik/merz-kritk-afd-zusammenarbeit-100.html",
        "geotags": [],
        "regionId": 10,
        "regionIds": [
          10
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "swr-baldauf-merz-aussage-zur-afd-politisch-extrem-unsensibel-100",
        "externalId": "tagesschau_fm-story-rlp-kritik-an-merz-aussagen-zur-afd-100",
        "title": "Baldauf: Merz-Aussage zur AfD \"politisch extrem unsensibel\"",
        "date": "2023-07-24T11:31:22.000+02:00",
        "teaserImage": {
          "copyright": "dpa Bildfunk, Picture Alliance",
          "alttext": "CDU-Parteichef Friedrich Merz im ZDF Sommerinterview",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Rheinland-Pfalz"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/swr-baldauf-merz-aussage-zur-afd-politisch-extrem-unsensibel-100~_view-hasChanged_lastKnown-D635AD532517E700FBAFCFCD8E157E1B.json",
        "content": [
          {
            "value": "<strong>Auch in Rheinland-Pfalz stoßen die Aussagen von CDU-Chef Friedrich Merz zur Zusammenarbeit mit der AfD auf Kritik. Als \"politisch extrem unsensibel\" bezeichnete sie CDU-Landeschef Christian Baldauf.</strong>",
            "type": "text"
          },
          {
            "value": "Diese Bemerkung hätte so nicht fallen dürfen, sagte Baldauf im SWR: \"Weil wir als Christdemokraten immer ganz klar festgestellt haben, mit der AfD gibt es keine Zusammenarbeit. Egal auf welcher politischen Ebene.\" Da gebe es für ihn kein Vertun und kein Aufweichen, so der rheinland-pfälzische CDU-Vorsitzende.",
            "type": "text"
          },
          {
            "value": "Merz hatte am Sonntag in einem ZDF-Interview eine Zusammenarbeit seiner Partei mit der AfD auf Landes- oder Bundesebene zwar abermals ausgeschlossen, auf lokaler Ebene Kontakte jedoch für möglich gehalten.",
            "type": "text"
          },
          {
            "value": "<h2>Baldauf: Auch in Kommunen keine Zusammenarbeit mit AfD</h2>",
            "type": "headline"
          },
          {
            "value": "Baldauf machte klar, dass er auch jegliche Zusammenarbeit der CDU mit der AfD auf kommunaler Ebene ausschließe: \"Aus dem einfachen Grunde, weil es für uns und für mich eine rechtsextremistische und rassistische Partei ist, die auch die entsprechenden Strömungen aufweist.\" Baldauf verwies erneut auf den Unvereinbarkeitsbeschluss der CDU, der eine Zusammenarbeit mit der AfD nicht erlaubt.",
            "type": "text"
          },
          {
            "value": "<h2>\"Müssen zeigen, dass wir nicht mit AfD paktieren\"</h2>",
            "type": "headline"
          },
          {
            "value": "Von der CDU erwartet Baldauf nun, \"mit Taten zu zeigen, dass es nicht so ist, dass wir mit der AfD paktieren oder in irgendeiner Form etwas zu tun haben wollen.\" Angesichts des Umfrage-Hochs der AfD rät der CDU-Landeschef, dass seine Partei selbst die Themen aufrufen und bearbeiten müsse, die für die Bürgerinnnen und Bürger wichtig seien. Zudem müsse sich die CDU die Frage stellen, warum sie nicht selbst von der Schwäche der Ampelkoalition in Berlin profitiere.",
            "type": "text"
          },
          {
            "value": "<h2>Klöckner: Brandmauer zur AfD steht</h2>",
            "type": "headline"
          },
          {
            "value": "Die rheinland-pfälzische CDU-Bundestagsabgeordnete Julia Klöckner hat sich hinter Merz gestellt. Laut Klöckner steht die Brandmauer der CDU zur AfD. Wer etwas anderes in das Interview reininterpretiere, habe nicht genau hingehört, so Klöcker. Merz habe lediglich gesagt, dass auch dort, wo jemand von der AfD in <a href=\"https://www.swr.de/swraktuell/rheinland-pfalz/trier/wie-wirkt-sich-wahl-von-afd-landrat-auf-partnerschaft-mit-eifelkreis-aus-100.html\" type=\"extern\">das Amt eines Landrates</a> oder eines Bürgermeisters gewählt werde, nach Wegen gesucht werden müsse, wie man \"weiter arbeiten kann\". Dies bedeute aber keine Zusammenarbeit mit der AfD.",
            "type": "text"
          },
          {
            "value": "<h2>Merz rudert per Twitter  zurück</h2>",
            "type": "headline"
          },
          {
            "value": "Nach der massiven Kritik auch aus der eigenen Partei hat sich CDU-Chef Merz per Twitter zu seiner Haltung geäußert: \"Um es noch einmal klarzustellen, und ich habe es nie anders gesagt: Die Beschlusslage der CDU gilt.\" Es werde auch auf kommunaler Ebene keine Zusammenarbeit der CDU mit der AfD geben.",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.rheinlandpfalz.swr-baldauf-merz-aussage-zur-afd-politisch-extrem-unsensibel-100",
            "src": "swr",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1136",
            "otp": "meldung",
            "cid": "swr-baldauf-merz-aussage-zur-afd-politisch-extrem-unsensibel-100",
            "pti": "Baldauf_Merz-Aussage_zur_AfD_politisch_extrem_unsensibel",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Rheinland-Pfalz",
        "firstSentence": "Auch in Rheinland-Pfalz stoßen die Aussagen von CDU-Chef Friedrich Merz zur Zusammenarbeit mit der AfD auf Kritik.",
        "images": [
          {
            "copyright": "dpa Bildfunk, Picture Alliance",
            "alttext": "CDU-Parteichef Friedrich Merz im ZDF Sommerinterview",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/2b2e1c49-d36d-43d1-a445-d1b8c165ce03/AAABiYdCC7c/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo SWR",
          "copyright": "tagesschau, ARD, SWR",
          "alttext": "Logo SWR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/25ddb5d7-0642-43c2-b5bd-208e8d783190/AAABh5NOkHo/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/rheinlandpfalz/swr-baldauf-merz-aussage-zur-afd-politisch-extrem-unsensibel-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/rheinlandpfalz/swr-baldauf-merz-aussage-zur-afd-politisch-extrem-unsensibel-100.html",
        "shareURL": "https://www.swr.de/swraktuell/rheinland-pfalz/rlp-kritik-an-merz-aussagen-zur-afd-100.html",
        "geotags": [],
        "regionId": 11,
        "regionIds": [
          11
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "sr-kaiserslautern-will-in-freibaedern-sicherheitskraefte-einsetzen-100",
        "externalId": "tagesschau_fm-story-kaiserslautern_will_security_in_freibaedern_einsaetzen_100",
        "title": "Kaiserslautern will in Freibädern Sicherheitskräfte einsetzen",
        "date": "2023-07-24T11:38:00.000+02:00",
        "teaserImage": {
          "title": "Mitarbeiter einer Sicherheitsfirma gehen durch ein Freibad.",
          "copyright": "picture alliance / dpa | Paul Zinken",
          "alttext": "Mitarbeiter einer Sicherheitsfirma gehen durch ein Freibad.",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Saarland"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/sr-kaiserslautern-will-in-freibaedern-sicherheitskraefte-einsetzen-100~_view-hasChanged_lastKnown-472D573F038527FC0B226D7544DF3E4D.json",
        "content": [
          {
            "value": "<strong>Weil die Polizei in Kaiserslautern in diesem Jahr schon öfter zu Freibädern ausrücken musste, will die Stadt künftig Sicherheitspersonal dort einsetzen. Auch im Saarland ist die Sicherheit in Schwimmbädern immer wieder Thema.</strong>",
            "type": "text"
          },
          {
            "value": "\"Zunehmend aggressive Badegäste\" nennt die Stadt Kaiserslautern als Grund dafür, dass sie künftig Sicherheitspersonal in ihren beiden Freibädern einsetzen will. <a href=\"https://www.swr.de/swraktuell/rheinland-pfalz/kaiserslautern/kaiserslautern-will-sicherheitskraefte-in-freibaedern-einsetzen-100.html\" type=\"extern\">Das berichtet der SWR</a>.",
            "type": "text"
          },
          {
            "value": "Nach SWR-Informationen hat die Stadt auch schon Haushaltsmittel für das kommende Jahr beantragt.",
            "type": "text"
          },
          {
            "value": "<a href=\"http://www.sr.de/sr/sr3/themen/panorama/sicherheit_in_freibaedern_100.html\" type=\"extern\">Das Thema Sicherheit in Freibädern ist in diesem Sommer bundesweit – auch im Saarland – wieder verstärkt in den Fokus gerückt</a>. Hier <a href=\"http://www.sr.de/sr/sr3/themen/panorama/angriff_auf_secruitys_im_freibad_steinrausch_100.html\" type=\"extern\">war es zu gewalttätigen Angriffen</a> gekommen.",
            "type": "text"
          },
          {
            "value": "<h2>Sicherheitspersonal in Saar-Freibädern</h2>",
            "type": "headline"
          },
          {
            "value": "Einige Freibäder im Saarland, beispielsweise das \"Totobad\" in Saarbrücken, greifen schon länger auf Sicherheitspersonal zurück. Andere, wie das \"Steinrauschbad\" in Saarlouis, kommen bislang auch ohne aus.",
            "type": "text"
          },
          {
            "value": "Tatsächlich ist die Zahl der registrierten Straftaten in saarländischen Schwimmbädern 2022 im Vergleich zu 2019 zurückgegangen, <a href=\"https://www.tagesschau.de/faktenfinder/freibaeder-straftaten-100.html\" type=\"intern\">wie eine umfangreiche Recherche des ARD-faktenfinders ergeben hat</a> – von 310 auf 228. Gestiegen ist dabei allerdings die Zahl der Gewaltdelikte.",
            "type": "text"
          },
          {
            "value": "<em>Über dieses Thema haben auch die SR-Hörfunknachrichten am 24.07.2023 berichtet.</em>",
            "type": "text"
          },
          {
            "value": "<h2>Mehr zur Sicherheit in Freibädern</h2>",
            "type": "headline"
          },
          {
            "box": {
              "text": "<a href=\"\" externalId=\"tagesschau_fm-link-generated-href-hash-2c931d0652273bf5089f058074214804\">Nach dem handgreiflichen Vorfall im Saarlouiser Steinrauschbad wird über die Sicherheit in den Freibädern diskutiert. Gibt es dort ein Problem? SR 3 hat in den Freibädern in Saarbrücken und Saarwellingen nachgefragt.</a>",
              "title": "Wie sicher ist es in saarländischen Freibädern?"
            },
            "type": "box"
          },
          {
            "gallery": [
              {
                "title": "Das Saarwellinger Freibad",
                "copyright": "Gemeine Saarwellingen",
                "alttext": "Das Saarwellinger Freibad",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/bfa3dedb-0115-4627-a0b5-5eeb364d3a68/AAABiYdSl-s/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "box": {
              "text": "<a href=\"\" externalId=\"tagesschau_fm-link-generated-href-hash-44ccdecc47eb584038df743f485521f3\">Mehrere Security-Männer sind am Wochenende im Freibad Steinrausch bei Saarlouis tätlich angegriffen worden. Dabei schlugen die drei Täter immer wieder auf die Mitarbeiter der Sicherheitsfirma ein. Laut dem Saarlouiser Oberbürgermeister häufen sich solche Vorfälle.</a>",
              "title": "Saarlouiser OB berichtet von zunehmender Gewalt im Freibad"
            },
            "type": "box"
          },
          {
            "gallery": [
              {
                "title": "Außenaufnahmen des Sonnenbads Saarlouis Steinrausch,",
                "copyright": "IMAGO / BeckerBredel",
                "alttext": "Außenaufnahmen des Sonnenbads Saarlouis Steinrausch,",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/58d968d9-a5de-4412-be2e-eb9cbdd33226/AAABiYdSmmU/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.saarland.sr-kaiserslautern-will-in-freibaedern-sicherheitskraefte-einsetzen-100",
            "src": "sr",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1154",
            "otp": "meldung",
            "cid": "sr-kaiserslautern-will-in-freibaedern-sicherheitskraefte-einsetzen-100",
            "pti": "Kaiserslautern_will_in_Freibaedern_Sicherheitskraefte_einsetzen",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Saarland",
        "firstSentence": "Weil die Polizei in Kaiserslautern in diesem Jahr schon öfter zu Freibädern ausrücken musste, will die Stadt künftig Sicherheitspersonal dort einsetzen.",
        "images": [
          {
            "title": "Mitarbeiter einer Sicherheitsfirma gehen durch ein Freibad.",
            "copyright": "picture alliance / dpa | Paul Zinken",
            "alttext": "Mitarbeiter einer Sicherheitsfirma gehen durch ein Freibad.",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/403b5f8e-6836-465d-b876-9403fdcaf108/AAABiYdSliA/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo SR",
          "copyright": "tagesschau, ARD, SR",
          "alttext": "Logo SR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/01792937-4c37-4dba-9b32-eee4e8f2c8cf/AAABiSD7Lj4/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/saarland/sr-kaiserslautern-will-in-freibaedern-sicherheitskraefte-einsetzen-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/saarland/sr-kaiserslautern-will-in-freibaedern-sicherheitskraefte-einsetzen-100.html",
        "shareURL": "http://www.sr.de/sr/home/nachrichten/panorama/kaiserslautern_will_security_in_freibaedern_einsaetzen_100.html",
        "geotags": [],
        "regionId": 12,
        "regionIds": [
          12
        ],
        "type": "story",
        "breakingNews": false
      },
      {
        "sophoraId": "ndr-schiesserei-in-uetersen-polizei-sucht-zeugen-100",
        "externalId": "tagesschau_fm-story-id-47e72027-94d4-4c63-bf32-7e5ec898c664",
        "title": "Schießerei in Uetersen: Polizei sucht Zeugen",
        "date": "2023-07-24T11:14:00.000+02:00",
        "teaserImage": {
          "title": "Polizei in Braunschweig sucht Zeugen. (Themenbild) ",
          "copyright": "dpa",
          "alttext": "Blaulicht auf einem Polizeiauto",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMNQQ/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMOLk/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMPOY/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMQDM/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMQ7w/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMG0w/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMHqw/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMIg0/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMJbE/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMLgk/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tME_8/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMF58/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [
          {
            "tag": "Schleswig-Holstein"
          }
        ],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/ndr-schiesserei-in-uetersen-polizei-sucht-zeugen-100~_view-hasChanged_lastKnown-50387DB34CC41DEE2D06D1C625A3A3BE.json",
        "content": [
          {
            "value": "<strong>Mehrere Schüsse in Uetersen: Ein Elmshorner ist bei einer Schießerei verletzt worden. Anwohner wählten den Notruf.</strong>",
            "type": "text"
          },
          {
            "value": "Ein 57-jähriger Elmshorner ist in der vergangenen Nacht bei einer Schießerei in Uetersen im Kreis Pinneberg verletzt worden. Mehrere Anwohner hatten sich um kurz vor ein Uhr bei der Polizei gemeldet, nachdem sie mehrere Schüsse im Bereich der Wassermühlenstraße gehört hatten. Die Polizeibeamten fanden bei ihrem Eintreffen Einschusslöcher an einem Fahrzeug.",
            "type": "text"
          },
          {
            "gallery": [
              {
                "title": "Polizei in Braunschweig sucht Zeugen. (Themenbild) ",
                "copyright": "dpa",
                "alttext": "Blaulicht auf einem Polizeiauto",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              }
            ],
            "type": "image_gallery"
          },
          {
            "value": "<h2>Polizei sucht Zeugen</h2>",
            "type": "headline"
          },
          {
            "value": "Zeitgleich meldete das Klinikum Elmshorn eine Person mit einer Schussverletzung am Bein, die sich selbstständig in die Klinik begeben hatte. Es soll sich laut Polizei um den verletzten Elmshorner handeln. Lebensgefahr habe nicht bestanden, erklärt die Kriminalpolizei Itzehoe (Kreis Steinburg). Die Beamten haben jetzt die Ermittlungen aufgenommen. Wer etwas beobachtet hat, soll sich bei der Polizei melden.",
            "type": "text"
          },
          {
            "box": {
              "image": {
                "title": "Rauch und Flammen schlagen aus einem Reetdachhaus.",
                "copyright": "Daniel Friederichs",
                "alttext": "Rauch und Flammen schlagen aus einem Reetdachhaus.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/8107c721-e3ce-487b-9519-c1e420d940dc/AAABiYcfLxU/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/schleswig-holstein/Feuer-zerstoert-Reetdachhaus-in-Uetersen-,feuer5768.html\" type=\"extern\">mehr</a>",
              "title": "Uetersen: Feuer zerstört Reetdachhaus"
            },
            "type": "box"
          },
          {
            "box": {
              "image": {
                "title": "Eine Haustür wurde von der Polizei versiegelt nach einem mutmaßlichen Mord.",
                "copyright": "Daniel Friederichs",
                "alttext": "Eine Haustür wurde von der Polizei versiegelt nach einem mutmaßlichen Mord.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMNQQ/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMOLk/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMPOY/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMQDM/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMQ7w/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMG0w/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMHqw/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMIg0/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMJbE/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMLgk/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tME_8/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/ee7ff049-65ee-4adc-a331-4f4bb0a531af/AAABiYcfNpc/AAABg8tMF58/16x9-1920.jpg"
                },
                "type": "image"
              },
              "link": "<a href=\"https://www.ndr.de/nachrichten/schleswig-holstein/Oldenburg-in-Holstein-Frau-auf-offener-Strasse-getoetet,toetungsdelikt366.html\" type=\"extern\">mehr</a>",
              "title": "Oldenburg in Holstein: Frau auf offener Straße getötet"
            },
            "type": "box"
          },
          {
            "value": "<strong>Dieses Thema im Programm:</strong><br />NDR 1 Welle Nord | Nachrichten für Schleswig-Holstein | 24.07.2023 | 11:00 Uhr",
            "type": "text"
          }
        ],
        "tracking": [
          {
            "sid": "app.inland.regional.schleswigholstein.ndr-schiesserei-in-uetersen-polizei-sucht-zeugen-100",
            "src": "ndr",
            "ctp": "nicht-definiert",
            "pdt": "20230724T1115",
            "otp": "meldung",
            "cid": "ndr-schiesserei-in-uetersen-polizei-sucht-zeugen-100",
            "pti": "Schiesserei_in_Uetersen_Polizei_sucht_Zeugen",
            "bcr": "nein",
            "type": "generic"
          }
        ],
        "topline": "Schleswig-Holstein",
        "firstSentence": "Mehrere Schüsse in Uetersen: Ein Elmshorner ist bei einer Schießerei verletzt worden.",
        "images": [
          {
            "title": "Polizei in Braunschweig sucht Zeugen. (Themenbild) ",
            "copyright": "dpa",
            "alttext": "Blaulicht auf einem Polizeiauto",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMNQQ/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMOLk/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMPOY/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMQDM/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMQ7w/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMG0w/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMHqw/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMIg0/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMJbE/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMLgk/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tME_8/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/4dc01331-b6db-4c4b-93b8-69cb65013257/AAABiYcfKCM/AAABg8tMF58/16x9-1920.jpg"
            },
            "type": "image"
          }
        ],
        "brandingImage": {
          "title": "Logo NDR",
          "copyright": "tagesschau, ARD, NDR",
          "alttext": "Logo NDR",
          "imageVariants": {
            "original": "https://images.tagesschau.de/image/e33737ad-2315-4104-91e5-c515497253df/AAABh5NOgjc/AAABg8tMTgI/original.png"
          },
          "type": "image"
        },
        "details": "https://www.tagesschau.de/api2u/inland/regional/schleswigholstein/ndr-schiesserei-in-uetersen-polizei-sucht-zeugen-100.json",
        "detailsweb": "https://www.tagesschau.de/inland/regional/schleswigholstein/ndr-schiesserei-in-uetersen-polizei-sucht-zeugen-100.html",
        "shareURL": "https://www.ndr.de/nachrichten/schleswig-holstein/Schiesserei-in-Uetersen-Polizei-sucht-Zeugen,schiesserei762.html",
        "geotags": [],
        "regionId": 15,
        "regionIds": [
          15
        ],
        "type": "story",
        "breakingNews": false
      }
    ],
    "newStoriesCountLink": "https://www.tagesschau.de/api2u/newStoriesCount?state=H4sIAAAAAAAAAAFoAJf%2FUbpdRsH1qZJtlpuB6H5j33f%2BM2JYu9ro1VRjMnuPpeah%2FLAM452IqxREbBT7jSxeiU5L6QOUk%2F5tofWag%2FOXnnllw%2F98t7buzlOJlrYgBKz9Hlo1uaKQkStxx0zp8Kf%2BZwyPSWef4MKQwyHDaAAAAA%3D%3D",
    "type": "news"
  });
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
        console.log(result)
      },
      (error) => {
        console.log(error);
      }
    );
}

async function buildNewsCards() {
  //await fetchNews()
  var newsLength = 0
  setNewsCards(
    news.news.map((report) => {
      if(report.content){
        newsLength++
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
                {Object.values(report.content)[0].value}
              </Typography>
            </CardContent>
          </Card>
        )
      }
    })
  )
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
        <Weather currentWeather={currentWeather} forecast={forecast}/>
      </Stack>
    </Box>
  </Box>
)
}