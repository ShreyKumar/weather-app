import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getGeoCodingAPIUrl, getWeatherAPIUrl, resolvedFetch, validateUSZipCode } from '@/helpers'
import SeoHead from '@/components/SeoHead'
import ErrorPage from '@/components/ErrorPage'
import CityDetails from '@/components/CityDetails'
import { CityType, WeatherForecastType } from '@/types'
import WeatherForecast from '@/components/WeatherForecast/WeatherForecast'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  errorMsg?: string
  weatherReport?: {
    list: WeatherForecastType
    city: CityType
  }
}

export default function Home({ errorMsg, weatherReport }: HomeProps) {
  if (errorMsg || !weatherReport) {
    return <ErrorPage errorMsg={errorMsg as string} />
  }
  
  const { list, city }: { list: WeatherForecastType, city: CityType } = weatherReport
  console.log(list)

  return (
    <>
      <SeoHead title="Weather app" description="Generated by OpenWeather API" />
      <main>
        <CityDetails {...city} />
        <h2>Weather forecast</h2>
        {
          list.map((forecast: WeatherForecastType) => {
            return <WeatherForecast {...forecast} />
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

