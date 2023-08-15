import { createTheme } from '@mui/material/styles';

export const createThemeWithMode = (mode) => {
    return createTheme({
      palette: {
        mode: mode,
      },
    });
  };

export function WeatherFogIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 15h10a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m13 0h5a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1M1 12a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 9c2.19 0 3.97 1.76 4 4h-2a2 2 0 0 0-2-2h-2v-1a5 5 0 0 0-5-5C9.5 5 7.45 6.82 7.06 9.19C6.73 9.07 6.37 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 .17 1H1.1L1 12m2 7h2a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0h13a1 1 0 0 1 1 1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z"/></svg>
    )
}

export function WeatherRainIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12c.53.14.85.69.71 1.22l-1.3 4.83c-.14.54-.69.85-1.22.71a.967.967 0 0 1-.69-1.22l1.28-4.83c.14-.54.69-.85 1.22-.71m4 0c.53.14.85.69.71 1.22l-2.07 7.73c-.14.55-.69.85-1.23.71c-.53-.16-.85-.69-.71-1.23l2.08-7.72c.14-.54.69-.85 1.22-.71m4 0c.53.14.85.69.71 1.22l-1.3 4.83c-.14.54-.69.85-1.22.71a.967.967 0 0 1-.69-1.22l1.28-4.83c.14-.54.69-.85 1.22-.71m0-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3c0 1.11.6 2.08 1.5 2.6v-.01c.5.28.64.91.37 1.37c-.28.47-.87.64-1.37.36v.01A4.98 4.98 0 0 1 1 11a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46c-.5.27-1.09.11-1.37-.37c-.27-.48-.13-1.09.37-1.37v.01c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2h-2Z"/></svg>
    )
}

export function WeatherDayPartialyCloudyIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.74 5.47c2.36 1.03 3.61 3.56 3.18 5.99A6.002 6.002 0 0 1 18 16v.17a3 3 0 0 1 1-.17a3 3 0 0 1 3 3a3 3 0 0 1-3 3H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4h.27C5 12.45 4.6 10.24 5.5 8.26a5.49 5.49 0 0 1 7.24-2.79m-.81 1.83c-1.77-.8-3.84.01-4.62 1.77c-.46 1.02-.38 2.15.1 3.06A5.988 5.988 0 0 1 12 10c.7 0 1.38.12 2 .34a3.506 3.506 0 0 0-2.07-3.04m1.62-3.66c-.55-.24-1.1-.41-1.67-.52l2.49-1.3l.9 2.89a7.67 7.67 0 0 0-1.72-1.07m-7.46.8c-.49.35-.92.75-1.29 1.19l.11-2.81l2.96.68c-.62.21-1.22.53-1.78.94M18 9.71c-.09-.59-.22-1.16-.41-1.71l2.38 1.5l-2.05 2.23c.11-.65.13-1.33.08-2.02M3.04 11.3c.07.6.2 1.17.39 1.7l-2.37-1.5L3.1 9.28c-.1.65-.13 1.33-.06 2.02M19 18h-3v-2a4 4 0 0 0-4-4a4 4 0 0 0-4 4H6a2 2 0 0 0-2 2a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z"/></svg>
    )
}

export function WeatherNightPartialyCloudyIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 10.28c-.26.02-.5.03-.74.03c-1.94 0-3.87-.74-5.35-2.22A7.518 7.518 0 0 1 13.72 2c.05-.47-.5-1-1.01-1a.69.69 0 0 0-.39.12c-.32.24-.66.52-.96.82c-2.31 2.3-2.81 5.72-1.52 8.52a5.479 5.479 0 0 0-3.15 3.6L6 14a4 4 0 0 0-4 4a4 4 0 0 0 4 4h13a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-.58 0-1.12.16-1.58.45l.08-.95c0-.22 0-.45-.04-.67a7.45 7.45 0 0 0 4.6-2.19c.32-.3.58-.64.82-.96c.39-.55-.23-1.4-.84-1.4M19 18a1 1 0 0 1 1 1a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2.5v-.5c0-1.56 1.03-2.86 2.44-3.32c.16-.05.32-.09.49-.12c.18-.03.37-.06.57-.06c.23 0 .45.03.66.07c.07.01.14.03.21.06c.13.03.28.07.41.12c.08.03.16.07.22.11c.13.05.24.11.34.18c.08.05.16.1.23.16c.1.07.18.14.27.22c.07.08.16.13.21.2c.08.08.14.17.21.25c.06.08.13.16.18.25c.06.09.1.18.15.28c.05.1.11.18.15.28c.17.41.26.85.26 1.32V18m1.33-5.14A5.51 5.51 0 0 0 12 10h-.13c-.46-.81-.73-1.74-.73-2.71c0-.98.25-1.92.72-2.74A9.383 9.383 0 0 0 14.5 9.5a9.347 9.347 0 0 0 4.95 2.64c-.79.46-1.69.7-2.62.72Z"/></svg>
    )
}

export function WeatherClearNightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"/></svg>
    )
}