interface WindProps {
  speed: number
  deg: number
  gust: number
}

export default function Wind ({ speed, deg, gust }: WindProps) {
  return (
    <>
      <p>{`Speed: ${speed}miles/hour`}</p>
      <p>{`Direction: ${deg}°`}</p>
      <p>{`Gust: ${gust}miles/hour`}</p>
    </>
  )
}