import dayjs from "dayjs"
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { WeatherForecastType } from "@/types"
import MainWeatherDetails from "./MainWeatherDetails"
import Wind from "./Wind"
import Weather, { WeatherProps } from "./Weather"
import RainSnowVolume from "./RainSnowVolume"
dayjs.extend(localizedFormat)

export default function WeatherForecast ({ dt_txt, weather, main, visibility, clouds, wind, rain, snow }: WeatherForecastType) {
  const time = dayjs(dt_txt)

  return (
    <>
      <p>{time.format('LLLL')}</p>
      <MainWeatherDetails {...main} />
      {
        weather.map((weatherInfo: WeatherProps) => {
          return <Weather key={weatherInfo.icon} {...weatherInfo} />
        })
      }
      <Weather {...weather} />
      <p>{`Visibility: ${visibility * 0.001}km`}</p>
      <p>Cloudiness: {`${clouds.all}%`}</p>
      <Wind {...wind} />
      { rain && <RainSnowVolume type="Rain" oneHour={rain?.['1h']} threeHour={rain?.['3h']} /> }
      { snow && <RainSnowVolume type="Snow" oneHour={snow?.['1h']} threeHour={snow?.['3h']} /> }
    </>
  )
}