export interface CityType {
  id: number
  name: string
  coord: {
    lat: number
    lon: number
  }
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface WeatherForecastType {
  dt: number
  dt_txt: string
  weather: MainWeatherType[]
  main: WeatherForecastMain
  visibility: number
  clouds: {
    all: number
  }
  wind: WindType
  rain?: {
    '1h'?: number
    '3h'?: number
  }
  snow?: {
    '1h'?: number
    '3h'?: number
  }
}

export interface WeatherForecastMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface WindType {
  speed: number
  deg: number
  gust: number
}

export interface MainWeatherType {
  main: string
  description: string
  icon: string
}
