import Head from 'next/head'
import { globalStyles, Logo, darkColour } from '../shared/styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ad Taylor</title>
        <meta name="description" content="Ad Taylor - A Head of Developement, former JS engineer and hobby collector." />
        <meta name="theme-color" content={darkColour} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Domine:regular,bold&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:bold,black&display=swap"
          rel="stylesheet"
        />
      </Head>

      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
