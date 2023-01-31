import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp
