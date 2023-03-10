import { WindType } from "@/types"

export default function Wind ({ speed, deg, gust }: WindType) {
  return (
    <>
      <p>{`Speed: ${speed}miles/hour`}</p>
      <p>{`Direction: ${deg}°`}</p>
      <p>{`Gust: ${gust}miles/hour`}</p>
    </>
  )
}