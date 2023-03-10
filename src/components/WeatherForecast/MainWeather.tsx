import { MainWeatherType } from "@/types"

export default function MainWeather ({ main, description, icon }: MainWeatherType) {
  return (
    <div>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
      <p>{main}</p>
      <p>{description}</p>
    </div>
  )
}