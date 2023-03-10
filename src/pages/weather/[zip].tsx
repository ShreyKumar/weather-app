import { GetServerSidePropsContext } from 'next'
import { getGeoCodingAPIUrl, getWeatherAPIUrl, resolvedFetch, validateUSZipCode } from '@/helpers'
import SeoHead from '@/components/SeoHead'
import ErrorPage from '@/components/ErrorPage'
import CityDetails from '@/components/CityDetails'
import { CityType, WeatherForecastType } from '@/types'
import WeatherForecast from '@/components/WeatherForecast/WeatherForecast'

interface WeatherByZipProps {
  errorMsg?: string
  weatherReport?: {
    list: WeatherForecastType[]
    city: CityType
  }
}

export default function WeatherByZip({ errorMsg, weatherReport }: WeatherByZipProps) {
  if (errorMsg || !weatherReport) {
    return <ErrorPage errorMsg={errorMsg as string} />
  }

  const { list, city }: { list: WeatherForecastType[], city: CityType } = weatherReport

  return (
    <>
      <SeoHead title="Weather Forecast by Zip | Weather app" description="Find the 5 day/3 hour Weather forecast" />
      <main className='my-5 container mx-auto'>
        <CityDetails {...city} />
        <h2 className='text-3xl mb-2'>Weather forecast</h2>
        {
          list.map((forecast: WeatherForecastType) => {
            return <WeatherForecast key={forecast.dt} {...forecast} />
          })
        }
      </main>
    </>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { zip } = query

  // Validate if this is a proper US zip code
  if (!zip || !validateUSZipCode(zip as string)) {
    return {
      props: {
        errorMsg: "Please make sure you have entered a US Zip Code!"
      }
    }
  }

  // If it is a valid Zip Code, validate if we can get a lat,lng out of it
  const res = await resolvedFetch(getGeoCodingAPIUrl(zip as string))
  const { lat, lon } = res
  if (!lat || !lon) {
    return {
      props: {
        errorMsg: "Please make sure you have entered a US Zip Code!"
      }
    }
  }

  // We got a lat,lng so this is a valid location. Now get the Weather
  const weatherReport = await resolvedFetch(getWeatherAPIUrl(lat, lon))

  return {
    props: {
      weatherReport
    }
  }
}

