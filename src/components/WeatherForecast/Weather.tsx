export interface WeatherProps {
  main: string
  description: string
  icon: string
}

export default function Weather ({ main, description, icon }: WeatherProps) {
  return (
    <>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
      <p>{main}</p>
      <p>{description}</p>
    </>
  )
}