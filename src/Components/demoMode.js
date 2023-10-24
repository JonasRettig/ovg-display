import { useEffect } from "react"

export default function DemoMode({
    demoMode, 
    setDates, 
    setNewsCards, 
    setBreakingNews, 
    setWarnings, 
    setWeather, 
    setRssEnabled, 
    setNewsEnabled, 
    setWeatherEnabled,
    setRefetch,
    refetch,
    setLastAPICall,
}) {

    const breakingNews = {
        title: "Dies ist eine Demo Eilmeldung",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }

    const time = Date.now()/1000

    const warnings = {
    "time": time,
    "warnings": [
        {
        "level": 3,
        "warnId" : 123456789,
        "start": time * 1000,
        "end": (time + 3600) * 1000,
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
        "warnId" : 234567891,
        "start": (time - 3600) * 1000,
        "end": (time + 6000) * 1000,
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

useEffect(() => {
    if(demoMode === "off") {
        setLastAPICall(0)
        setRssEnabled(true)
        setNewsEnabled(true)
        setWeatherEnabled(true)
        setRefetch(!refetch)
    } else if(demoMode !== "off") {
        setRssEnabled(false)
        setNewsEnabled(false)
        setWeatherEnabled(false)
        setDates([
            {id: 1, title: "Demo Termin", case: "Demo Fall", type: "Demo Typ", procedure : "Demo Procedure"},
            {id: 2, title: "Demo Termin", case: "Demo Fall", type: "Demo Typ", procedure : "Demo Procedure"}, 
            {id: 3, title: "Demo Termin", case: "Demo Fall", type: "Demo Typ", procedure : "Demo Procedure"},
            {id: 4, title: "Demo Termin", case: "Demo Fall", type: "Demo Typ", procedure : "Demo Procedure"},
            {id: 6, title: "Demo Termin 2", case: "Demo Fall 2", type: "Demo Typ 2", procedure : "Demo Procedure", info:"abgesagt"}])
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
            {"dt":time +  1759, "temp":23, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"03d"}]},
            {"dt":time + 3600 * 2,"temp":24, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"04d"}]},
            {"dt":time + 3600 * 3,"temp":25, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"09d"}]},
            {"dt":time + 3600 * 4,"temp":26, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"11d"}]},
            {"dt":time + 3600 * 5,"temp":27, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"13d"}]},
            {"dt":time + 3600 * 6,"temp":27, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"13d"}]},
            {"dt":time + 3600 * 7,"temp":27, "weather":[{"id":800,"main":"Clear","description":"Klarer Himmel","icon":"13d"}]},
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }}, [demoMode])
}