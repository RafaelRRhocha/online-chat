import '../styles/globals.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>To-Do List</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
