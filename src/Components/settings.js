// a component that defines a small settings window for the site
// not really needed for the final production, built this so i can easily showcase light and dark theme
// and to disable the fetches for the weather and the news so I don't get rate limited while developing
import {React, useEffect, useState} from 'react';
import { 
    Dialog, 
    DialogContent, 
    DialogTitle,
    IconButton,
    Stack,
    Typography,
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
    setRefetch, 
    refetch
}) {
    
    // state that defines if the window is open or not
    const [showSettings, setShowSettings] = useState(false);
    const [startOpacity, setStartOpacity] = useState(0)

    const iconSize = 70;
    
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
            maxWidth={"lg"}
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
                        <IconButton onMouseDown={() => {setNewsEnabled(true); setRssEnabled(true); setWeatherEnabled(true)}}>
                            <AirplanemodeActiveIcon sx={{fontSize: iconSize}}/>
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Der RSS-Feed ist <b>{rssEnabled ? "aktiviert" : "deaktiviert"}</b> </Typography>
                        <IconButton onMouseDown={() => setRssEnabled(!rssEnabled)}>
                            {!rssEnabled ? <AirplanemodeInactiveIcon sx={{fontSize: iconSize}}/> : <AirplanemodeActiveIcon sx={{fontSize: iconSize}}/>}
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Die Nachrichten sind <b>{newsEnabled ? "aktiviert" : "deaktiviert"}</b> </Typography>
                        <IconButton onMouseDown={() => setNewsEnabled(!newsEnabled)}>
                            {!newsEnabled ? <AirplanemodeInactiveIcon sx={{fontSize: iconSize}}/> : <AirplanemodeActiveIcon sx={{fontSize: iconSize}}/>}
                        </IconButton>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography variant='h2' marginRight={"20px"}> Das Wetter ist <b>{weatherEnabled ? "aktiviert" : "deaktiviert"}</b> </Typography>
                        <IconButton onMouseDown={() => setWeatherEnabled(!weatherEnabled)}>
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
                        <IconButton onMouseDown={() => {setRefetch(!refetch); setBreakingNews([]); setNews([]); setDates({}); setWeather({})}}>
                            <CachedIcon sx={{fontSize: iconSize}}/>
                        </IconButton>
                    </Stack>

                </Stack>
            </DialogContent>
        </Dialog>
        </>
    );
}