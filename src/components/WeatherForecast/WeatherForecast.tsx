import dayjs from "dayjs"
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { WeatherForecastType } from "@/types"
import MainWeather from "./MainWeather"
dayjs.extend(localizedFormat)

export default function WeatherForecast ({ dt_txt, main }: WeatherForecastType) {
  const time = dayjs(dt_txt)

  return (
    <>
      <p>{time.format('LLLL')}</p>
      <MainWeather {...main} />
    </>
  )
}