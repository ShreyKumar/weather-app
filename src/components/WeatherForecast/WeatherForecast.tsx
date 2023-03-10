import dayjs from "dayjs"
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { WeatherForecastType } from "@/types"
import MainWeatherDetails from "./MainWeatherDetails"
import Wind from "./Wind"
import Weather, { WeatherProps } from "./Weather"
import RainSnowVolume from "./RainSnowVolume"
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react"
import { useState } from "react"
dayjs.extend(localizedFormat)

export default function WeatherForecast ({ dt_txt, weather, main, visibility, clouds, wind, rain, snow }: WeatherForecastType) {
  const time = dayjs(dt_txt)
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-5 border border-black p-5">
      <p className="font-bold">{time.format('LLLL')}</p>
      {
        weather.map((weatherInfo: WeatherProps) => {
          return <Weather key={weatherInfo.icon} {...weatherInfo} />
        })
      }
      <Accordion open={open} className="">
        <AccordionHeader className="py-2 text-lg text-black" onClick={() => setOpen(!open)}>
          More info
        </AccordionHeader>
        <AccordionBody className="text-black">
          <MainWeatherDetails {...main} />
          <p>{`Visibility: ${visibility * 0.001}km`}</p>
          <p>Cloudiness: {`${clouds.all}%`}</p>
          <Wind {...wind} />
          { rain && <RainSnowVolume type="Rain" oneHour={rain?.['1h']} threeHour={rain?.['3h']} /> }
          { snow && <RainSnowVolume type="Snow" oneHour={snow?.['1h']} threeHour={snow?.['3h']} /> }
        </AccordionBody>
      </Accordion>
    </div>
  )
}