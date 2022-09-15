import '../styles/globals.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AppProvider } from '../data/context/AppContext'
import { AuthProvider } from '../data/context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Travel Village</title>
      </Head>
      <AuthProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
