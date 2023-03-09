export const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY || ''

export function validateUSZipCode(zipCode: string) {
  const usZipCodeRegex = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/
  return usZipCodeRegex.test(zipCode)
}

export function getGeoCodingAPIUrl (zipCode: string) {
  const url = new URL("https://api.openweathermap.org/geo/1.0/zip")
  const urlSearchParams = new URLSearchParams(url.search)
  urlSearchParams.set("zip", zipCode)
  urlSearchParams.set("appId", OPEN_WEATHER_API_KEY)

  return `${url.toString()}?${urlSearchParams.toString()}`
}

export function getWeatherAPIUrl (lat: number, lon: number) {
  const url = new URL("https://api.openweathermap.org/data/2.5/forecast")
  const urlSearchParams = new URLSearchParams(url.search)
  urlSearchParams.set("lat", lat.toString())
  urlSearchParams.set("lon", lon.toString())
  urlSearchParams.set("appId", OPEN_WEATHER_API_KEY)

  return `${url.toString()}?${urlSearchParams.toString()}`
}


export async function resolvedFetch (url: string) {
  const res = await fetch(url)
  if (res.ok) {
    return await res.json()
  } else {
    return `Error: ${res.status}`
  }
}