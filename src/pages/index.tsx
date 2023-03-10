import { validateUSZipCode } from "@/helpers";
import { useSignal } from "@preact/signals-react";
import Link from "next/link";

export default function Home () {
  const zip = useSignal('')

  return (
    <>
      <h1 className="text-5xl text-center">Weather app</h1>
      <input placeholder="Zip Code (US Only)" className="border border-black" type="text" name="zip" id="zip" value={zip.value} onChange={(e) => zip.value = e.target.value} />
      <button className="border border-black px-3 ml-3">
        <Link href={`/weather/${zip}`} className={`${!validateUSZipCode(zip.value) ? 'pointer-events-none': ''}`}>
          Get Weather
        </Link>
      </button>
      {!validateUSZipCode(zip.value) && <p className="text-red-900">Invalid Zip Code!</p>}
    </>
  )
}