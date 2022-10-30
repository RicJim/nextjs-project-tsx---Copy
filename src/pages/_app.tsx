import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { UserContextProvider } from '../components/context/UserContext'

function Proyecto({ Component, pageProps }: AppProps) {
  return (<UserContextProvider><Component {...pageProps} /></UserContextProvider>)
}

export default Proyecto
