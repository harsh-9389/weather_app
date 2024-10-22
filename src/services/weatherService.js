import { DateTime } from "luxon";

const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c";             // API key should be put in .env file I have just kept it here
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// const url  = 'https://api.openweathermap.org/data/2.5/weather?lat=51.508&lon=-0.126&appid={9508e492cded58b000e7f6a55544b8fe}'

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // console.log(url)

  const return_val = await fetch(url).then((res) => res.json());
  // console.log(return_val)
  return return_val ;
};

const formatCurrentWeather = (data) => {
  // console.log(data)
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  console.log("hello")
  console.log(data) ;
  let { timezone, daily, hourly } = data;
  console.log(timezone, daily, hourly) ;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  // console.log(formattedCurrentWeather)
  // console.log('hello world')

  const { lat, lon } = formattedCurrentWeather;

  // const formattedForecastWeather = await getWeatherData("onecall", {
  //   lat,
  //   lon,
  //   exclude: "current,minutely,alerts",
  //   units: searchParams.units,
  // }).then(formatForecastWeather);

  const Wdata = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  })

  // console.log(Wdata) ;

  const formattedForecastWeather = formatForecastWeather(Wdata);

  console.log("hello baby", formattedForecastWeather)

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
