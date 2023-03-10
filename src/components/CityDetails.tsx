import dayjs from 'dayjs'
import { CityType } from "@/types";

export default function CityDetails ({ name, coord, country, population, timezone, sunrise, sunset }: CityType) {
  const sunriseTime = dayjs(sunrise + timezone)
  const sunsetTime = dayjs(sunset + timezone)

  const { lat, lon } = coord

  return (
    <>
      <h1>{`Weather forecast for ${name}, ${country}`}</h1>
      <p>Location: {`${lat}, ${lon}`}</p>
      <p>Sunrise: {`${sunriseTime.format('H:m a')}`}</p>
      <p>Sunset: {`${sunsetTime.format('H:m a')}`}</p>
      <p>Population: {`${population}`}</p>
    </>
  )
}