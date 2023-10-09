A custom soulution for the OVG NRW to display current news, court dates and the weather on two displays in their building.

To run the project yourself you need to create a free API key for [OpenWeather](https://home.openweathermap.org/users/sign_in) by registering there and navigating to the API section in your account. You need to add this key in the predetermined spot in the .env.template file provided and then rename this file to .env. This project is built with the One Call API 3.0 which can be called 1000 times a day without incuring any costs (you can set a limit how many times your API keys can call the API per day). If you don't (or can't) provide the Credit Card necessary for subscribing to this API you can also use the completely free API, inspiration on how to change to that API can be found in this [old commit](https://github.com/JonasRettig/ovg-display/blob/761445d905f6a55e27a0c1d1927c6d2d4ffa2371/src/Components/weather.js).

Within the Scripts folder there are two scripts that help on deployment. You can also add these to your crontab, configurations for this are in the crontabsetup.txt file.

You can deploy this project with ```npm run build```, further information can be found on the website of the [Create React App Project](https://create-react-app.dev/docs/deployment/).
