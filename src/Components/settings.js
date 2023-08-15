import {React, useState} from 'react';
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

export default function Settings({currentThemeName, handleCurrentThemeChange, fetchesEnabled, setFetchesEnabled}) {
    
    const [showSettings, setShowSettings] = useState(false);
    
    return (
        <>
        <IconButton onMouseDown={() => setShowSettings(!showSettings)}>
            <SettingsIcon />
        </IconButton>
        <Dialog open={showSettings} onClose={() => setShowSettings(false)}>
            <DialogTitle>Settings</DialogTitle>
            <DialogContent>
                <Stack direction={"column"}>
                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography> Das aktuelle Theme ist <b>{currentThemeName}</b> </Typography>
                        <IconButton onMouseDown={() => handleCurrentThemeChange()}>
                            {currentThemeName === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"center"} justifyItems={"center"} alignItems={"center"}>
                        <Typography> Die Fetches sind <b>{fetchesEnabled ? "aktiviert" : "deaktiviert"}</b> </Typography>
                        <IconButton onMouseDown={() => setFetchesEnabled(!fetchesEnabled)}>
                            {fetchesEnabled ? <AirplanemodeInactiveIcon /> : <AirplanemodeActiveIcon />}
                        </IconButton>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
        </>
    );
}