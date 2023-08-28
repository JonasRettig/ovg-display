// This file contains most of the components for the site
// Included here are the news feed, the rss feed, general styling and all fetch requests

//! TODOS:
// - [x] Change dates display
// - [x] Test how weather warning are displayed

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
    setNews({ news : [{
      "sophoraId": "kindergrundsicherung-ampelkoalition-100",
      "externalId": "88cc19fa-667a-495b-872d-82240abf64ad",
      "title": "Ampel einigt sich bei Kindergrundsicherung",
      "date": "2023-08-28T07:59:54.874+02:00",
      "teaserImage": {
        "alttext": "Blick auf Spree und Kanzleramt in der Morgendämmerung (Archiv)",
        "imageVariants": {
          "1x1-144": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBxx9M/1x1-144.jpg",
          "1x1-256": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBxyuw/1x1-256.jpg",
          "1x1-432": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBx0AU/1x1-432.jpg",
          "1x1-640": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBx0zc/1x1-640.jpg",
          "1x1-840": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBx1ms/1x1-840.jpg",
          "16x9-256": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBxsX4/16x9-256.jpg",
          "16x9-384": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBxtLY/16x9-384.jpg",
          "16x9-512": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBxt-Y/16x9-512.jpg",
          "16x9-640": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBxuyw/16x9-640.jpg",
          "16x9-960": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBxwXw/16x9-960.jpg",
          "16x9-1280": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBxqrQ/16x9-1280.jpg",
          "16x9-1920": "https://images.tagesschau.de/image/491e3bf6-788a-4a67-bc3a-a817e6009476/AAABijkh-E4/AAABibBxrfI/16x9-1920.jpg"
        },
        "type": "image"
      },
      "tags": [
        {
          "tag": "Kindergrundsicherung"
        },
        {
          "tag": "Christian Lindner"
        },
        {
          "tag": "Ampel-Koalition"
        }
      ],
      "updateCheckUrl": "https://www.tagesschau.de/api2u/kindergrundsicherung-ampelkoalition-100~_view-hasChanged_lastKnown-0F9A43B12F8713FFCDE4A53B6ABCC3AC.json",
      "content": [
        {
          "value": "<strong>Es war das vierte Treffen binnen einer Woche im Koalitionsstreit zur Kindergrundsicherung - und brachte am späten Abend eine Einigung, wie das <em>ARD-Hauptstadtstudio</em> erfuhr. Details sind noch nicht bekannt.</strong>",
          "type": "text"
        },
        {
          "value": "Nach monatelangem Streit hat die Bundesregierung eine Einigung zur Kindergrundsicherung erzielt. Das erfuhr das <em>ARD-Hauptstadtstudio </em>nach einem weiteren Treffen von Bundeskanzler Olaf Scholz (SPD), Familienministerin Lisa Paus (Grüne) und Finanzminister Christian Lindner (FDP), das am Sonntagnachmittag begonnen hatte.",
          "type": "text"
        },
        {
          "value": "Aus Grünen-Kreisen hieß es laut Nachrichtenagentur dpa: \"Heute Nacht ist die Einigung bei der Kindergrundsicherung erfolgt. Bundesministerin Paus kann das als Erfolg für sich verbuchen, dass es ihr gelungen ist, die Weichen für das Projekt zu stellen.\" Der Einigung waren verbissene Grundsatzdiskussionen vor allem zwischen den Grünen und der FDP in der Ampel vorausgegangen. ",
          "type": "text"
        },
        {
          "value": "Weitere Informationen zur neuen Familienleistung gebe es noch nicht, berichtete <em>ARD-Korrespondentin Kristin Becker </em>in der Nacht. Es gebe \"noch überhaupt keine Details\". Bekannt gegeben werden sollten diese voraussichtlich am Vormittag.",
          "type": "text"
        },
        {
          "value": "Ohne auf Einzelheiten einzugehen, äußerte sich SPD-Fraktionschef Rolf Mützenich am Morgen zu möglichen Änderungen am erwarteten Gesetzentwurf der Bundesregierung. \"Wir werden mit Sicherheit als selbstbewusstes Parlament, aber auch als selbstbewusste SPD-Fraktion das ein oder andere möglicherweise am Gesetzentwurf noch einmal modifizieren\", sagte er im <em>ARD-Morgenmagazin</em>. Die Regierung müsse nun \"mit Konzentration\" dafür sorgen, dass der Bundestag bald eine Vorlage bekomme. ",
          "type": "text"
        },
        {
          "video": {
            "sophoraId": "video-1240932",
            "externalId": "e3bbe63f-6e99-4b56-9e24-2db2fc538e23",
            "title": "Ampel-Regierung erzielt Einigung auf Eckpunkte bei der Kindergrundsicherung",
            "date": "2023-08-28T06:22:14.790+02:00",
            "teaserImage": {
              "title": "Sendungsbild",
              "copyright": "ARD-aktuell",
              "alttext": "Sendungsbild",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxx9M/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxyuw/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBx0AU/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBx0zc/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBx1ms/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxsX4/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxtLY/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxt-Y/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxuyw/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxwXw/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxqrQ/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxrfI/16x9-1920.jpg"
              },
              "type": "image"
            },
            "tags": [],
            "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1240932~_view-hasChanged_lastKnown-741C41C381FA54C1357BA2EA56D865A8.json",
            "tracking": [
              {
                "sid": "app.multimedia.video.video-1240932",
                "src": "ard-aktuell",
                "ctp": "SEGMENT",
                "pdt": "20230828T0622",
                "otp": "video",
                "cid": "video-1240932",
                "pti": "Ampel-Regierung_erzielt_Einigung_auf_Eckpunkte_bei_der_Kindergrundsicherung",
                "bcr": "ja",
                "type": "generic"
              },
              {
                "assetid": "video-1240932",
                "program": "Morgenmagazin",
                "title": "Ampel-Regierung_erzielt_Einigung_auf_Eckpunkte_bei_der_Kindergrundsicherung",
                "length": "98",
                "c2": "p2,N",
                "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1240932.html",
                "c7": "p7,video-1240932",
                "c8": "p8,98",
                "c9": "p9,Morgenmagazin_Ampel-Regierung_erzielt_Einigung_auf_Eckpunkte_bei_der_Kindergrundsicherung_28.08.2023_0600",
                "c10": "p10,Das_Erste",
                "c12": "p12,content",
                "c15": "p15,X005017399",
                "c16": "p16,ARD_Information/ARD_Livestream",
                "c18": "p18,N",
                "type_nielsen": "content",
                "type": "nielsen"
              }
            ],
            "streams": {
              "h264s": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0611-2500.webs.h264.mp4",
              "h264m": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0611-2500.webm.h264.mp4",
              "h264xl": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0611-2500.webxl.h264.mp4",
              "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0828/TV-20230828-0611-2500.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
            },
            "alttext": "Sendungsbild",
            "copyright": "Kerstin Dausend, ARD Berlin",
            "type": "video"
          },
          "type": "video"
        },
        {
          "value": "<h2>Um Details wurde gerungen</h2>",
          "type": "headline"
        },
        {
          "value": "Lindner hatte vor der entscheidenden Sitzung im ZDF-\"Sommerinterview\" gesagt, dass er mit einer schnellen Einigung auf Eckpunkte rechne. Danach würden Verbände und Länder beteiligt, und erst dann werde es einen fertigen Gesetzentwurf geben, der an den Bundestag gehe. \"Wir werden rasch eine grundlegende Einigung und Verständigung auf die Eckpunkte haben\", betonte der Finanzminister. \"Das gesamte Verfahren wird noch etwas brauchen.\"",
          "type": "text"
        },
        {
          "box": {
            "image": {
              "title": "Bundeskanzler Olaf Scholz (SPD) spricht beim Tag der offenen Tür der Bundesregierung im Ehrenhof des Bundeskanzleramts.",
              "alttext": "Bundeskanzler Olaf Scholz (SPD) spricht beim Tag der offenen Tür der Bundesregierung im Ehrenhof des Bundeskanzleramts.",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxx9M/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxyuw/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBx0AU/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBx0zc/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBx1ms/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxsX4/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxtLY/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxt-Y/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxuyw/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxwXw/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxqrQ/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxrfI/16x9-1920.jpg"
              },
              "type": "image"
            },
            "link": "<a href=\"https://www.tagesschau.de/api2u/inland/scholz-kindergrundsicherung-einigung-100.json\" type=\"intern\">mehr</a>",
            "subtitle": "Streit über Kindergrundsicherung",
            "text": "Im Streit um die Kindergrundsicherung hat Bundeskanzler Scholz eine Lösung bis kommende Woche angekündigt.",
            "title": "Scholz kündigt Einigung bis nächste Woche an"
          },
          "type": "box"
        },
        {
          "value": "<h2>Kindergrundsicherung im Koalitionsvertrag</h2>",
          "type": "headline"
        },
        {
          "value": "Die Einführung einer Kindergrundsicherung hatten die Ampel-Parteien in ihrem Koalitionsvertrag festgelegt. Bisherige Leistungen wie das Kindergeld, Leistungen aus dem Bürgergeld für Kinder oder der Kinderzuschlag sollen darin gebündelt werden. ",
          "type": "text"
        },
        {
          "value": "Durch mehr Übersichtlichkeit und mithilfe einer zentralen Plattform sollen auch viele Familien erreicht werden, die bisher wegen Unkenntnis oder bürokratischer Hürden ihnen zustehende Gelder nicht abrufen. \"Wir wollen mehr Kinder aus der Armut holen und setzen dabei insbesondere auch auf Digitalisierung\", heißt es dazu im Koalitionsvertrag. ",
          "type": "text"
        },
        {
          "video": {
            "sophoraId": "video-1240954",
            "externalId": "2b9a6e4d-5a24-4417-922c-1f2d76c3dc3a",
            "title": "\"Ganz zuversichtlich\", Rolf Mützenich, Vorsitzender SPD-Bundestagsfraktion zu Einigung bei der Kindergrundsicherung",
            "date": "2023-08-28T07:37:57.104+02:00",
            "teaserImage": {
              "title": "Sendungsbild",
              "copyright": "ARD-aktuell",
              "alttext": "Sendungsbild",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxx9M/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxyuw/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBx0AU/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBx0zc/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBx1ms/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxsX4/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxtLY/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxt-Y/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxuyw/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxwXw/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxqrQ/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxrfI/16x9-1920.jpg"
              },
              "type": "image"
            },
            "tags": [],
            "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1240954~_view-hasChanged_lastKnown-61E31D395D1B9E821A907E0B18144918.json",
            "tracking": [
              {
                "sid": "app.multimedia.video.video-1240954",
                "src": "ard-aktuell",
                "ctp": "SEGMENT",
                "pdt": "20230828T0737",
                "otp": "video",
                "cid": "video-1240954",
                "pti": "Ganz_zuversichtlich_Rolf_Muetzenich_Vorsitzender_SPD-Bundestagsfraktion_zu_Einigung_bei_der_Kindergrundsicherung",
                "bcr": "ja",
                "type": "generic"
              },
              {
                "assetid": "video-1240954",
                "program": "Morgenmagazin",
                "title": "Ganz_zuversichtlich_Rolf_Muetzenich_Vorsitzender_SPD-Bundestagsfraktion_zu_Einigung_bei_der_Kindergrundsicherung",
                "length": "151",
                "c2": "p2,N",
                "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1240954.html",
                "c7": "p7,video-1240954",
                "c8": "p8,151",
                "c9": "p9,Morgenmagazin_Ganz_zuversichtlich_Rolf_Muetzenich_Vorsitzender_SPD-Bundestagsfraktion_zu_Einigung_bei_der_Kindergrundsicherung_28.08.2023_0700",
                "c10": "p10,Das_Erste",
                "c12": "p12,content",
                "c15": "p15,X005017399",
                "c16": "p16,ARD_Information/ARD_Livestream",
                "c18": "p18,N",
                "type_nielsen": "content",
                "type": "nielsen"
              }
            ],
            "streams": {
              "h264s": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0717-3100.webs.h264.mp4",
              "h264m": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0717-3100.webm.h264.mp4",
              "h264xl": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0717-3100.webxl.h264.mp4",
              "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0828/TV-20230828-0717-3100.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
            },
            "alttext": "Sendungsbild",
            "copyright": "tagesschau",
            "type": "video"
          },
          "type": "video"
        },
        {
          "value": "<h2>Paus blockiert Wachstumschancengesetz</h2>",
          "type": "headline"
        },
        {
          "value": "Seit Wochen waren sich Familienministerin Paus und Finanzminister Lindner über die Umsetzung des Großprojekts der Ampelkoalition uneins. Bislang wollte Lindner für das kommende Haushaltsjahr nur zwei Milliarden Euro dafür einplanen. Paus forderte bis zu zwölf Milliarden Euro und blockierte kürzlich ein Gesetz des Finanzministers zu Steuerentlastungen. ",
          "type": "text"
        },
        {
          "value": "Auf welche Summe sich die Koalition in den Gesprächen nun geeinigt hat, ist unbekannt. Die FDP sieht Leistungserhöhungen kritisch und hatte unter anderem auf das bereits erhöhte Kindergeld verwiesen. ",
          "type": "text"
        },
        {
          "box": {
            "image": {
              "alttext": "Familienministerin Lisa Paus",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxx9M/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxyuw/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBx0AU/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBx0zc/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBx1ms/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxsX4/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxtLY/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxt-Y/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxuyw/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxwXw/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxqrQ/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxrfI/16x9-1920.jpg"
              },
              "type": "image"
            },
            "link": "<a href=\"https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-finanzierung-102.json\" type=\"intern\">mehr</a>",
            "subtitle": "Paus' Gesetzentwurf",
            "text": "Ein Konzept zur Kindergrundsicherung liegt vor. Aber wie viel darf das Projekt aus dem Familienministerium kosten?",
            "title": "Was soll die Kindergrundsicherung denn nun kosten?"
          },
          "type": "box"
        },
        {
          "value": "<h2>Merz: Mehr Geld löst die Probleme nicht</h2>",
          "type": "headline"
        },
        {
          "value": "CDU-Chef Friedrich <a href=\"https://www.tagesschau.de/api2u/inland/friedrich-merz-sommertinterview-100.json\" type=\"intern\">Merz kritisierte am Sonntag <em>ARD</em>-Sommerinterview</a> mit Blick auf die Kindergrundsicherung, dass mehr Geld die Probleme nicht löse. \"Die bessere Lösung wäre mehr Unterstützung der Kinder, bessere Bildungseinrichtungen, bessere Betreuungsmöglichkeiten.\" Nötig sei jetzt eine gemeinsame Kraftanstrengung von Bund, Ländern und Gemeinden. ",
          "type": "text"
        },
        {
          "value": "Der Präsident des Deutschen Landkreistages, Reinhard Sager, warnte in den Zeitungen der Funke Mediengruppe vor einem aufwendigen Behördenumbau. Das Projekt sollte daher auf ein Mindestmaß zurückgeschnitten werden, das sich in bestehende Strukturen einfüge. Zudem sei es äußerst ambitioniert, eine neue Leistung ab 2025 automatisiert und digital erbringen zu wollen. Sager schlägt vor, das Bürgergeld für Kinder zu erhöhen. ",
          "type": "text"
        },
        {
          "title": "Einigung bei Kindergrundsicherung",
          "date": "2023-08-28T06:07:45.289+02:00",
          "teaserImage": {
            "copyright": "ARD-aktuell",
            "alttext": "Hintergrundbild für den Audioplayer",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxx9M/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxyuw/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBx0AU/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBx0zc/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBx1ms/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxsX4/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxtLY/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxt-Y/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxuyw/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxwXw/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxqrQ/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxrfI/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tracking": [
            {
              "sid": "app.multimedia.audio.audio-169662",
              "src": "ard-aktuell",
              "ctp": "nicht-definiert",
              "pdt": "20230828T0607",
              "otp": "audio",
              "cid": "audio-169662",
              "pti": "Einigung_bei_Kindergrundsicherung",
              "bcr": "ja",
              "type": "generic"
            }
          ],
          "text": "Philip Brost, HR, ARD Berlin, 28.08.2023, 06:07 Uhr",
          "stream": "https://media.tagesschau.de/audio/2023/0828/AU-20230828-0604-1800.mp3",
          "type": "audio"
        },
        {
          "value": "<strong>Über dieses Thema berichtete die tagesschau am 27. August 2023 um 20:00 Uhr.</strong>",
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
                  "1x1-144": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxrfI/16x9-1920.jpg"
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
            },
            {
              "teaserImage": {
                "title": "Familienministerin Paus",
                "copyright": "ARD-aktuell",
                "alttext": "Bundesfamilienministerin Paus",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-07-04T01:00:00.882+02:00",
              "sophoraId": "paus-tagesthemen-kindergrundsicherung-100",
              "externalId": "e185e6d5-68d9-4f0d-8ff7-ca9f58f0e25a",
              "topline": "Familienministerin Paus",
              "title": "\"Habe den Kanzler an meiner Seite\"",
              "details": "https://www.tagesschau.de/api2u/inland/paus-tagesthemen-kindergrundsicherung-100.json",
              "detailsweb": "https://www.tagesschau.de/inland/paus-tagesthemen-kindergrundsicherung-100.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "alttext": "Ein Kind isst in der Jugendkirche im Stadtteil Waldhof bei der 14. Mannheimer Kindervesperkirche ein Mittagessen.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-06-30T08:22:12.511+02:00",
              "sophoraId": "kindergrundsicherung-wohlfahrtsverbaende-100",
              "externalId": "bd323fae-1769-4916-ad55-c9bc00f3de0c",
              "topline": "Streit in der Ampel",
              "title": "Verbände machen Druck bei Kindergrundsicherung",
              "details": "https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-wohlfahrtsverbaende-100.json",
              "detailsweb": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-wohlfahrtsverbaende-100.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "title": "",
                "copyright": "dpa",
                "alttext": "Ein Kind spielt in einer Kita.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-04-25T06:21:50.136+02:00",
              "sophoraId": "kindergrundsicherung-119",
              "externalId": "tagesschau_50eab2a3-674a-4afb-bf7b-0b85040e3409",
              "topline": "Kinderarmut",
              "title": "Im Dickicht der Bürokratie",
              "details": "https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-119.json",
              "detailsweb": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-119.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "alttext": "Bundesfinanzminister Lindner sitzt neben Familienministerin Paus am Kabinettstisch",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-07-04T10:25:26.216+02:00",
              "sophoraId": "kindergrundsicherung-paus-100",
              "externalId": "310b60ec-1bfa-473b-b911-40db5191aa85",
              "topline": "Kindergrundsicherung ",
              "title": "Grüner Optimismus und liberale Zweifel",
              "details": "https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-paus-100.json",
              "detailsweb": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-paus-100.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "alttext": "Die Schatten von zwei Erwachsenen und einem Kind fallen in den Morgenstunden auf den Asphalt.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-05-13T11:28:49.261+02:00",
              "sophoraId": "kindergrundsicherung-120",
              "externalId": "cc8e53c2-bb5a-407e-ae18-0d1ae4223023",
              "topline": "Reformprojekt",
              "title": "Der lange Weg zur Kindergrundsicherung",
              "details": "https://www.tagesschau.de/api2u/inland/kindergrundsicherung-120.json",
              "detailsweb": "https://www.tagesschau.de/inland/kindergrundsicherung-120.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "alttext": "Friedrich Merz und Tina Hassel beim ARD-Sommerinterview",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-08-27T14:52:15.948+02:00",
              "sophoraId": "friedrich-merz-sommertinterview-100",
              "externalId": "3795e4b1-7d28-4bee-85bd-f1d165222e92",
              "topline": "ARD-Sommerinterview",
              "title": "Merz will \"wahnsinnigen Bürokratiewust stoppen\"",
              "details": "https://www.tagesschau.de/api2u/inland/friedrich-merz-sommertinterview-100.json",
              "detailsweb": "https://www.tagesschau.de/inland/friedrich-merz-sommertinterview-100.html",
              "type": "story"
            }
          ],
          "type": "related"
        }
      ],
      "tracking": [
        {
          "sid": "app.inland.innenpolitik.kindergrundsicherung-ampelkoalition-100",
          "src": "ard-aktuell",
          "ctp": "nicht-definiert",
          "pdt": "20230828T0034",
          "otp": "meldung",
          "cid": "kindergrundsicherung-ampelkoalition-100",
          "pti": "Koalition_einigt_sich_bei_Kindergrundsicherung",
          "bcr": "ja",
          "type": "generic"
        }
      ],
      "topline": "Nach Koalitionsstreit",
      "firstSentence": "Am späten Abend ist es zu einer Einigung gekommen - Informationen dazu werden am Vormittag erwartet.",
      "video": {
        "sophoraId": "video-1240876",
        "externalId": "4768157d-9573-483a-a5f0-a80ea511aa32",
        "title": "APP0030 NiF- EInigung Kindergrundsicherung_vapp.mxf",
        "date": "2023-08-28T00:50:32.310+02:00",
        "teaserImage": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxx9M/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxyuw/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0AU/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0zc/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx1ms/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxsX4/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxtLY/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxt-Y/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxuyw/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxwXw/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxqrQ/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxrfI/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1240876~_view-hasChanged_lastKnown-3553A88314DC91F7295DB4942C5C791A.json",
        "tracking": [
          {
            "sid": "app.multimedia.video.video-1240876",
            "src": "ard-aktuell",
            "ctp": "VERTICALAPPVIDEO",
            "pdt": "20230828T0050",
            "otp": "video",
            "cid": "video-1240876",
            "pti": "APP0030_NiF-_EInigung_Kindergrundsicherung_vapp.mxf",
            "bcr": "ja",
            "type": "generic"
          },
          {
            "assetid": "video-1240876",
            "program": "Tagesschau",
            "title": "APP0030_NiF-_EInigung_Kindergrundsicherung_vapp.mxf",
            "length": "17",
            "c2": "p2,N",
            "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1240876.html",
            "c7": "p7,video-1240876",
            "c8": "p8,17",
            "c9": "p9,Tagesschau_APP0030_NiF-_EInigung_Kindergrundsicherung_vapp.mxf_28.08.2023_0050",
            "c10": "p10,Das_Erste",
            "c12": "p12,content",
            "c16": "p16,ARD_Information/ARD_Livestream",
            "c18": "p18,N",
            "type_nielsen": "content",
            "type": "nielsen"
          }
        ],
        "streams": {
          "h264s": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0039-1700.webs.h264.mp4",
          "h264m": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0039-1700.webm.h264.mp4",
          "h264xl": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0039-1700.webxl.h264.mp4",
          "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0828/TV-20230828-0039-1700.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
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
            "1x1-144": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxx9M/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxyuw/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0AU/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0zc/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx1ms/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxsX4/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxtLY/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxt-Y/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxuyw/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxwXw/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxqrQ/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxrfI/16x9-1920.jpg"
          },
          "type": "image"
        }
      ],
      "firstFrame": {
        "title": "Sendungsbild",
        "copyright": "ARD-aktuell",
        "alttext": "Sendungsbild",
        "imageVariants": {
          "1x1-144": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxx9M/1x1-144.jpg",
          "1x1-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxyuw/1x1-256.jpg",
          "1x1-432": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0AU/1x1-432.jpg",
          "1x1-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0zc/1x1-640.jpg",
          "1x1-840": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx1ms/1x1-840.jpg",
          "16x9-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxsX4/16x9-256.jpg",
          "16x9-384": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxtLY/16x9-384.jpg",
          "16x9-512": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxt-Y/16x9-512.jpg",
          "16x9-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxuyw/16x9-640.jpg",
          "16x9-960": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxwXw/16x9-960.jpg",
          "16x9-1280": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxqrQ/16x9-1280.jpg",
          "16x9-1920": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxrfI/16x9-1920.jpg"
        },
        "type": "image"
      },
      "details": "https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-ampelkoalition-100.json",
      "detailsweb": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-ampelkoalition-100.html",
      "shareURL": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-ampelkoalition-100.html",
      "geotags": [],
      "regionId": 0,
      "regionIds": [],
      "ressort": "inland",
      "crop": {
        "id": "TV-20230828-0039-1700",
        "type": "video",
        "croppingApiVersion": "1.1",
        "croppingUIVersion": "20220503.2",
        "croppingServiceVersion": "1.1",
        "noSound": false,
        "videoSrc": "",
        "imageSrc": [],
        "imageNames": [],
        "headerText": "Erneutes Gespräch im Kanzleramt",
        "mainTexts": [
          "Ampel einigt sich bei \nKindergrundsicherung",
          "Details soll es am Vormittag geben",
          "Hauptstreitpunkt war Finanzierungshöhe"
        ],
        "sceneSrcTexts": [
          "",
          "",
          "",
          ""
        ],
        "cameraMoves": [
          {
            "point1X": 0.3,
            "point1Y": -0.286,
            "point2X": 1,
            "point2Y": 1,
            "startLeft": 107,
            "endLeft": 172,
            "duration": 4720
          },
          {
            "point1X": 0.286,
            "point1Y": -0.286,
            "point2X": 1.1,
            "point2Y": 1,
            "startLeft": 160,
            "endLeft": 119,
            "duration": 3760
          },
          {
            "point1X": 0.429,
            "point1Y": -0.286,
            "point2X": 0.729,
            "point2Y": 1,
            "startLeft": 149,
            "endLeft": 224,
            "duration": 3840
          }
        ],
        "events": [
          [
            0,
            9,
            107
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
            107
          ],
          [
            40,
            0,
            107.04
          ],
          [
            80,
            0,
            107.12
          ],
          [
            120,
            0,
            107.24
          ],
          [
            160,
            0,
            107.4
          ],
          [
            200,
            0,
            107.61
          ],
          [
            240,
            0,
            107.84
          ],
          [
            280,
            0,
            108.11
          ],
          [
            320,
            0,
            108.4
          ],
          [
            360,
            0,
            108.73
          ],
          [
            400,
            0,
            109.08
          ],
          [
            440,
            0,
            109.45
          ],
          [
            480,
            0,
            109.84
          ],
          [
            520,
            0,
            110.25
          ],
          [
            560,
            0,
            110.68
          ],
          [
            600,
            0,
            111.13
          ],
          [
            640,
            0,
            111.59
          ],
          [
            680,
            0,
            112.07
          ],
          [
            720,
            0,
            112.56
          ],
          [
            760,
            0,
            113.07
          ],
          [
            800,
            0,
            113.59
          ],
          [
            840,
            0,
            114.12
          ],
          [
            880,
            0,
            114.67
          ],
          [
            920,
            0,
            115.22
          ],
          [
            960,
            0,
            115.79
          ],
          [
            1000,
            0,
            116.36
          ],
          [
            1040,
            0,
            116.94
          ],
          [
            1080,
            0,
            117.54
          ],
          [
            1120,
            0,
            118.14
          ],
          [
            1160,
            0,
            118.74
          ],
          [
            1200,
            0,
            119.36
          ],
          [
            1240,
            0,
            119.98
          ],
          [
            1280,
            0,
            120.61
          ],
          [
            1320,
            0,
            121.25
          ],
          [
            1360,
            0,
            121.89
          ],
          [
            1400,
            0,
            122.54
          ],
          [
            1440,
            0,
            123.19
          ],
          [
            1480,
            0,
            123.85
          ],
          [
            1520,
            0,
            124.52
          ],
          [
            1560,
            0,
            125.18
          ],
          [
            1600,
            0,
            125.85
          ],
          [
            1640,
            0,
            126.53
          ],
          [
            1680,
            0,
            127.21
          ],
          [
            1720,
            0,
            127.89
          ],
          [
            1760,
            0,
            128.58
          ],
          [
            1800,
            0,
            129.27
          ],
          [
            1840,
            0,
            129.96
          ],
          [
            1880,
            0,
            130.66
          ],
          [
            1920,
            0,
            131.36
          ],
          [
            1960,
            0,
            132.06
          ],
          [
            2000,
            0,
            132.76
          ],
          [
            2040,
            0,
            133.47
          ],
          [
            2080,
            0,
            134.17
          ],
          [
            2120,
            0,
            134.88
          ],
          [
            2160,
            0,
            135.59
          ],
          [
            2200,
            0,
            136.3
          ],
          [
            2240,
            0,
            137.01
          ],
          [
            2280,
            0,
            137.72
          ],
          [
            2320,
            0,
            138.44
          ],
          [
            2360,
            0,
            139.15
          ],
          [
            2400,
            0,
            139.86
          ],
          [
            2440,
            0,
            140.58
          ],
          [
            2480,
            0,
            141.29
          ],
          [
            2520,
            0,
            142
          ],
          [
            2560,
            0,
            142.71
          ],
          [
            2600,
            0,
            143.43
          ],
          [
            2640,
            0,
            144.14
          ],
          [
            2680,
            0,
            144.85
          ],
          [
            2720,
            0,
            145.56
          ],
          [
            2760,
            0,
            146.26
          ],
          [
            2800,
            0,
            146.97
          ],
          [
            2840,
            0,
            147.67
          ],
          [
            2880,
            0,
            148.37
          ],
          [
            2920,
            0,
            149.07
          ],
          [
            2960,
            0,
            149.77
          ],
          [
            3000,
            0,
            150.46
          ],
          [
            3040,
            0,
            151.16
          ],
          [
            3080,
            0,
            151.85
          ],
          [
            3120,
            0,
            152.53
          ],
          [
            3160,
            0,
            153.21
          ],
          [
            3200,
            0,
            153.89
          ],
          [
            3240,
            0,
            154.56
          ],
          [
            3280,
            0,
            155.23
          ],
          [
            3320,
            0,
            155.9
          ],
          [
            3360,
            0,
            156.56
          ],
          [
            3400,
            0,
            157.21
          ],
          [
            3440,
            0,
            157.86
          ],
          [
            3480,
            0,
            158.5
          ],
          [
            3520,
            0,
            159.14
          ],
          [
            3560,
            0,
            159.77
          ],
          [
            3600,
            0,
            160.39
          ],
          [
            3640,
            0,
            161.01
          ],
          [
            3680,
            0,
            161.62
          ],
          [
            3720,
            0,
            162.22
          ],
          [
            3760,
            0,
            162.81
          ],
          [
            3800,
            0,
            163.39
          ],
          [
            3840,
            0,
            163.96
          ],
          [
            3880,
            0,
            164.52
          ],
          [
            3920,
            0,
            165.07
          ],
          [
            3960,
            0,
            165.61
          ],
          [
            4000,
            0,
            166.14
          ],
          [
            4040,
            0,
            166.65
          ],
          [
            4080,
            0,
            167.15
          ],
          [
            4120,
            0,
            167.63
          ],
          [
            4160,
            0,
            168.1
          ],
          [
            4200,
            0,
            168.55
          ],
          [
            4240,
            0,
            168.98
          ],
          [
            4280,
            0,
            169.39
          ],
          [
            4320,
            0,
            169.78
          ],
          [
            4360,
            0,
            170.15
          ],
          [
            4400,
            0,
            170.49
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
            4440,
            0,
            170.81
          ],
          [
            4480,
            0,
            171.1
          ],
          [
            4520,
            0,
            171.35
          ],
          [
            4560,
            0,
            171.56
          ],
          [
            4600,
            0,
            171.74
          ],
          [
            4640,
            0,
            171.87
          ],
          [
            4680,
            0,
            171.96
          ],
          [
            4720,
            0,
            172
          ],
          [
            4760,
            9,
            160
          ],
          [
            4760,
            0,
            160
          ],
          [
            4920,
            10,
            1
          ],
          [
            4920,
            0,
            160
          ],
          [
            4960,
            0,
            159.97
          ],
          [
            5000,
            0,
            159.89
          ],
          [
            5040,
            0,
            159.76
          ],
          [
            5080,
            0,
            159.6
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
            159.41
          ],
          [
            5160,
            0,
            159.18
          ],
          [
            5200,
            0,
            158.94
          ],
          [
            5240,
            0,
            158.67
          ],
          [
            5280,
            0,
            158.38
          ],
          [
            5320,
            0,
            158.07
          ],
          [
            5360,
            0,
            157.75
          ],
          [
            5400,
            0,
            157.41
          ],
          [
            5440,
            0,
            157.06
          ],
          [
            5480,
            0,
            156.69
          ],
          [
            5520,
            0,
            156.32
          ],
          [
            5560,
            0,
            155.93
          ],
          [
            5600,
            0,
            155.53
          ],
          [
            5640,
            0,
            155.12
          ],
          [
            5680,
            0,
            154.71
          ],
          [
            5720,
            0,
            154.28
          ],
          [
            5760,
            0,
            153.85
          ],
          [
            5800,
            0,
            153.41
          ],
          [
            5840,
            0,
            152.96
          ],
          [
            5880,
            0,
            152.51
          ],
          [
            5920,
            0,
            152.05
          ],
          [
            5960,
            0,
            151.59
          ],
          [
            6000,
            0,
            151.12
          ],
          [
            6040,
            0,
            150.64
          ],
          [
            6080,
            0,
            150.16
          ],
          [
            6120,
            0,
            149.68
          ],
          [
            6160,
            0,
            149.19
          ],
          [
            6200,
            0,
            148.7
          ],
          [
            6240,
            0,
            148.2
          ],
          [
            6280,
            0,
            147.7
          ],
          [
            6320,
            0,
            147.2
          ],
          [
            6360,
            0,
            146.69
          ],
          [
            6400,
            0,
            146.18
          ],
          [
            6440,
            0,
            145.67
          ],
          [
            6480,
            0,
            145.16
          ],
          [
            6520,
            0,
            144.64
          ],
          [
            6560,
            0,
            144.12
          ],
          [
            6600,
            0,
            143.6
          ],
          [
            6640,
            0,
            143.07
          ],
          [
            6680,
            0,
            142.55
          ],
          [
            6720,
            0,
            142.02
          ],
          [
            6760,
            0,
            141.49
          ],
          [
            6800,
            0,
            140.96
          ],
          [
            6840,
            0,
            140.43
          ],
          [
            6880,
            0,
            139.9
          ],
          [
            6920,
            0,
            139.36
          ],
          [
            6960,
            0,
            138.83
          ],
          [
            7000,
            0,
            138.29
          ],
          [
            7040,
            0,
            137.76
          ],
          [
            7080,
            0,
            137.22
          ],
          [
            7120,
            0,
            136.68
          ],
          [
            7160,
            0,
            136.15
          ],
          [
            7200,
            0,
            135.61
          ],
          [
            7240,
            0,
            135.07
          ],
          [
            7280,
            0,
            134.54
          ],
          [
            7320,
            0,
            134
          ],
          [
            7360,
            0,
            133.47
          ],
          [
            7400,
            0,
            132.93
          ],
          [
            7440,
            0,
            132.4
          ],
          [
            7480,
            0,
            131.87
          ],
          [
            7520,
            0,
            131.34
          ],
          [
            7560,
            0,
            130.81
          ],
          [
            7600,
            0,
            130.28
          ],
          [
            7640,
            0,
            129.75
          ],
          [
            7680,
            0,
            129.23
          ],
          [
            7720,
            0,
            128.71
          ],
          [
            7760,
            0,
            128.19
          ],
          [
            7800,
            0,
            127.68
          ],
          [
            7840,
            0,
            127.17
          ],
          [
            7880,
            0,
            126.66
          ],
          [
            7920,
            0,
            126.16
          ],
          [
            7960,
            0,
            125.66
          ],
          [
            8000,
            0,
            125.17
          ],
          [
            8040,
            0,
            124.69
          ],
          [
            8080,
            0,
            124.21
          ],
          [
            8120,
            0,
            123.74
          ],
          [
            8160,
            0,
            123.27
          ],
          [
            8200,
            0,
            122.82
          ],
          [
            8240,
            0,
            122.37
          ],
          [
            8280,
            0,
            121.94
          ],
          [
            8320,
            0,
            121.52
          ],
          [
            8360,
            0,
            121.12
          ],
          [
            8400,
            0,
            120.73
          ],
          [
            8440,
            0,
            120.37
          ],
          [
            8480,
            0,
            120.03
          ],
          [
            8520,
            0,
            119.72
          ],
          [
            8560,
            0,
            119.45
          ],
          [
            8600,
            0,
            119.22
          ],
          [
            8640,
            0,
            119.07
          ],
          [
            8680,
            0,
            119
          ],
          [
            8720,
            9,
            195
          ],
          [
            8720,
            0,
            195
          ],
          [
            11080,
            2,
            0
          ],
          [
            11440,
            9,
            149
          ],
          [
            11440,
            0,
            149
          ],
          [
            11880,
            2,
            1
          ],
          [
            11880,
            3,
            2
          ],
          [
            12360,
            10,
            2
          ],
          [
            12360,
            0,
            149
          ],
          [
            12400,
            0,
            149.03
          ],
          [
            12440,
            0,
            149.1
          ],
          [
            12480,
            0,
            149.22
          ],
          [
            12520,
            0,
            149.39
          ],
          [
            12560,
            0,
            149.61
          ],
          [
            12600,
            0,
            149.88
          ],
          [
            12640,
            0,
            150.19
          ],
          [
            12680,
            0,
            150.55
          ],
          [
            12720,
            0,
            150.96
          ],
          [
            12760,
            0,
            151.41
          ],
          [
            12800,
            0,
            151.91
          ],
          [
            12840,
            0,
            152.45
          ],
          [
            12880,
            0,
            153.03
          ],
          [
            12920,
            0,
            153.66
          ],
          [
            12960,
            0,
            154.33
          ],
          [
            13000,
            0,
            155.04
          ],
          [
            13040,
            0,
            155.79
          ],
          [
            13080,
            0,
            156.58
          ],
          [
            13120,
            0,
            157.41
          ],
          [
            13160,
            0,
            158.27
          ],
          [
            13200,
            0,
            159.16
          ],
          [
            13240,
            0,
            160.1
          ],
          [
            13280,
            0,
            161.06
          ],
          [
            13320,
            0,
            162.06
          ],
          [
            13360,
            0,
            163.08
          ],
          [
            13400,
            0,
            164.14
          ],
          [
            13440,
            0,
            165.22
          ],
          [
            13480,
            0,
            166.32
          ],
          [
            13520,
            0,
            167.45
          ],
          [
            13560,
            0,
            168.6
          ],
          [
            13600,
            0,
            169.77
          ],
          [
            13640,
            0,
            170.96
          ],
          [
            13680,
            0,
            172.16
          ],
          [
            13720,
            0,
            173.38
          ],
          [
            13760,
            0,
            174.61
          ],
          [
            13800,
            0,
            175.86
          ],
          [
            13840,
            0,
            177.11
          ],
          [
            13880,
            0,
            178.37
          ],
          [
            13920,
            0,
            179.63
          ],
          [
            13960,
            0,
            180.9
          ],
          [
            14000,
            0,
            182.18
          ],
          [
            14040,
            0,
            183.45
          ],
          [
            14080,
            0,
            184.72
          ],
          [
            14120,
            0,
            185.99
          ],
          [
            14160,
            0,
            187.26
          ],
          [
            14200,
            0,
            188.52
          ],
          [
            14240,
            0,
            189.77
          ],
          [
            14280,
            0,
            191.02
          ],
          [
            14320,
            0,
            192.25
          ],
          [
            14360,
            0,
            193.48
          ],
          [
            14400,
            0,
            194.69
          ],
          [
            14440,
            0,
            195.89
          ],
          [
            14480,
            0,
            197.07
          ],
          [
            14520,
            0,
            198.23
          ],
          [
            14560,
            0,
            199.38
          ],
          [
            14600,
            0,
            200.51
          ],
          [
            14640,
            0,
            201.62
          ],
          [
            14680,
            0,
            202.71
          ],
          [
            14720,
            0,
            203.78
          ],
          [
            14760,
            0,
            204.83
          ],
          [
            14800,
            0,
            205.85
          ],
          [
            14840,
            0,
            206.85
          ],
          [
            14880,
            0,
            207.83
          ],
          [
            14920,
            0,
            208.78
          ],
          [
            14960,
            0,
            209.7
          ],
          [
            15000,
            0,
            210.6
          ],
          [
            15040,
            0,
            211.47
          ],
          [
            15080,
            0,
            212.32
          ],
          [
            15120,
            0,
            213.13
          ],
          [
            15160,
            2,
            0
          ],
          [
            15160,
            0,
            213.92
          ],
          [
            15200,
            0,
            214.69
          ],
          [
            15240,
            0,
            215.42
          ],
          [
            15280,
            0,
            216.12
          ],
          [
            15320,
            0,
            216.79
          ],
          [
            15360,
            0,
            217.43
          ],
          [
            15400,
            0,
            218.05
          ],
          [
            15440,
            0,
            218.63
          ],
          [
            15480,
            0,
            219.18
          ],
          [
            15520,
            0,
            219.71
          ],
          [
            15560,
            0,
            220.2
          ],
          [
            15600,
            0,
            220.66
          ],
          [
            15640,
            0,
            221.1
          ],
          [
            15680,
            0,
            221.5
          ],
          [
            15720,
            0,
            221.87
          ],
          [
            15760,
            0,
            222.21
          ],
          [
            15800,
            0,
            222.52
          ],
          [
            15840,
            0,
            222.81
          ],
          [
            15880,
            0,
            223.06
          ],
          [
            15920,
            0,
            223.27
          ],
          [
            15960,
            0,
            223.47
          ],
          [
            16000,
            0,
            223.63
          ],
          [
            16040,
            0,
            223.76
          ],
          [
            16080,
            0,
            223.86
          ],
          [
            16120,
            0,
            223.94
          ],
          [
            16160,
            0,
            223.98
          ],
          [
            16200,
            0,
            224
          ]
        ]
      },
      "type": "story",
      "breakingNews": false
    },{
      "sophoraId": "kindergrundsicherung-ampelkoalition-100",
      "externalId": "88cc19fa-667a-495b-872d-82240abf64ad",
      "title": "Ampel einigt sich bei Kindergrundsicherung",
      "date": "2023-08-28T07:59:54.874+02:00",
      "tags": [
        {
          "tag": "Kindergrundsicherung"
        },
        {
          "tag": "Christian Lindner"
        },
        {
          "tag": "Ampel-Koalition"
        }
      ],
      "updateCheckUrl": "https://www.tagesschau.de/api2u/kindergrundsicherung-ampelkoalition-100~_view-hasChanged_lastKnown-0F9A43B12F8713FFCDE4A53B6ABCC3AC.json",
      "content": [
        {
          "value": "<strong>Es war das vierte Treffen binnen einer Woche im Koalitionsstreit zur Kindergrundsicherung - und brachte am späten Abend eine Einigung, wie das <em>ARD-Hauptstadtstudio</em> erfuhr. Details sind noch nicht bekannt.</strong>",
          "type": "text"
        },
        {
          "value": "Nach monatelangem Streit hat die Bundesregierung eine Einigung zur Kindergrundsicherung erzielt. Das erfuhr das <em>ARD-Hauptstadtstudio </em>nach einem weiteren Treffen von Bundeskanzler Olaf Scholz (SPD), Familienministerin Lisa Paus (Grüne) und Finanzminister Christian Lindner (FDP), das am Sonntagnachmittag begonnen hatte.",
          "type": "text"
        },
        {
          "value": "Aus Grünen-Kreisen hieß es laut Nachrichtenagentur dpa: \"Heute Nacht ist die Einigung bei der Kindergrundsicherung erfolgt. Bundesministerin Paus kann das als Erfolg für sich verbuchen, dass es ihr gelungen ist, die Weichen für das Projekt zu stellen.\" Der Einigung waren verbissene Grundsatzdiskussionen vor allem zwischen den Grünen und der FDP in der Ampel vorausgegangen. ",
          "type": "text"
        },
        {
          "value": "Weitere Informationen zur neuen Familienleistung gebe es noch nicht, berichtete <em>ARD-Korrespondentin Kristin Becker </em>in der Nacht. Es gebe \"noch überhaupt keine Details\". Bekannt gegeben werden sollten diese voraussichtlich am Vormittag.",
          "type": "text"
        },
        {
          "value": "Ohne auf Einzelheiten einzugehen, äußerte sich SPD-Fraktionschef Rolf Mützenich am Morgen zu möglichen Änderungen am erwarteten Gesetzentwurf der Bundesregierung. \"Wir werden mit Sicherheit als selbstbewusstes Parlament, aber auch als selbstbewusste SPD-Fraktion das ein oder andere möglicherweise am Gesetzentwurf noch einmal modifizieren\", sagte er im <em>ARD-Morgenmagazin</em>. Die Regierung müsse nun \"mit Konzentration\" dafür sorgen, dass der Bundestag bald eine Vorlage bekomme. ",
          "type": "text"
        },
        {
          "video": {
            "sophoraId": "video-1240932",
            "externalId": "e3bbe63f-6e99-4b56-9e24-2db2fc538e23",
            "title": "Ampel-Regierung erzielt Einigung auf Eckpunkte bei der Kindergrundsicherung",
            "date": "2023-08-28T06:22:14.790+02:00",
            "teaserImage": {
              "title": "Sendungsbild",
              "copyright": "ARD-aktuell",
              "alttext": "Sendungsbild",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxx9M/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxyuw/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBx0AU/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBx0zc/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBx1ms/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxsX4/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxtLY/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxt-Y/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxuyw/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxwXw/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxqrQ/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/a4adea7d-18a0-42aa-8a11-72b6fd19c1d8/AAABijpblRI/AAABibBxrfI/16x9-1920.jpg"
              },
              "type": "image"
            },
            "tags": [],
            "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1240932~_view-hasChanged_lastKnown-741C41C381FA54C1357BA2EA56D865A8.json",
            "tracking": [
              {
                "sid": "app.multimedia.video.video-1240932",
                "src": "ard-aktuell",
                "ctp": "SEGMENT",
                "pdt": "20230828T0622",
                "otp": "video",
                "cid": "video-1240932",
                "pti": "Ampel-Regierung_erzielt_Einigung_auf_Eckpunkte_bei_der_Kindergrundsicherung",
                "bcr": "ja",
                "type": "generic"
              },
              {
                "assetid": "video-1240932",
                "program": "Morgenmagazin",
                "title": "Ampel-Regierung_erzielt_Einigung_auf_Eckpunkte_bei_der_Kindergrundsicherung",
                "length": "98",
                "c2": "p2,N",
                "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1240932.html",
                "c7": "p7,video-1240932",
                "c8": "p8,98",
                "c9": "p9,Morgenmagazin_Ampel-Regierung_erzielt_Einigung_auf_Eckpunkte_bei_der_Kindergrundsicherung_28.08.2023_0600",
                "c10": "p10,Das_Erste",
                "c12": "p12,content",
                "c15": "p15,X005017399",
                "c16": "p16,ARD_Information/ARD_Livestream",
                "c18": "p18,N",
                "type_nielsen": "content",
                "type": "nielsen"
              }
            ],
            "streams": {
              "h264s": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0611-2500.webs.h264.mp4",
              "h264m": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0611-2500.webm.h264.mp4",
              "h264xl": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0611-2500.webxl.h264.mp4",
              "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0828/TV-20230828-0611-2500.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
            },
            "alttext": "Sendungsbild",
            "copyright": "Kerstin Dausend, ARD Berlin",
            "type": "video"
          },
          "type": "video"
        },
        {
          "value": "<h2>Um Details wurde gerungen</h2>",
          "type": "headline"
        },
        {
          "value": "Lindner hatte vor der entscheidenden Sitzung im ZDF-\"Sommerinterview\" gesagt, dass er mit einer schnellen Einigung auf Eckpunkte rechne. Danach würden Verbände und Länder beteiligt, und erst dann werde es einen fertigen Gesetzentwurf geben, der an den Bundestag gehe. \"Wir werden rasch eine grundlegende Einigung und Verständigung auf die Eckpunkte haben\", betonte der Finanzminister. \"Das gesamte Verfahren wird noch etwas brauchen.\"",
          "type": "text"
        },
        {
          "box": {
            "image": {
              "title": "Bundeskanzler Olaf Scholz (SPD) spricht beim Tag der offenen Tür der Bundesregierung im Ehrenhof des Bundeskanzleramts.",
              "alttext": "Bundeskanzler Olaf Scholz (SPD) spricht beim Tag der offenen Tür der Bundesregierung im Ehrenhof des Bundeskanzleramts.",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxx9M/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxyuw/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBx0AU/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBx0zc/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBx1ms/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxsX4/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxtLY/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxt-Y/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxuyw/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxwXw/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxqrQ/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/ea01089d-1525-4d40-ba83-abe7b3238d8c/AAABihM26QQ/AAABibBxrfI/16x9-1920.jpg"
              },
              "type": "image"
            },
            "link": "<a href=\"https://www.tagesschau.de/api2u/inland/scholz-kindergrundsicherung-einigung-100.json\" type=\"intern\">mehr</a>",
            "subtitle": "Streit über Kindergrundsicherung",
            "text": "Im Streit um die Kindergrundsicherung hat Bundeskanzler Scholz eine Lösung bis kommende Woche angekündigt.",
            "title": "Scholz kündigt Einigung bis nächste Woche an"
          },
          "type": "box"
        },
        {
          "value": "<h2>Kindergrundsicherung im Koalitionsvertrag</h2>",
          "type": "headline"
        },
        {
          "value": "Die Einführung einer Kindergrundsicherung hatten die Ampel-Parteien in ihrem Koalitionsvertrag festgelegt. Bisherige Leistungen wie das Kindergeld, Leistungen aus dem Bürgergeld für Kinder oder der Kinderzuschlag sollen darin gebündelt werden. ",
          "type": "text"
        },
        {
          "value": "Durch mehr Übersichtlichkeit und mithilfe einer zentralen Plattform sollen auch viele Familien erreicht werden, die bisher wegen Unkenntnis oder bürokratischer Hürden ihnen zustehende Gelder nicht abrufen. \"Wir wollen mehr Kinder aus der Armut holen und setzen dabei insbesondere auch auf Digitalisierung\", heißt es dazu im Koalitionsvertrag. ",
          "type": "text"
        },
        {
          "video": {
            "sophoraId": "video-1240954",
            "externalId": "2b9a6e4d-5a24-4417-922c-1f2d76c3dc3a",
            "title": "\"Ganz zuversichtlich\", Rolf Mützenich, Vorsitzender SPD-Bundestagsfraktion zu Einigung bei der Kindergrundsicherung",
            "date": "2023-08-28T07:37:57.104+02:00",
            "teaserImage": {
              "title": "Sendungsbild",
              "copyright": "ARD-aktuell",
              "alttext": "Sendungsbild",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxx9M/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxyuw/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBx0AU/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBx0zc/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBx1ms/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxsX4/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxtLY/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxt-Y/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxuyw/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxwXw/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxqrQ/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/f38cdf8a-2b46-4397-8008-606c57bc1443/AAABijqldSA/AAABibBxrfI/16x9-1920.jpg"
              },
              "type": "image"
            },
            "tags": [],
            "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1240954~_view-hasChanged_lastKnown-61E31D395D1B9E821A907E0B18144918.json",
            "tracking": [
              {
                "sid": "app.multimedia.video.video-1240954",
                "src": "ard-aktuell",
                "ctp": "SEGMENT",
                "pdt": "20230828T0737",
                "otp": "video",
                "cid": "video-1240954",
                "pti": "Ganz_zuversichtlich_Rolf_Muetzenich_Vorsitzender_SPD-Bundestagsfraktion_zu_Einigung_bei_der_Kindergrundsicherung",
                "bcr": "ja",
                "type": "generic"
              },
              {
                "assetid": "video-1240954",
                "program": "Morgenmagazin",
                "title": "Ganz_zuversichtlich_Rolf_Muetzenich_Vorsitzender_SPD-Bundestagsfraktion_zu_Einigung_bei_der_Kindergrundsicherung",
                "length": "151",
                "c2": "p2,N",
                "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1240954.html",
                "c7": "p7,video-1240954",
                "c8": "p8,151",
                "c9": "p9,Morgenmagazin_Ganz_zuversichtlich_Rolf_Muetzenich_Vorsitzender_SPD-Bundestagsfraktion_zu_Einigung_bei_der_Kindergrundsicherung_28.08.2023_0700",
                "c10": "p10,Das_Erste",
                "c12": "p12,content",
                "c15": "p15,X005017399",
                "c16": "p16,ARD_Information/ARD_Livestream",
                "c18": "p18,N",
                "type_nielsen": "content",
                "type": "nielsen"
              }
            ],
            "streams": {
              "h264s": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0717-3100.webs.h264.mp4",
              "h264m": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0717-3100.webm.h264.mp4",
              "h264xl": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0717-3100.webxl.h264.mp4",
              "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0828/TV-20230828-0717-3100.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
            },
            "alttext": "Sendungsbild",
            "copyright": "tagesschau",
            "type": "video"
          },
          "type": "video"
        },
        {
          "value": "<h2>Paus blockiert Wachstumschancengesetz</h2>",
          "type": "headline"
        },
        {
          "value": "Seit Wochen waren sich Familienministerin Paus und Finanzminister Lindner über die Umsetzung des Großprojekts der Ampelkoalition uneins. Bislang wollte Lindner für das kommende Haushaltsjahr nur zwei Milliarden Euro dafür einplanen. Paus forderte bis zu zwölf Milliarden Euro und blockierte kürzlich ein Gesetz des Finanzministers zu Steuerentlastungen. ",
          "type": "text"
        },
        {
          "value": "Auf welche Summe sich die Koalition in den Gesprächen nun geeinigt hat, ist unbekannt. Die FDP sieht Leistungserhöhungen kritisch und hatte unter anderem auf das bereits erhöhte Kindergeld verwiesen. ",
          "type": "text"
        },
        {
          "box": {
            "image": {
              "alttext": "Familienministerin Lisa Paus",
              "imageVariants": {
                "1x1-144": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxx9M/1x1-144.jpg",
                "1x1-256": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxyuw/1x1-256.jpg",
                "1x1-432": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBx0AU/1x1-432.jpg",
                "1x1-640": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBx0zc/1x1-640.jpg",
                "1x1-840": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBx1ms/1x1-840.jpg",
                "16x9-256": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxsX4/16x9-256.jpg",
                "16x9-384": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxtLY/16x9-384.jpg",
                "16x9-512": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxt-Y/16x9-512.jpg",
                "16x9-640": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxuyw/16x9-640.jpg",
                "16x9-960": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxwXw/16x9-960.jpg",
                "16x9-1280": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxqrQ/16x9-1280.jpg",
                "16x9-1920": "https://images.tagesschau.de/image/95bea45c-607d-4559-9c8c-b002e3947382/AAABiiGIkLc/AAABibBxrfI/16x9-1920.jpg"
              },
              "type": "image"
            },
            "link": "<a href=\"https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-finanzierung-102.json\" type=\"intern\">mehr</a>",
            "subtitle": "Paus' Gesetzentwurf",
            "text": "Ein Konzept zur Kindergrundsicherung liegt vor. Aber wie viel darf das Projekt aus dem Familienministerium kosten?",
            "title": "Was soll die Kindergrundsicherung denn nun kosten?"
          },
          "type": "box"
        },
        {
          "value": "<h2>Merz: Mehr Geld löst die Probleme nicht</h2>",
          "type": "headline"
        },
        {
          "value": "CDU-Chef Friedrich <a href=\"https://www.tagesschau.de/api2u/inland/friedrich-merz-sommertinterview-100.json\" type=\"intern\">Merz kritisierte am Sonntag <em>ARD</em>-Sommerinterview</a> mit Blick auf die Kindergrundsicherung, dass mehr Geld die Probleme nicht löse. \"Die bessere Lösung wäre mehr Unterstützung der Kinder, bessere Bildungseinrichtungen, bessere Betreuungsmöglichkeiten.\" Nötig sei jetzt eine gemeinsame Kraftanstrengung von Bund, Ländern und Gemeinden. ",
          "type": "text"
        },
        {
          "value": "Der Präsident des Deutschen Landkreistages, Reinhard Sager, warnte in den Zeitungen der Funke Mediengruppe vor einem aufwendigen Behördenumbau. Das Projekt sollte daher auf ein Mindestmaß zurückgeschnitten werden, das sich in bestehende Strukturen einfüge. Zudem sei es äußerst ambitioniert, eine neue Leistung ab 2025 automatisiert und digital erbringen zu wollen. Sager schlägt vor, das Bürgergeld für Kinder zu erhöhen. ",
          "type": "text"
        },
        {
          "title": "Einigung bei Kindergrundsicherung",
          "date": "2023-08-28T06:07:45.289+02:00",
          "teaserImage": {
            "copyright": "ARD-aktuell",
            "alttext": "Hintergrundbild für den Audioplayer",
            "imageVariants": {
              "1x1-144": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxx9M/1x1-144.jpg",
              "1x1-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxyuw/1x1-256.jpg",
              "1x1-432": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBx0AU/1x1-432.jpg",
              "1x1-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBx0zc/1x1-640.jpg",
              "1x1-840": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBx1ms/1x1-840.jpg",
              "16x9-256": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxsX4/16x9-256.jpg",
              "16x9-384": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxtLY/16x9-384.jpg",
              "16x9-512": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxt-Y/16x9-512.jpg",
              "16x9-640": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxuyw/16x9-640.jpg",
              "16x9-960": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxwXw/16x9-960.jpg",
              "16x9-1280": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxqrQ/16x9-1280.jpg",
              "16x9-1920": "https://images.tagesschau.de/image/197a5977-3f5f-4c21-8c08-fad6ecb4b493/AAABh3S_z-w/AAABibBxrfI/16x9-1920.jpg"
            },
            "type": "image"
          },
          "tracking": [
            {
              "sid": "app.multimedia.audio.audio-169662",
              "src": "ard-aktuell",
              "ctp": "nicht-definiert",
              "pdt": "20230828T0607",
              "otp": "audio",
              "cid": "audio-169662",
              "pti": "Einigung_bei_Kindergrundsicherung",
              "bcr": "ja",
              "type": "generic"
            }
          ],
          "text": "Philip Brost, HR, ARD Berlin, 28.08.2023, 06:07 Uhr",
          "stream": "https://media.tagesschau.de/audio/2023/0828/AU-20230828-0604-1800.mp3",
          "type": "audio"
        },
        {
          "value": "<strong>Über dieses Thema berichtete die tagesschau am 27. August 2023 um 20:00 Uhr.</strong>",
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
                  "1x1-144": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/410ba79b-6783-4b92-b2f5-e47425757aae/AAABhn5xCg8/AAABibBxrfI/16x9-1920.jpg"
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
            },
            {
              "teaserImage": {
                "title": "Familienministerin Paus",
                "copyright": "ARD-aktuell",
                "alttext": "Bundesfamilienministerin Paus",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/e97e7bfa-d260-4060-8a6c-56a2408ccb21/AAABiR1gVCo/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-07-04T01:00:00.882+02:00",
              "sophoraId": "paus-tagesthemen-kindergrundsicherung-100",
              "externalId": "e185e6d5-68d9-4f0d-8ff7-ca9f58f0e25a",
              "topline": "Familienministerin Paus",
              "title": "\"Habe den Kanzler an meiner Seite\"",
              "details": "https://www.tagesschau.de/api2u/inland/paus-tagesthemen-kindergrundsicherung-100.json",
              "detailsweb": "https://www.tagesschau.de/inland/paus-tagesthemen-kindergrundsicherung-100.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "alttext": "Ein Kind isst in der Jugendkirche im Stadtteil Waldhof bei der 14. Mannheimer Kindervesperkirche ein Mittagessen.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/6e8b8bc6-6a53-4f4e-9c8d-e11d478f08f5/AAABiQsDCnE/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-06-30T08:22:12.511+02:00",
              "sophoraId": "kindergrundsicherung-wohlfahrtsverbaende-100",
              "externalId": "bd323fae-1769-4916-ad55-c9bc00f3de0c",
              "topline": "Streit in der Ampel",
              "title": "Verbände machen Druck bei Kindergrundsicherung",
              "details": "https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-wohlfahrtsverbaende-100.json",
              "detailsweb": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-wohlfahrtsverbaende-100.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "title": "",
                "copyright": "dpa",
                "alttext": "Ein Kind spielt in einer Kita.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/710f09cd-23a0-47a3-b7d0-15f7707945e1/AAABhnRTY_k/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-04-25T06:21:50.136+02:00",
              "sophoraId": "kindergrundsicherung-119",
              "externalId": "tagesschau_50eab2a3-674a-4afb-bf7b-0b85040e3409",
              "topline": "Kinderarmut",
              "title": "Im Dickicht der Bürokratie",
              "details": "https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-119.json",
              "detailsweb": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-119.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "alttext": "Bundesfinanzminister Lindner sitzt neben Familienministerin Paus am Kabinettstisch",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/2f5b95a6-7b36-4c7c-bfd5-c59f4463f5a8/AAABiSAAfz8/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-07-04T10:25:26.216+02:00",
              "sophoraId": "kindergrundsicherung-paus-100",
              "externalId": "310b60ec-1bfa-473b-b911-40db5191aa85",
              "topline": "Kindergrundsicherung ",
              "title": "Grüner Optimismus und liberale Zweifel",
              "details": "https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-paus-100.json",
              "detailsweb": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-paus-100.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "alttext": "Die Schatten von zwei Erwachsenen und einem Kind fallen in den Morgenstunden auf den Asphalt.",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/fe783efe-be73-4f32-bc67-453f10cd2287/AAABignEfhM/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-05-13T11:28:49.261+02:00",
              "sophoraId": "kindergrundsicherung-120",
              "externalId": "cc8e53c2-bb5a-407e-ae18-0d1ae4223023",
              "topline": "Reformprojekt",
              "title": "Der lange Weg zur Kindergrundsicherung",
              "details": "https://www.tagesschau.de/api2u/inland/kindergrundsicherung-120.json",
              "detailsweb": "https://www.tagesschau.de/inland/kindergrundsicherung-120.html",
              "type": "story"
            },
            {
              "teaserImage": {
                "alttext": "Friedrich Merz und Tina Hassel beim ARD-Sommerinterview",
                "imageVariants": {
                  "1x1-144": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxx9M/1x1-144.jpg",
                  "1x1-256": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxyuw/1x1-256.jpg",
                  "1x1-432": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBx0AU/1x1-432.jpg",
                  "1x1-640": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBx0zc/1x1-640.jpg",
                  "1x1-840": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBx1ms/1x1-840.jpg",
                  "16x9-256": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxsX4/16x9-256.jpg",
                  "16x9-384": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxtLY/16x9-384.jpg",
                  "16x9-512": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxt-Y/16x9-512.jpg",
                  "16x9-640": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxuyw/16x9-640.jpg",
                  "16x9-960": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxwXw/16x9-960.jpg",
                  "16x9-1280": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxqrQ/16x9-1280.jpg",
                  "16x9-1920": "https://images.tagesschau.de/image/2b00937e-24be-4e95-834b-e87b4343c725/AAABijbiYio/AAABibBxrfI/16x9-1920.jpg"
                },
                "type": "image"
              },
              "date": "2023-08-27T14:52:15.948+02:00",
              "sophoraId": "friedrich-merz-sommertinterview-100",
              "externalId": "3795e4b1-7d28-4bee-85bd-f1d165222e92",
              "topline": "ARD-Sommerinterview",
              "title": "Merz will \"wahnsinnigen Bürokratiewust stoppen\"",
              "details": "https://www.tagesschau.de/api2u/inland/friedrich-merz-sommertinterview-100.json",
              "detailsweb": "https://www.tagesschau.de/inland/friedrich-merz-sommertinterview-100.html",
              "type": "story"
            }
          ],
          "type": "related"
        }
      ],
      "tracking": [
        {
          "sid": "app.inland.innenpolitik.kindergrundsicherung-ampelkoalition-100",
          "src": "ard-aktuell",
          "ctp": "nicht-definiert",
          "pdt": "20230828T0034",
          "otp": "meldung",
          "cid": "kindergrundsicherung-ampelkoalition-100",
          "pti": "Koalition_einigt_sich_bei_Kindergrundsicherung",
          "bcr": "ja",
          "type": "generic"
        }
      ],
      "topline": "Nach Koalitionsstreit",
      "firstSentence": "Am späten Abend ist es zu einer Einigung gekommen - Informationen dazu werden am Vormittag erwartet.",
      "video": {
        "sophoraId": "video-1240876",
        "externalId": "4768157d-9573-483a-a5f0-a80ea511aa32",
        "title": "APP0030 NiF- EInigung Kindergrundsicherung_vapp.mxf",
        "date": "2023-08-28T00:50:32.310+02:00",
        "teaserImage": {
          "title": "Sendungsbild",
          "copyright": "ARD-aktuell",
          "alttext": "Sendungsbild",
          "imageVariants": {
            "1x1-144": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxx9M/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxyuw/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0AU/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0zc/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx1ms/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxsX4/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxtLY/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxt-Y/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxuyw/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxwXw/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxqrQ/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxrfI/16x9-1920.jpg"
          },
          "type": "image"
        },
        "tags": [],
        "updateCheckUrl": "https://www.tagesschau.de/api2u/video-1240876~_view-hasChanged_lastKnown-3553A88314DC91F7295DB4942C5C791A.json",
        "tracking": [
          {
            "sid": "app.multimedia.video.video-1240876",
            "src": "ard-aktuell",
            "ctp": "VERTICALAPPVIDEO",
            "pdt": "20230828T0050",
            "otp": "video",
            "cid": "video-1240876",
            "pti": "APP0030_NiF-_EInigung_Kindergrundsicherung_vapp.mxf",
            "bcr": "ja",
            "type": "generic"
          },
          {
            "assetid": "video-1240876",
            "program": "Tagesschau",
            "title": "APP0030_NiF-_EInigung_Kindergrundsicherung_vapp.mxf",
            "length": "17",
            "c2": "p2,N",
            "c5": "p5,https://www.tagesschau.de/multimedia/video/video-1240876.html",
            "c7": "p7,video-1240876",
            "c8": "p8,17",
            "c9": "p9,Tagesschau_APP0030_NiF-_EInigung_Kindergrundsicherung_vapp.mxf_28.08.2023_0050",
            "c10": "p10,Das_Erste",
            "c12": "p12,content",
            "c16": "p16,ARD_Information/ARD_Livestream",
            "c18": "p18,N",
            "type_nielsen": "content",
            "type": "nielsen"
          }
        ],
        "streams": {
          "h264s": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0039-1700.webs.h264.mp4",
          "h264m": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0039-1700.webm.h264.mp4",
          "h264xl": "https://media.tagesschau.de/video/2023/0828/TV-20230828-0039-1700.webxl.h264.mp4",
          "adaptivestreaming": "https://adaptive.tagesschau.de/i/video/2023/0828/TV-20230828-0039-1700.,webl.h264,webs.h264,webm.h264,webxl.h264,webxxl.h264,.mp4.csmil/master.m3u8"
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
            "1x1-144": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxx9M/1x1-144.jpg",
            "1x1-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxyuw/1x1-256.jpg",
            "1x1-432": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0AU/1x1-432.jpg",
            "1x1-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0zc/1x1-640.jpg",
            "1x1-840": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx1ms/1x1-840.jpg",
            "16x9-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxsX4/16x9-256.jpg",
            "16x9-384": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxtLY/16x9-384.jpg",
            "16x9-512": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxt-Y/16x9-512.jpg",
            "16x9-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxuyw/16x9-640.jpg",
            "16x9-960": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxwXw/16x9-960.jpg",
            "16x9-1280": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxqrQ/16x9-1280.jpg",
            "16x9-1920": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxrfI/16x9-1920.jpg"
          },
          "type": "image"
        }
      ],
      "firstFrame": {
        "title": "Sendungsbild",
        "copyright": "ARD-aktuell",
        "alttext": "Sendungsbild",
        "imageVariants": {
          "1x1-144": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxx9M/1x1-144.jpg",
          "1x1-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxyuw/1x1-256.jpg",
          "1x1-432": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0AU/1x1-432.jpg",
          "1x1-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx0zc/1x1-640.jpg",
          "1x1-840": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBx1ms/1x1-840.jpg",
          "16x9-256": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxsX4/16x9-256.jpg",
          "16x9-384": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxtLY/16x9-384.jpg",
          "16x9-512": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxt-Y/16x9-512.jpg",
          "16x9-640": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxuyw/16x9-640.jpg",
          "16x9-960": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxwXw/16x9-960.jpg",
          "16x9-1280": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxqrQ/16x9-1280.jpg",
          "16x9-1920": "https://images.tagesschau.de/image/9ee137ed-4150-46f4-aa8d-57c1064228f1/AAABijknIO4/AAABibBxrfI/16x9-1920.jpg"
        },
        "type": "image"
      },
      "details": "https://www.tagesschau.de/api2u/inland/innenpolitik/kindergrundsicherung-ampelkoalition-100.json",
      "detailsweb": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-ampelkoalition-100.html",
      "shareURL": "https://www.tagesschau.de/inland/innenpolitik/kindergrundsicherung-ampelkoalition-100.html",
      "geotags": [],
      "regionId": 0,
      "regionIds": [],
      "ressort": "inland",
      "crop": {
        "id": "TV-20230828-0039-1700",
        "type": "video",
        "croppingApiVersion": "1.1",
        "croppingUIVersion": "20220503.2",
        "croppingServiceVersion": "1.1",
        "noSound": false,
        "videoSrc": "",
        "imageSrc": [],
        "imageNames": [],
        "headerText": "Erneutes Gespräch im Kanzleramt",
        "mainTexts": [
          "Ampel einigt sich bei \nKindergrundsicherung",
          "Details soll es am Vormittag geben",
          "Hauptstreitpunkt war Finanzierungshöhe"
        ],
        "sceneSrcTexts": [
          "",
          "",
          "",
          ""
        ],
        "cameraMoves": [
          {
            "point1X": 0.3,
            "point1Y": -0.286,
            "point2X": 1,
            "point2Y": 1,
            "startLeft": 107,
            "endLeft": 172,
            "duration": 4720
          },
          {
            "point1X": 0.286,
            "point1Y": -0.286,
            "point2X": 1.1,
            "point2Y": 1,
            "startLeft": 160,
            "endLeft": 119,
            "duration": 3760
          },
          {
            "point1X": 0.429,
            "point1Y": -0.286,
            "point2X": 0.729,
            "point2Y": 1,
            "startLeft": 149,
            "endLeft": 224,
            "duration": 3840
          }
        ],
        "events": [
          [
            0,
            9,
            107
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
            107
          ],
          [
            40,
            0,
            107.04
          ],
          [
            80,
            0,
            107.12
          ],
          [
            120,
            0,
            107.24
          ],
          [
            160,
            0,
            107.4
          ],
          [
            200,
            0,
            107.61
          ],
          [
            240,
            0,
            107.84
          ],
          [
            280,
            0,
            108.11
          ],
          [
            320,
            0,
            108.4
          ],
          [
            360,
            0,
            108.73
          ],
          [
            400,
            0,
            109.08
          ],
          [
            440,
            0,
            109.45
          ],
          [
            480,
            0,
            109.84
          ],
          [
            520,
            0,
            110.25
          ],
          [
            560,
            0,
            110.68
          ],
          [
            600,
            0,
            111.13
          ],
          [
            640,
            0,
            111.59
          ],
          [
            680,
            0,
            112.07
          ],
          [
            720,
            0,
            112.56
          ],
          [
            760,
            0,
            113.07
          ],
          [
            800,
            0,
            113.59
          ],
          [
            840,
            0,
            114.12
          ],
          [
            880,
            0,
            114.67
          ],
          [
            920,
            0,
            115.22
          ],
          [
            960,
            0,
            115.79
          ],
          [
            1000,
            0,
            116.36
          ],
          [
            1040,
            0,
            116.94
          ],
          [
            1080,
            0,
            117.54
          ],
          [
            1120,
            0,
            118.14
          ],
          [
            1160,
            0,
            118.74
          ],
          [
            1200,
            0,
            119.36
          ],
          [
            1240,
            0,
            119.98
          ],
          [
            1280,
            0,
            120.61
          ],
          [
            1320,
            0,
            121.25
          ],
          [
            1360,
            0,
            121.89
          ],
          [
            1400,
            0,
            122.54
          ],
          [
            1440,
            0,
            123.19
          ],
          [
            1480,
            0,
            123.85
          ],
          [
            1520,
            0,
            124.52
          ],
          [
            1560,
            0,
            125.18
          ],
          [
            1600,
            0,
            125.85
          ],
          [
            1640,
            0,
            126.53
          ],
          [
            1680,
            0,
            127.21
          ],
          [
            1720,
            0,
            127.89
          ],
          [
            1760,
            0,
            128.58
          ],
          [
            1800,
            0,
            129.27
          ],
          [
            1840,
            0,
            129.96
          ],
          [
            1880,
            0,
            130.66
          ],
          [
            1920,
            0,
            131.36
          ],
          [
            1960,
            0,
            132.06
          ],
          [
            2000,
            0,
            132.76
          ],
          [
            2040,
            0,
            133.47
          ],
          [
            2080,
            0,
            134.17
          ],
          [
            2120,
            0,
            134.88
          ],
          [
            2160,
            0,
            135.59
          ],
          [
            2200,
            0,
            136.3
          ],
          [
            2240,
            0,
            137.01
          ],
          [
            2280,
            0,
            137.72
          ],
          [
            2320,
            0,
            138.44
          ],
          [
            2360,
            0,
            139.15
          ],
          [
            2400,
            0,
            139.86
          ],
          [
            2440,
            0,
            140.58
          ],
          [
            2480,
            0,
            141.29
          ],
          [
            2520,
            0,
            142
          ],
          [
            2560,
            0,
            142.71
          ],
          [
            2600,
            0,
            143.43
          ],
          [
            2640,
            0,
            144.14
          ],
          [
            2680,
            0,
            144.85
          ],
          [
            2720,
            0,
            145.56
          ],
          [
            2760,
            0,
            146.26
          ],
          [
            2800,
            0,
            146.97
          ],
          [
            2840,
            0,
            147.67
          ],
          [
            2880,
            0,
            148.37
          ],
          [
            2920,
            0,
            149.07
          ],
          [
            2960,
            0,
            149.77
          ],
          [
            3000,
            0,
            150.46
          ],
          [
            3040,
            0,
            151.16
          ],
          [
            3080,
            0,
            151.85
          ],
          [
            3120,
            0,
            152.53
          ],
          [
            3160,
            0,
            153.21
          ],
          [
            3200,
            0,
            153.89
          ],
          [
            3240,
            0,
            154.56
          ],
          [
            3280,
            0,
            155.23
          ],
          [
            3320,
            0,
            155.9
          ],
          [
            3360,
            0,
            156.56
          ],
          [
            3400,
            0,
            157.21
          ],
          [
            3440,
            0,
            157.86
          ],
          [
            3480,
            0,
            158.5
          ],
          [
            3520,
            0,
            159.14
          ],
          [
            3560,
            0,
            159.77
          ],
          [
            3600,
            0,
            160.39
          ],
          [
            3640,
            0,
            161.01
          ],
          [
            3680,
            0,
            161.62
          ],
          [
            3720,
            0,
            162.22
          ],
          [
            3760,
            0,
            162.81
          ],
          [
            3800,
            0,
            163.39
          ],
          [
            3840,
            0,
            163.96
          ],
          [
            3880,
            0,
            164.52
          ],
          [
            3920,
            0,
            165.07
          ],
          [
            3960,
            0,
            165.61
          ],
          [
            4000,
            0,
            166.14
          ],
          [
            4040,
            0,
            166.65
          ],
          [
            4080,
            0,
            167.15
          ],
          [
            4120,
            0,
            167.63
          ],
          [
            4160,
            0,
            168.1
          ],
          [
            4200,
            0,
            168.55
          ],
          [
            4240,
            0,
            168.98
          ],
          [
            4280,
            0,
            169.39
          ],
          [
            4320,
            0,
            169.78
          ],
          [
            4360,
            0,
            170.15
          ],
          [
            4400,
            0,
            170.49
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
            4440,
            0,
            170.81
          ],
          [
            4480,
            0,
            171.1
          ],
          [
            4520,
            0,
            171.35
          ],
          [
            4560,
            0,
            171.56
          ],
          [
            4600,
            0,
            171.74
          ],
          [
            4640,
            0,
            171.87
          ],
          [
            4680,
            0,
            171.96
          ],
          [
            4720,
            0,
            172
          ],
          [
            4760,
            9,
            160
          ],
          [
            4760,
            0,
            160
          ],
          [
            4920,
            10,
            1
          ],
          [
            4920,
            0,
            160
          ],
          [
            4960,
            0,
            159.97
          ],
          [
            5000,
            0,
            159.89
          ],
          [
            5040,
            0,
            159.76
          ],
          [
            5080,
            0,
            159.6
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
            159.41
          ],
          [
            5160,
            0,
            159.18
          ],
          [
            5200,
            0,
            158.94
          ],
          [
            5240,
            0,
            158.67
          ],
          [
            5280,
            0,
            158.38
          ],
          [
            5320,
            0,
            158.07
          ],
          [
            5360,
            0,
            157.75
          ],
          [
            5400,
            0,
            157.41
          ],
          [
            5440,
            0,
            157.06
          ],
          [
            5480,
            0,
            156.69
          ],
          [
            5520,
            0,
            156.32
          ],
          [
            5560,
            0,
            155.93
          ],
          [
            5600,
            0,
            155.53
          ],
          [
            5640,
            0,
            155.12
          ],
          [
            5680,
            0,
            154.71
          ],
          [
            5720,
            0,
            154.28
          ],
          [
            5760,
            0,
            153.85
          ],
          [
            5800,
            0,
            153.41
          ],
          [
            5840,
            0,
            152.96
          ],
          [
            5880,
            0,
            152.51
          ],
          [
            5920,
            0,
            152.05
          ],
          [
            5960,
            0,
            151.59
          ],
          [
            6000,
            0,
            151.12
          ],
          [
            6040,
            0,
            150.64
          ],
          [
            6080,
            0,
            150.16
          ],
          [
            6120,
            0,
            149.68
          ],
          [
            6160,
            0,
            149.19
          ],
          [
            6200,
            0,
            148.7
          ],
          [
            6240,
            0,
            148.2
          ],
          [
            6280,
            0,
            147.7
          ],
          [
            6320,
            0,
            147.2
          ],
          [
            6360,
            0,
            146.69
          ],
          [
            6400,
            0,
            146.18
          ],
          [
            6440,
            0,
            145.67
          ],
          [
            6480,
            0,
            145.16
          ],
          [
            6520,
            0,
            144.64
          ],
          [
            6560,
            0,
            144.12
          ],
          [
            6600,
            0,
            143.6
          ],
          [
            6640,
            0,
            143.07
          ],
          [
            6680,
            0,
            142.55
          ],
          [
            6720,
            0,
            142.02
          ],
          [
            6760,
            0,
            141.49
          ],
          [
            6800,
            0,
            140.96
          ],
          [
            6840,
            0,
            140.43
          ],
          [
            6880,
            0,
            139.9
          ],
          [
            6920,
            0,
            139.36
          ],
          [
            6960,
            0,
            138.83
          ],
          [
            7000,
            0,
            138.29
          ],
          [
            7040,
            0,
            137.76
          ],
          [
            7080,
            0,
            137.22
          ],
          [
            7120,
            0,
            136.68
          ],
          [
            7160,
            0,
            136.15
          ],
          [
            7200,
            0,
            135.61
          ],
          [
            7240,
            0,
            135.07
          ],
          [
            7280,
            0,
            134.54
          ],
          [
            7320,
            0,
            134
          ],
          [
            7360,
            0,
            133.47
          ],
          [
            7400,
            0,
            132.93
          ],
          [
            7440,
            0,
            132.4
          ],
          [
            7480,
            0,
            131.87
          ],
          [
            7520,
            0,
            131.34
          ],
          [
            7560,
            0,
            130.81
          ],
          [
            7600,
            0,
            130.28
          ],
          [
            7640,
            0,
            129.75
          ],
          [
            7680,
            0,
            129.23
          ],
          [
            7720,
            0,
            128.71
          ],
          [
            7760,
            0,
            128.19
          ],
          [
            7800,
            0,
            127.68
          ],
          [
            7840,
            0,
            127.17
          ],
          [
            7880,
            0,
            126.66
          ],
          [
            7920,
            0,
            126.16
          ],
          [
            7960,
            0,
            125.66
          ],
          [
            8000,
            0,
            125.17
          ],
          [
            8040,
            0,
            124.69
          ],
          [
            8080,
            0,
            124.21
          ],
          [
            8120,
            0,
            123.74
          ],
          [
            8160,
            0,
            123.27
          ],
          [
            8200,
            0,
            122.82
          ],
          [
            8240,
            0,
            122.37
          ],
          [
            8280,
            0,
            121.94
          ],
          [
            8320,
            0,
            121.52
          ],
          [
            8360,
            0,
            121.12
          ],
          [
            8400,
            0,
            120.73
          ],
          [
            8440,
            0,
            120.37
          ],
          [
            8480,
            0,
            120.03
          ],
          [
            8520,
            0,
            119.72
          ],
          [
            8560,
            0,
            119.45
          ],
          [
            8600,
            0,
            119.22
          ],
          [
            8640,
            0,
            119.07
          ],
          [
            8680,
            0,
            119
          ],
          [
            8720,
            9,
            195
          ],
          [
            8720,
            0,
            195
          ],
          [
            11080,
            2,
            0
          ],
          [
            11440,
            9,
            149
          ],
          [
            11440,
            0,
            149
          ],
          [
            11880,
            2,
            1
          ],
          [
            11880,
            3,
            2
          ],
          [
            12360,
            10,
            2
          ],
          [
            12360,
            0,
            149
          ],
          [
            12400,
            0,
            149.03
          ],
          [
            12440,
            0,
            149.1
          ],
          [
            12480,
            0,
            149.22
          ],
          [
            12520,
            0,
            149.39
          ],
          [
            12560,
            0,
            149.61
          ],
          [
            12600,
            0,
            149.88
          ],
          [
            12640,
            0,
            150.19
          ],
          [
            12680,
            0,
            150.55
          ],
          [
            12720,
            0,
            150.96
          ],
          [
            12760,
            0,
            151.41
          ],
          [
            12800,
            0,
            151.91
          ],
          [
            12840,
            0,
            152.45
          ],
          [
            12880,
            0,
            153.03
          ],
          [
            12920,
            0,
            153.66
          ],
          [
            12960,
            0,
            154.33
          ],
          [
            13000,
            0,
            155.04
          ],
          [
            13040,
            0,
            155.79
          ],
          [
            13080,
            0,
            156.58
          ],
          [
            13120,
            0,
            157.41
          ],
          [
            13160,
            0,
            158.27
          ],
          [
            13200,
            0,
            159.16
          ],
          [
            13240,
            0,
            160.1
          ],
          [
            13280,
            0,
            161.06
          ],
          [
            13320,
            0,
            162.06
          ],
          [
            13360,
            0,
            163.08
          ],
          [
            13400,
            0,
            164.14
          ],
          [
            13440,
            0,
            165.22
          ],
          [
            13480,
            0,
            166.32
          ],
          [
            13520,
            0,
            167.45
          ],
          [
            13560,
            0,
            168.6
          ],
          [
            13600,
            0,
            169.77
          ],
          [
            13640,
            0,
            170.96
          ],
          [
            13680,
            0,
            172.16
          ],
          [
            13720,
            0,
            173.38
          ],
          [
            13760,
            0,
            174.61
          ],
          [
            13800,
            0,
            175.86
          ],
          [
            13840,
            0,
            177.11
          ],
          [
            13880,
            0,
            178.37
          ],
          [
            13920,
            0,
            179.63
          ],
          [
            13960,
            0,
            180.9
          ],
          [
            14000,
            0,
            182.18
          ],
          [
            14040,
            0,
            183.45
          ],
          [
            14080,
            0,
            184.72
          ],
          [
            14120,
            0,
            185.99
          ],
          [
            14160,
            0,
            187.26
          ],
          [
            14200,
            0,
            188.52
          ],
          [
            14240,
            0,
            189.77
          ],
          [
            14280,
            0,
            191.02
          ],
          [
            14320,
            0,
            192.25
          ],
          [
            14360,
            0,
            193.48
          ],
          [
            14400,
            0,
            194.69
          ],
          [
            14440,
            0,
            195.89
          ],
          [
            14480,
            0,
            197.07
          ],
          [
            14520,
            0,
            198.23
          ],
          [
            14560,
            0,
            199.38
          ],
          [
            14600,
            0,
            200.51
          ],
          [
            14640,
            0,
            201.62
          ],
          [
            14680,
            0,
            202.71
          ],
          [
            14720,
            0,
            203.78
          ],
          [
            14760,
            0,
            204.83
          ],
          [
            14800,
            0,
            205.85
          ],
          [
            14840,
            0,
            206.85
          ],
          [
            14880,
            0,
            207.83
          ],
          [
            14920,
            0,
            208.78
          ],
          [
            14960,
            0,
            209.7
          ],
          [
            15000,
            0,
            210.6
          ],
          [
            15040,
            0,
            211.47
          ],
          [
            15080,
            0,
            212.32
          ],
          [
            15120,
            0,
            213.13
          ],
          [
            15160,
            2,
            0
          ],
          [
            15160,
            0,
            213.92
          ],
          [
            15200,
            0,
            214.69
          ],
          [
            15240,
            0,
            215.42
          ],
          [
            15280,
            0,
            216.12
          ],
          [
            15320,
            0,
            216.79
          ],
          [
            15360,
            0,
            217.43
          ],
          [
            15400,
            0,
            218.05
          ],
          [
            15440,
            0,
            218.63
          ],
          [
            15480,
            0,
            219.18
          ],
          [
            15520,
            0,
            219.71
          ],
          [
            15560,
            0,
            220.2
          ],
          [
            15600,
            0,
            220.66
          ],
          [
            15640,
            0,
            221.1
          ],
          [
            15680,
            0,
            221.5
          ],
          [
            15720,
            0,
            221.87
          ],
          [
            15760,
            0,
            222.21
          ],
          [
            15800,
            0,
            222.52
          ],
          [
            15840,
            0,
            222.81
          ],
          [
            15880,
            0,
            223.06
          ],
          [
            15920,
            0,
            223.27
          ],
          [
            15960,
            0,
            223.47
          ],
          [
            16000,
            0,
            223.63
          ],
          [
            16040,
            0,
            223.76
          ],
          [
            16080,
            0,
            223.86
          ],
          [
            16120,
            0,
            223.94
          ],
          [
            16160,
            0,
            223.98
          ],
          [
            16200,
            0,
            224
          ]
        ]
      },
      "type": "story",
      "breakingNews": true
    }]})
    setWeather({})
    setDates({})
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
  const [rssEnabled, setRssEnabled] = useState(false)
  const [newsEnabled, setNewsEnabled] = useState(false)
  const [weatherEnabled, setWeatherEnabled] = useState(false)
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
    }
  }, []);

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
    }
  }, [refetch]);

  useEffect(() => {
    if(rssEnabled) {
      rssFetcher()
    }
  }, [rssEnabled]);

  useEffect(() => {
    buildNewsCards()
    if(newsEnabled) {
      fetchNews();
    }
  }, [newsEnabled]);

  useEffect(() => {
    if(weatherEnabled) {
      fetchWeather();
    }
  }, [weatherEnabled]);

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
    <Card style={{ backgroundColor: 'red' }} sx={{width:"3000px"}}>
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
    setRefetch={setRefetch}
    refetch={refetch}
  />
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
            sx={{width:"3000px"}}
          >
              <CardMedia
                component="img"
                image={newsCards[index].image}
                height="960px"
                width="2500px"
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