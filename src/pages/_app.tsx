import type { AppProps } from 'next/app'
import '../styles/globals.css'

function Proyecto({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Proyecto
