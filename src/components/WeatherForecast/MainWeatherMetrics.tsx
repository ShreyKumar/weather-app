import { WeatherForecastMain } from "@/types";

export default function MainWeatherMetrics ({
  temp,
  feels_like: feelsLike,
  temp_min: tempMin,
  temp_max: tempMax,
  pressure,
  sea_level: seaLevel,
  grnd_level: grndLevel,
  humidity,
  temp_kf: tempKf
}: WeatherForecastMain) {
  return (
    <>
      <p>{`Temperature: ${temp} F, Feels like: ${feelsLike} F, Max: ${tempMax} F, Min: ${tempMin} F`}</p>
      <p>{`Atmospheric Pressure: ${pressure} hPa, Sea Level: ${seaLevel} hPa, Ground Level: ${grndLevel} hPa`}</p>
      <p>{`Humidity: ${humidity}%`}</p>
      <p>{`Temp KF: ${tempKf}`}</p>
    </>
  )
}