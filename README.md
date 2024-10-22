# Weather App

A simple and interactive weather application that fetches real-time weather data from the OpenWeather API. The app provides both current and forecast weather data for any location, allowing users to easily check the temperature, humidity, wind speed, and more.

## Features

- **Real-time Weather Data**: Get the current temperature, weather conditions, wind speed, and humidity.
- **5-Day Forecast**: View the weather forecast for the next five days with detailed daily and hourly updates.
- **Search by Location**: Users can search for any location by city name.
- **Unit Conversion**: Easily toggle between celcius and Fahrenheit units.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (ES6+), Luxon (for date and time formatting)
- **API**: OpenWeatherMap API for weather data.
- **Libraries**: React, Tailwind

## Installation

Follow the steps below to set up and run the project locally.

1. Clone the repository:

    ```bash
    git clone https://github.com/harsh-9389/weather_app.git
    cd weather_app
    ```
2. Install the dependencies:

    ```bash
    npm install
    ```
3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) and replace `YOUR API KEY` in the `src/services/weatherService.js` file.

4. Run the app:

    ```bash
    npm start
    ```
5. Open [http://localhost:3000] to view it in the browser.

## How It Works

- The app fetches weather data based on the user's search query using the OpenWeather API.
- The response includes both current weather and a 5-day forecast, which is displayed using simple cards.
- The Luxon library is used to format dates and times based on the location’s time zone.
- You can easily toggle between Celsius and Fahrenheit using the unit conversion feature.

## API Uses
- https://api.openweathermap.org/data/2.5/weather: To get current weather data.
- https://api.openweathermap.org/data/2.5/onecall: To get daily and hourly forecast data.

```bash
/src
├── /components    # Reusable React components
├── /services      # Helper functions (API calls, formatting, etc.)
├── App.js         # Main application logic
└── index.js       # Entry point of the application
```