// a component that defines a small settings window for the site
// not really needed for the final production, built this so i can easily showcase light and dark theme
// and to disable the fetches for the weather and the news so I don't get rate limited while developing
import {React, useState} from 'react';
import { 
    Dialog, 
    DialogContent, 
    DialogTitle,
    IconButton,
    Stack,
    Typography,
    Select,
    MenuItem,
    FormControl,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CachedIcon from '@mui/icons-material/Cached';

export default function Settings({
    currentThemeName, 
    handleCurrentThemeChange, 
    rssEnabled,
    setRssEnabled,
    newsEnabled,
    setNewsEnabled,
    weatherEnabled,
    setWeatherEnabled,
    setDates,
    setNews,
    setBreakingNews,
    setWeather,
    demoMode,
    setDemoMode,
    setRefetch, 
    refetch
}) {
    
    // state that defines if the window is open or not
    const [showSettings, setShowSettings] = useState(false);
    const [startOpacity, setStartOpacity] = useState(0)

    // size of the icons in the settings window
    const iconSize = 70;

    // function that handles the demo mode change
    // if the demo mode is switched off all the mock data is cleared
    function handleDemoChange(event){
        setDemoMode(event)
        if(event === "off"){
            setBreakingNews([]); 
            setNews([]); 
            setDates({}); 
            setWeather({});
        }
    }
    
    return (
        <>
        <IconButton
        sx={{
            position: 'absolute',
            top: 1,
            right: 1,
            zIndex: 9999,
            opacity: startOpacity,
            transition: 'opacity 0.2s ease-in-out',
            '&:hover': {
            opacity: 1,
            },
        }}
        onMouseDown={() => setShowSettings(!showSettings)}
        >
        <SettingsIcon sx={{fontSize: 100}} />
        </IconButton>
        <Dialog
            open={showSettings} 
            onClose={() => setShowSettings(false)}
            fullWidth={true}
            maxWidth={"xl"}
        >
            <DialogTitle variant='h1' alignSelf={"center"}>Settings</DialogTitle>
            <DialogContent>
                <Stack direction={"column"}>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Das aktuelle Theme ist <b>{currentThemeName}</b> </Typography>
                        <IconButton onMouseDown={() => handleCurrentThemeChange()}>
                            {currentThemeName === 'dark' ? <Brightness7Icon sx={{fontSize: iconSize}}/> : <Brightness4Icon sx={{fontSize: iconSize}}/>}
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Alle Elemente <b>aktivieren</b> </Typography>
                        <IconButton onMouseDown={() => {setNewsEnabled(true); setRssEnabled(true); setWeatherEnabled(true); setDemoMode("off")}}>
                            <AirplanemodeActiveIcon sx={{fontSize: iconSize}}/>
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Der RSS-Feed ist <b>{rssEnabled ? "aktiviert" : "deaktiviert"}</b> </Typography>
                        <IconButton onMouseDown={() => {setRssEnabled(!rssEnabled); setDemoMode("off")}}>
                            {!rssEnabled ? <AirplanemodeInactiveIcon sx={{fontSize: iconSize}}/> : <AirplanemodeActiveIcon sx={{fontSize: iconSize}}/>}
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Die Nachrichten sind <b>{newsEnabled ? "aktiviert" : "deaktiviert"}</b> </Typography>
                        <IconButton onMouseDown={() => {setNewsEnabled(!newsEnabled); setDemoMode("off")}}>
                            {!newsEnabled ? <AirplanemodeInactiveIcon sx={{fontSize: iconSize}}/> : <AirplanemodeActiveIcon sx={{fontSize: iconSize}}/>}
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Das Wetter ist <b>{weatherEnabled ? "aktiviert" : "deaktiviert"}</b> </Typography>
                        <IconButton onMouseDown={() => {setWeatherEnabled(!weatherEnabled) ; setDemoMode("off")}}>
                            {!weatherEnabled ? <AirplanemodeInactiveIcon sx={{fontSize: iconSize}}/> : <AirplanemodeActiveIcon sx={{fontSize: iconSize}}/>}
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Die Button ist <b>{(startOpacity === 0) ? "unsichtbar" : "sichtbar"}</b> </Typography>
                        <IconButton onMouseDown={() => setStartOpacity((startOpacity === 0) ? 1 : 0)}>
                            {(startOpacity === 0) ? <VisibilityOffIcon sx={{fontSize: iconSize}}/> : <VisibilityIcon sx={{fontSize: iconSize}}/>}
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Den Seiteninhalt <b>neuladen</b> </Typography>
                        <IconButton onMouseDown={() => {setRefetch(!refetch); setBreakingNews([]); setNews([]); setDates({}); setWeather({}); setDemoMode("off")}}>
                            <CachedIcon sx={{fontSize: iconSize}}/>
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Der Demo-Modus ist gerade </Typography>
                        <FormControl sx={{ minWidth: 300}}>
                            <Select
                            value={demoMode}
                            onChange={(e) => {handleDemoChange(e.target.value)}}
                            >
                                <MenuItem value={"off"}> <Typography variant='h2'> <b>deaktiviert</b> </Typography></MenuItem>
                                <MenuItem value={"breakingNews"}><Typography variant='h2'> <b>Breaking News</b> </Typography></MenuItem>
                                <MenuItem value={"weatherWarnings"}><Typography variant='h2'> <b>Wetter Warnings</b> </Typography></MenuItem>
                                <MenuItem value={"chaos"}><Typography variant='h2'> <b>Chaos</b> </Typography></MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                </Stack>
            </DialogContent>
        </Dialog>
        </>
    );
}