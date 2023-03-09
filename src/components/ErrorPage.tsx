import SeoHead from "./SEOHead";

export default function ErrorPage({ errorMsg }: { errorMsg: string }) {
  return (
    <>
      <SeoHead title="Error" description="errorMsg" />
      <h1>{errorMsg}</h1>
    </>
  )
}