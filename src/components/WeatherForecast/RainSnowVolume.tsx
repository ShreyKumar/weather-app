import { RainSnowVolumeType } from "@/types";

export default function RainSnowVolume ({ type, oneHour, threeHour }: RainSnowVolumeType) {
  return (
    <>
      <p>{type}</p>
      { oneHour && <p>{`${type} volume in the past 1h: ${oneHour}`}</p> }
      { threeHour && <p>{`${type} volume in the past 3h: ${threeHour}`}</p> }
    </>
  )
}