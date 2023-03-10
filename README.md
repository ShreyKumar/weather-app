This is a Next.js application which uses the [OpenWeather API](https://openweathermap.org/api) to display weather forecasts. This app has been vetted through the [WAVE accessibility chrome extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) which found no accessibility issues. It is also fully mobile responsive.
## Getting started
To get started after cloning the repository and installing all dependencies, simply run
```
yarn dev
```

This should start the server at port `3000`.

## Pages
Navigate to `/weather/{zipCode}` to view the 5 day weather forecast for any zip code in the US. Alternatively, you are able to navigate there from the homepage as well.