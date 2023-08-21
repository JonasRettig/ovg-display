import React from "react";
import { useState, useEffect } from "react";
import {
    Typography,
    Stack,
} from "@mui/material";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

export default function WeatherMap({enabled, refetch}){

    const OVGLonLat = [7.624711, 51.959875];
    const OVGWebMercator = fromLonLat(OVGLonLat);

    useEffect(() => {
        //if(enabled) {
            const map = new Map({
                controls: [],
                target: 'map',
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    center: OVGWebMercator,
                    zoom: 9
                })
            });

            const weatherLayer = new TileLayer({
                source: new OSM({
                    url: `https://tile.openweathermap.org/map/precipitation_new/9/52/8.png?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
                })
            });

            map.addLayer(weatherLayer);
        //}
    }, [enabled, refetch]);

    return(
        <Stack>
            <Typography>WeatherMap</Typography>
            {/* enabled ? */
            <div id="map" style={{width: "500px", height: "500px"}}></div>
            /*: 
        <Typography> WeatherMap is disabled </Typography>*/}
        </Stack>
    )
}